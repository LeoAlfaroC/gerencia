<template>
    <b-container>
        <b-jumbotron bg-variant="primary" header-level="5">
            <template v-slot:header>
                Iniciar sesión
            </template>
        </b-jumbotron>

        <b-row class="mx-auto">
            <b-col class="col-sm-12 h-100 d-table">
                <b-form @submit.prevent="authenticate">
                    <b-form-group>
                        <b-form-input
                                v-model="usuario"
                                type="text"
                                placeholder="Usuario/Email"
                        >
                        </b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input
                                v-model="password"
                                type="password"
                                placeholder="Contraseña"
                        >
                        </b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-button
                                type="submit"
                                variant="primary"
                                :disabled="!canLogin"
                        >
                            Log in
                        </b-button>
                    </b-form-group>

                    <b-button-group vertical>
                        <b-button variant="transparent">
                            ¿Aún no es miembro?
                            <br>
                            <span class="small-action">
                                Regístrese
                            </span>
                        </b-button>

                        <b-button class="small-action" variant="transparent">
                            ¿Olvidó su usuario o contraseña?
                        </b-button>
                    </b-button-group>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Login",

        data() {
            return {
                usuario: '',
                password: '',
            }
        },

        computed: {
            canLogin() {
                return this.usuario.length > 0 && this.password.length > 0;
            },
        },

        methods: {
            authenticate() {
                if (this.usuario === 'admin') {
                    this.$router.push('agregar');
                } else {
                    this.$router.push('citas');
                }
            },
        },
    }
</script>

<style scoped>
    .small-action {
        color: #0079fb;
    }
</style>