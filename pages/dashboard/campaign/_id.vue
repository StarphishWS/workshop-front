<template>
    <div>
        <dropdown/>
        <stats/>
        <tableau/>
    </div>
</template>

<script>
import Stats from '~/components/dashboard/stats.vue';
import Tableau from '~/components/dashboard/tableau.vue';
import Dropdown from '~/components/dashboard/dropdown.vue';

export default {
layout: "dashboard",
  components: {Stats, Tableau, Dropdown, },
}
</script>