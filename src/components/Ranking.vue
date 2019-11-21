<template>
    <div>
        <b-form>
            <b-form-group>
                <b-form-select
                        v-model="selected_clinica"
                        :options="clinicas"
                        style="min-width: 345px;"
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

        </b-form>

        <b-table striped hover :items="resultados"></b-table>
    </div>
</template>

<script>
    export default {
        name: "Ranking",

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

                resultados: [
                    {
                        Nombre: 'James',
                        Puntaje: 5.3,
                    },
                    {
                        Nombre: 'María',
                        Puntaje: 3.9,
                    },
                    {
                        Nombre: 'Saúl',
                        Puntaje: 1.2,
                    }
                ],
            };
        },
    }
</script>

<style>
    .vdp-datepicker__calendar {
        margin: auto;
    }
</style>