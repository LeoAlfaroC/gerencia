<template>
    <b-container class="mx-auto mt-5">
        <b-row class="mx-auto">
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
                            v-model="selected_nueva_especialidad"
                            :options="nuevas_especialidades"
                    >
                    </b-form-select>

                    <b-form-text text-variant="danger" class="text-left">
                        Optional
                    </b-form-text>
                </b-form-group>

                <b-row>
                    <b-col>
                        <b-form-group>
                            <b-form-select
                                    v-model="selected_especialidad"
                                    :options="especialidades"
                            >
                            </b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col>
                        <b-form-group>
                            <b-form-select
                                    v-model="selected_medico"
                                    :options="medicos"
                            >
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <b-form-group>
                            <b-form-select
                                    v-model="selected_inicio"
                                    :options="periodos"
                            >
                            </b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col>
                        <b-form-group>
                            <b-form-select
                                    v-model="selected_final"
                                    :options="periodos"
                            >
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <b-form-group>
                            <b-form-input
                                    disabled
                            >
                            </b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group>
                            <b-form-input
                                    readonly
                                    plaintext
                                    value="Rango de horas"
                            >
                            </b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-button variant="primary">
                            Agregar
                        </b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "NuevoHorario",

        data() {
            return {
                selected_clinica: null,
                clinicas: [
                    {value: null, text: 'Seleccionar Clínica'},
                    {value: 'maison', text: 'Maison de Santé'},
                    {value: 'sanna', text: 'SANNA'},
                ],

                selected_nueva_especialidad: null,
                nuevas_especialidades: [
                    {value: null, text: 'Agregar Especialidad'},
                    {value: 'general', text: 'Medicina General'},
                    {value: 'endocrinologia', text: 'Endocrinología'},
                    {value: 'ginecologia', text: 'Ginecología'},
                    {value: 'pediatria', text: 'Pediatría'},
                ],

                selected_especialidad: null,
                especialidades: [
                    {value: null, text: 'Especialidad'},
                    {value: 'obstetricia', text: 'Obstetricia'},
                    {value: 'otorrinologia', text: 'Otorrinolaringología'},
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

                selected_inicio: null,
                selected_final: null,
                periodos: [
                    {value: 'AM', text: 'AM'},
                    {value: 'PM', text: 'PM'},
                ],
            };
        },
    }
</script>

<style scoped>

</style>