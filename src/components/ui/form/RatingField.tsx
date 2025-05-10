import { useFormContext } from "react-hook-form";

const RatingField = ({rating}: {rating: number}) => {

    const { setValue } = useFormContext();

    return (
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
                Calificación <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    onClick={() => setValue("rating", star)}
                    className="text-4xl mr-1 focus:outline-none"
                    aria-label={`${star} estrellas`}
                >
                    <span className={rating >= star ? "text-yellow-400" : "text-info"}>★</span>
                </button>
                ))}
                <span className="ml-2 text-sm text-info font-semibold">
                {rating ? `${rating} de 5 estrellas` : "Seleccione una calificación"}
                </span>
            </div>
        </div>
    )
}

export default RatingField;