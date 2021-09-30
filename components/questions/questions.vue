<template>
  <div>
    <div class="block w-full py-6 px-24 ">
      <h1 class="text-2xl font-bold p-6 text-gray-700">
        Qu’est-ce qu’une attaque de Phishing (Hameçonnage) ?
      </h1>
      <div class="mt-2">
        <div>
          <label class="inline-flex items-center">
            <input
              :disabled="displayCorrection"
              v-model="answers[0]"
              type="radio"
              class="form-radio"
              name="radio1"
              value="1"
            />
            <span class="ml-2">Option 1</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              :disabled="displayCorrection"
              v-model="answers[0]"
              type="radio"
              class="form-radio"
              name="radio1"
              value="2"
            />
            <span class="ml-2">Option 2</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              :disabled="displayCorrection"
              v-model="answers[0]"
              type="radio"
              class="form-radio"
              name="radio1"
              value="3"
            />
            <span class="ml-2">Option 3</span>
          </label>
        </div>
        <div v-if="displayCorrection" class="mt-4">
          <div
            v-if="msgCorrection(0)"
            class="bg-green-400 p-2 rounded-lg text-white"
          >
            Vous avez répondu correctement à la question !
          </div>
          <div v-else class="bg-red-400 p-2 rounded-lg text-white">
            C'est la mauvaise réponse ! La bonne réponse est la 1er réponse !
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="block w-full py-6 px-24 ">
      <h1 class="text-2xl font-bold p-6 text-gray-700">
        Comment puis-je vérifier s’il s’agit d’un email de phishing /
        Hameçonnage ?
      </h1>
      <div class="mt-2">
        <div>
          <label class="inline-flex items-center">
            <input
              :disabled="displayCorrection"
              v-model="answers[1]"
              type="radio"
              class="form-radio"
              name="radio2"
              value="1"
              checked
            />
            <span class="ml-2">Option 1</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              :disabled="displayCorrection"
              v-model="answers[1]"
              type="radio"
              class="form-radio"
              name="radio2"
              value="2"
            />
            <span class="ml-2">Option 2</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              :disabled="displayCorrection"
              v-model="answers[1]"
              type="radio"
              class="form-radio"
              name="radio2"
              value="3"
            />
            <span class="ml-2">Option 3</span>
          </label>
        </div>
        <div v-if="displayCorrection" class="mt-4">
          <div
            v-if="msgCorrection(1)"
            class="bg-green-400 p-2 rounded-lg text-white"
          >
            Vous avez répondu correctement à la question !
          </div>
          <div v-else class="bg-red-400 p-2 rounded-lg text-white">
            C'est la mauvaise réponse ! La bonne réponse est la 2ème réponse !
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="block w-full py-6 px-24 ">
      <h1 class="text-2xl font-bold p-6 text-gray-700">
        Que dois-je faire si j’ai fourni des informations accidentellement sur
        une fausse page ?
      </h1>
      <div class="mt-2">
        <div>
          <label class="inline-flex items-center">
            <input
              :disabled="displayCorrection"
              v-model="answers[2]"
              type="radio"
              class="form-radio"
              name="radio3"
              value="1"
              checked
            />
            <span class="ml-2">Option 1</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              :disabled="displayCorrection"
              v-model="answers[2]"
              type="radio"
              class="form-radio"
              name="radio3"
              value="2"
            />
            <span class="ml-2">Option 2</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              :disabled="displayCorrection"
              v-model="answers[2]"
              type="radio"
              class="form-radio"
              name="radio3"
              value="3"
            />
            <span class="ml-2">Option 3</span>
          </label>
        </div>

        <div v-if="displayCorrection" class="mt-4">
          <div
            v-if="msgCorrection(2)"
            class="bg-green-400 p-2 rounded-lg text-white"
          >
            Vous avez répondu correctement à la question !
          </div>
          <div v-else class="bg-red-400 p-2 rounded-lg text-white">
            C'est la mauvaise réponse ! La bonne réponse est la 2ème réponse !
          </div>
        </div>
      </div>
    </div>
    <div class="py-12 px-24">
      <button
        @click="showCorrection()"
        :disabled="!verifForm"
        class="bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-bold py-4 px-8 rounded-full "
      >
        Valider le questionnaire
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Q1",
  data() {
    return {
      answers: [null, null, null],
      correctAnswers: [1, 2, 2],
      displayCorrection: false
    };
  },
  computed: {
    verifForm() {
      if (this.displayCorrection) {
        return false;
      }

      for (const answer of this.answers) {
        if (!answer) return false;
      }
      return true;
    }
  },
  methods: {
    showCorrection() {
      this.displayCorrection = true;
    },
    msgCorrection(index) {
      if (this.answers[index] == this.correctAnswers[index]) {
        return true;
      }
      return false;
    }
  }
};
</script>
