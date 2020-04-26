import React from "react"
import Tags from "../components/tags"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import Qr from "../components/qr"
import Content from "../components/content"
import SEO from "../components/seo"
import JsonData from "../../content/tags.json"

export default ({pageContext: { rootPath,chuckData,page,nowPage }}) => {

    return (
        <Layout>
        <SEO title='标签' />
        <Content 
            contentLeft={
                <div style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `flex-start`,
                    width: `100%`,
                    background: `#fff`,
                    padding: `10px`,
                }}>
                    {
                        JsonData.map((data, index) => (
                            <a key={index} href={`/tags/${data.id}/`} style={{
                                display: `inline-block`,
                                textDecoration: `none`,
                                padding: `5px 10px`,
                                borderRadius: `2px`,
                                margin: `.3rem .6rem .3rem 0`,
                                background: `#1ca086`,
                                color: `#fff`,
                                fontSize: `16px`,
                            }}>{data.name}</a>
                        ))
                    }
                </div>
            }
            contentRight= {
                <div>
                <Tags />
                <Qr />
                </div>
            }
            pagination={
                page > 1 ? <Pagination nowPage={nowPage} rootPath={rootPath} countPage={page} /> : false
            }
        />
    </Layout>
    )
}
