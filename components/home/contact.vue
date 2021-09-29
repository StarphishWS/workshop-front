<template>
  <div id="contact" class="w-full h-full py-6 px-24">
    <h1 class="text-3xl text-center font-bold p-6">Nous contacter</h1>
    <div class="pt-4 mx-auto w-2/6">
      <form class="flex flex-col gap-y-2 mt-5">
        <div class="flex gap-x-2">
          <input
            type="text"
            placeholder="Nom"
            class="w-full py-2 px-3 rounded-full border-2 border-black"
          />
          <input
            type="text"
            placeholder="Prénom"
            class="w-full py-2 px-3 rounded-full border-2 border-black"
          />
        </div>
        <input
          type="text"
          placeholder="Societe"
          class="py-2 px-3 rounded-full border-2 border-black"
        />
        <input
          type="email"
          placeholder="Email"
          class="py-2 px-3 rounded-full border-2 border-black"
        />
        <textarea
          placeholder="Message"
          class="py-2 px-3 rounded-lg border-2 border-black"
        ></textarea>

        <button
          class="mx-auto bg-primary  bg-primary text-white rounded-full px-6 py-2"
        >
          Envoyer
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact"
};
</script>
<style scoped>
textarea {
  min-height: 150px;
}
</style>
