<template>
    <div id="stats" class="w-full h-full py-12 px-24">
        <div>
            <div class="flex gap-6 justify-around">
                <div class="group relative border-2 border-primary rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5 w-full">
                    <div class="py-3 px-4 grid justify-items-center">
                        <p class="text-4xl font-bold">12</p>
                        <p class="py-6">E-mails envoyés.</p>
                        <div class="shadow w-full bg-grey-light rounded-full">
                            <div class="bg-primary rounded-full text-xs leading-none py-1 text-center text-white" style="width: 100%">100%</div>
                        </div>
                    </div>
                </div>
                <div class="group relative border-2 border-primary rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5 w-full">
                    <div class="py-3 px-4 grid justify-items-center">
                        <p class="text-4xl font-bold">6</p>
                        <p class="py-6">clic(s) sur le lien.</p>
                        <div class="shadow w-full rounded-full">
                            <div class="bg-primary rounded-full text-xs leading-none py-1 text-center text-white" style="width: 50%">50%</div>
                        </div>
                    </div>
                </div>
                <div class="group relative border-2 border-primary rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5 w-full">
                    <div class="py-3 px-4 grid justify-items-center">
                        <p class="text-4xl font-bold">3</p>
                        <p class="py-6">Pages de connexion complétées</p>
                        <div class="shadow w-full bg-grey-light rounded-full">
                            <div class="bg-primary rounded-full text-xs leading-none py-1 text-center text-white" style="width: 25%">25%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'stats'
}
</script>