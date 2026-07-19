<template>
    <DocSectionText v-bind="$attrs">
        <p>Include the theme preset via a script element after adding PhaseVue, valid options are Aura, Lara, Nora and Material.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<!-- <script src="https://unpkg.com/@phasevueui/themes/umd/{preset}.js"><\/script> -->

<script src="https://unpkg.com/@phasevueui/themes/umd/aura.js"><\/script>
<script src="https://unpkg.com/@phasevueui/themes/umd/lara.js"><\/script>
<script src="https://unpkg.com/@phasevueui/themes/umd/nora.js"><\/script>
<script src="https://unpkg.com/@phasevueui/themes/umd/material.js"><\/script>
`
            }
        };
    }
};
</script>
