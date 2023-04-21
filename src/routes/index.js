import AboutPage from "../pages/AboutPage/AboutPage";
import AccountPage from "../pages/AccountPage/AccountPage";
import AdminBookingPage from "../pages/AdminPage/AdminBookingPage";
import AdminCuisineDetail from "../pages/AdminPage/AdminCuisineDetail";
import AdminCuisineEdit from "../pages/AdminPage/AdminCuisineEdit";
import AdminCuisinePage from "../pages/AdminPage/AdminCuisinePage";
import AdminOrderPage from "../pages/AdminPage/AdminOrderpage";
import AdminPage from "../pages/AdminPage/AdminPage";
import AdminRoomDetail from "../pages/AdminPage/AdminRoomDetail";
import AdminRoomEdit from "../pages/AdminPage/AdminRoomEdit";
import AdminRoomPage from "../pages/AdminPage/AdminRoomPage";
import AdminUserPage from "../pages/AdminPage/AdminUserPage";
import CreateRoom from "../pages/AdminPage/CreateRoom";
import CuisineCreate from "../pages/AdminPage/CuisineCreate";
import ContactPage from "../pages/ContactPage/ContactPage";
import CuisineDetailPage from "../pages/CuisineDetailPage/CuisineDetailPage";
import CuisinePage from "../pages/CuisinePage/CuisinePage";
import DoubleRoom from "../pages/DoubleRoom/DoubleRoom";
import DrinkPage from "../pages/DrinkPage/DrinkPage";
import FoodPage from "../pages/FoodPage/Foodpage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import HomePage from "../pages/HomPage/HomePage";
import Login from "../pages/Login/Login";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import Register from "../pages/Register/Register";
import RoomDetailPage from "../pages/RoomDetailPage/RoomDetailpage";
import RoomPage from "../pages/RoomPage/RoomPage";
import SingleRoom from "../pages/SingleRoom/SingleRoom";
import VipRoom from "../pages/VipRoom/VipRoom";

export const routes = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true,
    },

    {
        path: "/cuisine",
        page: CuisinePage,
        isShowHeader: true,
    },
    {
        path: "/cuisine/:id",
        page: CuisineDetailPage,
        isShowHeader: true,
    },
    {
        path: "/room",
        page: RoomPage,
        isShowHeader: true,
    },
    {
        path: "/room/:id",
        page: RoomDetailPage,
        isShowHeader: true,
    },
    {
        path: "/about",
        page: AboutPage,
        isShowHeader: true,
    },
    {
        path: "/single-room",
        page: SingleRoom,
        isShowHeader: true,
    },
    {
        path: "/double-room",
        page: DoubleRoom,
        isShowHeader: true,
    },
    {
        path: "/vip-room",
        page: VipRoom,
        isShowHeader: true,
    },
    {
        path: "/food",
        page: FoodPage,
        isShowHeader: true,
    },
    {
        path: "/drink",
        page: DrinkPage,
        isShowHeader: true,
    },

    {
        path: "/contact",
        page: ContactPage,
        isShowHeader: true,
    },
    {
        path: "/gallery",
        page: GalleryPage,
        isShowHeader: true,
    },
    {
        path: "/login",
        page: Login,
        isShowHeader: true,
    },
    {
        path: "/register",
        page: Register,
        isShowHeader: true,
    },
    {
        path: "/admin",
        page: AdminPage,
    },
    {
        path: "/admin/user",
        page: AdminUserPage,
    },
    {
        path: "/admin/room",
        page: AdminRoomPage,
    },
    {
        path: "/admin/room/create",
        page: CreateRoom,
    },
    {
        path: "admin/room/:id",
        page: AdminRoomDetail,
    },
    {
        path: "admin/room/edit/:id",
        page: AdminRoomEdit,
    },
    {
        path: "admin/cuisine/",
        page: AdminCuisinePage,
    },
    {
        path: "admin/cuisine/create",
        page: CuisineCreate,
    },
    {
        path: "admin/cuisine/detail/:id",
        page: AdminCuisineDetail,
    },
    {
        path: "admin/cuisine/edit/:id",
        page: AdminCuisineEdit,
    },
    {
        path: "admin/booking",
        page: AdminBookingPage,
    },
    {
        path: "admin/order",
        page: AdminOrderPage,
    },
    {
        path: "/order",
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path: "/account",
        page: AccountPage,
        isShowHeader: true,
    },
    {
        path: "*",
        page: NotFoundPage,
    },
];
