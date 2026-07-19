import { inject } from 'vue';

export const PhaseVueDialogSymbol = Symbol();

export function useDialog() {
    const PhaseVueDialog = inject(PhaseVueDialogSymbol);

    if (!PhaseVueDialog) {
        throw new Error('No PhaseVue Dialog provided!');
    }

    return PhaseVueDialog;
}
