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
  <div style="color: blue; font-size: 30px" >
    Toto je obsah komponentu B: {{ username }}
  </div>
</template>

<style scoped>

</style>