import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Meeting() {

    useEffect(()=>{
        (async function () {
          const cal = await getCalApi({"namespace":"reunion-personal"});
          cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])

    return (
        <section id="meeting" className="py-10 xl:px-20 w-full min-h-screen fle flex-col items-center justify-center">
            <Cal
                className="xl:scale-125"
                namespace="reunion-personal"
                calLink="juanvergaram/reunion-personal"
                style={{width:"100%",minHeight:"100vh"}}
                config={{"layout":"month_view"}}
            />
        </section>
    );
}