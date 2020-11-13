import React,{useState} from 'react';
import {Layout} from 'antd';
import './layout.less';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
const {Header,Sider,Content} = Layout;
export default function LayoutPage() {
    const [collapsed,setCollapsed] = useState(false);
    const setColl = (val)=>{
        val ? setCollapsed(false):setCollapsed(true)
    }
    return (
        <>
            <Layout className="layout">
                <Sider collapsible collapsed={collapsed}>Sider</Sider>
                <Layout>
                    <Header className="header">
                        <div className="collapsed-icon" onClick={() => setColl(collapsed)}>
                            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }
                        </div>
                    </Header>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        </>
    )
}
