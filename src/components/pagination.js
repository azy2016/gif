import React from "react"
import { Link, navigate  } from "gatsby"
import Style from "../styles/pagination.module.css"

class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nowPage: this.props.nowPage,
            countPage: this.props.countPage,
            rootPath: this.props.rootPath

        }
    }

    componentDidUpdate(){
		document.addEventListener('keydown',this.onkeydown);
    }
    
    onkeydown = (e)=>{
        let id = e.target.value;
		if (e.keyCode === 13) {
			navigate(`${this.state.rootPath}/page/${id}`)
		}
	}

    prevPage() {
        let nowPage = this.state.nowPage;
        let path = this.state.rootPath;
        switch(nowPage) {
            case 1:
                return false;
            case 2:
                return (<Link to={path} className={`${Style.left} ${Style.icon}`}></Link>);
            default:
                return (<Link to={`${path}page/${nowPage - 1}`} className={`${Style.left} ${Style.icon}`}></Link>)
        }
    }

    nextPage() {
        let nowPage = this.state.nowPage;
        let path = this.state.rootPath;
        if (this.state.nowPage === this.state.countPage) {
            return false;
        }
        return (<Link to={`${path}page/${nowPage + 1}`} className={`${Style.right} ${Style.icon}`}></Link>)
    }

    render() {
        return (
            <div className={Style.pagintion}>
                {this.prevPage()}
                <input type="number" onKeyDown={(e)=>this.onkeydown(e)} className={Style.input} min={1} max={this.state.countPage} placeholder={this.state.nowPage} /> / {this.state.countPage}
                {this.nextPage()}
            </div>
        )
    }
}

export default Pagination