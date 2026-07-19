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
import Terminal from 'phasevue/terminal';
import TerminalService from 'phasevue/terminalservice'
`
            }
        };
    }
};
</script>
