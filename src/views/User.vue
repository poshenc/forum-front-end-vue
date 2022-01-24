<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />
    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followings="followings" />
        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="followers" />
      </div>

      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :comments="comments" />
        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard
          :favoritedRestaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>


<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";

import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

import { mapState } from "vuex";

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: 0,
        name: "",
        email: "",
        image: "",
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followingsLength: 0,
        followersLength: 0,
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId });

        const { profile, isFollowed } = data;
        const {
          id,
          name,
          image,
          email,
          Comments,
          FavoritedRestaurants,
          Followings,
          Followers,
        } = profile;

        const commentSet = new Set();
        this.comments = Comments.filter(
          (comment) =>
            comment.Restaurant &&
            !commentSet.has(comment.Restaurant.id) &&
            commentSet.add(comment.Restaurant.id)
        );

        this.user = {
          id,
          name,
          image,
          email,
          commentsLength: this.comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
          followingsLength: Followings.length,
          followersLength: Followers.length,
        };
        this.isFollowed = isFollowed;
        this.followings = Followings;
        this.followers = Followers;
        this.favoritedRestaurants = FavoritedRestaurants;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>
