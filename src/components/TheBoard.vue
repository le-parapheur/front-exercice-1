<script lang="ts" setup>
const columns = [
    {
        name: 'A traiter',
        order: 0,
    },
    {
        name: 'En cours',
        order: 1,
    },
    {
        name: 'Finalisé',
        order: 2,
    },
];
</script>

<template>
    <div class="is-flex">
        <div class="is-flex is-flex-direction-column">
            <h1>Nom de la colonne</h1>
            <div class="box">
                Nom : Première carte
                <br>
                Contact : Jean Paul Smith
            </div>
        </div>
    </div>
</template>
