<template>
  <div class="container py-5">
    <AdminNav />

    <Spinner v-if="isLoading" />
    <table v-else class="table">
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
                @click.prevent.stop="
                  toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
                "
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
                @click.prevent.stop="
                  toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
                "
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

import adminAPI from "./../apis/admin";
import Spinner from "./../components/Spinner.vue";
import { Toast } from "./../utils/helpers";

import { mapState } from "vuex";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const response = await adminAPI.users.get();
        this.users = response.data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
    async toggleUserRole({ userId, isAdmin }) {
      try {
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: (!isAdmin).toString(),
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !isAdmin,
            };
          }

          return user;
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法更新會員角色，請稍後再試",
        });
      }
    },
  },
};
</script>
