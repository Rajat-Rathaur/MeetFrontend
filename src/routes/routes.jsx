// src/routes/routes.js

import Home from '../Pages/Home';
import afterJoiningMeet from '../Pages/afterJoiningMeet';
import index from '../Pages';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
   
     {
        path:'/room/:roomId',
        component:index
    }
     
];

export default routes;
