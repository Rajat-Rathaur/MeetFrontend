// src/routes/routes.js

import Home from '../Pages/Home';
import afterJoiningMeet from '../Pages/afterJoiningMeet';


const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path:'/afterJoiningMeet',
        component : afterJoiningMeet,
    }
    
];

export default routes;
