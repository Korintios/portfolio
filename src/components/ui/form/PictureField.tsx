import { useDropzone } from "react-dropzone";

const PictureField = ({onDrop}: {onDrop: (acceptedFiles: File[]) => void}) => {

     const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
        accept: { "image/*": [] },
        multiple: false,
        onDrop
    });

    return (
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
                Foto <span className="text-red-500">*</span>
            </label>
            <div {...getRootProps()} className="border-2 border-dashed border-info p-6 rounded cursor-pointer text-center">
                <input {...getInputProps()} />
                <p className="text-info">{isDragActive ? "¡Suelta la imagen aquí!" : "Arrastra una imagen aquí o haz clic para seleccionar"}</p>
                {acceptedFiles[0] && (
                <p className="mt-2 text-sm text-green-500">✔️ {acceptedFiles[0].name}</p>
                )}
            </div>
        </div>
    )
}

export default PictureField;