<template>
<div class="w-full h-full py-6 px-24">
    <h1 class="text-3xl font-bold p-6">Nous contacter</h1>
    <div class="pt-14 mx-auto w-2/6">
        <form class="flex flex-col gap-y-2 mt-5">
            <input type="text" placeholder="Societe" class="py-2 px-3 rounded-full border-1 border-black"/>
            <input type="email" placeholder="Email" class="py-2 px-3 rounded-full border-1 border-black"/>
            <input type="textarea" placeholder="Message" class="py-2 px-3 rounded-full border-1 border-black"/>
        </form>
    </div>
</div>
</template>
<script>
export default {
    name: 'contact'
}
</script>