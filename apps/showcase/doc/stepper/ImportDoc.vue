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
import Stepper from 'phasevue/stepper';
import StepList from 'phasevue/steplist';
import StepPanels from 'phasevue/steppanels';
import StepItem from 'phasevue/stepitem';
import Step from 'phasevue/step';
import StepPanel from 'phasevue/steppanel';
`
            }
        };
    }
};
</script>
