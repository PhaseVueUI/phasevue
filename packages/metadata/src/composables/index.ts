import { MetaType, toMeta } from '../index';

export const composables: MetaType[] = toMeta([
    { name: 'usePhaseVue', as: 'usePhaseVue', from: 'phasevue/config' },
    { name: 'useStyle', as: 'useStyle', from: 'phasevue/usestyle' },
    { name: 'useConfirm', as: 'useConfirm', from: 'phasevue/useconfirm' },
    { name: 'useToast', as: 'useToast', from: 'phasevue/usetoast' },
    { name: 'useDialog', as: 'useDialog', from: 'phasevue/usedialog' }
]);
