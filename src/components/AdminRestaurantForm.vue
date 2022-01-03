<template>
  <form @submit.prevent.stop="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        v-model="restaurant.name"
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        v-model="restaurant.id"
        id="categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        v-model="restaurant.tel"
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        v-model="restaurant.address"
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        v-model="restaurant.openingHours"
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        v-model="restaurant.description"
        id="description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group my-3">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
        alt=""
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary">送出</button>
  </form>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
  ],
};

export default {
  data() {
    return {
      restaurant: {
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      categories: [],
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories;
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.restaurant.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imageURL;
      }
    },
    handleSubmit(e) {
      const form = e.target; //<form></form>
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
      // for (let [name, value] of formData.entries()) {
      //   console.log(name + ":" + value);
      // }
    },
  },
};
</script>
