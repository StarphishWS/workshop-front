<template>
    <div id="offers" class="w-full h-full py-12 px-24 bg-primary">
        <div>
            <h1 class="text-3xl font-bold pb-12 text-center text-white">Nos offres</h1>
            <div class="flex gap-6 justify-center  justify-items-center">
                <div class="group relative bg-gray-100 rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5">
                    <div class="py-3 px-4">
                        <p class="text-2xl font-bold">Campagne unique</p>
                        <p class="">Création d'une campagne avec differents template disponible.</p>
                        <p class="text-4xl font-bold my-4">350€</p>
                        <button class="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Je découvre</button>
                    </div>
                </div>
                <div class="group relative bg-gray-100 rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5">
                    <div class="py-3 px-4">
                        <p class="text-2xl font-bold">
                            Campagne annuel
                        </p>
                        <p class="">Proposition de 3 campagnes à lancer durant une année</p>
                        <p class="text-4xl font-bold my-4">350€</p>
                        <button class="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Je découvre</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'offers'
}
</script>