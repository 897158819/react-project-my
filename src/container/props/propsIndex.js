import React from "react"
import {Switch, Router, Route} from "react-router-dom"

class PropsComponent extends React.Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact ></Route>
                </Switch>
            </Router>
        )
    }
}