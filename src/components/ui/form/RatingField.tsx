import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const RatingField = ({ rating }: { rating: number }) => {
	const { t } = useTranslation("survey");
	const { setValue } = useFormContext();

	return (
		<div>
			{" "}
			<label className="block text-sm font-medium text-gray-300 mb-2">
				{t("form.fields.rating")} <span className="text-red-500">*</span>
			</label>
			<div className="flex items-center">
				{[1, 2, 3, 4, 5].map((star) => (
					<button
						key={star}
						type="button"
						onClick={() => setValue("rating", star)}
						className="text-4xl mr-1 focus:outline-none"
						aria-label={t("form.fields.ratingValue", { count: star })}
					>
						<span className={rating >= star ? "text-yellow-400" : "text-info"}>
							★
						</span>
					</button>
				))}{" "}
				<span className="ml-2 text-sm text-info font-semibold">
					{rating
						? t("form.fields.ratingValue", { count: rating })
						: t("form.fields.ratingSelect")}
				</span>
			</div>
		</div>
	);
};

export default RatingField;
