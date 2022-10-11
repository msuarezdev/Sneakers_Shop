<template>
    <v-system-bar color="grey-darken-4">
        Envio a todo el país
    </v-system-bar>

    <v-app-bar
        color="white"
        dark
        prominent
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>DS SNEAKERS</v-toolbar-title>

        <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        color="white"
    >
        <v-list
        nav
        dense
        >
            <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-title>Nosotros</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>Store</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>Mi cuenta</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>Contacto</v-list-item-title>
                </v-list-item>
                    </v-list-item-group>
                </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">

export default {
    data: () => ({
        drawer:false,
        group: null,
    }),
    watch: {
        group() {
            this.drawer = false
        },
    },
}

</script>

<style scoped>

</style>