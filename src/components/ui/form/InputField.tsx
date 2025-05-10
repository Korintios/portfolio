import { useFormContext } from "react-hook-form";

const InputField = ({label, id, type, required}: { label: string; id: string; type: "text" | "textarea"; required?: boolean;}) => {
    
    const { register } = useFormContext();

    return (
        <div>
            <label className="block text-sm font-medium text-gray-300">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {type === "textarea" ? (
                <textarea autoComplete="off" rows={4} {...register(id)} className="mt-2 rounded-xl shadow-icon ring-2 ring-black bg-gradient-to-b from-iconcard-gradient-start w-full sm:text-sm border-gray-700 p-2 text-white outline-none"/>
            ) : (
                <input type="text"  autoComplete="off" {...register(id)} className="mt-2 rounded-xl shadow-icon ring-2 ring-black bg-gradient-to-b from-iconcard-gradient-start w-full sm:text-sm border-gray-700 p-2 text-white outline-none"/>
            )}
	    </div>
    )
};

export default InputField;