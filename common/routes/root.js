// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from '../components/App'
import Home from './Home'

export default function createRoutes (store) {
console.log(require('./NotFound').default);
  const root = {
    path: '/',
    component: App,
    getChildRoutes (location, cb) {
      require.ensure([], (require) => { 
        cb(null, [
          require('./Transports').default,
          require('./Login').default,
          require('./NotFound').default
        ])
      })
    },

    indexRoute: {
      component: Home
    }
  }

  return root
}
