import React from "react";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <header className={s.header}>
            <div className="App">
                <h1>Especially for Jura from Krasnoyarsk</h1>
                <span>From the heart from Minsk</span>
            </div>
        </header>
    )
}