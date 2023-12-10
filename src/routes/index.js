// Layouts
import { HeaderOnly } from "../component/Layout";
import Home from "../pages/Home/H-index";
import Following from "../pages/Following/F-index";
import Profile from "../pages/Profile/P-index";
import Upload from "../pages/Upload/U-index";
import Search from "../pages/Search/S-index";
//public Router

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
