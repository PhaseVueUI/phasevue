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
import RadioButton from 'phasevue/radiobutton';
import RadioButtonGroup from 'phasevue/radiobuttongroup';
`
            }
        };
    }
};
</script>
