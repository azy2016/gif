import React from "react";
import { Link } from "gatsby";
import Style from "../styles/item.module.css";
import axios from "axios";
import LazyLoad from 'react-lazy-load';

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            like: "",
            src: this.props.itemData.src,
            id: this.props.itemData.id,
            createdAt: this.props.itemData.create_at,
            tags: this.props.itemData.tags,
            likeNum: this.props.itemData.like,
            readNum: this.props.itemData.read
        }
    }

    componentDidMount() {
        const windowGlobal = typeof window !== 'undefined' && window;
        let like = windowGlobal.localStorage.getItem(`gif_${this.state.id}`);
        if (like !== null) {
            let likeNum = JSON.parse(like).like;
            if(likeNum < this.state.likeNum) {
                likeNum = this.state.likeNum;
            }
            console.log(likeNum);
            this.setState({
                like: true,
                likeNum: likeNum
            })
        }
    }

    count(action) {
        axios({
            method: "POST",
            url: "https://api.like-gif.com",
            data: {
                action: action,
                obj: this.state.id,
                app: 1
            },
            transformRequest: [function(data) {
                let ret = ''
                for(let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }

    handelLike(e) {
        const windowGlobal = typeof window !== 'undefined' && window;
        e.stopPropagation();
        let key = `gif_${this.state.id}`;
        if(!this.state.like){
            let data = {
                id: this.state.id,
                like: this.state.likeNum
            };
            data.like++;
            windowGlobal.localStorage.setItem(key, JSON.stringify(data));
            this.setState({
                like: true,
                ani: true,
                likeNum: data.like
            })
            this.count(1);
            setTimeout(() => {
                this.setState({
                    ani: false
                })
            },1000)
        }

    }

    tags() {
        let tags = this.state.tags;
        let tag = '';
        for (let t of tags){
            tag += t.name + '_';
        }
        return tag;
    }

    render() {
        return (
            <div className={Style.item} >
                
                <p className={Style.desc}>{this.props.itemData.desc}</p>
                <div className={Style.imgBox} >
                <LazyLoad height={268} offsetVertical={300}>
                    <img src={this.state.src} alt={this.tags()} onLoad={() => this.count(2)} />
                </LazyLoad>
                </div>
                <div className={Style.header}>
                    <div className={Style.tags}>
                        {
                            this.state.tags.map((value, index) =>(
                            <Link to={`/tags/${value.id}/`} key={index}>{value.name}</Link>
                            ))
                        }
                    </div>
                    <div className={Style.date}>
                        {this.state.createdAt}
                    </div>
                </div>
                <div className={Style.footer}>
                    <div>
                        <button className={`${Style.likeBtn} ${Style.icon} ${this.state.like ? Style.islike:false}`} onClick={(e) => this.handelLike(e)}></button>
                        <span className={Style.num}>{this.state.likeNum}</span>
                    </div>
                    <div>
                        <span className={`${Style.icon} ${Style.readIcon}`}></span>
                        <span className={Style.num}>{this.state.readNum}</span>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Item

