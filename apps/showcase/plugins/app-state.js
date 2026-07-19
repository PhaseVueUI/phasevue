import AppTheme from '@/themes/app-theme';
import PhaseVue from 'phasevue/config';
import { reactive } from 'vue';

const $appState = {
    install: (Vue) => {
        Vue.config.globalProperties.$appState = reactive({
            preset: 'Aura',
            primary: 'noir',
            surface: null,
            darkTheme: false,
            codeSandbox: false,
            sourceType: 'options-api',
            newsActive: false,
            announcement: null,
            storageKey: 'phasevue'
        });
    }
};

export default defineNuxtPlugin(async (nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();

    nuxtApp.vueApp.use($appState);

    if (runtimeConfig.public.DEV_ENV === 'hot') {
        nuxtApp.vueApp.use(PhaseVue, {
            theme: AppTheme
        });
    }
});
