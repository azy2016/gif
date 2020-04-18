import React from "react"
import { Link } from "gatsby"
import Style from "../styles/tags.module.css"
import JsonData from "../../content/tags.json"

export default (props) => (
    <div className={Style.tagsBox}>
        <p className={Style.hotTag}>热门标签</p>
        {
            JsonData.map((value, index) => {
                if(index < 33) {
                    return <Link key={index} to={`/tags/${value.id}/`}>{value.name}</Link>
                }
                return false;
            })
        }
    </div>
)