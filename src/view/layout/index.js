import React,{useState,memo} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {childernRoutes} from '../../router';
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import './layout.less';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
const {Header,Sider,Content} = Layout;
// const { SubMenu } = Menu;
function LayoutPage(props) {
    const [collapsed,setCollapsed] = useState(false);
    const setColl = (val)=>{
        val ? setCollapsed(false):setCollapsed(true)
    };
    console.log(props)
    const {route} = props;
    return (
        <>
            <Layout className="layout">
                <Sider collapsible collapsed={collapsed}  className="site-layout-background"  width="240" onCollapse={() => setColl(collapsed)}>
                    <div className="logo" />
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['0']}

                    >   

                       {
                           childernRoutes.map((e,index) => {
                               if(e.childrens){
                                    return null
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
                    <Content >{renderRoutes(route.childrens)}</Content>
                </Layout>
            </Layout>
        </>
    )
}
export default memo(LayoutPage);