<script setup>
import { ref } from 'vue'
import { mainStore } from '../store/index'

defineProps({
  msg: String
})
const store = mainStore()
const count = ref(0)

const handleClick = () => {
  count.value++
  const ids = '1,2,3,4,5'
  const newIds = ids.replaceAll(',', ';')
  console.log('newIds', newIds)
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ store.msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="handleClick">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
