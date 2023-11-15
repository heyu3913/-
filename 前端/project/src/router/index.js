import { createRouter, createWebHistory } from 'vue-router'

// 自动导入 views 下的所有 vue 文件
const files = import.meta.glob('../views/**/*.vue')
let routes = []
Object.keys(files).forEach(key => {
    const path = key.replace(/(\.\.\/views\/|\.vue)/g, '')// 移除 "./" 和 ".vue"
    const name = path.replace(/\//g, '-')   // 路径中的 "/" 替换为 "-"，以免和 Vue Router 的路由路径冲突
    // 如果组件在子文件夹中，保持子文件夹结构；
    // 如果组件在 views 文件夹下，去掉 "/"
    const routePath = path.includes('/') ? '/' + path : '/' + path.split('/').pop()
    routes.push({
        path: routePath,
        name: name,
        component: files[`../views/${path}.vue`]  //导入相应的组件
    })
})
routes.push({
    path: '/',
    name: '重定向',
    redirect: '/index'
})
console.log('routes', routes)
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
