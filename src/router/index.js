import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'
// Views - Pages
import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'

/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [
    { path: '/login', component: Login, hidden: true },
    {path: '/pages',redirect: '/pages/p404', name: 'Pages',
          component: {
            render (c) { return c('router-view') }
              // Full,
          },
          children: [{path: '404',  name: 'Page404', component: _import('errorPages/Page404') },
                     {path: '500',name: 'Page500',component: _import('errorPages/Page404')},
                    ]
    }
]

export default new Router({
  mode: 'hash', 
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
 {
    path: '/',
    redirect: '/404',
    name: '首页',
    component: Full,
    hidden:false,
    children: [
      // {path: '/dashboard',name: 'Dashboard',icon:'speedometer',component: _import('Dashboard')},
      {path: '404',  name: 'Page404', component: _import('errorPages/Page404') },
      
    ]
  },
  { path: '*', redirect: '/pages/404', hidden: true }
  
];
