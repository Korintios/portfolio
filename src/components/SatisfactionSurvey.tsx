import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import InputField from "./ui/form/InputField";
import RatingField from "./ui/form/RatingField";
import PictureField from "./ui/form/PictureField";
import { FeedbackFormType } from "../types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { saveFeedback, validateAccessCode } from "../firebase";

export default function SatisfactionSurvey() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isValidCode, setIsValidCode] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const methods = useForm<FeedbackFormType>()
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
            setError("Por favor complete todos los campos requeridos");
            setIsSubmitting(false);
            return;
        }
        await saveFeedback({
            ...data,
            codeUsed: code || "",
        }).then(() => {
            setSubmitted(true);
            setTimeout(() => {
                navigate("/");
            }, 4500);
        }).catch(() => {
            setIsSubmitting(false);
            setError("Hubo un error al enviar los datos. Por favor, inténtelo de nuevo más tarde.");
        })
    };

    useEffect(() => {
        async function validateCode() {
            if (code) {
                await validateAccessCode(code)
                    .then((isValid) => {
                        setIsValidCode(isValid);
                        setIsLoading(false);
                    })
            }
            setIsLoading(false);
        }
        validateCode()
    }, [code])

    return (
        <div className="text-white flex items-center justify-center min-h-screen w-screen">
            {!isLoading && (
                <FormProvider {...methods}>
                    <div className="max-w-2xl mx-auto my-10 py-12 px-4 sm:px-6 lg:px-8 rounded-xl shadow-icon ring-2 ring-black bg-gradient-to-b from-iconcard-gradient-start font-poppins">
                        {!isValidCode ? (
                            <div className="text-center p-6 bg-opacity-30 rounded-lg">
                                <h3 className="text-3xl font-medium text-white mb-2">Tu Codigo no es Valido</h3>
                                <p className="text-gray-300">Necesitas un codigo de acceso para acceder a esta seccion.</p>
                            </div>
                        ) : submitted ? (
                            <div className="text-center p-6 bg-opacity-30 rounded-lg">
                                <h3 className="text-3xl font-medium text-white mb-2">¡Gracias por su opinión!</h3>
                                <p className="text-gray-300">Su testimonio ha sido enviado con éxito, volveras a la pagina principal en breve...</p>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-extrabold text-white">Encuesta de Satisfacción</h2>
                                    <p className="mt-4 text-md text-gray-300">
                                        Tu opinión es muy valiosa para mí, ya que me permite crecer y seguir mejorando profesionalmente.
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {error && (
                                    <div className="p-3 bg-red-900/50 bg-opacity-30 rounded-md text-white text-sm">
                                        {error}
                                    </div>
                                    )}

                                    <InputField label="Nombre y Apellido" id="name" type="text" required={true} />
                                    <InputField label="Correo electrónico" id="email" type="text" />
                                    <InputField label="Teléfono" id="phone" type="text" required={false} />
                                    <InputField label="Testimonio" id="testimony" type="textarea" required={true} />
                                    <RatingField rating={rating} />
                                    
                                    <PictureField onDrop={onDrop} />

                                    <div className="text-center mb-6">
                                        <p className="mt-4 text-sm text-right text-gray-300/50">
                                            Tu testimonio, junto con tu nombre y foto (opcional), podrá mostrarse en la sección de testimonios para brindar confianza a futuros visitantes.<br />
                                            
                                        </p>
                                        
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-300">¡Gracias por tu tiempo y por formar parte de este proceso!</p>
                                        <button disabled={isSubmitting} style={{opacity: isSubmitting ? 0.5 : undefined, cursor: !isSubmitting ? "pointer" : "default"}} type="submit" className="font-poppins text-black font-semibold text-xs sm:text-sm xl:text-[14px] min-w-[139px] px-4 min-h-[43.61px] rounded-xl bg-linear-to-b hover:opacity-75 from-white to-button-gradient-to">
                                            Enviar testimonio
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