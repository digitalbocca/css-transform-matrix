<template lang="pug">

.selected-box(v-if="Object.keys(selected).length")
  .selected-box-image
    img.selected-box-image(:src="imageUrl(selected.img)")
  .selected-box-title
    | {{ selected.text }}
  .selected-box-content
    .selected-box-resource(v-for="resource in selected.resources")
      img.miniaturized-resource(
        :src="imageUrl(resource.img)"
      )
      | {{ resource.amount }}

</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

import imageUrl from '../functions/image-url'

const store = useStore()

const selected = computed(() => store.getters.selected)

</script>

<style lang="sass">

.selected-box
  position: fixed
  top: 0
  right: 0
  width: 300px
  border-radius: 0 0 0 10px

  background-color: rgba(50, 100, 50, .7)

  z-index: 10

.selected-box-image
  width: 50%
  margin: 0 auto
  text-align: center

.selected-box-title
  color: #fff
  font-size: 1.5em
  text-align: center
  padding: 10px
  font-family: 'Yuji Boku', serif

.selected-box-content
  display: flex
  flex-wrap: wrap

.selected-box-resource
  margin: 5px
  padding: 5px
  border: 1px solid #fff
  border-radius: 9999px
  min-width: 20px

  background-color: #fff

</style>