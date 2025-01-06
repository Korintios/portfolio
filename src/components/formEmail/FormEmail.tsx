import EmailForm from "../../assets/icons/EmailForm";
import "./FormEmail.style.css";

export default function FormEmail() {
	return (
		<section className="flex flex-col items-center justify-center h-[50vh] gap-6">
			<div className="flex flex-col items-center justify-center gap-5">
				<h1 className="xsm:text-4xl xl:text-6xl font-bold text-center xl:w-[900px]">
					¿Tienes una idea de proyecto increíble?{" "}
					<b className="text-gradient-blue">Discutamos</b>
				</h1>
			</div>
			<div className="flex items-center gap-3 justify-between xl:w-[900px] xsm:h-[70px] xl:h-[100px] px-4 rounded-full border border-white-100">
				<div className="flex items-center justify-center xsm:size-8 xl:size-16 rounded-full bg-gray-100 fill-blue-500">
					<EmailForm />
				</div>
				<input
					type="text"
					placeholder="Enter Email Address"
					className="xl:text-xl outline-none flex-1"
				/>
				<button className="text-xs flex items-center justify-center xsm:size-10 xl:size-16 font-semibold rounded-full bg-[#0085ff] hover:bg-[#0084ffbd] transition-colors text-white">
					Send
				</button>
			</div>
		</section>
	);
}
