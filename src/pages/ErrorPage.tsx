import React from 'react';
import {Link, useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error: any = useRouteError();

    return (
        <div className={"text-center py-8"}>
            <h1 className={"text-4xl"}>{error?.status}</h1>
            <h2 className={"text-3xl mb-4"}>{error?.statusText || 'Что то пошло не так!('}</h2>
            <Link
                to={"/"}
                className={"w-full max-w-xs text-center bg-primary-blue hover:bg-primary-blue/70 shadow text-white px-8 py-3"}
            >Обновить</Link>
        </div>
    );
};

export default ErrorPage;
