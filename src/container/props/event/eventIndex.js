import React from 'react'

import EventOne from './eventOne'
import EventTow from './evnetTow'
import MenuComponent from '../../../components/menu'
export default class EventIndex extends React.Component{
    render(){
        return(
            <div>
                <EventOne/>
                <EventTow/>
            </div>
        )
    }
}