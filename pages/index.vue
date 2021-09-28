<template>
  <Tutorial/>
</template>

<script>
import { auth } from "~/plugins/firebase";
import { getToken } from '~/api/auth';


export default {
  async mounted() {
    await auth.setPersistence('local');
    await auth.signInWithEmailAndPassword('corentin.lissillour304@gmail.com', "123456");
    const token = await getToken();
    console.log(token); 
  }
}
</script>
