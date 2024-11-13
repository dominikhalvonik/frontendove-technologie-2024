<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BComponent"
})
</script>

<template>
<p>
  Komponent B: {{ this.$route.params.username }}
</p>
</template>

<style scoped>

</style>