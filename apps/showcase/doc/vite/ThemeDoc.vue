<template>
    <DocSectionText v-bind="$attrs">
        <p>Configure PhaseVue to use a theme like Aura.</p>
        <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from 'vue';
import PhaseVue from 'phasevue/config';
import Aura from '@phasevueui/themes/aura';

const app = createApp(App);
app.use(PhaseVue, {
    theme: {
        preset: Aura
    }
});
`
            }
        };
    }
};
</script>
