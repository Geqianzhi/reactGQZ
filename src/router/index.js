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
            }
        ]
    }
]
export const childernRoutes = [
    ...routes[1].childrens
]
export default routes;