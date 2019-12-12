import React from "react";
import f1Logo from "../images/f1.png"
import style from "../styles/style.css"

export default function Header() {

    return(
        <div>
            <img
                className="logo"
                src={f1Logo}
                alt="Formula 1 Logo"
            />
        </div>
    )
}