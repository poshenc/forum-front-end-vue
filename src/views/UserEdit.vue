<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group my-3">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
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

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 2,
    name: "User ABC",
    email: "abc@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: false,
  },
  isAuthenticated: true,
};

export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    fetchUser(userId) {
      console.log("fetchUser id:", userId);
      const { id, name, image } = dummyUser.currentUser;
      this.user = {
        ...this.user,
        id,
        name,
        image,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    handleSubmit(e) {
      const form = e.target; //<form></form>
      const formData = new FormData(form);
      //準備 API 傳送到後端伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ":" + value);
      }
    },
  },
};
</script>
