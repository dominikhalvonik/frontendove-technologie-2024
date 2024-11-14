<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AView"
})
</script>

<template>
  <p>
    {{ this.$route.params.username }}
  </p>
</template>

<style scoped>

</style>