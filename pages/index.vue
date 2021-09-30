<template>
<div>
 <slogan />
 <advantages />
 <offers />
 <contact />
</div>
</template>

<script>
import { auth } from "~/plugins/firebase";
import { getToken } from '~/api/auth';
import Slogan from '~/components/home/slogan.vue'
import Advantages from '~/components/home/advantages.vue'
import Offers from '~/components/home/offers.vue';
import Contact from '~/components/home/contact.vue';


export default {
  components: {Slogan, Advantages, Offers, Contact, }, 
  async mounted() {
    const token = await getToken();
    console.log(token); 
  }
}
</script>
