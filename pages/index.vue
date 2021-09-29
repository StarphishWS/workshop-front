<template>
</template>

<script>
import { auth } from "~/plugins/firebase";
import { getToken } from '~/api/auth';


export default {
  async mounted() {
    const token = await getToken();
    console.log(token); 
  }
}
</script>
