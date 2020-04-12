import React from "react"
import Header from "../components/header"
import FriendLink from "../components/friendLink"
import Footer from "../components/footer"
import Style from "../styles/layout.module.css"

export default (props) => (
    <div className={Style.layout}>
        <Header />
        {props.children}
        <FriendLink />
        <Footer />
    </div>
)