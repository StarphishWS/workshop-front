<template>
  <div class="pt-20 mx-auto max-w-640">
    <h1 class="text-center font-bold text-3xl">Inscription</h1>
    <form @submit.prevent="sigUp()" class="flex flex-col gap-y-5 mt-5">
      <div class="flex gap-x-2">
        <input
          v-model="form.firstname"
          type="text"
          placeholder="Nom"
          class="w-full py-2 px-3 rounded-full border-2 border-gray-700"
        />
        <input
          v-model="form.lastname"
          type="text"
          placeholder="Prénom"
          class="w-full py-2 px-3 rounded-full border-2 border-gray-700"
        />
      </div>

      <input
        v-model="form.email"
        type="text"
        placeholder="Adresse Email"
        class="py-2 px-3 rounded-full border-2 border-gray-700"
      />
      <input
        v-model="form.company"
        type="text"
        placeholder="Société"
        class="py-2 px-3 rounded-full border-2 border-gray-700"
      />
      <input
        v-model="form.password"
        type="password"
        placeholder="Mot de passe"
        class="py-2 px-3 rounded-full border-2 border-gray-700"
      />
      <button
        :disabled="!verifForm"
        class="w-full bg-primary  bg-primary hover:bg-primary-dark  disabled:opacity-50 text-white rounded-full py-2"
      >
        <Loading v-if="loading" />

        <span v-if="!loading"> Inscription</span>
      </button>
    </form>

    <p class="mt-20 text-center text-primary text-xl">
      Vous avez déjà un compte ?
      <nuxt-link class="underline" to="login">Connectez-vous ici</nuxt-link>
    </p>
  </div>
</template>
<script>
//vuex
import { mapMutations } from "vuex";

import { verifEmail } from "~/utils/regex";
import { showToast } from "~/utils/toast";
import { getSignUp, loginFirebase } from "~/api/auth";
import Loading from "~/components/layouts/Loading.vue";

export default {
  layout: "default-primary",
  components: { Loading },
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        company: "",
        password: ""
      },
      loading: false
    };
  },
  computed: {
    verifForm() {
      console.log(this.form.password.length);
      if (
        this.form.firstname !== "" &&
        this.form.lastname !== "" &&
        this.form.company != "" &&
        this.form.email !== "" &&
        this.form.password.length > 5 &&
        verifEmail(this.form.email)
      ) {
        return true;
      }
      return true;
    }
  },
  mounted() {},
  methods: {
    ...mapMutations({
      setUser: "auth/SET_USER"
    }),
    async signUp() {
      try {
        this.loading = true;
        const data = await getSignUp(this.form);
        await loginFirebase(this.form.email, this.form.password);
        this.setUser(data);
        this.loading = false;
        showToast("Inscription", "L'inscription a été faites avec succès.");
        this.$router.push("/dashboard");
      } catch (error) {
        console.log(error);
        this.loading = false;
        showToast(
          "Inscription",
          "Une erreur est survenue, veuillez réessayer.",
          "bg-red-500"
        );
      }
    }
  }
};
</script>
