<template>
  <div class="pt-20 mx-auto w-2/6">
    <h1 class="text-center font-bold text-3xl">Connexion</h1>
    <form  @submit.prevent="signIn()" class="flex flex-col gap-y-5 mt-5">
      <input
          v-model="form.email"
        type="text"
        placeholder="Adresse Email"
        class="py-2 px-3 rounded-full border-2 border-gray-700"
      />
      <input
        v-model="form.password"
        type="password"
        placeholder="Mot de passe"
        class="py-2 px-3 rounded-full border-2 border-gray-700"
      />
      <button :disabled="!verifForm"
        class="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 text-white rounded-full py-2"
      >
         <Loading v-if="loading" />

        <span v-if="!loading">Connexion</span>
      </button>
    </form>
    <p class="mt-2 text-right text-primary">Mot de passe oublié ?</p>

    <p class="mt-20 text-center text-primary text-xl">
      Vous n'êtes pas inscrit ?
      <nuxt-link class="underline" to="sign-up">Créer un nouveau compte</nuxt-link>
    </p>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

import { verifEmail } from "~/utils/regex";
import { showToast } from "~/utils/toast";
import { loginFirebase } from "~/api/auth";

import Loading from "~/components/layouts/Loading.vue";
export default {
  layout: "default-primary", 
  components: {
    Loading
  },
  data() {
    return {
       form: {
        email: "",
        password: ""
      }, 
      loading: false
    }
  },
  computed: {
     verifForm() {
      if (
        this.form.email !== "" &&
        this.form.password !== "" &&
        verifEmail(this.form.email)
      ) {
        return true;
      }
      return false;
    }
  },
  methods: {
       ...mapActions({
      getCurrentUser: "auth/getCurrentUser",
    }),
     async signIn() {
      try {
          this.loading = true;
          await loginFirebase(this.form.email, this.form.password);
          await this.getCurrentUser();
          console.log("user", this.user);
          showToast('Connexion', 'Connexion réussie!')
          this.loading = false;
          this.$router.push("/dashboard");
      } catch(error) {
          console.log(error);
          showToast("Erreur", "Votre email et/ou mot de passe est incorrect", 'bg-red-500');
          this.loading = false;

      }
    }, 
  }
};
</script>
