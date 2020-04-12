import React from "react"
import Item from "../components/item"
import Tags from "../components/tags"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import Qr from "../components/qr"
import Content from "../components/content"
import SEO from "../components/seo"

export default ({pageContext: { rootPath,chuckData,page,nowPage }}) => {

    function getTagName(rootPath, data) {
        let id = rootPath.replace(/[^0-9]/ig,"");
        let tags = data[0]["tags"];
        for(let tag of tags) {
            if (parseInt(id) === parseInt(tag.id)) {
                return tag.name;
            }
        }
        return false;
    }

    const tagName = getTagName(rootPath, chuckData);

    return (
        <Layout>
        <SEO title={tagName ? tagName : 'gif列表'} />
        <Content 
            tagName={getTagName(rootPath, chuckData)}
            contentLeft={
                chuckData.map((data, index) => (
                    <Item 
                        key={index}
                        itemData={data}
                    />
                ))
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
