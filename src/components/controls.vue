<template lang="pug">

.controls
  .btn(v-for="button in buttons")
    img.btn-img(
      :src="imageUrl(button.img)"
      :alt="button.text"
      :title="button.text"
    )
</template>

<script setup>

import { ref } from 'vue'

import imageUrl from '../functions/image-url'

const buttons = ref([
  {
    img: 'floppy',
    text: 'Save'
  },
  {
    img: 'software',
    text: 'Load'
  }
])

</script>

<style lang="sass">

.controls
  display: flex
  justify-content: center

  position: fixed
  bottom: 0
  left: 0

  padding: 10px

  border-radius: 0 10px 0 0
  background-color: rgba(50, 100, 130, .7)

  z-index: 10

.btn
  display: flex
  justify-content: center
  padding: 0 10px

.btn-img
  height: 2rem
  margin: 0 auto

</style>