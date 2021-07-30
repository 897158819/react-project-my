import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import { Button } from 'antd'

import routerParamsOne from './routerParams'
import routerQueryOne from './routerQurey'
import routerStateOne from './routerState'
import routerSearchOne from './routerSearch'
import routerGoodOrBad from './routerGoodOrBad'
export default class routerParamsIndex extends React.Component {

    render(){
        return (
            <div>   
                <div style={{fontSize:"18px",fontWeight:'bold'}}>
                    <div><Link to="/props/router/params/2">params传参</Link></div>
                    <div><Link to={{ pathname:"/props/router/query", query:{name:"query"}}}>query传参</Link></div>
                    <div><Link to={{ pathname:"/props/router/state",state:{name:"state"}}}>state路由传参</Link></div>
                    <div><Link to="/props/router/search?id=123456&name=fuwen">search路由传参</Link></div>
                    <div><Link to="/props/router/goodORbad">各种路由传参的优缺点</Link></div>  
                </div>
                <div>
                    <Router>
                        <Switch>
                            <Route path="/props/router/params/:name" component={routerParamsOne}/>
                            <Route path="/props/router/query" component={routerQueryOne}/>
                            <Route path="/props/router/state" component={routerStateOne}/>
                            <Route path="/props/router/search" component={routerSearchOne}/>
                            <Route path="/props/router/goodORbad" component={routerGoodOrBad}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}