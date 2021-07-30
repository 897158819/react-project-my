import React from 'react'

import OnRefChild from './onRefChild'
export default class OnRefFarther extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    OnRefFartherClick=(ref)=>{
        console.log("子组件的值为")
        // 获取整个子组件实例
        console.log(ref)
        //调用子组件的方法
        ref.click()
    }
    render(){
        return(
            <div>
                <OnRefChild OnRef={(child)=>{this.OnRefFartherClick=child}}></OnRefChild>
            </div>
        )
    }
}