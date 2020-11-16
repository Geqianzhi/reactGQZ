import React,{useState,memo} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {childernRoutes} from '../../router';
import { NavLink } from "react-router-dom";
import './layout.less';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
 
} from '@ant-design/icons';
const {Header,Sider,Content} = Layout;
const { SubMenu } = Menu;
function LayoutPage() {
    const [collapsed,setCollapsed] = useState(false);
    const setColl = (val)=>{
        val ? setCollapsed(false):setCollapsed(true)
    };
    const selectLink =({ item, key, keyPath, domEvent }) =>{
        console.log(item)
    };
    return (
        <>
            <Layout className="layout">
                <Sider collapsible collapsed={collapsed}  className="site-layout-background"  width="240" onCollapse={() => setColl(collapsed)}>
                    <div className="logo" />
                    <Menu
                        mode="inline"
                        theme="dark"
                        onClick={selectLink}
                    >   

                       {
                           childernRoutes.map((e,index) => {
                               if(e.hasOwnProperty("childrens")){
                                    const childrens = e.childrens;
                                    let list = childrens.map((item,i)=>{
                                        return (
                                            <SubMenu key={index} icon={<UserOutlined />} title={e.name}>
                                                <Menu.Item key={`${index}-${i}`}>
                                                    {/* <NavLink to={item.path}>{item.name}</NavLink> */}
                                                    {item.name}
                                                </Menu.Item>
                                            </SubMenu>
                                        )
                                    })   
                                    return list;
                               }else{
                                    return (
                                        <Menu.Item key={index} icon={<UserOutlined />}>
                                            <NavLink to={e.path}>{e.name}</NavLink>
                                        </Menu.Item>
                                    )
                               }
                           })
                       }
                       
                       
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="header">
                        <div className="collapsed-icon" onClick={() => setColl(collapsed)}>
                            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }
                        </div>
                        <Breadcrumb style={{ marginLeft: '16px' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                    </Header>
                    <Content >
                        {/* <Route path="/" exact component={Home}></Route> */}
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default memo(LayoutPage);