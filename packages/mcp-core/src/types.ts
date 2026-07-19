export interface PropInfo {
    name: string;
    type: string;
    default?: string;
    description: string;
}

export interface SlotInfo {
    name: string;
    parameters?: string;
    description: string;
}

export interface EmitInfo {
    name: string;
    parameters?: string;
    description: string;
}

export interface MethodInfo {
    name: string;
    parameters?: string;
    returnType?: string;
    description: string;
}

export interface PassThroughInfo {
    name: string;
    description: string;
}

export interface TokenInfo {
    token: string;
    variable: string;
    description: string;
}

export interface StyleInfo {
    class: string;
    description: string;
}

export interface ComponentAPI {
    props: PropInfo[] | null;
    slots?: SlotInfo[] | null;
    templates?: SlotInfo[] | null;
    emits: EmitInfo[] | null;
    methods?: MethodInfo[] | null;
    pt: PassThroughInfo[] | null;
    styles: StyleInfo[] | null;
    tokens: TokenInfo[] | null;
}

export interface Section {
    id: string;
    label: string;
    description: string;
    examples: Record<string, string> | null;
}

export interface Component {
    name: string;
    title: string;
    description: string;
    sections: Section[];
    api: ComponentAPI;
}

export interface Page {
    name: string;
    path: string;
    title: string;
    description: string;
    sections: Section[];
}

export interface ComponentsData {
    version: string;
    generatedAt: string;
    components: Component[];
    pages?: Page[];
}

export interface CustomToolDefinition {
    name: string;
    description: string;
    parameters: Record<string, {
        type: string;
        description: string;
        required?: boolean;
        default?: unknown;
    }>;
    handler: (data: ComponentsData, args: Record<string, unknown>) => Promise<ToolResult>;
}

export interface ToolResult {
    [key: string]: unknown;
    content: Array<{ type: 'text'; text: string }>;
    _meta?: Record<string, unknown>;
    isError?: boolean;
}

export type KeywordMapping = Record<string, string[]>;

export interface PrimeMcpConfig {
    name: string;
    version: string;
    baseUrl: string;
    frameworkName: string;
    slotKey: 'slots' | 'templates';
    codeLanguage: 'javascript' | 'typescript';
    compatibility: string;
    loadComponentsData: () => Promise<ComponentsData>;
    customTools?: CustomToolDefinition[];
}
