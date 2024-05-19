<template>
  <h2>Micro FE App</h2>
  <div>config1:{{ data.config1?.version }}</div>
  <div>config2: {{ getConfigVersion() }}</div>
  <div>time: {{ seconds }}</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const data = ref({
  config1: null,
  config2: null,
});

const seconds = ref(0);

const getTime = () => {
  const today = new Date();
  seconds.value = today.getTime();
};

onMounted(() => {
  setInterval(getTime, 1000);
});

function getConfigVersion() {
  return data.value.config2?.version;
}

const resolveConfig1 = async () => {
  try {
    const config1 = await import(`${window.versionPrefix}/config.js?url`);
    data.value.config1 = config1?.default;
    console.log({ config1 });
  } catch (e) {
    console.warn(e);
  }
};
resolveConfig1();

const resolveConfig2 = async () => {
  try {
    const config2 = await import("../../../config.js?url");
    data.value.config2 = config2?.default;
    console.log({ config2 });
  } catch (e) {
    console.warn("e2", e);
  }
};
resolveConfig2();
</script>
