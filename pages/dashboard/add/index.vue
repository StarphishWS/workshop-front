<template>
  <div class="py-10 px-7">
    <h1 class="text-xl font-bold">Créer une nouvelle campagne</h1>
    <div class="mt-12">
      <input
        v-model="form.title"
        class="input-width bg-transparent focus:outline-none border-b-2 border-black"
        placeholder="Titre de votre campagne"
      />
      <div class="grid grid-cols-4 gap-3 mt-5">
        <div
          @click="selectTemplate('google')"
          :class="{ 'border-2 border-primary': form.template === 'google' }"
          class="template bg-gray-200 rounded-lg"
        >
          <img
            class="w-full h-full rounded-lg shadow-md"
            src="/template/google.png"
          />
        </div>
        <div class="template bg-gray-200 rounded-lg shadow-md"></div>
        <div class="template bg-gray-200 rounded-lg shadow-md"></div>
        <div class="template bg-gray-200 rounded-lg shadow-md"></div>
      </div>
    </div>
    <h2 class="mt-5 text-xl font-bold">Ajouter des employées</h2>
    <div
      v-for="employee in form.employees"
      :key="employee.id"
      class="mt-5 flex gap-3"
    >
      <input
        v-model="employee.firstname"
        class="bg-transparent focus:outline-none border-b-2 border-black"
        placeholder="Nom"
      />
      <input
        v-model="employee.lastname"
        class="bg-transparent focus:outline-none border-b-2 border-black"
        placeholder="Prénom"
      />
      <input
        v-model="employee.email"
        class="input-email bg-transparent focus:outline-none border-b-2 border-black"
        placeholder="Email"
      />
      <div>
        <button
          @click="removeEmployee(employee.id)"
          class="bg-red-500 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <button
      @click="addEmployee()"
      class="mt-5 bg-pink-500 hover:bg-pink-600 disabled:opacity-50 text-white rounded-full py-2 px-4"
    >
      Ajouter un contact
    </button>

    <div class="mt-20">
      <button
        @click="createCampaign()"
        :disabled="!verifForm"
        class="block bg-primary hover:bg-primary-dark disabled:opacity-50 text-white rounded-full py-4 px-10 mx-auto"
      >
        <Loading v-if="loading" />
        <span v-if="!loading"> Créer la campagne</span>
      </button>
    </div>
  </div>
</template>
<script>
import { postCampaign } from "~/api/campaign";
import { verifEmail } from "~/utils/regex";
import { showToast } from "~/utils/toast";
import Loading from "~/components/layouts/Loading.vue";

export default {
  layout: "dashboard",
  components: { Loading },
  data() {
    return {
      form: {
        title: "",
        template: "google",
        employees: [
          {
            id: 0,
            firstname: "",
            lastname: "",
            email: ""
          }
        ]
      },
      loading: false
    };
  },
  computed: {
    verifForm() {
      if (
        this.form.title !== "" &&
        this.form.template === "google" &&
        this.verifEmployee()
      ) {
        return true;
      }
      return false;
    }
  },
  methods: {
    selectTemplate(template) {
      this.form.template = template;
    },
    verifEmployee() {
      for (const employee of this.form.employees) {
        console.log(employee);
        if (
          employee.firstname === "" ||
          employee.lastname === "" ||
          !verifEmail(employee.email)
        ) {
          return false;
        }
      }
      return true;
    },
    addEmployee() {
      const newId = this.form.employees[this.form.employees.length - 1].id + 1;
      const newEmployee = {
        id: newId,
        firstname: "",
        lastname: "",
        email: ""
      };
      this.form.employees.push(newEmployee);
    },
    removeEmployee(id) {
      if (this.form.employees.length > 1) {
        this.form.employees = this.form.employees.filter(e => e.id !== id);
      }
    },
    async createCampaign() {
      try {
        if (this.loading) return false;

        this.loading = true;

        const form = {
          ...this.form,
          employees: this.form.employees.map(e => ({
            firstname: e.firstname,
            lastname: e.lastname,
            email: e.email
          }))
        };

        await postCampaign(form);
         showToast(
          "Succès",
          "Votre campagne a été crée avec succès",
        );
         this.loading = false;
        this.$router.push("/dashboard");
      } catch (error) {
        console.log(error);
        showToast(
          "Erreur",
          "Une erreur est survenue, veuillez réessayer",
          "bg-red-500"
        );
        this.loading = false;
      }
    }
  }
};
</script>
<style scoped>
.input-width {
  min-width: 300px;
}

.template {
  height: 150px;
}

.input-email {
  width: 300px;
}
</style>
