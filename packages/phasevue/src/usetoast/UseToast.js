import { inject } from 'vue';

export const PhaseVueToastSymbol = Symbol();

export function useToast() {
    const PhaseVueToast = inject(PhaseVueToastSymbol);

    if (!PhaseVueToast) {
        throw new Error('No PhaseVue Toast provided!');
    }

    return PhaseVueToast;
}
