import Vue from 'vue'
import Vuex from 'vuex'
import main from './main'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  ...main,
  modules
})
