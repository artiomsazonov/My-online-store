import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Bascket from "./pages/Bascket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        patch: ADMIN_ROUTE,
        Component: Admin
    },
    {
        patch: BASKET_ROUTE,
        Component: Bascket
    },
]

export const publicRoutes = [
    {
        patch: SHOP_ROUTE,
        Component: Shop
    },
    {
        patch: BASKET_ROUTE,
        Component: Bascket
    },
    {
        patch: LOGIN_ROUTE,
        Component: Auth
    },
    {
        patch: REGISTRATION_ROUTE,
        Component: Admin
    },
    {
        patch: DEVICE_ROUTE,
        Component: DevicePage
    },
]