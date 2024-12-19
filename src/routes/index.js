import { ProductDetailPage } from "../pages/ProductDetailPage/ProductDetailPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { AdminPage } from "../pages/AdminPage/AdminPage";
import { LogInPage } from "../pages/LogInPage/LogInPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { SupportPage } from "../pages/SupportPage/SupportPage";
import { SearchProduct } from "../pages/SearchProduct/SearchProduct";
import { SalesProduct } from "../pages/SalesProduct/SalesProduct";
import { TypeProductPage } from "../pages/TypeProductPage/TypeProductPage";
import { ProfileUserPage } from "../pages/ProfileUserPage/ProfileUserPage";
import { OrderPage } from "../pages/OrderPage/OrderPage";
export const routes = [
  {
    path: "/product-detail/:id",
    page: ProductDetailPage,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "*",
    page: NotFoundPage,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "/login",
    page: LogInPage,
    isShowHeader: false,
  },
  {
    path: "/system/admin",
    page: AdminPage,
    isShowHeader: false,
    isPrivate: true,
  },
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/product",
    page: ProductPage,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/search-product",
    page: SearchProduct,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/support",
    page: SupportPage,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/product-sales",
    page: SalesProduct,
    isShowHeader: true,
    isShowFooter: false,
  },

  {
    path: "/product/:type",
    page: TypeProductPage,
    isShowHeader: true,
    isShowFooter: false,
  },

  {
    path: "/profile-user",
    page: ProfileUserPage,
    isShowHeader: true,
    isShowFooter: false,
  },
  { path: "/order", page: OrderPage, isShowHeader: true, isShowFooter: false },
];
