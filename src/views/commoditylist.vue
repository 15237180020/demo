<template>
  <div>
      商品列表
      commoditylist
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