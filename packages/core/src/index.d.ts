import { AllowedComponentProps, ComponentCustomProps, ObjectEmitsOptions, VNode, VNodeProps } from 'vue';

declare type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export declare type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> =
    Options extends Array<infer V>
        ? (e: V, ...args: any[]) => void
        : {} extends Options
          ? (e: string, ...args: any[]) => void
          : UnionToIntersection<
                {
                    [key in Event]: Options[key] extends (...args: infer Args) => any ? (e: key, ...args: Args) => void : (e: key, ...args: any[]) => void;
                }[Event]
            >;

export type DefineComponent<P = {}, S = {}, E = {}, M = {}> = {
    new (): {
        $props: P & PublicProps;
        $slots: S;
        $emit: E;
    } & M;
};

/**
 * Custom types
 */
export declare type Booleanish = boolean | 'true' | 'false';

export declare type Numberish = number | string;

export declare type Nullable<T = void> = T | null | undefined;

export declare type PassThrough<T = void> = T | object | undefined;

export declare type DesignToken<T = void> = T | object | undefined;

export declare type DefaultPassThrough<T = void> = T | ((instance?: VNode) => T | undefined) | undefined;

export declare type HintedString<T extends string> = (string & {}) | T;

export declare type NoInfer<T> = [T][T extends any ? 0 : never];

/**
 * Modules
 */
export * from '@phasevueui/core/api';
export * from '@phasevueui/core/base/style';
export * from '@phasevueui/core/basecomponent';
export * from '@phasevueui/core/basecomponent/style';
export * from '@phasevueui/core/basedirective';
export * from '@phasevueui/core/baseeditableholder';
export * from '@phasevueui/core/baseinput';
export * from '@phasevueui/core/config';
export { default as PhaseVue } from '@phasevueui/core/config';
export * from '@phasevueui/core/service';
export * from '@phasevueui/core/useattrselector';
export * from '@phasevueui/core/useid';
export * from '@phasevueui/core/usestyle';
export * from '@phasevueui/core/utils';
