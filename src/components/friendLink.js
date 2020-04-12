import React from "react"
import Style from "../styles/friendlink.module.css"

export default () => (
    <div className={Style.linksBox}>
        <div className={Style.links}>
        <p>友情链接</p>
        <div className={Style.aBox}>
            <a href="https://www.52beautys.com/" target="_blank">妹子图片</a>
            <a href="https://www.51link.com/link-exchange?ruid=14086" target="_blank">交换友链</a>
        </div>
        </div>
    </div>
)