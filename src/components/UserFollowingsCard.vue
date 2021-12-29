<template>
  <div class="card">
    <div class="card-header">
      {{ followings.length }} <strong></strong> followings (追蹤者)
    </div>
    <div v-for="following in followings" :key="following.id" class="card-body">
      <router-link :to="{ name: 'user', params: { id: following.id } }">
        <img :src="following.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followings: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
