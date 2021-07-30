import React from 'react'

import RefChild from './refChild'

export default class RefFarther extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    // 钩子函数获取实例
    componentDidMount(){
        console.log("refChild组件的值为")
        console.log(this.refs)
        console.log(this.refs['refChild'])
    }
    render(){
        return(
            <div>
                <RefChild ref='refChild'></RefChild>
            </div>
        )
    }
}