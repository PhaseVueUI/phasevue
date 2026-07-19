<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PhaseVue is available for download on <a href="https://www.npmjs.com/package/phasevue">npm registry</a> along with the official
            <a href="https://www.npmjs.com/package/@phasevueui/nuxt-module" target="_blank" rel="noopener noreferrer">@phasevueui/nuxt-module</a>.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install phasevue @primeuix/themes
npm install --save-dev @phasevueui/nuxt-module

# Using yarn
yarn add phasevue @primeuix/themes
yarn add --dev @phasevueui/nuxt-module

# Using pnpm
pnpm add phasevue @primeuix/themes
pnpm add -D @phasevueui/nuxt-module
`
            }
        };
    }
};
</script>
