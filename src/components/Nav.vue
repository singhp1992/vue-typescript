<template>
  <div>
    <nav>
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 1,
          text: 'Categories',
          page:'/Categories'
        },
        {
          id: 2,
          text: 'Random',
          page:'/Random'
        }
      ]
    }
  }
}
</script>

<style>
.spacing { 
    margin-right: 10px; 
} 
</style>
