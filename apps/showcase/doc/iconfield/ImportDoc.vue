<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import IconField from 'phasevue/iconfield';
import InputIcon from 'phasevue/inputicon';
`
            }
        };
    }
};
</script>
