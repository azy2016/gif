import React from "react"
import Style from "../styles/header.module.css"

export default (props) => (
    <header className={Style.header}>
        <div className={Style.content}>
            <div className={Style.logo}>
                <a href="/" className={Style.index}>gif收藏夹</a>
            </div>
            <nav className={Style.nav}>
                <ul>
                    <li><a href="/">首页</a></li>
                </ul>
            </nav>
        </div>
    </header>
)