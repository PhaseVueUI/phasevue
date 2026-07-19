<template>
    <DocSectionText v-bind="$attrs">
        <p>Configure the module to use a theme like Aura.</p>
        <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
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
            theme: {
                preset: Aura
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
