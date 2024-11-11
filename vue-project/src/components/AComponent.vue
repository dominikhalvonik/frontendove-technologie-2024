<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AComponent"
})
</script>

<template>
  <div>
    {{ this.$route.params.username }}
  </div>
</template>

<style scoped>

</style>