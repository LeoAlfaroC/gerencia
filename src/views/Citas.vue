<template>
    <b-container class="mx-auto">
        <b-row class="mx-auto">
            <b-tabs active-tab-class="selected.tab" content-class="mt-3" fill>
                <b-tab title="Cita" active>
                    <NuevaCita></NuevaCita>
                </b-tab>
                <b-tab title="Ranking">
                    <Ranking></Ranking>
                </b-tab>
            </b-tabs>
        </b-row>
    </b-container>
</template>

<script>
    import NuevaCita from "@/components/NuevaCita";
    import Ranking from "@/components/Ranking";

    export default {
        name: "Citas",
        components: {Ranking, NuevaCita}
    }
</script>