import { createRouter, createWebHistory } from 'vue-router'

/**
 * 创建一个可以被 Vue 应用程序使用的路由实例
 * @method createRouter(options: RouterOptions): Router
 * @link 参考：https://next.router.vuejs.org/zh/api/#createrouter
 */
export const router = createRouter({
  history: createWebHistory(),
  routes: [],
})
// 导出路由
export default router
