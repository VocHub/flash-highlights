<template>
  <div id="app">
    <navbar></navbar>
    <videos></videos>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Videos from './components/Videos.vue'

export default {
  components: { Navbar, Videos },
  name: 'App',
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
</style>
