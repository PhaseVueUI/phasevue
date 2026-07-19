<template>
    <DocSectionText v-bind="$attrs">
        <p>Configuration is managed by the <i>PhaseVue</i> instance imported from <i>phasevue/config</i>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import PhaseVue from 'phasevue/config';
const app = createApp(App);

app.use(PhaseVue, { /* options */ });
`
            }
        };
    }
};
</script>
