<template lang="pug">

.copy

</template>

<script setup>

const copyYear = new Date().getFullYear()

</script>

<style lang="sass">

.copy
  position: fixed
  bottom: 0
  right: 0
  font-size: 1.2rem
  font-family: 'Reenie Beanie', monospace
  padding: 10px
  background-color: rgba(255, 255, 255, .7)
  border-radius: 10px 0 0 0

  z-index: 9999

  &::before
    content: "2021 - Estúdio Digital Bocca"

</style>
