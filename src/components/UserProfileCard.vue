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
              <router-link
                class="btn btn-primary"
                :to="{ name: 'user-edit', params: { id: user.id } }"
              >
                Edit
              </router-link>
            </template>
            <template v-else>
              <button
                v-if="isFollowed"
                type="submit"
                class="btn btn-danger"
                @click.prevent.stop="deleteFollowing(user.id)"
              >
                取消追蹤
              </button>
              <button
                v-else
                type="submit"
                class="btn btn-primary"
                @click.prevent.stop="addFollowing(user.id)"
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
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

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
  watch: {
    initialIsFollowed(newValue) {
      this.isFollowed = newValue;
    },
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing(userId);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.isFollowed = true;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "暫時無法追蹤，請稍後再試！",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing(userId);

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.isFollowed = false;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "暫時無法取消追蹤，請稍後再試！",
        });
      }
    },
  }
};
</script>
