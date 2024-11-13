<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BView"
})
</script>

<template>
  <div style="color: blue; font-size: 30px" >
    {{ this.$route.params.username }}
  </div>
</template>

<style scoped>

</style>