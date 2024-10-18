<script setup>
import Component1 from "../components/Component1.vue";
import Component2 from "../components/Component2.vue";
import { useState, useFetch } from "#imports";

const runtimeConfig = useRuntimeConfig();
const colors = [
  "#f87171",
  "#fb923c",
  "#fbbf24",
  "#facc15",
  "#a3e635",
  "#4ade80",
  "#34d399",
  "#2dd4bf",
  "#22d3ee",
  "#38bdf8",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#e879f9",
  "#f472b6",
  "#fb7185",
];
const color = useState(
  "color",
  () => colors[Math.floor(Math.random() * colors.length)]
);

if (process.client) {
  // 使用 useFetch 调用 /api/getServerInfo API
  const { data: serverInfo, pending, error } = useFetch("/api/getServerInfo");
  console.log("===============");
  console.log(serverInfo, pending, error);
  console.log("===============");
}
</script>

<template>
  <div class="centered">
    <h1 :style="{ color }">
      {{ runtimeConfig.public.helloText }}
    </h1>
    <Component1 />
    <Component2 />
    <NuxtLink to="/" external> refresh </NuxtLink>
  </div>
</template>

<style scoped>
.centered {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h1 {
  font-size: 32px;
}
@media (min-width: 768px) {
  h1 {
    font-size: 64px;
  }
}
a {
  color: #888;
  text-decoration: none;
  font-size: 18px;
}
a:hover {
  text-decoration: underline;
}
</style>
