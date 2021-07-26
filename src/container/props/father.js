import React from 'react'

import ChildComponent from "./child"

export default class FatherComponent extends React.Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
    childTofather=(result)=>{
        // 这是子传父过来的值
        console.log(result)
    }
    render(){
        return(
            <div className="menu_content">
                <ChildComponent name={'父组件通过props传入的 name 值'} childTofather={(mode)=>this.childTofather(mode)}></ChildComponent>
            </div>
        )
    }
}