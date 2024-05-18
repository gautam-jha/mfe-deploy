<template>
  <h2>Micro FE App</h2>
</template>

<script setup>
try{
  const data1  = await import('/config.js?url')
  console.log({data1})
}catch(e) {
  console.warn(e)
}

try{
  const data1  = await import('./config.js?url')
  console.log({data2})
}catch(e) {
  console.warn('e2',e)
}
</script>