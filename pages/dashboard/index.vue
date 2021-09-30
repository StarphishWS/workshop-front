<template>
  <div>
    <h1 class="text-center py-5 font-extrabold text-3xl">DASHBOARD</h1>
    <div v-if="loading" class="w-full flex justify-center">
      <Loading :color="'purple-500'" />
    </div>
    <div v-if="!loading" class="p-12 grid grid-cols-3 gap-4">
      <CampaignCard v-for="campaign of campaigns" :key="campaign.id" :campaign="campaign" />
    </div>
  </div>
</template>
<script>
import CampaignCard from "~/components/dashboard/CampaignCard.vue";
import Loading from "~/components/layouts/Loading.vue"
import { getAllCampaigns } from '~/api/campaign';
import { showToast } from "~/utils/toast";


export default {
  layout: "dashboard",
  components: { CampaignCard, Loading },
  data() {
    return {
      campaigns: [], 
      loading: true
    };
  },
  async mounted() {
    await this.getAllCampaigns();
  },
  methods: {
    async getAllCampaigns() {
      try {
        this.loading = true;
        this.campaigns = await getAllCampaigns();
        console.log(this.campaigns)
        this.loading = false
      } catch (error) {
        console.log(error);
         showToast("Erreur", "Une erreur est survenue, veuillez réessayé", 'bg-red-500');
      }
    }
  }
};
</script>
