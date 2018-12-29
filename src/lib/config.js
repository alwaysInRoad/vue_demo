/**
 * 配置文件
 * 公共方法
 * */
import axios from 'axios'
import qs from 'qs';
import store from '../store/index'
import router from '../router/index'

/**公用配置参数*/
const config = {
    // baseURL:'http://192.168.2.43:8080/',//服务器
    // baseURL:'http://192.168.2.58:8090/',
    baseURL:'http://192.168.2.52:8090/',
    // baseURL:'http://192.168.2.209:8888/',
    pageSize:10,
};

let http = axios.create({
    baseURL: config.baseURL,//服务器
    // dataType:"json",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', //请求头
        //'user-token': store.state.userToken, //自定义参数
    },
    transformRequest: [function (data) {
        //序列化参数
        data = qs.stringify(data);
        return data
    }],
    beforeSend: function (xhr) {
        xhr.withCredentials = false;
    }
});
let httpJSON = axios.create({
    baseURL: config.baseURL,//服务器
    // dataType:"json",
    headers: {
        'Content-Type': 'application/JSON', //请求头
        // 'user-token': store.state.userToken, //自定义参数
    },
    beforeSend: function (xhr) {
        xhr.withCredentials = false;
    }
});

export default {
    install: function (vm) {
        vm.prototype.$http = http;
        vm.prototype.$httpJSON = httpJSON;
        vm.prototype.$qs = qs;
    }
}



