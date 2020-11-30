import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _aff4baa2 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _ff3a0422 = () => interopDefault(import('..\\pages\\admin\\create.vue' /* webpackChunkName: "pages_admin_create" */))
const _ff30715e = () => interopDefault(import('..\\pages\\admin\\list.vue' /* webpackChunkName: "pages_admin_list" */))
const _71ad45c6 = () => interopDefault(import('..\\pages\\admin\\login.vue' /* webpackChunkName: "pages_admin_login" */))
const _110c7b7d = () => interopDefault(import('..\\pages\\admin\\logout.vue' /* webpackChunkName: "pages_admin_logout" */))
const _2050a3fe = () => interopDefault(import('..\\pages\\admin\\user.vue' /* webpackChunkName: "pages_admin_user" */))
const _46daacf7 = () => interopDefault(import('..\\pages\\admin\\post\\_id.vue' /* webpackChunkName: "pages_admin_post__id" */))
const _2ff9d584 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages_post__id" */))
const _6bc34676 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _aff4baa2,
      name: "admin"
    }, {
      path: "/admin/create",
      component: _ff3a0422,
      name: "admin-create"
    }, {
      path: "/admin/list",
      component: _ff30715e,
      name: "admin-list"
    }, {
      path: "/admin/login",
      component: _71ad45c6,
      name: "admin-login"
    }, {
      path: "/admin/logout",
      component: _110c7b7d,
      name: "admin-logout"
    }, {
      path: "/admin/user",
      component: _2050a3fe,
      name: "admin-user"
    }, {
      path: "/admin/post/:id?",
      component: _46daacf7,
      name: "admin-post-id"
    }, {
      path: "/post/:id?",
      component: _2ff9d584,
      name: "post-id"
    }, {
      path: "/",
      component: _6bc34676,
      name: "index"
    }],

    fallback: false
  })
}
