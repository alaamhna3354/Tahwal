export const AuthForgetpass = () => import('../..\\components\\auth\\Forgetpass.vue' /* webpackChunkName: "components/auth-forgetpass" */).then(c => wrapFunctional(c.default || c))
export const AuthForgetuser = () => import('../..\\components\\auth\\Forgetuser.vue' /* webpackChunkName: "components/auth-forgetuser" */).then(c => wrapFunctional(c.default || c))
export const AuthLogin = () => import('../..\\components\\auth\\login.vue' /* webpackChunkName: "components/auth-login" */).then(c => wrapFunctional(c.default || c))
export const CommonFooter = () => import('../..\\components\\Common\\Footer.vue' /* webpackChunkName: "components/common-footer" */).then(c => wrapFunctional(c.default || c))
export const CommonHeader = () => import('../..\\components\\Common\\Header.vue' /* webpackChunkName: "components/common-header" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../..\\components\\Home\\Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const Invitations = () => import('../..\\components\\invitations\\invitations.vue' /* webpackChunkName: "components/invitations" */).then(c => wrapFunctional(c.default || c))
export const LoaderLoading = () => import('../..\\components\\Loader\\loading.vue' /* webpackChunkName: "components/loader-loading" */).then(c => wrapFunctional(c.default || c))
export const LoaderVPlaceload = () => import('../..\\components\\Loader\\VPlaceload.vue' /* webpackChunkName: "components/loader-v-placeload" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
