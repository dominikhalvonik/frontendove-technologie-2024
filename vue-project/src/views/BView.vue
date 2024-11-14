<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BView"
})
</script>

<template>
  <p>
    {{ this.$route.params.username }}
  </p>
</template>

<style scoped>

</style>