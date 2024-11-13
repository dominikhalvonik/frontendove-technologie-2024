<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AView"
})
</script>

<template>
  <div style="color: green; font-size: 50px" >
    {{ this.$route.params.username }}
  </div>
</template>

<style scoped>

</style>