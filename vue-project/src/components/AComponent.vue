<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AComponent"
})
</script>

<template>
  <p>
    Komponent A: {{ this.$route.params.username }}
  </p>
</template>

<style scoped>

</style>