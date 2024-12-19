
import { ProductDetailPage } from "../pages/ProductDetailPage/ProductDetailPage";
import { AdminPage } from "../pages/AdminPage/AdminPage";


export const routes = [
    
    {
        path: '/product-detail/:id',
        page: ProductDetailPage,
        isShowHeader: true,
        isShowFooter: false,
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivate: true
    },
]