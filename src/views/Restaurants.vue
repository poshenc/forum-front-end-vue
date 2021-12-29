<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";

const dummyData = {
  restaurants: [
    {
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
      isFavorited: true,
      isLiked: true,
    },
    {
      id: 2,
      name: "Fae Medhurst",
      tel: "1-068-260-3488",
      address: "57279 Joshua Villages",
      opening_hours: "08:00",
      description: "sed dolor autem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.398336426270983",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Judge Brown",
      tel: "1-022-199-8105 x540",
      address: "05563 Amara Haven",
      opening_hours: "08:00",
      description: "exercitationem deleniti nihil",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.289745563607305",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Richie Hoppe",
      tel: "970.243.3860",
      address: "89944 Marcelina Ville",
      opening_hours: "08:00",
      description: "Consequatur vero excepturi expedita tempore et cum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.93125945498099",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Darrick Gleason",
      tel: "336.409.0805",
      address: "1684 Danielle Walks",
      opening_hours: "08:00",
      description: "aperiam voluptatem corporis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.888837237711595",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Dr. Carlotta Gibson",
      tel: "(394) 828-1366",
      address: "7412 Tara Creek",
      opening_hours: "08:00",
      description: "Ut iste molestiae non nemo qui et iure. Voluptatem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.23574572992872",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Gilda Pfeffer",
      tel: "997.215.2548 x5795",
      address: "573 Metz Springs",
      opening_hours: "08:00",
      description: "Reiciendis omnis est.\nConsectetur qui aut et natus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.862982888839287",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Kaycee Herman",
      tel: "(976) 972-9505 x97324",
      address: "1950 Jerde Park",
      opening_hours: "08:00",
      description: "Nesciunt dolores consequatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.3671579414758",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Pat Wilkinson",
      tel: "1-214-964-4116 x04129",
      address: "654 Ankunding Glen",
      opening_hours: "08:00",
      description: "Sunt libero culpa sit esse exercitationem quidem r",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.7356677721444",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Stacey Bayer",
      tel: "(184) 738-4937 x3038",
      address: "740 Schuyler Ranch",
      opening_hours: "08:00",
      description: "Deleniti ducimus dolores maiores sunt et ex nemo m",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.655541438604338",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      catergoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>
