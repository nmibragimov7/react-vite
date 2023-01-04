import React from "react";
import {RouterProvider} from "react-router-dom";

import router from "./pages/Pages";

const App: React.FC = () => {

    return (
        <div className={"bg-light-blue"}>
            <div className={"container mx-auto py-8 min-h-screen"}>
                <RouterProvider router={router} />
            </div>
        </div>
    )
}

export default App
