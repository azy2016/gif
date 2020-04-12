import React from "react"
import Item from "../components/item"
import Tags from "../components/tags"
import Layout from "../components/layout"
import Qr from "../components/qr"
import SEO from "../components/seo"
import Content from "../components/content"

function getLocaStoresData() {
    const windowGlobal = typeof window !== 'undefined' && window;
    let objs = [];
    for (let i = 0; i < windowGlobal.localStorage.length; i++) {
        let key = windowGlobal.localStorage.key(i); //获取本地存储的Key
        let obj = windowGlobal.localStorage.getItem(key);//所有value
        objs.push(JSON.parse(obj));
    }
    return objs;
}

const objs = getLocaStoresData();

export default (props) => (
    <Layout >
        <Content
            tagName="我的点赞"
            contentLeft = {
                objs.map((data, index) => (
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
            contentRight = {
                <div>
                    <Tags />
                    <Qr />
                </div>
            }
        />
        <SEO title="我的点赞" description="" />
    </Layout>
)
