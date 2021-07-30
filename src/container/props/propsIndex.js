import React from "react"
import {BrowserRouter as  Router,Route, Switch,Link } from "react-router-dom"

import MenuComponent from "../../components/menu"
import FatherComponent from './fatherTochild/father'
import ContentProvider from "./propsContent/contentProvider"
import EventIndex from './event/eventIndex'
import routerParamsIndex from './routerParams/routerParamsIndex'
import OnRefFarther from "./onRef/onRefFarther"
import RefFarther from "./ref/refFarther"
import ReduxIndex from "./redux/reduxIndex"
class PropsIndexComponent extends React.Component {

    render(){
        return(
            <div className="App-header" style={{height:"100%"}}>
                <div className="menu">
                    <MenuComponent/>
                </div>
                <div className="content">
                    <Router>
                        <Switch>
                            <Route exact path="/props/" component = {FatherComponent} />
                            <Route exact path="/props/content" component={ContentProvider} />
                            <Route exact path="/props/event" component={ EventIndex }/>
                            <Route path="/props/router/" component={ routerParamsIndex }/>
                            <Route exact path='/props/onref' component={OnRefFarther}></Route>
                            <Route exact path="/props/ref" component={RefFarther}></Route>
                            <Route exact path="/props/redux" component={ReduxIndex}></Route>
                        </Switch>
                    </Router>
                </div>       
            </div>
        )
    }
}
export default PropsIndexComponent