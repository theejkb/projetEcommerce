<template>
    <div>
        <h1>Connection au site</h1>

        <form name="connexion" method="get">
            <p>
                <input type="text" name="username" value="" placeholder="utilisateur" />
            </p>
            <p>
                <input type="text" name="password" value="" placeholder="mot de passe" />
            </p>
        </form>
        <button>Connexion</button>
    </div>
</template>

<script>
    export default {
        name: "Connexion",
        props: {
            msg: String,
        },
        data() {
            return {
                fakeUser: {
                    username: 'steven',
                    password:'azertyuiop',
                }
            }
        }
    }
</script>

<style scoped>

</style>
