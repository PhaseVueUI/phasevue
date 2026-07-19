<template>
    <DocSectionText v-bind="$attrs">
        <p>Second parameter of the use function can be used to initiate the locale during PhaseVue installation.</p>

        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />

        <p>The locale configuration is reactive so that any changes are instantly reflected in the UI. Suppose you are doing a multi language application and need to change the language dynamically.</p>

        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
app.use(PhaseVue, {
    locale: {
        accept: 'Aceptar',
        reject: 'Rechazar',
        //...
    }
});
`
            },
            code2: {
                basic: `
import { defineComponent, onMounted } from "vue";
import { usePhaseVue } from "phasevue/config";

export default defineComponent({
    setup() {
        const changeToSpanish = () => {
            const phasevue = usePhaseVue();
            phasevue.config.locale.accept = "Aceptar";
            phasevue.config.locale.reject = "Rechazar";
        }

        onMounted(() => {
            changeToSpanish();
        })
    }
});
`
            }
        };
    }
};
</script>
