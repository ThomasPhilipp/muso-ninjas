<template>
  <Navbar />
  <div class="content">
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
  .content {
    margin: 0 auto; /* center view */
    max-width: 1200px;
    padding: 0 20px;
  }
</style>