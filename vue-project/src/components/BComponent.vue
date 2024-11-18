<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BComponent",
  props: {
    username: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div>
    Toto je obsah komponentu B: {{ username }}
  </div>
</template>

<style scoped>

</style>