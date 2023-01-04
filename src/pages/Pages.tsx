import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

import { Main } from "./Main/Main";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path={"/"} element={<Main />} errorElement={<ErrorPage />}/>
    </>
));

export default router;
