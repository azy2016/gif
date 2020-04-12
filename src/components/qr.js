import React from "react"
import Style from "../styles/tags.module.css"

export default (props) => (
    <div className={Style.tagsBox} style={{marginTop: `20px`}}>
        <p className={Style.hotTag}>本站微信公众号</p>
        <img style={{
            margin: `0`
        }} src="https://pb3.pstatp.com/large/pgc-image/f1e16a60097f47f887bdd8a631c3363b" alt="微信公众号二维码" />
    </div>
)