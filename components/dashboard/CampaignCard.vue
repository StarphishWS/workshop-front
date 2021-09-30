<template>
<nuxt-link :to="`campaign/${campaign.id}`">
  <div class="bg-white p-2 shadow-lg rounded-lg">
    <h2 class="text-lg font-bold text-center">{{ campaign.title }}</h2>
    <p class="text-center">Template : {{ campaign.template }}</p>
    <p class="text-center">Date : {{ date }}</p>
    <div :class="{'bg-pink-500': status === 'En attente', 'bg-primary': status === 'Envoyé'}" class="rounded-full p-2 text-white text-center mt-2"> {{ status }}</div>
  </div>
</nuxt-link>
</template>
<script>
import dayjs from 'dayjs';

export default {
  name: "CampaignCard", 
  props: {
      campaign: {
          type: Object, 
          required: true
      }
  }, 
  computed: {
    date() {
      return dayjs(this.campaign.date).format('DD/MM/YYYY');
    }, 
    status() {
      if(this.campaign.sent) {
        return 'Envoyé'
      } 
      return 'En attente'
    }
  }
};
</script>
