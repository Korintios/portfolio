import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";

const PictureField = ({
	onDrop,
	required = false,
}: {
	onDrop: (acceptedFiles: File[]) => void;
	required?: boolean;
}) => {
	const { t } = useTranslation("survey");
	const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
		useDropzone({
			accept: { "image/*": [] },
			multiple: false,
			onDrop,
		});

	return (
		<div>
			{" "}
			<label className="block text-sm font-medium text-gray-300 mb-2">
				{t("form.fields.photo")}{" "}
				{required && <span className="text-red-500">*</span>}
			</label>
			<div
				{...getRootProps()}
				className="border-2 border-dashed border-info p-6 rounded cursor-pointer text-center"
			>
				<input {...getInputProps()} />
				<p className="text-info">
					{isDragActive
						? t("form.fields.dropzone.active")
						: t("form.fields.dropzone.inactive")}
				</p>
				{acceptedFiles[0] && (
					<p className="mt-2 text-sm text-green-500">
						{t("form.fields.dropzone.uploaded") + acceptedFiles[0].name}
					</p>
				)}
			</div>
		</div>
	);
};

export default PictureField;
