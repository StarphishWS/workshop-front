<template>
    <div>
        <piege/>
        <video-piege/>
        <sloganquestions/>
        <q-1/>
        <div class="py-12 px-24">
        <button class="bg-primary hover:bg-primary text-white font-bold py-4 px-8 rounded-full ">Valider le questionnaire</button>
        </div>
    </div>
</template>

<script>
import Q1 from '~/components/questions/Q1.vue'
import Sloganquestions from '~/components/questions/sloganquestions.vue'
import Piege from '~/components/questions/piege.vue'
import VideoPiege from '~/components/questions/video-piege.vue'

export default {
    components: { Piege, VideoPiege, Sloganquestions, Q1,}, 
    name: 'questions', 
    layout: 'default-questions'
}
</script>