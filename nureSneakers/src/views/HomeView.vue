<template>
  <v-carousel hide-delimiters cycle :interval="intervalo" :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        intervalo: 5000,
        items: [
          {
            src: '../src//assets/img/Jordan1.jpg',
          },
          {
            src: '../src//assets/img/yezzy-350.jpg',
          },
          {
            src:  '../src//assets/img/AJ1-hype.jpg',
          },
          {
            src:  '../src//assets/img/Airmax1-atmos.jpg',
          },
          {
            src:  '../src//assets/img/airmax1-og.jpg',
          },
          {
            src:  '../src//assets/img/airmax270.jpg',
          },
        ],
      }
    },
  }
</script>

<style lang="scss">
.v-img__img{
  object-fit: cover;
}
</style>