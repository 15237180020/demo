<template>
  <div>
      commodityge
      商品规格
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