<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.commentsLength }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favoritedRestaurantsLength }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followingsLength }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.followersLength }}</strong> followers (追隨者)
            </li>
          </ul>
          <p></p>
          <form
            action="/following/3?_method=DELETE"
            method="POST"
            style="display: contents"
          >
            <template v-if="isCurrentUser">
              <button class="btn btn-primary">Edit</button>
            </template>
            <template v-else>
              <button
                v-if="isFollowed"
                type="submit"
                class="btn btn-danger"
                @click.prevent.stop="deleteFollowing"
              >
                取消追蹤
              </button>
              <button
                v-else
                type="submit"
                class="btn btn-primary"
                @click.prevent.stop="addFollowing"
              >
                追蹤
              </button>
            </template>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed,
    };
  },
  methods: {
    addFollowing() {
      this.isFollowed = true;
    },
    deleteFollowing() {
      this.isFollowed = false;
    },
  },
};
</script>
