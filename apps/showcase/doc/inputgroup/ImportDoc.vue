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
import InputGroup from 'phasevue/inputgroup';
import InputGroupAddon from 'phasevue/inputgroupaddon';
`
            }
        };
    }
};
</script>
