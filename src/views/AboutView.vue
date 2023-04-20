<template>
    <div class="about">
        <h1 class="is-size-3">Les instructions</h1>
        <p>Tout d'abord, merci de prendre du temps pour faire cet exercice. L'objectif est ici de voir comment vous pouvez vous adapter à un environnement de dev (aussi petit soit-il),
            améliorer un existant et prendre en compte des contraintes, le tout en codant de façon clean et en respectant les normes en vigueur et les bonnes pratiques.</p>
        <p>Le contexte de cet exercice est basé sur notre produit Le Parapheur, un SaaS codé en VueJS qui est client side rendering (CSR) et SPA.
            <br>
            <i>Voici un screenshot du tableau du bord (uniquement pour le contexte, à ne pas reproduire).</i></p>
        <div class="has-text-centered">
            <img src="src/assets/board.png" alt="Photo du tableau de bord du Parapheur" id="board-image">
        </div>
        <p>
            Le contexte de l'exercice est le suivant : un client, Jean Lemaire, utilise notre logiciel. Pour commencer doucement, il demande aux fonctionnaires de ne rajouter que des tâches liées à la voirie : nid de poule par ex, arbre sur la voie...
            <br>
            Sur le tableau de bord, 2 colonnes sont déjà présentes. Dans chaque colonne, on peut avoir 1 ou plusieurs cartes. Un bouton permet aussi de créer une nouvelle carte.
            Jean Lemaire veut pouvoir déplacer facilement des cartes de la colonne A à la colonne B.
        </p>
        <br>
        <div>
            L'exercice se décompose ainsi :
            <ol>
                <li>
                    Comprendre les packages déjà installés, les utiliser et si nécessaire en rajouter d'autres;
                </li>
                <li>Améliorer la gestion des colonnes (en rajouter d'autres en plus des 2 initiales) (créer le component Column.vue + Card.vue);</li>
                <li>
                    Adapter le bouton de création de tâche et créer une fonction sur le tableau de bord pour créer une nouvelle carte. D'un point de vue UX, une dialogue est attendue;
                </li>
                <li>
                    Lors de la création de la carte, l'utilisateur peut préciser le nom, le lieu et la colonne (une carte peut ainsi être créée d'office dans la colonne 3);
                </li>
                <li>Lorsque l'user clique sur une carte, il peut modifier ces infos et les sauvegarder;</li>
                <li>L'user peut changer facilement une carte de colonne. Un drag & drop est attendu (Sortable.js);</li>
                <li>L'UX devra être améliorée. Un framework CSS est déjà utilisé mais n'est pas obligatoire;</li>
                <li><strong>Le sujet de la réactivité est primordiale. Les infos d'un côté doivent être retrouvées de l'autre côté. Un package pour gérer le store, pinia, est déjà installé, il est fortement conseillé de l'utiliser.</strong></li>
            </ol>
        </div>
        <br>
        <p>
            <strong>Pour aller plus loin</strong>, il est possible d'implémenter une BDD type Firebase ou Supabase, si le timing le permet. Ce n'est pas obligatoire ni une nécessité.
        </p>
        <br>
        <div>
            Ce qui va être jugée à la fin :
            <ol>
                <li>La bonne décomposition des components;</li>
                <li>La communication entre les components (store, parent/children, cf docs vueJS);</li>
                <li>Respect des normes VueJS et Typescript, gestion des types et interfaces Typescript;</li>
                <li>La bonne utilisation des packages (Pinia, SortableJS, BulmaCSS);</li>
                <li>Secondaire mais non négligeable : le design final;</li>
            </ol>
        </div>
        <br>
        <div>Encore merci de prendre du temps pour cet exercice !</div>
    </div>
</template>

<style scoped>
.about {
    margin: 1em;
    padding: 1em;
}
#board-image {
    width: 100%;
    max-width: 50vw;
    height: auto;
}
ol {
    margin-left: 2em;
}
</style>
<script setup lang="ts">
</script>
