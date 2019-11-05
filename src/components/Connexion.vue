<template>
    <div>
        <h1>Connection au site</h1>
        <h5 v-if="msgErreur !==''"> {{msgErreur}} </h5>
        <form @submit="connectUser" name="connexion">
            <p>
                <input v-model="user.username" type="text" name="username" placeholder="utilisateur"/>
            </p>
            <p>
                <input v-model="user.password" type="text" name="password" placeholder="mot de passe"/>
            </p>
            <button type="submit">Connexion</button>
        </form>


    </div>
</template>

<script>
    export default {
        name: "Connexion",
        props: {

        },
        data() {
            return {
                fakeUser: {
                    username: 'steven',
                    password: 'azertyuiop',
                },
                user: {
                    username: '',
                    password: '',
                    isConnected: false,
                },
                msgErreur: '',
            }
        },
        methods: {
            connectUser(e) {
                e.preventDefault();
                if (this.user.username === this.fakeUser.username && this.user.password === this.fakeUser.password) {
                    this.user.isConnected = true;
                    this.msgErreur='';
                    this.$router.push({ path: '/Accueil' })
                } else {
                    this.msgErreur='Erreur d\'authentification';
                }
             }
         }
    }
</script>

<style scoped>

</style>
