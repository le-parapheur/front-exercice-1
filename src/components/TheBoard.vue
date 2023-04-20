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
    <div>
        <button class="button">Créer une nouvelle carte</button>
        <div class="the-board-container">
            <div class="is-flex is-flex-direction-column">
                <h2>Nom de la colonne 1</h2>
                <div class="box">
                    Nom : Première carte
                    <br>
                    Contact : Jean Paul Smith
                </div>
                <div class="box">
                    Nom : Seconde carte
                    <br>
                    Contact : Jean Rocheford
                </div>
            </div>
            <div class="is-flex is-flex-direction-column">
                <h2>Nom de la colonne 2</h2>
                <div class="box">
                    Nom : 3e carte
                    <br>
                    Contact : Jean Paul Smith
                </div>
                <div class="box">
                    Nom : 4e carte
                    <br>
                    Contact : Jean Rocheford
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.the-board-container {
    display: flex;
    gap: 1em;
}
</style>
