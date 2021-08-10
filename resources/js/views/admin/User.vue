<template>
  <div>
    <div class="row g-3 mb-4 align-items-center justify-content-between">
      <div class="col-auto"></div>
      <div class="col-auto">
        <div class="page-utilities">
          <div
            class="
              row
              g-2
              justify-content-start justify-content-md-end
              align-items-center
            "
          >
            <div class="col-auto">
              <div class="table-search-form row gx-1 align-items-center">
                <div class="col-auto">
                  <input
                    type="text"
                    id="search-orders"
                    name="searchorders"
                    class="form-control search-orders"
                    placeholder="Search"
                    v-model="filter.search"
                  />
                </div>
                <div class="col-auto">
                  <button
                    type="button"
                    class="btn app-btn-secondary"
                    @click="search"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <button
                class="btn app-btn-secondary"
                type="button"
                @click="downloadExcel"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-download me-1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                  />
                </svg>
                Download Excel
              </button>
            </div>
            <div class="col-auto">
               <router-link
                class="btn btn-success"
                :to="{name:'users-add'}">Add User <i class="fas fa-plus"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-card app-card-orders-table shadow-sm mb-5">
      <div class="app-card-body">
        <div class="table-responsive" id="users-table">
          <table class="table app-table-hover mb-0 text-left" ref="users">
            <thead>
              <tr>
                <th class="cell">Email</th>
                <th class="cell">Name</th>
                <th class="cell"></th>
              </tr>
            </thead>
            <tbody v-if="users">
              <tr v-for="user in users" :key="user.id" v-if="users.length > 0">
                <td class="cell">
                  <a
                    :href="`mailto:${user.name}`"
                    v-if="typeof user.email == 'string'"
                    >{{ user.email }}</a
                  >
                  <span class="badge bg-success p-2" v-else>Social Login</span>
                </td>
                <td class="cell">
                  {{ user.name }}
                </td>
                <td class="cell">
                  <button
                    type="button"
                    class="btn-sm app-btn-secondary"
                    @click="userdetail(user.id)"
                  >
                    details
                  </button>
                </td>
              </tr>
              <tr v-else class="text-center">
                <td colspan="6">No data available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <nav class="app-pagination" v-if="user.last_page > 1">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="user.current_page == 1 ? 'disabled' : ''">
          <a
            class="page-link"
            href="javascript:void(0)"
            tabindex="-1"
            aria-disabled="true"
            @click="paginate(user.current_page - 1)"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          v-for="page in user.last_page"
          :key="page"
          :class="page == user.current_page ? 'active disabled' : ''"
          @click="paginate(page)"
        >
          <a class="page-link" href="javascript:void(0)">{{ page }}</a>
        </li>
        <li
          class="page-item"
          :class="user.current_page > user.last_page ? 'disabled' : ''"
        >
          <a
            class="page-link"
            href="javascript:void(0)"
            @click="paginate(user.current_page + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
    <user-model :userdetails="userDetails" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { Block,Notify } from "notiflix";
import { Modal } from "bootstrap";
import UserModel from "../../components/admin/UserModel";
import axios from "../../store/axios";
export default {
  data() {
    return {
      filter: {
        search: "",
        page: 1,
      },
      userdetails: {},
    };
  },
  components: {
    UserModel,
  },
  computed: {
    ...mapGetters("Admin", ["user", "userDetails"]),
    ...mapState(["asset"]),
    users() {
      return this.user.data;
    },
  },
  methods: {
    ...mapActions("Admin", ["fetchUser","fetchUserDetails"]),
    downloadExcel() {
      const wb = XLSX.utils.table_to_book(this.$refs.users, {
        sheet: "sheet1",
      });

      XLSX.writeFile(wb, "users." + "xlsx");
    },
    search() {
      this.fetchUser(this.filter);
    },
    paginate(page) {
      this.filter.page = page;
      this.fetchUser(this.filter);
    },
    async userdetail(id) {
        this.fetchUserDetails(id);
    },
  },
  mounted() {
    this.fetchUser();
  },
};
</script>

<style>
</style>