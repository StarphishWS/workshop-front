<template>
    <div>
        <Piege/>
        <VideoPiege/>
        <Sloganquestions/>
        <Questions/>
    </div>
</template>

<script>
import questions from '~/components/questions/questions.vue'
import Sloganquestions from '~/components/questions/sloganquestions.vue'
import Piege from '~/components/questions/piege.vue'
import VideoPiege from '~/components/questions/video-piege.vue'

export default {
    components: { Piege, VideoPiege, Sloganquestions, questions}, 
    name: 'questions', 
    layout: 'default-questions'
}
</script>