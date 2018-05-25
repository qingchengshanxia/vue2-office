// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'


Vue.use(VueI18n)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false


let defaultToken = "";
var qs = require('querystring');
//决定是否过滤URL中的/api
let isFilterApi = window.location.host.indexOf('127.0.0.1:')>-1||window.location.host.indexOf('localhost:')>-1?false:true;
Vue.prototype.$http = axios.create({
    baseURL: '',
    withCredentials: true, //是否跨域支持
    timeout: 30000, //超时设置
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    transformRequest: [function (data) {
        if(!data.__proto__.append){
          //非上传图片的格式
          data = qs.stringify(data);//序列化
        }

        return data;
    }],
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }]
});

let _loading='';
Vue.prototype.$ajax = function (option) {
  if (!option.data) {
    option.data = {};
  }
  // 如果请求参数对象中，存在 noloading:true，则不执行默认的loading加载图；
  // 否则执行默认的加载图
  if(!option.noloading){
    // _loading=Loading.service({
    //   lock: true,
    //   text: 'Loading',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // });
  }
  this.$http({
    method:option.method,
    url:isFilterApi?(option.url.replace("/api","")):option.url,
    data:option.data,
    dataType: "json",
  }).then(obj=>{
    if(obj.data){
      obj = JSON.parse(obj.data);
    }
    option.success && option.success(obj);
    // _loading&&_loading.close();
  }).catch(err=>{
    // _loading&&_loading.close();
    option.error?option.error(err):console.error(err.message);
  })
};


// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('hasLogin')) {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${localStorage.getItem('hasLogin')}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    localStorage.removeItem('hasLogin');
                    router.replace({
                        path: '/login'
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    }
);


//国际化语言设置
const i18n = new VueI18n({
    locale: 'zh',    // 语言标识 （这里可以用localStorage使得具有记忆功能）
    messages: {
        'zh': require('./lang/zh'),
        'en': require('./lang/en')
    }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
