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
        <div class="table-responsive" id="contactus-table">
          <table class="table app-table-hover mb-0 text-left" ref="contactus">
            <thead>
              <tr>
                <th class="cell">Name</th>
                <th class="cell">Email</th>
                <th class="cell">Comment</th>
                <th class="cell">Website</th>
              </tr>
            </thead>
            <tbody v-if="contactUsMessages">
              <tr
                v-for="contactUsMessage in contactUsMessages"
                :key="contactUsMessage.id"
                v-if="contactUsMessages.length > 0"
              >
                <td class="cell">
                  {{ contactUsMessage.name }}
                </td>
                <td class="cell">
                  <a :href="`mailto:${contactUsMessage.email}`">{{
                    contactUsMessage.email
                  }}</a>
                </td>
                <td class="cell">
                  {{ contactUsMessage.comment.substring(0, 100) }}
                  {{ contactUsMessage.comment.length > 100 ? "..." : "" }}
                </td>
                <td class="cell">
                  {{
                    typeof contactUsMessage.website == "object"
                      ? "N/A"
                      : contactUsMessage.website
                  }}
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
    <nav class="app-pagination" v-if="contactUs.last_page > 1">
      <ul class="pagination justify-content-center">
        <li
          class="page-item"
          :class="contactUs.current_page == 1 ? 'disabled' : ''"
        >
          <a
            class="page-link"
            href="javascript:void(0)"
            tabindex="-1"
            aria-disabled="true"
            @click="paginate(contactUs.current_page - 1)"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          v-for="page in contactUs.last_page"
          :key="page"
          :class="page == contactUs.current_page ? 'active disabled' : ''"
          @click="paginate(page)"
        >
          <a class="page-link" href="javascript:void(0)">{{ page }}</a>
        </li>
        <li
          class="page-item"
          :class="
            contactUs.current_page > contactUs.last_page ? 'disabled' : ''
          "
        >
          <a
            class="page-link"
            href="javascript:void(0)"
            @click="paginate(contactUs.current_page + 1)"
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
    ...mapGetters("Admin", ["contactUs"]),
    contactUsMessages() {
      return this.contactUs.data;
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
    ...mapActions("Admin", ["fetchContactUs"]),
    downloadExcel() {
      const wb = XLSX.utils.table_to_book(this.$refs.contactus, {
        sheet: "sheet1",
      });

      XLSX.writeFile(wb, "contactus." + "xlsx");
    },
    search() {
      this.fetchContactUs(this.filter);
    },
    paginate(page) {
      this.filter.page = page;
      this.fetchContactUs(this.filter);
    },
  },
  mounted() {
    this.fetchContactUs();
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