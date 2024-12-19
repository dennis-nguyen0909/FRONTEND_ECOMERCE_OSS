
import { ProductDetailPage } from "../pages/ProductDetailPage/ProductDetailPage";
import { HomePage } from "../pages/HomePage/HomePage";


export const routes = [
    
    {
        path: '/product-detail/:id',
        page: ProductDetailPage,
        isShowHeader: true,
        isShowFooter: false,
    },
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
        isShowFooter: true,
    },
]