<template>
  <h2>Micro FE App</h2>
  {{ JSON.stringify(data) }}
</template>

<script setup>
import { ref } from "vue"
const data = ref({
   config1: null,
   config2: null,
})

const resolveConfig = async () => {
    try{
      const config1  = await import(`${window.versionPrefix}/config.js?url`)
      data.value.config1  = config1;
      console.log({config1})
    }catch(e) {
      console.warn(e)
    }

    try{
      const config2  = await import('../config.js?url')
      console.log({config2})
      data.value.config2  = config2;
    }catch(e) {
      console.warn('e2',e)
    }
}
resolveConfig()
</script>
