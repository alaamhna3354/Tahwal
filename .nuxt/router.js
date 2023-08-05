import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7f6258e3 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _3d397bf1 = () => interopDefault(import('..\\pages\\chairs\\index.vue' /* webpackChunkName: "pages/chairs/index" */))
const _432bc88a = () => interopDefault(import('..\\pages\\invitations\\index.vue' /* webpackChunkName: "pages/invitations/index" */))
const _56a4e12c = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _e0e97bd6 = () => interopDefault(import('..\\pages\\registrationPass\\index.vue' /* webpackChunkName: "pages/registrationPass/index" */))
const _1f90821b = () => interopDefault(import('..\\pages\\registrationUser\\index.vue' /* webpackChunkName: "pages/registrationUser/index" */))
const _5e19619f = () => interopDefault(import('..\\pages\\surename\\index.vue' /* webpackChunkName: "pages/surename/index" */))
const _9919c010 = () => interopDefault(import('..\\pages\\invitations\\all\\index.vue' /* webpackChunkName: "pages/invitations/all/index" */))
const _ac1da360 = () => interopDefault(import('..\\pages\\invitations\\external\\index.vue' /* webpackChunkName: "pages/invitations/external/index" */))
const _164c625e = () => interopDefault(import('..\\pages\\invitations\\general\\index.vue' /* webpackChunkName: "pages/invitations/general/index" */))
const _191c5b7f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/categories",
    component: _7f6258e3,
    name: "categories"
  }, {
    path: "/chairs",
    component: _3d397bf1,
    name: "chairs"
  }, {
    path: "/invitations",
    component: _432bc88a,
    name: "invitations"
  }, {
    path: "/login",
    component: _56a4e12c,
    name: "login"
  }, {
    path: "/registrationPass",
    component: _e0e97bd6,
    name: "registrationPass"
  }, {
    path: "/registrationUser",
    component: _1f90821b,
    name: "registrationUser"
  }, {
    path: "/surename",
    component: _5e19619f,
    name: "surename"
  }, {
    path: "/invitations/all",
    component: _9919c010,
    name: "invitations-all"
  }, {
    path: "/invitations/external",
    component: _ac1da360,
    name: "invitations-external"
  }, {
    path: "/invitations/general",
    component: _164c625e,
    name: "invitations-general"
  }, {
    path: "/",
    component: _191c5b7f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
