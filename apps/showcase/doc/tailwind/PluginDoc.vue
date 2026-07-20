<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <a href="https://www.npmjs.com/package/tailwind-phasevue" target="_blank" rel="noopener noreferrer">tailwind-phasevue</a> is the official PhaseVue plugin to provide first class integration between PhaseVue and Tailwind CSS. It is
            designed to work both in styled and unstyled modes. In styled mode, for instance the semantic colors such as primary and surfaces are provided as Tailwind utilities e.g. <i>bg-primary</i>, <i>text-surface-500</i>, <i>text-muted-color</i>.
        </p>
        <p>
            If you haven't already done so, start by integrating Tailwind into your project. Detailed steps for this process can be found in the Tailwind <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">documentation</a>.
            After successfully installing Tailwind, proceed with the installation of the PhaseVue plugin.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <h3>Tailwind v4</h3>
        <p>In the CSS file that contains the tailwindcss import, add the <i>tailwind-phasevue</i> import as well.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
npm i tailwind-phasevue
`
            },
            code2: {
                basic: `
@import "tailwindcss";
@import "tailwind-phasevue";
`
            }
        };
    }
};
</script>
