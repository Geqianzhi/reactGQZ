import React from 'react';
import {
    AlertOutlined,
    WindowsOutlined
} from '@ant-design/icons';
export const childernRoutes = [
    {
        path:'/css3',
        name:'css3',
        icon:<WindowsOutlined />,
        childrens:[
            {
                path:'/css3/CubicBezier',
                icon:<AlertOutlined />,
                name:'CubicBezier(贝塞尔曲线)',
                component: React.lazy(() => import ('../view/page/css3/Bezier/CubicBezier')),
            },
            {
                path:'/css3/Flex',
                icon:<AlertOutlined />,
                name:'Flex(弹性布局)',
                component: React.lazy(() => import ('../view/page/css3/Flex/Flex.js')),
            }
        ]
    },
    {
        path:'/ReactHook',
        name:'ReactHook',
        icon:<WindowsOutlined />,
        childrens:[
            {
                path:'/ReactHook/useState',
                icon:<AlertOutlined />,
                name:'useState',
                component: React.lazy(() => import ('../view/page/ReactHook/useStateApi')),
            }
        ]
    },
]

const routes = [
    {
        path:'/',
        component: React.lazy(() => import ('../view/layout')),
        childrens:childernRoutes
    }
]

export default routes;