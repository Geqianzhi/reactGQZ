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