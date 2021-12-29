<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge bg-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Dillon O'Kon",
    tel: "985.192.0659",
    address: "7080 Sven Trace",
    opening_hours: "08:00",
    description: "magnam non in",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=81.6043306048576",
    viewCounts: 0,
    createdAt: "2021-12-16T09:42:57.000Z",
    updatedAt: "2021-12-16T09:42:57.000Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Sed eveniet fugiat doloribus est facilis reprehenderit earum harum facere.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$MWqCXMkd6skfZbzLFPC0I.MsEoG7xiP2aBo5ObSJVk6v4XvopVDG.",
          isAdmin: false,
          image: null,
          createdAt: "2021-12-16T09:42:57.000Z",
          updatedAt: "2021-12-16T09:42:57.000Z",
        },
      },
      {
        id: 51,
        text: "Et tempore quae sint.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$MWqCXMkd6skfZbzLFPC0I.MsEoG7xiP2aBo5ObSJVk6v4XvopVDG.",
          isAdmin: false,
          image: null,
          createdAt: "2021-12-16T09:42:57.000Z",
          updatedAt: "2021-12-16T09:42:57.000Z",
        },
      },
      {
        id: 101,
        text: "Laudantium perferendis similique debitis aut ducimus fuga.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$MWqCXMkd6skfZbzLFPC0I.MsEoG7xiP2aBo5ObSJVk6v4XvopVDG.",
          isAdmin: false,
          image: null,
          createdAt: "2021-12-16T09:42:57.000Z",
          updatedAt: "2021-12-16T09:42:57.000Z",
        },
      },
    ],
  },
};

export default {
  name: "RestaurantDashbaord",
  data() {
    return {
      restaurant: dummyData.restaurant,
    };
  },
};
</script>
