import React from "react"
import { Menu } from "antd"
const { SubMenu } = Menu;
export default class MenuComponent extends React.Component {

    state={
        menu_list:[{
            "Home":[{"name":"Home","title":"Home","key":"sub1","uri":"/"}],
            "core_concept_list":[
                {"name":"Props","title":"Props","key":1,"uri":"/props"},
                {"name":"Render Element","title":"Render Element","key":2,"uri":"/"},
                {"name":"Component & props","title":"Component & props","key":3,"uri":"/"},
                {"name":"State & Life Cycle","title":"State & Life Cycle","key":4,"uri":"/"},
                {"name":"Event Handling","title":"REvent Handling","key":5,"uri":"/"},
                {"name":"Render of Condition","title":"Render of Condition","key":6,"uri":"/"},
                {"name":"List & Key","title":"List & Key","key":7,"uri":"/"},
                {"name":"Form","title":"Form","key":8,"uri":"/"},
                {"name":"State of Ascension","title":"State of Ascension","key":9,"uri":"/"},
                {"name":"Composition and inheritance","title":"Composition and inheritance","key":10,"uri":"/"},
                {"name":"List & Key","title":"List & Key","key":11,"uri":"/"},
            ]
        }],
        "test_list":{}
    }

    render(){
        const {menu_list} = this.state
        const menu_item = []
        menu_list.forEach((e,index) => {
            e.Home.forEach((x)=>{
                menu_item.push(<Menu.Item key={x.key} className="menu_li"><a title={x.title} href={x.uri}>{x.name}</a> </Menu.Item>)
            })
            e.core_concept_list.forEach((x)=>{
                menu_item.push(<Menu.Item key={x.key} className="menu_li"><a title={x.title} href={x.uri}>{x.name}</a> </Menu.Item>)
            })
        });
        

        return(
            <div className="menu_content">
                <Menu mode="inline" style={{ width: 256 }}>   
                    {menu_item}
                </Menu>
            </div>
        )
    }
}