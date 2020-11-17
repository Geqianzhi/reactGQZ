import React,{useState,memo,Suspense} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {childernRoutes} from '../../router';
import { NavLink,Route } from "react-router-dom";
import {observer,inject} from 'mobx-react';
import './layout.less';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
 
} from '@ant-design/icons';
const {Header,Sider,Content} = Layout;
const { SubMenu } = Menu;

function LayoutPage(props) {
    const [collapsed,setCollapsed] = useState(false);
    const setColl = (val)=>{
        val ? setCollapsed(false):setCollapsed(true)
    };
    console.log(props)
    const selectRoute = (item) =>{
        const {store} = props;
        store.changeRoutes(item);
    }
    return (
        <>
            <Layout className="layout">
                <Sider collapsible collapsed={collapsed}  className="site-layout-background"  width="240" onCollapse={() => setColl(collapsed)}>
                    <div className="logo" />
                    <Menu
                        mode="inline"
                        theme="dark"
                    >   

                       {
                           childernRoutes.map((e,index) => {
                               if(e.hasOwnProperty("childrens")){
                                    const childrens = e.childrens;
                                    let list = childrens.map((item,i)=>{
                                        return (
                                            <SubMenu key={index} icon={<UserOutlined />} title={e.name}>
                                                <Menu.Item key={`${index}-${i}`}>
                                                    <NavLink to={item.path} onClick={()=>selectRoute(item)}>{item.name}</NavLink>
                                                </Menu.Item>
                                            </SubMenu>
                                        )
                                    })   
                                    return list;
                               }else{
                                    return (
                                        <Menu.Item key={index} icon={<UserOutlined />}>
                                            <NavLink to={e.path} onClick={()=>selectRoute(e)}>{e.name}</NavLink>
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
                            {
                                props.store.activeRoutes.map((e,index)=>{
                                    return (
                                        <Breadcrumb.Item key={index}>
                                            <NavLink to={e.path}>{e.name}</NavLink>
                                        </Breadcrumb.Item>
                                    )
                                })
                            }                                                       
                        </Breadcrumb>
                    </Header>
                    <Content >                    
                        <Suspense fallback={<div>loading</div>}>
                                {
                                    childernRoutes.map((e,index) => {
                                        if(e.hasOwnProperty("childrens")){
                                                const childrens = e.childrens;
                                                let list = childrens.map((item,i)=>{
                                                    return (
                                                        <Route key={`${index}-${i}`} path={item.path} component={item.component}></Route>
                                                    )
                                                })   
                                                return list;
                                        }else{
                                                return (
                                                    <Route key={index} path={e.path} component={e.component}></Route>
                                                )
                                        }
                                    })
                                }
                        </Suspense>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default memo(inject('store')(observer(LayoutPage)));