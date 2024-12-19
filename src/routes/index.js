import { ProductDetailPage } from "../pages/ProductDetailPage/ProductDetailPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";

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
];
