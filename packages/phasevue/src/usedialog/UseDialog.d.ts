import type { DynamicDialogInstance, DynamicDialogOptions } from 'phasevue/dynamicdialogoptions';

export declare function useDialog(): {
    open: (content: any, options?: DynamicDialogOptions) => DynamicDialogInstance;
};
