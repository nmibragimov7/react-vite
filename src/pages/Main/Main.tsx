import React from 'react';
import {Link} from "react-router-dom";

import {IMain} from "../../model/types";
import styles from "./Main.module.scss";

export const Main: React.FC<IMain> = (props) => {
    const { className } = props;
    // можно импортировать из env переменные, должен начинаться с VITE_, чтобы использовать в коде
    console.log(import.meta.env.VITE_ENV_DATA);

    return (
        <div className={[styles.Main, className].join(" ")}>
            <p className={"text-4xl mb-4"}>Главная страница</p>
            <ul className={"list-disc"}>
                <li className={"text-base text-gray"}>
                    в данном проекте сборка происходит с помощью <a href={"https://vitejs.dev/"} target={"_blank"} className={"text-primary-blue underline"}>Vitejs</a>
                </li>
                <li className={"text-base text-gray"}>
                    переменная импортирована из env файла <span className={"text-primary-blue"}>{import.meta.env.VITE_ENV_DATA}</span>
                </li>
                <li className={"text-base text-gray"}>
                    настроен Dockerfile и проверено как работает проект в контейнере
                </li>
                <li className={"text-base text-gray"}>
                    подключен tailwind и postcss
                </li>
                <li className={"text-base text-gray"}>
                    настроен роутинг страниц. Перейти на несуществующую страницу <Link to={"/not-found"} className={"text-primary-blue underline"}>ссылка</Link>
                </li>
            </ul>
        </div>
    );
};
