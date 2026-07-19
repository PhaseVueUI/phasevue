import { MetaType, toMeta } from '../index';

export const directives: MetaType[] = toMeta([
    { name: 'badge', as: 'BadgeDirective', from: 'phasevue/badgedirective' },
    { name: 'tooltip', as: 'Tooltip', from: 'phasevue/tooltip' },
    { name: 'ripple', as: 'Ripple', from: 'phasevue/ripple' },
    { name: 'styleclass', as: 'StyleClass', from: 'phasevue/styleclass' },
    { name: 'focustrap', as: 'FocusTrap', from: 'phasevue/focustrap' },
    { name: 'animateonscroll', as: 'AnimateOnScroll', from: 'phasevue/animateonscroll' },
    { name: 'keyfilter', as: 'KeyFilter', from: 'phasevue/keyfilter' }
]);
