<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AView"
})
</script>

<template>
  <div>
    Tu je komponent A
    <div style="font-size: 50px">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>