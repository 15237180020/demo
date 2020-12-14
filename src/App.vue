<template>
  <div id="app">
    <div id="nav">
       
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
   mounted(){
    setTimeout(()=>{
      localStorage.clear('token')
      this.$router.push({path:'/'})
    },10000)
  }
}
</script>
 