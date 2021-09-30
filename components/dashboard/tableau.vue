<template>
    <div>
<p class="text-lg text-center font-bold m-5">Contacts associés à la campagne</p>
<table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
  <tr class="text-left border-b-2 border-gray-300">
    <th class="px-4 py-3">Nom</th>
    <th class="px-4 py-3">Prenom</th>
    <th class="px-4 py-3">E-mail</th>
    <th class="px-4 py-3">Step 1</th>
    <th class="px-4 py-3">Step 2</th>
    <th class="px-4 py-3">Step 3</th>
  </tr>
  
  <tr class="bg-gray-100 border-b border-gray-200">
    <td class="px-4 py-3">Jill</td>
    <td class="px-4 py-3">Smith</td>
    <td class="px-4 py-3">jillsmith@epsi.fr</td>
    <td class="px-4 py-3">Yes</td>
    <td class="px-4 py-3">No</td>
    <td class="px-4 py-3">No</td>
  </tr> 
<!-- each row -->
  <tr class="bg-gray-100 border-b border-gray-200">
    <td class="px-4 py-3">Alain</td>
    <td class="px-4 py-3">Proviste</td>
    <td class="px-4 py-3">alainproviste@epsi.fr</td>
    <td class="px-4 py-3">Yes</td>
    <td class="px-4 py-3">Yes</td>
    <td class="px-4 py-3">No</td>
  </tr> 
<!-- each row -->
  <tr class="bg-gray-100 border-b border-gray-200">
    <td class="px-4 py-3">Justin</td>
    <td class="px-4 py-3">Bridou</td>
    <td class="px-4 py-3">justinbridou@epsi.fr</td>
    <td class="px-4 py-3">Yes</td>
    <td class="px-4 py-3">Yes</td>
    <td class="px-4 py-3">No</td>
  </tr> 
<!-- each row -->

</table>

<!-- classic design -->
    </div>
</template>

<script>
export default {
    name: 'tableau'
}
</script>