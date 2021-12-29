<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favoritedRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div
      v-for="favoritedRestaurant in favoritedRestaurants"
      :key="favoritedRestaurant.id"
      class="card-body"
    >
      <router-link
        :to="{
          name: 'restaurant',
          params: { id: favoritedRestaurant.id },
        }"
      >
        <img
          :src="favoritedRestaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favoritedRestaurants: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
