import React from "react"
import { Menu } from "antd"
const { SubMenu } = Menu;
export default class MenuComponent extends React.Component {

    state={
        menu_list:[{
            "Home":[{"name":"Home","title":"Home","key":1,"uri":"/"}],
            "Props":[
                {"name":"Props","title":"Props","key":2,"uri":"/props"},
                {"name":"Props Content","title":"Props Content","key":3,"uri":"/props/content"},
                {"name":"EventEmitter","title":"EventEmitter","key":4,"uri":"/props/event"},
                {"name":"路由传参","title":"路由传参","key":5,"uri":"/props/router"},
                {"name":"OnRef","title":"OnRef","key":6,"uri":"/props/OnRef"},
                {"name":"Ref","title":"Ref","key":7,"uri":"/props/ref"},
                {"name":"Redux","title":"Redux","key":8,"uri":"/props/redux"},
            ],
            "Test":[
                {"name":"one","title":"one","key":100,"uri":"/test/one"},
                {"name":"tow","title":"tow","key":101,"uri":"/test/tow"},
            ],
            
        }],
        "test_list":{}
    }

    render(){
        const {menu_list} = this.state
        const home_menu_item = []
        const props_menu_item = []
        const test_menu_item = []
        menu_list.forEach((e,index) => {
            e.Home.forEach((x)=>{
                home_menu_item.push(<Menu.Item key={x.key} className="menu_li"><a title={x.title} href={x.uri}>{x.name}</a></Menu.Item>)
            })
            e.Props.forEach((x)=>{
                props_menu_item.push(
                    <Menu.Item key={x.key} className="menu_li"><a title={x.title} href={x.uri}>{x.name}</a></Menu.Item>
                )
            })
            e.Test.forEach((x)=>{
                test_menu_item.push(
                <Menu.Item key={x.key} className="menu_li"><a title={x.title} href={x.uri}>{x.name}</a></Menu.Item>
                )
            })
        });
        
        return(
           
            <div className="menu_content">
                <Menu mode="inline" style={{ width: 256 }} theme='dark'>
                    {home_menu_item}
                    <SubMenu key="sub1" title="Props" className="menu_li">
                        {props_menu_item}
                    </SubMenu>
                    <SubMenu key="test" title="Test" className="menu_li">
                        {test_menu_item}
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}