<template>
  <div>
    <nav>
      <router-link
        class="spacing" 
        v-bind:key="routes.id"
        v-for="routes in links" 
        :to="`${routes.page}`">
        {{routes.text}}
      </router-link>
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
          page:'/home'
        },
        {
          id: 1,
          text: 'Categories',
          page:'/categories'
        },
        {
          id: 2,
          text: 'Random',
          page:'/random'
        }
      ]
    }
  }
}
</script>

<style>
.spacing { 
    margin-left: 20px; 
    margin-right: 20px;
} 

 nav {
  position: fixed; 
  left: 0;          
  top: 0;           
  width: 100vw;      
  z-index:200;  
  height: 50px;    
  font-size: 25px;
  background-color: rgb(77, 77, 77);
  padding-top: 30px;
  color:white;
  cursor: pointer;
}

a {
    text-decoration: none;
    color: white;
 }

a:visited {
  color: white;
}

router-link:hover {
    color: #bcc4dd;
}

</style>
