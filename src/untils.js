export const isJsonString = (data) => {
    try {
        JSON.parse(data)
    } catch (error) {
        return false;
    }
    return true;
}
// Chuyển ảnh sang base64
export const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (err) => reject(err)
    })
export function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
        };

        reader.onerror = error => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
}
export function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
export const renderOptions = (arr) => {
    let result = [];
    if (arr) {
        result = arr?.map((opt) => {
            return {
                value: opt,
                label: opt,
            }
        })
    }
    result.push({
        label: 'Thêm type mới',
        value: 'add_type'
    })
    return result;
}
export const covertPrice = (price) => {
    try {
        const results = price.toLocaleString().replaceAll('.', '.')
        return `${results}đ`
    } catch (error) {
        return null
    }
}
export const initFacebookSDK = () => {
    if (window.FB) {
        window.FB.XFBML.parse();
    }
    let locale = "vi_VN";
    window.fbAsyncInit = function () {
        window.FB.init({
            appId: process.env.REACT_APP_FB_ID,// You App ID
            cookie: true, // enable cookies to allow the server to access
            // the session
            xfbml: true, // parse social plugins on this page
            version: "v2.1" // use version 2.1
        });
    };
    // Load the SDK asynchronously
    (function (d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = `//connect.facebook.net/${locale}/sdk.js`;
        fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
};