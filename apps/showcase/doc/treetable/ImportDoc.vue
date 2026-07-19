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
import TreeTable from 'phasevue/treetable';
import Column from 'phasevue/column';
`
            }
        };
    }
};
</script>
