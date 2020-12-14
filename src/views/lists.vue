<template>
  <div>
      后台首页
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

<style>

</style>