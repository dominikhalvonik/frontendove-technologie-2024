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
<p>
  Toto je obsah komponentu B: {{ username }}
</p>
</template>

<style scoped>

</style>