import Home from "../Pages/Home";
import Vishal from "../Pages/Book/Vishal";


const publicRoutes = [
    { path: "/", component: <Vishal/> },
    { path: "/login", component: <Home /> }
];

const authProtected = [
    // { path: "/dashboard", component: <Dashboard /> },
];

export { publicRoutes, authProtected };   