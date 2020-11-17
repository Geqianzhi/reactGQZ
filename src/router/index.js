import React from 'react';
import { Redirect } from "react-router-dom";
export const childernRoutes = [
    {
        path:'/Child',
        name:'option1',
        childrens:[
            {
                path:'/Child/Child2',
                name:'option1_1',
                component: React.lazy(() => import ('../components/TabelTel')),
            }
        ]
    },
    {
        path:'/Child3',
        name:'option3',
        component: React.lazy(() => import ('../view/page/Child2')),
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