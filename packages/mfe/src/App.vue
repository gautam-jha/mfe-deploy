<template>
  <h2>Micro FE App</h2>
  <div>{{ JSON.stringify(data) }}</div>
</template>

<script setup>
import { ref } from "vue"
const data = ref({
   config1: null,
   config2: null,
})

const resolveConfig1 = async () => {
    try{
      const config1  = await import(`${window.versionPrefix}/config.js?url`)
      data.value.config1  = config1?.default;
      console.log({config1})
    }catch(e) {
      console.warn(e)
    }
}
resolveConfig1()

const resolveConfig2 = async () => {
    try{
      const config2  = await import('../config.js?url')
      data.value.config2  = config2?.default;
      console.log({config2})
    }catch(e) {
      console.warn('e2',e)
    }
}
resolveConfig2()
</script>
