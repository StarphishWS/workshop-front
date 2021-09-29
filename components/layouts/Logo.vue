<template>
  <div>
    <img v-if="dark" width="150" src="/logo/logo-dark.svg" />
    <img v-if="!dark" width="150" src="/logo/logo.svg" />
  </div>
</template>
<script>
export default {
  name: "Logo",
  props: {
    dark: {
      type: Boolean,
      default: true
    }
  }
};
</script>
