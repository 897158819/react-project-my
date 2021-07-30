import React from "react"
import { BrowserRouter as  Router, Route, Switch,Link } from 'react-router-dom'

import TestOne from "./testOne"
import TestTow from "./testTow"
import MenuComponent from "../../components/menu"
class TestIndex extends React.Component {
    render(){
        return(
            <div className="App-header" style={{height:"100%"}}>
                <div className="menu">
                    <MenuComponent></MenuComponent>
                </div>
                <div className="content">
                    <Route path="/test/one/" component={TestOne} />
                    <Route path="/test/tow/" component={TestTow} />
                </div>
            </div>
        )
    }
}
export default TestIndex