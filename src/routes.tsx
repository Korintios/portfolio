import { createBrowserRouter } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";
import SatisfactionSurvey from "./components/SatisfactionSurvey";

export const router = createBrowserRouter([
	{ path: "/", element: <Portfolio />, children: [] },
    { path: "/feedback", element: <SatisfactionSurvey />, children: [] },
	{ path: "*", element: <NotFound />, children: [] },
]);