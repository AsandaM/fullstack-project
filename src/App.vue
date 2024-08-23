<template>
    <HeaderComp />
    <NavBar />
    <main class="container-fluid">
      <div class="row">
        <router-view /> 
      </div>
    </main>
    <FooterComp />
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeaderComp from './components/Header.vue'
import FooterComp from './components/Footer.vue'

export default {
  components: {
    NavBar,
    HeaderComp,
    FooterComp
  }
}

</script>

<style src="./assets/css/style.css">

</style>
