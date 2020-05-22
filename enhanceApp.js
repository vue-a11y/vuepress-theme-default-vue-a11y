import VueAnnouncer from '@vue-a11y/announcer'
import VueDarkMode from '@vue-a11y/dark-mode'
import 'a11y-css-reset/combo.css'
import VueSkipTo from 'vue-skip-to'

export default ({ Vue, router, isServer }) => {
  if (!isServer) {
    Vue.use(VueSkipTo)
    Vue.use(VueDarkMode)
    Vue.use(VueAnnouncer, {}, router)
  }
}
