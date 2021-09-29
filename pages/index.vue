<template>
</template>

<script>
import { auth } from "~/plugins/firebase";
import { getToken } from '~/api/auth';


export default {
  async mounted() {
    await auth.setPersistence('local');
    await auth.signInWithEmailAndPassword('nicolas.dol@epsi.fr', "123456");
    const token = await getToken();
    console.log(token); 
  }
}
</script>
