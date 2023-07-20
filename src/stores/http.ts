import axios from 'axios';
// import { globalStore } from './global';

const instance = axios.create({
    headers:{
        "Access-Control-Allow-Origin": "*"
    }
});

instance.interceptors.request.use( 
    function (config) {
        // globalStore().showLoading();
        console.log("요청 : ", config);
        return config;
    }
);


instance.interceptors.response.use( 
    function (config) {
        // globalStore().hideLoading();
        return config;
    } , function (error) {
        console.log(error);
        // globalStore().hideLoading();
    }
);

export default instance;