import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { AdminHome } from "../pages/Admin/AdminHome";
import { SignIn } from "../pages/Admin/SignIn";

import { Contact } from "../pages/General/Contact";
import { Home } from "../pages/General/Home";
import { NotFound } from "../pages/General/NotFound/NotFound";

const AdminRoutes = [
    {path: "/admin", component: AdminHome, layout: GeneralLayout},
    {path: "/admin/sign-in", component: SignIn, layout: GeneralLayout}
];
const GeneralRoutes = [
    {path: "/", component: Home, layout: GeneralLayout},
    {path: "/contact", component: Contact, layout: GeneralLayout},
    {path: "*", component: NotFound, layout: GeneralLayout}
];
const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;
