<template>
    <b-form>
        <b-form-group>
            <b-form-select
                    v-model="selected_clinica"
                    :options="clinicas"
            >
            </b-form-select>
        </b-form-group>

        <b-form-group>
            <b-form-select
                    v-model="selected_especialidad"
                    :options="especialidades"
            >
            </b-form-select>
        </b-form-group>

        <b-form-group>
            <b-form-select
                    v-model="selected_medico"
                    :options="medicos"
            >
            </b-form-select>
        </b-form-group>

        <b-form-group>
            <Datepicker
                    inline
            ></Datepicker>
        </b-form-group>

        <b-form-group>
            <b-form-select
                    v-model="selected_metodo"
                    :options="metodos"
            >
            </b-form-select>
        </b-form-group>

        <b-row>
            <b-col>
                <b-form-group>
                    <b-input
                            type="number"
                            disabled
                            v-model.number="monto"
                    >
                    </b-input>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group>
                    <b-form-input
                            readonly
                            plaintext
                            value="Monto (S/)"
                    >
                    </b-form-input>
                </b-form-group>
            </b-col>
        </b-row>

        <b-form-group>
            <b-button variant="primary">
                Solicitar
            </b-button>
        </b-form-group>
    </b-form>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'

    export default {
        name: "NuevaCita",

        data() {
            return {
                selected_clinica: null,
                clinicas: [
                    {value: null, text: 'Seleccionar Clínica'},
                    {value: 'maison', text: 'Maison de Santé'},
                    {value: 'sanna', text: 'SANNA'},
                ],

                selected_especialidad: null,
                especialidades: [
                    {value: null, text: 'Agregar Especialidad'},
                    {value: 'general', text: 'Medicina General'},
                    {value: 'endocrinologia', text: 'Endocrinología'},
                    {value: 'ginecologia', text: 'Ginecología'},
                    {value: 'pediatria', text: 'Pediatría'},
                ],

                selected_medico: null,
                medicos: [
                    {value: null, text: 'Médico'},
                    {value: 1, text: 'Enrique Burga'},
                    {value: 2, text: 'Jorge Rodriguez'},
                    {value: 3, text: 'Lucía Del Campo'},
                    {value: 4, text: 'María Chavarría'},
                    {value: 5, text: 'Pedro Vives'},
                ],

                selected_metodo: null,
                metodos: [
                    {value: null, text: 'Método de Pago'},
                    {value: 'debito', text: 'Tarjeta de Débito'},
                    {value: 'credito', text: 'Tarjeta de Crédito'},
                ],
            };
        },

        components: {Datepicker},

        computed: {
            monto() {
                if (this.selected_clinica !== null
                && this.selected_especialidad !== null
                && this.selected_medico !== null) {
                    return 1500.0;
                }

                return 0.0;
            },
        },
    }
</script>

<style scoped>

</style>