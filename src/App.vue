<template>
  <div id="app">
    <component :is="currentView"></component>
  </div>
</template>

<script>
import Home from './components/Home'
import Start from './components/Start'

export default {
  data: function () {
    return {
      currentView: 'Home'
    }
  },
  components: {
    Home,
    Start
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
