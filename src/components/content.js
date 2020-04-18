import React from "react";
import Style from "../styles/content.module.css";

export default (props) => (
    <div className={Style.content}>
        <div className={Style.contentLeft}>
            <div style={{marginBottom: `20px`}}>
                <img style={{marginBottom: `0`,width: `100%`}} src="https://pb3.pstatp.com/large/pgc-image/74470b9b456348e8ad70080428b18840" alt="微信公众号二维码" />
            </div>
            {props.tagName ? <p className={Style.tagHeader}>{props.tagName}gif动态图</p> : false}
            {props.contentLeft}
            {props.pagination}
        </div>
        <div className={Style.contentRight}>
            {props.contentRight}
        </div>
    </div>
)