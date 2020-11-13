import React from 'react';
import {Layout} from 'antd';
import './layout.less';
const {Header,Sider,Content} = Layout;
export default function LayoutPage() {
    return (
        <>
            <Layout className="layout">
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        </>
    )
}
