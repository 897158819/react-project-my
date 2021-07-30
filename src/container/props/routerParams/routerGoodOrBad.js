import React from 'react'
import { Router } from 'react-router-dom'

class routerGoodOrBad extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dataList:[]
        }
    }
    componentWillMount () {

    }

    render(){
        console.log(this.props)
        return(
            <div>
                <div>1.params在HashRouter和BrowserRouter路由中刷新页面参数都不会丢失</div>
                <div>2.state在BrowserRouter中刷新页面参数不会丢失，在HashRouter路由中刷新页面会丢失</div>
                <div>3.query：在HashRouter和BrowserRouter路由中刷新页面参数都会丢失</div>
                <div>4.query和 state 可以传对象</div>

            </div>
        )
    }    
}
export default routerGoodOrBad