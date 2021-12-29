<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followers.length }}</strong> followers (追隨者)
    </div>
    <div v-for="follower in followers" :key="follower.id" class="card-body">
      <router-link :to="{ name: 'user', params: { id: follower.id } }">
        <img :src="follower.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
