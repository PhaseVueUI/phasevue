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
import Accordion from 'phasevue/accordion';
import AccordionPanel from 'phasevue/accordionpanel';
import AccordionHeader from 'phasevue/accordionheader';
import AccordionContent from 'phasevue/accordioncontent';
`
            }
        };
    }
};
</script>
