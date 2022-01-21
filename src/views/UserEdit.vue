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

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "UserEdit",
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
        email: "",
      },
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser(newValue) {
      if (newValue.id === -1) return;
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },
  created() {
    if (this.currentUser.id === -1) return;
    const { id } = this.$route.params;
    this.setUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    if (this.currentUser.id === -1) return;
    const { id } = to.params;
    this.setUser(id);
    next();
  },
  methods: {
    setUser(userId) {
      const { id, name, image, email } = this.currentUser;

      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: "not-found" });
        return;
      }

      this.user = {
        ...this.user,
        id,
        name,
        image,
        email,
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
    async handleSubmit(e) {
      try {
        if (!this.user.name) {
          Toast.fire({
            icon: "error",
            title: "漏填姓名！",
          });
          return;
        }
        const form = e.target; //<form></form>
        const formData = new FormData(form);
        // for (let [name, value] of formData.entries()) {
        //   console.log(name + ":" + value);
        // }

        this.isProcessing = true;
        const { data } = await usersAPI.update({
          userId: this.user.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "user", params: { id: this.user.id } });
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "暫時無法更新使用者資料，請稍後再試！",
        });
      }
    },
  },
};
</script>
