<template>
    <DocSectionText v-bind="$attrs">
        <p>PhaseVue components need to be imported and configured individually. In the next section, we'll cleanup the code using auto imports.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from "vue";
import PhaseVue from "phasevue/config";
import InputText from 'phasevue/inputtext';
import Button from 'phasevue/button';
import App from './App.vue'
const app = createApp(App);

app.use(PhaseVue);
app.component('InputText', InputText);
app.component('Button', Button);
`
            }
        };
    }
};
</script>
