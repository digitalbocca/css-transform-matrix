<template lang="pug">

.home-container
  .info-box(v-if="Object.keys(hovered).length")
    .info-box-title
      | {{ hovered.text }}
    .info-box-content
      .info-box-resource(v-for="resource in hovered.resources")
        img.miniaturized-resource(
          :src="imageUrl(resource.img)"
        )
        | {{ resource.amount }}
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
  .fields(@mouseleave="cleanHovered()")
    .row-field(v-for="row in fields")
      .col-field(v-for="col in row")
        .field-container(
          @mouseover="hoverField(col)"
          @click="selectField(col)"
        )

</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const fields = computed(() => store.getters.fields)
const hovered = computed(() => store.getters.hovered)
const selected = computed(() => store.getters.selected)

const hoverField = field => store.dispatch('hoverField', field)
const selectField = field => store.dispatch('selectField', field)
const cleanHovered = () => store.dispatch('cleanHovered')

const imageUrl = img => {
  return `/img/${img}.png`
}

</script>

<style lang="sass">


.home-container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  min-height: 100vh

.fields
  background-color: #eee
  transform: translate(0, 0) rotateX(60deg) rotateY(0) rotateZ(45deg)

.row-field
  width: 100%
  display: flex
  transform-style: preserve-3d

.col-field
  width: 76px
  height: 76px
  background-color: #ccc
  border: 2px solid #999
  transform-style: preserve-3d

.field-container
  position: relative
  width: 100%
  height: 100%
  transform-style: preserve-3d

  &:hover
    background-color: #ddd

.info-box
  position: fixed
  top: 0
  left: 0
  width: 300px
  height: 150px
  border-radius: 0 0 10px 0
  
  background-color: rgba(0, 0, 0, .7)

.info-box-title
  color: #fff
  font-size: 1.5em
  text-align: center
  padding: 10px
  font-family: 'Yuji Boku', serif


.info-box-content
  display: flex
  flex-wrap: wrap

.info-box-resource
  margin: 5px
  padding: 5px
  border: 1px solid #fff
  border-radius: 9999px
  min-width: 20px
  min-height: 20px
  background-color: #fff
  text-align: center
  font-family: sans-serif
  font-size: 1.2rem
  font-weight: bold

.miniaturized-resource
  width: 20px
  height: 20px
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  border-radius: 50%
  margin-right: 5px

.selected-box
  position: fixed
  top: 0
  right: 0
  width: 300px
  // height: 150px
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