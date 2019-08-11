<template>
  <div id="app">
      <div class="container page-container">
          <app-header></app-header>
          <router-view></router-view>
      </div>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/pages/elements/Header'
import Footer from './components/pages/elements/Footer'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    
/*    page layout*/
    html, body, #app {
        min-height: 100%;
        height: 100%;
    }
    #app {
        position: relative;
    }
    .page-container {
        min-height: 100%;
        padding-bottom: 80px;
    }

</style>
