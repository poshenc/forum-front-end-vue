<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UsersTopCard v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import UsersTopCard from "../components/UsersTopCard.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$m2.fUuHMsXivSpeQ.VjS4usKIR2PYldc.UYARUKatpvzi0EJ4lURG",
      isAdmin: true,
      image:
        "https://bnextmedia.s3.hicloud.net.tw/image/album/2017-04/img-1492147280-80696@400.jpg",
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      Followers: [],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$mEE0nYF67SGxe5OEBWhxxuoEbWh45btYI0yIok2ngTaTA2HHtRdbW",
      isAdmin: false,
      image:
        "https://bnextmedia.s3.hicloud.net.tw/image/album/2017-04/img-1492147280-80696@400.jpg",
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$MWqCXMkd6skfZbzLFPC0I.MsEoG7xiP2aBo5ObSJVk6v4XvopVDG.",
      isAdmin: false,
      image:
        "https://bnextmedia.s3.hicloud.net.tw/image/album/2017-04/img-1492147280-80696@400.jpg",
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  name: "UsersTop",
  components: {
    NavTabs,
    UsersTopCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsersTop();
  },
  methods: {
    fetchUsersTop() {
      this.users = dummyData.users;
    },
  },
};
</script>