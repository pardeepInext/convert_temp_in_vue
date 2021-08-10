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
              <form class="table-search-form row gx-1 align-items-center">
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
              </form>
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
          </div>
        </div>
      </div>
    </div>
    <div class="app-card app-card-orders-table shadow-sm mb-5">
      <div class="app-card-body">
        <div class="table-responsive" id="newslatter-table">
          <table class="table app-table-hover mb-0 text-left" ref="newslatter">
            <thead>
              <tr>
                <th class="cell">Email</th>
                <th class="cell">Subscribe</th>
                <th class="cell"></th>
              </tr>
            </thead>
            <tbody v-if="newslatters">
              <tr
                v-for="newslatter in newslatters"
                :key="newslatter.id"
                v-if="newslatters.length > 0"
              >
                <td class="cell">
                  <a :href="`mailto:${newslatter.email}`">{{
                    newslatter.email
                  }}</a>
                </td>
                <td class="cell">
                  <span
                    class="badge"
                    :class="
                      newslatter.is_subscribe ? 'bg-success' : 'bg-warning'
                    "
                    >{{
                      newslatter.is_subscribe ? "Subsribed" : "Unsubsribe"
                    }}</span
                  >
                </td>
                <td class="cell">
                  <button type="button" class="btn-sm app-btn-secondary">
                    check
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
    <nav class="app-pagination" v-if="newslatter.last_page > 1">
      <ul class="pagination justify-content-center">
        <li
          class="page-item"
          :class="newslatter.current_page == 1 ? 'disabled' : ''"
        >
          <a
            class="page-link"
            href="javascript:void(0)"
            tabindex="-1"
            aria-disabled="true"
            @click="paginate(newslatter.current_page - 1)"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          v-for="page in newslatter.last_page"
          :key="page"
          :class="page == newslatter.current_page ? 'active disabled' : ''"
          @click="paginate(page)"
        >
          <a class="page-link" href="javascript:void(0)">{{ page }}</a>
        </li>
        <li
          class="page-item"
          :class="
            newslatter.current_page > newslatter.last_page ? 'disabled' : ''
          "
        >
          <a
            class="page-link"
            href="javascript:void(0)"
            @click="paginate(newslatter.current_page + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import XLSX from "xlsx";
export default {
  data() {
    return {
      filter: {
        search: "",
        page: 1,
      },
    };
  },
  computed: {
    ...mapGetters("Admin", ["newslatter"]),
    newslatters() {
      return this.newslatter.data;
    },
    filter: {
      get() {
        return this.filter;
      },
      set(newValue) {
        return (this.filter = newValue);
      },
    },
  },
  methods: {
    ...mapActions("Admin", ["fetchNewslatter"]),
    downloadExcel() {
       const wb = XLSX.utils.table_to_book(this.$refs.newslatter, {
        sheet: "sheet1",
      });

      XLSX.writeFile(wb, "newslatter." + "xlsx");
    },
    search() {
      this.fetchNewslatter(this.filter);
    },
    paginate(page) {
      this.filter.page = page;
      this.fetchNewslatter(this.filter);
    },
  },
  mounted() {
    this.fetchNewslatter();
  },
};
</script>

<style scopped>
app-btn-secondary {
  background: #fff;
  color: #5d6778;
  border: 1px solid #bcc1cb;
}
a {
  color: #15a362;
  text-decoration: none;
}
a:hover {
  color: #15a362;
}
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {
  border-color: #009e7d;
  box-shadow: none !important;
  outline: 0 none;
}
</style>