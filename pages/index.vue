<template>
  <Tutorial/>
</template>

<script>
import { getAllUser } from '~/api/users';


export default {
  async mounted() {
    const users = await getAllUser();
    console.log(users);
  }
}
</script>
