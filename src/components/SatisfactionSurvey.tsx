import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import InputField from "./ui/form/InputField";
import RatingField from "./ui/form/RatingField";
import PictureField from "./ui/form/PictureField";
import { FeedbackFormType } from "../types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { saveFeedback, validateAccessCode } from "../firebase";
import { useTranslation } from "react-i18next";

export default function SatisfactionSurvey() {
	const [isLoading, setIsLoading] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isValidCode, setIsValidCode] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");
	const { t } = useTranslation("survey");

	const methods = useForm<FeedbackFormType>();
	const { handleSubmit, setValue, watch } = methods;
	const rating = watch("rating");

	const [searchParams] = useSearchParams();
	const code = searchParams.get("code");

	const navigate = useNavigate();

	const onDrop = (acceptedFiles: File[]) => {
		if (acceptedFiles[0]) {
			setValue("image", acceptedFiles[0]);
		}
	};
	const onSubmit = async (data: FeedbackFormType) => {
		setIsSubmitting(true);
		setError("");

		if (!data.name || !data.testimony || !data.rating) {
			setError(t("form.errors.required"));
			setIsSubmitting(false);
			return;
		}
		await saveFeedback({
			...data,
			codeUsed: code || "",
		})
			.then(() => {
				setSubmitted(true);
				setTimeout(() => {
					navigate("/");
				}, 4500);
			})
			.catch(() => {
				setIsSubmitting(false);
				setError(t("form.errors.submission"));
			});
	};

	useEffect(() => {
		async function validateCode() {
			if (code) {
				await validateAccessCode(code).then((isValid) => {
					setIsValidCode(isValid);
					setIsLoading(false);
				});
			}
			setIsLoading(false);
		}
		validateCode();
	}, [code]);

	return (
		<div className="text-white flex items-center justify-center min-h-screen w-screen">
			{!isLoading && (
				<FormProvider {...methods}>
					<div className="max-w-2xl mx-auto my-10 py-12 px-4 sm:px-6 lg:px-8 rounded-xl shadow-icon ring-2 ring-black bg-gradient-to-b from-iconcard-gradient-start font-poppins">
						{" "}
						{!isValidCode ? (
							<div className="text-center p-6 bg-opacity-30 rounded-lg">
								<h3 className="text-3xl font-medium text-white mb-2">
									{t("invalidCode.title")}
								</h3>
								<p className="text-gray-300">{t("invalidCode.message")}</p>
							</div>
						) : submitted ? (
							<div className="text-center p-6 bg-opacity-30 rounded-lg">
								<h3 className="text-3xl font-medium text-white mb-2">
									{t("thankyou.title")}
								</h3>
								<p className="text-gray-300">{t("thankyou.message")}</p>
							</div>
						) : (
							<>
								{" "}
								<div className="text-center mb-8">
									<h2 className="text-3xl font-extrabold text-white">
										{t("form.title")}
									</h2>
									<p className="mt-4 text-md text-gray-300">
										{t("form.subtitle")}
									</p>
								</div>
								<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
									{error && (
										<div className="p-3 bg-red-900/50 bg-opacity-30 rounded-md text-white text-sm">
											{error}
										</div>
									)}{" "}
									<InputField
										label={t("form.fields.name")}
										id="name"
										type="text"
										required={true}
									/>
									<InputField
										label={t("form.fields.email")}
										id="email"
										type="text"
									/>
									<InputField
										label={t("form.fields.phone")}
										id="phone"
										type="text"
										required={false}
									/>
									<InputField
										label={t("form.fields.testimony")}
										id="testimony"
										type="textarea"
										required={true}
									/>
									<RatingField rating={rating} />
									<PictureField onDrop={onDrop} />{" "}
									<div className="text-center mb-6">
										<p className="mt-4 text-sm text-right text-gray-300/50">
											{t("form.disclaimer")}
											<br />
										</p>
									</div>{" "}
									<div className="flex justify-between items-center">
										<p className="text-sm text-gray-300">{t("form.thanks")}</p>
										<button
											disabled={isSubmitting}
											style={{
												opacity: isSubmitting ? 0.5 : undefined,
												cursor: !isSubmitting ? "pointer" : "default",
											}}
											type="submit"
											className="font-poppins text-black font-semibold text-xs sm:text-sm xl:text-[14px] min-w-[139px] px-4 min-h-[43.61px] rounded-xl bg-linear-to-b hover:opacity-75 from-white to-button-gradient-to"
										>
											{t("form.submit")}
										</button>
									</div>
								</form>
							</>
						)}
					</div>
				</FormProvider>
			)}
		</div>
	);
}
