import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  methods: {
  	switchView: function(view) {
      this.$refs.app.currentView = view;
  	}
  },
  components: { App }
})
