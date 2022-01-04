<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            type="button"
            class="btn btn-link"
            @click.prevent.stop="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
    },
    {
      id: 4,
      name: "Richie Hoppe",
      tel: "970.243.3860",
      address: "89944 Marcelina Ville",
      opening_hours: "08:00",
      description:
        "Consequatur vero excepturi expedita tempore et cumque impedit blanditiis omnis.\nEst quod adipisci aut delectus quidem aut.",
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
    },
    {
      id: 6,
      name: "Dr. Carlotta Gibson",
      tel: "(394) 828-1366",
      address: "7412 Tara Creek",
      opening_hours: "08:00",
      description:
        "Ut iste molestiae non nemo qui et iure. Voluptatem veniam et nihil est reprehenderit qui impedit sunt veritatis. Enim odit odio consectetur eos maiores veritatis. Tempora minima corrupti.\n \rAmet commodi placeat molestias velit nulla error vel cupiditate. Molestiae qui ut sit quos voluptas consequatur consequuntur. Eligendi qui iusto.\n \rInventore voluptas accusamus voluptatem voluptas autem unde ex optio. Cum est ullam rerum sunt nulla aspernatur ut voluptatibus expedita. Vitae eum eius ut magnam voluptates. Provident quas dolor. Soluta velit saepe eligendi hic.",
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
    },
    {
      id: 7,
      name: "Gilda Pfeffer",
      tel: "997.215.2548 x5795",
      address: "573 Metz Springs",
      opening_hours: "08:00",
      description:
        "Reiciendis omnis est.\nConsectetur qui aut et natus aliquam sunt.\nIure veritatis ullam minima facilis eius quod enim necessitatibus.",
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
    },
    {
      id: 9,
      name: "Pat Wilkinson",
      tel: "1-214-964-4116 x04129",
      address: "654 Ankunding Glen",
      opening_hours: "08:00",
      description:
        "Sunt libero culpa sit esse exercitationem quidem repellendus. Error et rerum maiores dolor. Assumenda debitis molestiae.",
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
    },
    {
      id: 10,
      name: "Stacey Bayer",
      tel: "(184) 738-4937 x3038",
      address: "740 Schuyler Ranch",
      opening_hours: "08:00",
      description: "Deleniti ducimus dolores maiores sunt et ex nemo maiores.",
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
    },
    {
      id: 11,
      name: "Morris Langworth",
      tel: "325-270-6366",
      address: "39332 Magnus Expressway",
      opening_hours: "08:00",
      description:
        "Laborum culpa libero id unde dicta officiis recusandae ut. Voluptas minus eum adipisci magnam. Voluptatem adipisci ut libero vel qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.06805312921688",
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
    },
    {
      id: 12,
      name: "Britney Hane PhD",
      tel: "551.916.8298",
      address: "2527 Adeline Club",
      opening_hours: "08:00",
      description:
        "Eos vel fugit deleniti aut. Vel voluptates repudiandae atque culpa. Rerum est nulla perferendis et aperiam nihil porro ea. Quo consequatur debitis consequatur in qui reprehenderit. Omnis voluptatem sed et quasi et inventore non doloremque.\n \rQuas consequuntur alias doloribus sint nulla sit deleniti cumque non. Perspiciatis nam voluptatem quod aut laudantium delectus consequatur voluptate aspernatur. Quis quo quia sunt ducimus.\n \rSunt sed culpa nihil aut sint. Est deserunt quidem quidem omnis quis aliquid. Atque illum dicta voluptas dolorem fugiat officiis rerum iusto. Qui rerum eligendi ipsa modi dignissimos quisquam. Natus quam debitis veritatis magni ut autem cumque officia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.73351192418395",
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
    },
    {
      id: 13,
      name: "Laverne Ankunding DVM",
      tel: "(856) 311-8933 x350",
      address: "79782 Taurean Radial",
      opening_hours: "08:00",
      description:
        "Molestiae nihil iste. Reprehenderit ratione repellendus delectus. Deserunt assumenda ex quam.\n \rReprehenderit odio non cupiditate in laborum in. Qui et laudantium et totam est praesentium fuga. Quia delectus quisquam laudantium illum quis et illo sed consequuntur. Provident impedit perferendis ipsa veniam consectetur. Assumenda nam sint aut sed aliquam modi. Ut maiores dolor quaerat temporibus doloribus dolorem sit.\n \rNeque hic est ducimus commodi. Vel at dolores ut aut architecto quia eos. Debitis odit laboriosam officia ullam. Illum non eius eos eum facilis soluta. Cum ex omnis reprehenderit consequuntur rerum. Ut adipisci consequatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.000918372138461",
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
    },
    {
      id: 14,
      name: "Garret Ortiz",
      tel: "1-953-717-7344 x328",
      address: "74843 Dibbert Pass",
      opening_hours: "08:00",
      description: "Ut eos culpa ullam a.\nFacere et reiciendis ab.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.12847567897483",
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
    },
    {
      id: 15,
      name: "Alford Windler",
      tel: "(551) 787-7344 x367",
      address: "44290 White Street",
      opening_hours: "08:00",
      description:
        "Qui ad quis odit amet et voluptas. Aut earum ab culpa explicabo aut illum libero laborum. Voluptatum quas aspernatur. Quibusdam voluptas minus dicta iure aut et non itaque sint. Et cumque quasi unde ad neque ipsum sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.61308242053472",
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
    },
    {
      id: 16,
      name: "Shakira Satterfield V",
      tel: "1-181-828-9247",
      address: "89208 Lenna Summit",
      opening_hours: "08:00",
      description: "molestias praesentium placeat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.13252985631203",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
    },
    {
      id: 17,
      name: "Carli Gaylord",
      tel: "1-964-516-8047 x566",
      address: "4481 Deckow Knoll",
      opening_hours: "08:00",
      description: "fugit doloremque perferendis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.33870721939876",
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
    },
    {
      id: 18,
      name: "Jacky Howe",
      tel: "499-995-2652",
      address: "9731 Jeramy Forge",
      opening_hours: "08:00",
      description: "rerum et possimus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.580836776544412",
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
    },
    {
      id: 19,
      name: "Clement Runte",
      tel: "1-693-569-8606 x90233",
      address: "8156 Ari Neck",
      opening_hours: "08:00",
      description:
        "Perferendis error quidem dolorem.\nTotam alias aut.\nBeatae veritatis perspiciatis repellendus.\nPerspiciatis voluptatum corporis dolorem consequatur ad architecto.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.868028722054696",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
    },
    {
      id: 20,
      name: "Verdie Schulist",
      tel: "(628) 949-8846",
      address: "8916 Treutel Ramp",
      opening_hours: "08:00",
      description:
        "Placeat aut necessitatibus sit magnam dicta rerum distinctio ullam ut. Ex officia velit rerum rem id perspiciatis sed et. Eum quasi aliquam quia eius perspiciatis et sit. Cumque beatae repellat enim nesciunt nulla et enim.\n \rSit fugit repellendus totam velit nemo minus ipsum odio. Quis dolores quisquam unde rerum. Id officiis praesentium nobis. Quis amet quia earum corrupti ducimus. Soluta pariatur omnis voluptatem vero impedit ab ut.\n \rReiciendis dolorem voluptas ad quam at eius laudantium suscipit. Culpa odio nihil dolores. Repudiandae iusto reprehenderit deleniti perspiciatis nemo. Laborum voluptatum esse ut accusamus occaecati dolor. Mollitia illum non eos error dolor consequatur numquam mollitia. Nesciunt iure officiis saepe praesentium.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.35300120327114",
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
    },
    {
      id: 21,
      name: "Alta Mueller",
      tel: "(594) 727-8601 x97406",
      address: "30414 Daniel Tunnel",
      opening_hours: "08:00",
      description:
        "Nihil vero et perferendis sed atque consequatur beatae nihil eius. Eaque iusto quo explicabo a voluptas distinctio animi ex. Officia molestiae sed ab. Laborum omnis cumque illum nisi eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.057863229585244",
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
    },
    {
      id: 22,
      name: "Miss Deshaun Cronin",
      tel: "1-699-898-5795 x2997",
      address: "8234 Morissette Mountain",
      opening_hours: "08:00",
      description:
        "Dolore et odio perferendis voluptas consequuntur non ea et. Iure voluptas nobis. Velit accusantium in libero voluptates iusto quod nihil qui et. Rerum velit expedita et nobis cupiditate eligendi impedit cumque. Incidunt quisquam et.\n \rIpsa nobis esse. Voluptatem possimus sunt nam optio necessitatibus maiores aut laudantium. Ipsa eos ut a sed velit. Et quos expedita quisquam quod. Quis modi earum et ad voluptate.\n \rEt omnis provident qui id molestiae ut et eos. Minus iusto voluptas rerum quibusdam eos facere consequatur incidunt commodi. Ut maxime omnis dicta ab atque ea voluptatem non sint. Sit illo quasi molestias a enim facere in. Expedita rerum quia sit tenetur ipsam dolorem sit nisi vitae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.431180941788117",
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
    },
    {
      id: 23,
      name: "Hadley Labadie",
      tel: "(793) 602-1672",
      address: "1728 Gislason Stravenue",
      opening_hours: "08:00",
      description:
        "Dolor quisquam labore. Qui quos corporis nihil laudantium praesentium id voluptatem numquam. Explicabo aut dolor sapiente veniam esse fugiat. Officiis eum est dolor ab reiciendis et et omnis. Quia incidunt harum facere molestiae et. Omnis nulla expedita temporibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=73.12861842738694",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
    },
    {
      id: 24,
      name: "Emilie Durgan",
      tel: "433-515-3141",
      address: "899 Feest Via",
      opening_hours: "08:00",
      description: "deleniti",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.81770438332619",
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
    },
    {
      id: 25,
      name: "Ivah Pollich",
      tel: "(006) 529-8418",
      address: "68611 Gibson Mall",
      opening_hours: "08:00",
      description:
        "Eius culpa velit voluptatem rerum. Nesciunt error repellat aperiam amet quo sit velit. Quidem ex accusantium distinctio ea amet totam omnis. Asperiores accusamus dolores voluptas. Dolor qui et. Ullam beatae at sit maiores voluptas dolorem dolor.\n \rNulla numquam minus non est fugiat autem ut. Qui ut accusantium tempore. Molestias soluta non.\n \rQui fugit saepe ad quia aut blanditiis natus ex. Architecto consequatur distinctio culpa iusto velit enim numquam. Provident sequi quidem inventore. Quo explicabo debitis architecto harum quod ut cupiditate et distinctio. Consequuntur at nesciunt inventore repellendus odio aut voluptatem tempore eum. Molestiae iusto nobis eaque explicabo quibusdam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.13812605740183",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
    },
    {
      id: 26,
      name: "Armand Harris II",
      tel: "728-651-8502 x2115",
      address: "825 Zakary Ways",
      opening_hours: "08:00",
      description:
        "Aliquam dolores tempore nemo laudantium quae adipisci et nulla. Voluptatum similique sed excepturi nam est. Necessitatibus illo dignissimos ut alias ut laborum animi et. Quis similique expedita.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=73.91354173056153",
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
    },
    {
      id: 27,
      name: "Dolly Durgan",
      tel: "124.071.0909",
      address: "45564 Mayert Haven",
      opening_hours: "08:00",
      description: "officiis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.92960848513727",
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
    },
    {
      id: 28,
      name: "Myrtie Pagac",
      tel: "344-698-2640",
      address: "8771 Leonora Canyon",
      opening_hours: "08:00",
      description:
        "Voluptatem cumque voluptas ut esse maxime quis ex soluta sequi.\nIusto quis voluptas temporibus necessitatibus explicabo rem quia repellendus voluptates.\nCorrupti iste ea soluta qui voluptates et iusto.\nImpedit sit nobis quia et similique atque inventore quos suscipit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.52040425686717",
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
    },
    {
      id: 29,
      name: "Lawson Weissnat",
      tel: "625.185.9245 x966",
      address: "055 Joan Inlet",
      opening_hours: "08:00",
      description:
        "Nostrum est repellat odio omnis. Impedit praesentium illo ullam qui qui facilis eum minima impedit. Maxime eveniet perferendis veniam saepe id. Consequatur saepe assumenda quod et in.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.834738544998146",
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
    },
    {
      id: 30,
      name: "Sydney Lakin",
      tel: "157.723.6720 x0058",
      address: "7335 Kamren Dam",
      opening_hours: "08:00",
      description: "Odio molestiae minima nemo est consequatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.73845926713128",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
    },
    {
      id: 31,
      name: "Odessa Hoeger",
      tel: "1-108-593-6287 x55730",
      address: "383 Loren Wells",
      opening_hours: "08:00",
      description:
        "Velit est consequatur.\nAmet vero sed velit ducimus vero.\nMagni nihil dolorem consectetur minus deserunt.\nUt neque voluptas ea recusandae aspernatur blanditiis blanditiis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.038823438987764",
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
    },
    {
      id: 32,
      name: "Carter Rau",
      tel: "932-610-5909",
      address: "5818 Rempel Harbor",
      opening_hours: "08:00",
      description: "eum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.61785426070245",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
    },
    {
      id: 33,
      name: "Charles Kovacek",
      tel: "913-193-5825 x976",
      address: "82476 Salvatore Junctions",
      opening_hours: "08:00",
      description: "est maiores quae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.753336041829776",
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
    },
    {
      id: 34,
      name: "Caden Ruecker",
      tel: "296.248.4027 x45527",
      address: "02666 Jamaal Parkway",
      opening_hours: "08:00",
      description: "sapiente quia aperiam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.659576227245296",
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
    },
    {
      id: 35,
      name: "Davonte Crooks",
      tel: "(504) 125-7703",
      address: "44922 Alverta Crest",
      opening_hours: "08:00",
      description:
        "Et laboriosam veritatis vero provident consequatur quia quas. Laudantium aut qui. Et ducimus at rem deleniti veritatis. Esse ut quia qui saepe quidem ipsam officiis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.748575947600148",
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
    },
    {
      id: 36,
      name: "Salma Lubowitz",
      tel: "928-024-3245",
      address: "523 Mathilde Islands",
      opening_hours: "08:00",
      description: "porro",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.04076003889993",
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
    },
    {
      id: 37,
      name: "Sam Blanda",
      tel: "(686) 637-0291",
      address: "743 Hessel Harbors",
      opening_hours: "08:00",
      description:
        "Repellendus ullam expedita laboriosam id dolorem labore quae. Qui consequatur vitae rem aspernatur consequuntur aut consequatur et. Ut id qui temporibus. Ipsum eum deleniti qui natus cupiditate exercitationem.\n \rQuibusdam dolor sint officia dicta consequatur vitae optio quidem saepe. Repellendus id molestiae eum et adipisci maxime. Aut est dolor esse harum qui sit omnis. Et atque eius consequatur mollitia iste qui laborum odio. Nihil nulla at. Vitae est consequuntur hic.\n \rCorrupti maxime sequi perferendis ut. Odio rem sed aut repellendus pariatur et quos rem aperiam. Saepe sint quia mollitia neque velit quia. Expedita minima asperiores aspernatur dolores qui officiis et ratione dolore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.35430126312933",
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
    },
    {
      id: 38,
      name: "Adolfo Larson",
      tel: "010-942-2420 x350",
      address: "55038 Andreanne Hill",
      opening_hours: "08:00",
      description:
        "Beatae ut porro est.\nSed dolores nesciunt laboriosam alias quia nihil molestiae.\nVitae et iusto voluptate dolor.\nExplicabo eius iusto mollitia consequatur et at inventore et.\nDeserunt consequatur tempore est voluptas aperiam consequatur est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.58560418028446",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
    },
    {
      id: 39,
      name: "Felix Lockman",
      tel: "418.619.5892 x28902",
      address: "17131 Daron Underpass",
      opening_hours: "08:00",
      description:
        "Aut a suscipit aliquam iste rerum dolorem. Voluptas rerum veniam iusto eum distinctio unde doloribus quas autem. Incidunt mollitia nobis illo veniam quasi dolorem nemo aspernatur in.\n \rNatus non eaque ab. Qui accusamus quod inventore tenetur ipsa nihil fugit illum iste. Sed laborum at qui tenetur aliquam impedit.\n \rImpedit dolores nemo. Provident tempore provident molestiae quia aliquam illo pariatur consequatur necessitatibus. Voluptatem asperiores corporis nobis consequatur neque. Quia modi ratione harum enim nihil excepturi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.55983037201713",
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
    },
    {
      id: 40,
      name: "Rosemarie Bosco",
      tel: "155-769-3524",
      address: "7926 Hegmann Well",
      opening_hours: "08:00",
      description:
        "Qui voluptas aliquid quia aspernatur. Quod placeat consequatur quia. Architecto in nulla eos maxime. Aut rem dolorum aut omnis excepturi veniam. Quidem ad quia est sit quas esse quia voluptas deserunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.46576576480777",
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
    },
    {
      id: 43,
      name: "Angela Heaney",
      tel: "251.191.4499",
      address: "383 Kiel Island",
      opening_hours: "08:00",
      description:
        "Nihil non et omnis harum. Consequatur debitis enim deserunt qui nostrum aspernatur recusandae voluptas dolore. Doloribus ad libero.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.00674782509165",
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
    },
    {
      id: 44,
      name: "Adelle Bernier",
      tel: "1-925-744-3846 x1892",
      address: "768 Moen Greens",
      opening_hours: "08:00",
      description:
        "Omnis esse sed tenetur nihil.\nNon et nisi nihil quidem ut labore laboriosam harum.\nExpedita reprehenderit odio esse eum assumenda ea earum nihil debitis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.28381603775439",
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
    },
    {
      id: 45,
      name: "Adell Lang",
      tel: "041-380-0107 x5003",
      address: "83219 Chadd Spur",
      opening_hours: "08:00",
      description: "Fuga sed porro et nihil maiores doloribus iusto fugiat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.313812683592301",
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
    },
    {
      id: 46,
      name: "Mrs. Willy Rosenbaum",
      tel: "1-735-048-0872 x491",
      address: "748 Dustin Fork",
      opening_hours: "08:00",
      description:
        "Repellendus magnam quo ipsum. Fugit qui qui nobis voluptatum sed est provident. Cum eos perspiciatis enim earum. Facere ut in iste. Libero est porro.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.159181886762697",
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
    },
    {
      id: 47,
      name: "Leann Pollich",
      tel: "(847) 579-0098 x201",
      address: "4818 Watsica Street",
      opening_hours: "08:00",
      description:
        "Aliquam nulla voluptatem rerum ut doloremque. Sit et fuga. Neque beatae esse officia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.050303011224",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
    },
    {
      id: 49,
      name: "Paige Grady",
      tel: "534.252.4849",
      address: "1037 Vallie Orchard",
      opening_hours: "08:00",
      description:
        "Ut saepe aut. Sed et et quia ea quia suscipit sed reprehenderit tempore. Est dicta optio commodi omnis tenetur voluptates similique qui. Quaerat eligendi rerum alias possimus quo. Alias voluptas esse id est est eius.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.31739676651999",
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
    },
    {
      id: 50,
      name: "Adaline Hoppe",
      tel: "(169) 684-7703 x3573",
      address: "337 Sofia Drives",
      opening_hours: "08:00",
      description:
        "Quasi et adipisci aut qui et et maxime et ea.\nSuscipit rem nihil molestiae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.1216839704533",
      viewCounts: 0,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>