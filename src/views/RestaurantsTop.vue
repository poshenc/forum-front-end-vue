<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge bg-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary me-2"
              >Show</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger me-2"
            >
              移除最愛
            </button>
            <button v-else type="button" class="btn btn-primary">
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NavTabs from "../components/NavTabs.vue";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Adaline Hoppe",
      tel: "(169) 684-7703 x3573",
      address: "337 Sofia Drives",
      opening_hours: "08:00",
      description: "Quasi et adipisci aut qui et et maxime et ea.\nSusc",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.1216839704533",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Paige Grady",
      tel: "534.252.4849",
      address: "1037 Vallie Orchard",
      opening_hours: "08:00",
      description: "Ut saepe aut. Sed et et quia ea quia suscipit sed ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.31739676651999",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Dusty Boyer",
      tel: "(583) 764-6313",
      address: "039 Reilly Coves",
      opening_hours: "08:00",
      description: "necessitatibus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.12342476630111",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Leann Pollich",
      tel: "(847) 579-0098 x201",
      address: "4818 Watsica Street",
      opening_hours: "08:00",
      description: "Aliquam nulla voluptatem rerum ut doloremque. Sit ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.050303011224",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Mrs. Willy Rosenbaum",
      tel: "1-735-048-0872 x491",
      address: "748 Dustin Fork",
      opening_hours: "08:00",
      description: "Repellendus magnam quo ipsum. Fugit qui qui nobis ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.159181886762697",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Adell Lang",
      tel: "041-380-0107 x5003",
      address: "83219 Chadd Spur",
      opening_hours: "08:00",
      description: "Fuga sed porro et nihil maiores doloribus iusto fu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.313812683592301",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Adelle Bernier",
      tel: "1-925-744-3846 x1892",
      address: "768 Moen Greens",
      opening_hours: "08:00",
      description: "Omnis esse sed tenetur nihil.\nNon et nisi nihil qu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.28381603775439",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Angela Heaney",
      tel: "251.191.4499",
      address: "383 Kiel Island",
      opening_hours: "08:00",
      description: "Nihil non et omnis harum. Consequatur debitis enim",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.00674782509165",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Josephine Huel",
      tel: "847-605-6110 x3326",
      address: "06791 Quigley Loop",
      opening_hours: "08:00",
      description: "omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.5131195149937",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Joanny McDermott",
      tel: "1-466-365-4640",
      address: "441 Mosciski Road",
      opening_hours: "08:00",
      description: "et eligendi eligendi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.23565094245002",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: dummyData.restaurants,
    };
  },
};
</script>