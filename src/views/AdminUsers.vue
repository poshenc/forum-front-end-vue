<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="table-secondary">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <template v-if="user.isAdmin">
            <td>admin</td>
            <td>
              <button
                type="button"
                class="btn btn-link"
                v-if="currentUser.id !== user.id"
                @click.prevent.stop="toggleUserRole(user.id)"
              >
                set as user
              </button>
            </td>
          </template>
          <template v-else>
            <td>user</td>
            <td>
              <button
                type="button"
                class="btn btn-link"
                @click.prevent.stop="toggleUserRole(user.id)"
              >
                set as admin
              </button>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$m2.fUuHMsXivSpeQ.VjS4usKIR2PYldc.UYARUKatpvzi0EJ4lURG",
      isAdmin: true,
      image: null,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$mEE0nYF67SGxe5OEBWhxxuoEbWh45btYI0yIok2ngTaTA2HHtRdbW",
      isAdmin: false,
      image: null,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$MWqCXMkd6skfZbzLFPC0I.MsEoG7xiP2aBo5ObSJVk6v4XvopVDG.",
      isAdmin: false,
      image: null,
      createdAt: "2021-12-16T09:42:57.000Z",
      updatedAt: "2021-12-16T09:42:57.000Z",
    },
  ],
};

const dummyUser = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$m2.fUuHMsXivSpeQ.VjS4usKIR2PYldc.UYARUKatpvzi0EJ4lURG",
    isAdmin: true,
    image: null,
    createdAt: "2021-12-16T09:42:57.000Z",
    updatedAt: "2021-12-16T09:42:57.000Z",
    Comments: [
      {
        id: 3,
        text: "Nihil vitae non ipsam quam cumque doloribus qui necessitatibus.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 5,
        text: "Quisquam molestias culpa nisi optio voluptatem qui.",
        UserId: 1,
        RestaurantId: 5,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 7,
        text: "Saepe earum voluptatem.",
        UserId: 1,
        RestaurantId: 7,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 9,
        text: "Ex ipsam vel.",
        UserId: 1,
        RestaurantId: 9,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 15,
        text: "In natus repudiandae et voluptas.",
        UserId: 1,
        RestaurantId: 15,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 17,
        text: "Quia eligendi totam cumque ratione aliquid omnis doloremque molestiae eum.",
        UserId: 1,
        RestaurantId: 17,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 23,
        text: "Inventore at delectus odio.",
        UserId: 1,
        RestaurantId: 23,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 25,
        text: "Earum omnis quasi ipsam.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 26,
        text: "Illum provident soluta voluptatibus ratione.",
        UserId: 1,
        RestaurantId: 26,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 27,
        text: "Et facilis natus sit cumque accusamus.",
        UserId: 1,
        RestaurantId: 27,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 28,
        text: "Et ex et ipsam.",
        UserId: 1,
        RestaurantId: 28,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 29,
        text: "Numquam sint placeat ullam et sunt nisi qui.",
        UserId: 1,
        RestaurantId: 29,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 33,
        text: "Inventore sunt odit eos dolorem.",
        UserId: 1,
        RestaurantId: 33,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 34,
        text: "Quisquam voluptas occaecati aut nostrum earum ad.",
        UserId: 1,
        RestaurantId: 34,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 35,
        text: "Praesentium aut corporis non aliquam ipsam velit.",
        UserId: 1,
        RestaurantId: 35,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 38,
        text: "Aliquam sed qui voluptatibus tenetur asperiores.",
        UserId: 1,
        RestaurantId: 38,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 41,
        text: "Vitae nihil nemo ea dicta architecto.",
        UserId: 1,
        RestaurantId: 41,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 42,
        text: "Dicta alias quis atque qui nihil repellat autem.",
        UserId: 1,
        RestaurantId: 42,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 43,
        text: "Modi nostrum odit facere omnis impedit.",
        UserId: 1,
        RestaurantId: 43,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 44,
        text: "Eligendi qui maxime facere eligendi nihil unde eaque.",
        UserId: 1,
        RestaurantId: 44,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 46,
        text: "In eos non quia qui cumque in.",
        UserId: 1,
        RestaurantId: 46,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 53,
        text: "Pariatur sed molestias sunt esse assumenda.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 58,
        text: "Natus ad id natus fugit et repellendus tenetur amet.",
        UserId: 1,
        RestaurantId: 8,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 59,
        text: "Necessitatibus autem fugiat voluptas non vitae est mollitia ex est.",
        UserId: 1,
        RestaurantId: 9,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 62,
        text: "Enim ut accusantium.",
        UserId: 1,
        RestaurantId: 12,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 64,
        text: "Temporibus distinctio modi quia et.",
        UserId: 1,
        RestaurantId: 14,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 69,
        text: "Qui expedita quis.",
        UserId: 1,
        RestaurantId: 19,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 70,
        text: "Et vero culpa omnis ut mollitia suscipit velit nihil.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 71,
        text: "Quos ratione reprehenderit sint voluptas saepe mollitia asperiores tempore repellat.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 74,
        text: "Amet corrupti asperiores natus consectetur et sequi inventore.",
        UserId: 1,
        RestaurantId: 24,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 78,
        text: "Id qui voluptatum quasi explicabo facere voluptatem laudantium soluta corrupti.",
        UserId: 1,
        RestaurantId: 28,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 80,
        text: "Earum dolores magnam voluptatem quas laborum dolorem ut.",
        UserId: 1,
        RestaurantId: 30,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 82,
        text: "Labore hic harum id ipsum accusantium voluptas.",
        UserId: 1,
        RestaurantId: 32,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 83,
        text: "Et consequatur qui tenetur.",
        UserId: 1,
        RestaurantId: 33,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 87,
        text: "Et ab dolorum.",
        UserId: 1,
        RestaurantId: 37,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 89,
        text: "Quasi ut qui rem dolores.",
        UserId: 1,
        RestaurantId: 39,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 92,
        text: "Qui qui quod est voluptatem ratione ullam et adipisci.",
        UserId: 1,
        RestaurantId: 42,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 95,
        text: "Laborum quod iste.",
        UserId: 1,
        RestaurantId: 45,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
          id: 45,
          name: "Adell Lang",
          tel: "041-380-0107 x5003",
          address: "83219 Chadd Spur",
          opening_hours: "08:00",
          description:
            "Fuga sed porro et nihil maiores doloribus iusto fugiat.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=6.313812683592301",
          viewCounts: 0,
          createdAt: "2021-12-16T09:42:57.000Z",
          updatedAt: "2021-12-16T09:42:57.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 97,
        text: "Repellendus quia explicabo libero.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 98,
        text: "Nemo est quia suscipit alias harum.",
        UserId: 1,
        RestaurantId: 48,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 106,
        text: "Et sit fugit corporis qui quis et vel.",
        UserId: 1,
        RestaurantId: 6,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 109,
        text: "Quod asperiores saepe.",
        UserId: 1,
        RestaurantId: 9,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 111,
        text: "Nemo qui beatae.",
        UserId: 1,
        RestaurantId: 11,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 113,
        text: "Enim voluptas perferendis dolores hic adipisci recusandae fuga.",
        UserId: 1,
        RestaurantId: 13,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 114,
        text: "Tenetur recusandae dolor necessitatibus quod qui voluptas similique est.",
        UserId: 1,
        RestaurantId: 14,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 117,
        text: "Et enim a ipsa veniam.",
        UserId: 1,
        RestaurantId: 17,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 120,
        text: "Error voluptatibus harum mollitia expedita.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 121,
        text: "Odio molestiae omnis velit aspernatur est facilis necessitatibus.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 124,
        text: "Eius est numquam.",
        UserId: 1,
        RestaurantId: 24,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 125,
        text: "Vitae autem officia perferendis.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 127,
        text: "Repellat incidunt sequi nisi qui.",
        UserId: 1,
        RestaurantId: 27,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 132,
        text: "Accusantium soluta culpa vel dolore voluptatem sunt.",
        UserId: 1,
        RestaurantId: 32,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 134,
        text: "Reiciendis aliquid et minus provident.",
        UserId: 1,
        RestaurantId: 34,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 135,
        text: "Consequatur explicabo est.",
        UserId: 1,
        RestaurantId: 35,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 138,
        text: "Exercitationem accusantium laboriosam.",
        UserId: 1,
        RestaurantId: 38,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 139,
        text: "Dolorem adipisci autem odit sed beatae rerum.",
        UserId: 1,
        RestaurantId: 39,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 140,
        text: "Quia quia eaque autem nobis.",
        UserId: 1,
        RestaurantId: 40,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 142,
        text: "Minima quod fuga sed sed in iure vitae commodi laudantium.",
        UserId: 1,
        RestaurantId: 42,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 143,
        text: "Quisquam omnis inventore voluptatem.",
        UserId: 1,
        RestaurantId: 43,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 145,
        text: "Aliquid aut atque.",
        UserId: 1,
        RestaurantId: 45,
        createdAt: "2021-12-16T09:42:57.000Z",
        updatedAt: "2021-12-16T09:42:57.000Z",
        Restaurant: {
          id: 45,
          name: "Adell Lang",
          tel: "041-380-0107 x5003",
          address: "83219 Chadd Spur",
          opening_hours: "08:00",
          description:
            "Fuga sed porro et nihil maiores doloribus iusto fugiat.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=6.313812683592301",
          viewCounts: 0,
          createdAt: "2021-12-16T09:42:57.000Z",
          updatedAt: "2021-12-16T09:42:57.000Z",
          CategoryId: 3,
        },
      },
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: [],
  },
  isFollowed: false,
};

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: {
        id: -1,
        name: "",
        isAdmin: true,
      },
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.users = dummyData.users;
      this.currentUser = {
        ...this.currentUser,
        id: dummyUser.profile.id,
        name: dummyUser.profile.name,
        isAdmin: dummyUser.profile.isAdmin,
      };
    },
    toggleUserRole(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }

        return user;
      });
    },
  },
};
</script>
