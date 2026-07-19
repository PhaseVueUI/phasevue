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
import Tabs from 'phasevue/tabs';
import TabList from 'phasevue/tablist';
import Tab from 'phasevue/tab';
import TabPanels from 'phasevue/tabpanels';
import TabPanel from 'phasevue/tabpanel';
`
            }
        };
    }
};
</script>
