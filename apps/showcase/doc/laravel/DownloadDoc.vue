<template>
    <DocSectionText v-bind="$attrs">
        <p>PhaseVue is available for download on <a href="https://www.npmjs.com/package/phasevue">npm registry</a>.</p>
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

# Using yarn
yarn add phasevue @primeuix/themes

# Using pnpm
pnpm add phasevue @primeuix/themes
`
            }
        };
    }
};
</script>
