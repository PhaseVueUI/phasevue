import type { PhaseVueConfiguration } from 'phasevue/config';

export interface ConstructsType {
    prefix?: string | undefined;
    name?: (item: any) => string | undefined;
    include?: '*' | Array<string | { name: string; use?: { as: string } }> | ((list: any) => string[] | undefined) | undefined;
    exclude?: '*' | Array<string | { name: string; use?: { as: string } }> | ((list: any) => string[] | undefined) | undefined;
}

export interface ModuleOptions {
    usePhaseVue?: boolean;
    autoImport?: boolean;
    resolvePath?: any;
    /*cssLayerOrder?: string;*/
    importPT?: ImportOptions;
    importTheme?: ImportOptions;
    loadStyles?: boolean;
    options?: PhaseVueOptions;
    components?: ConstructsType;
    directives?: ConstructsType;
    composables?: Omit<ConstructsType, 'prefix'>;
}

export interface PhaseVueOptions extends PhaseVueConfiguration {}

export interface ImportOptions {
    as?: string;
    from: string;
}

export interface ResolvePathOptions {
    name?: string;
    as?: string;
    from: string;
    type?: 'config' | 'component' | 'directive' | 'composable' | 'service' | 'style' | undefined;
}

declare module '@nuxt/schema' {
    interface NuxtConfig {
        phasevue?: ModuleOptions;
    }
    interface NuxtOptions {
        phasevue?: ModuleOptions;
    }
}
