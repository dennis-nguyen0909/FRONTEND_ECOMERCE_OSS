import { TypeProductPage } from "../pages/TypeProductPage/TypeProductPage";
export const routes = [
    
    {
        path: '/product/:type',
        page: TypeProductPage,
        isShowHeader: true,
        isShowFooter: false,
    },
    
]