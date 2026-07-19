import { inject } from 'vue';

export const PhaseVueConfirmSymbol = Symbol();

export function useConfirm() {
    const PhaseVueConfirm = inject(PhaseVueConfirmSymbol);

    if (!PhaseVueConfirm) {
        throw new Error('No PhaseVue Confirmation provided!');
    }

    return PhaseVueConfirm;
}
