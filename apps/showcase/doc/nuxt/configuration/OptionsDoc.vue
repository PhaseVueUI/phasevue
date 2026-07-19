<template>
    <DocSectionText v-bind="$attrs">
        <p>Main configuration settings of PhaseVue, refer to the <PhaseVueNuxtLink to="/configuration">configuration</PhaseVueNuxtLink> documentation for details.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Aura from '@phasevueui/themes/aura';

export default defineNuxtConfig({
    modules: [
        '@phasevueui/nuxt-module'
    ],
    phasevue: {
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'system',
                    cssLayer: false
                }
            }
        }
    }
})
`
            }
        };
    }
};
</script>
