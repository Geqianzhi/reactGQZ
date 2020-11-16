import React from 'react';
import { Redirect } from "react-router-dom";

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to="/Layout"/>
        )
    },
    {
        path:'/Layout',
        component: React.lazy(() => import ('../view/layout')),
        childrens:[
            {
                path:'/Layout/Child',
                name:'option1',
                component: React.lazy(() => import ('../view/page/Child')),
                render: () => (
                    <Redirect to="/Layout/Child/Child2"/>
                ),
                childrens:[
                    {
                        path:'/Layout/Child/Child2',
                        name:'option1_1',
                        component: React.lazy(() => import ('../view/page/Child2')),
                    }
                ]
            },
            {
                path:'/Layout/Child3',
                name:'option3',
                component: React.lazy(() => import ('../view/page/Child2')),
            },
        ]
    }
]
export const childernRoutes = [
    ...routes[1].childrens
]
export default routes;