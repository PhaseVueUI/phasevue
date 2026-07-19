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
import DataTable from 'phasevue/datatable';
import Column from 'phasevue/column';
import ColumnGroup from 'phasevue/columngroup';   // optional
import Row from 'phasevue/row';                   // optional
`
            }
        };
    }
};
</script>
