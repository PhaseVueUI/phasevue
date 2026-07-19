import { ComponentsData, runPrimeMcpServer } from '@phasevueui/mcp-core';
import ComponentJson from '../data/components.json';
import pkg from '../package.json';

// Vue-specific composables data
const composables = [
    {
        name: 'useToast',
        description: 'Programmatically display toast messages',
        related_component: 'Toast',
        usage: `import { useToast } from 'phasevue/usetoast';\nconst toast = useToast();`,
        example: `toast.add({ severity: 'success', summary: 'Success', detail: 'Message', life: 3000 });`
    },
    {
        name: 'useConfirm',
        description: 'Programmatically display confirmation dialogs',
        related_component: 'ConfirmDialog',
        usage: `import { useConfirm } from 'phasevue/useconfirm';\nconst confirm = useConfirm();`,
        example: `confirm.require({ message: 'Are you sure?', header: 'Confirm', accept: () => {} });`
    },
    {
        name: 'useDialog',
        description: 'Programmatically create dynamic dialogs',
        related_component: 'DynamicDialog',
        usage: `import { useDialog } from 'phasevue/usedialog';\nconst dialog = useDialog();`,
        example: `dialog.open(MyComponent, { props: { header: 'Dialog' } });`
    },
    {
        name: 'useStyle',
        description: 'Inject custom styles',
        related_component: null,
        usage: `import { useStyle } from 'phasevue/usestyle';\nuseStyle(css, { name: 'my-styles' });`,
        example: `useStyle('.my-class { color: red; }', { name: 'custom' });`
    },
    {
        name: 'usePhaseVue',
        description: 'Access PhaseVue configuration',
        related_component: null,
        usage: `import { usePhaseVue } from 'phasevue/config';\nconst phasevue = usePhaseVue();`,
        example: `phasevue.config.ripple = true;`
    }
];

// Run PhaseVue MCP server with core + Vue-specific tools
runPrimeMcpServer({
    name: '@phasevueui/mcp',
    version: pkg.version,
    baseUrl: 'https://phasevue.org',
    frameworkName: 'PhaseVue',
    slotKey: 'slots',
    codeLanguage: 'javascript',
    compatibility: 'Vue 3.x',
    loadComponentsData: async () => ComponentJson as ComponentsData,
    customTools: [
        // Vue-specific: list_composables
        {
            name: 'list_composables',
            description: 'List all available PhaseVue composables with their descriptions',
            parameters: {},
            handler: async () => {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: JSON.stringify(
                                {
                                    total: composables.length,
                                    composables: composables.map((c) => ({
                                        name: c.name,
                                        description: c.description,
                                        related_component: c.related_component
                                    }))
                                },
                                null,
                                2
                            )
                        }
                    ]
                };
            }
        },
        // Vue-specific: get_composable
        {
            name: 'get_composable',
            description: 'Get detailed information about a specific PhaseVue composable',
            parameters: {
                name: {
                    type: 'string',
                    description: "Composable name (e.g., 'useToast', 'useConfirm')",
                    required: true
                }
            },
            handler: async (_data: ComponentsData, args: Record<string, unknown>) => {
                const nameArg = args?.name as string | undefined;

                if (!nameArg) {
                    return {
                        content: [
                            {
                                type: 'text' as const,
                                text: `Please provide a composable name. Available: ${composables.map((c) => c.name).join(', ')}`
                            }
                        ]
                    };
                }

                const name = nameArg.toLowerCase();
                const composable = composables.find((c) => c.name.toLowerCase() === name);

                if (!composable) {
                    return {
                        content: [
                            {
                                type: 'text' as const,
                                text: `Composable "${nameArg}" not found. Available: ${composables.map((c) => c.name).join(', ')}`
                            }
                        ]
                    };
                }

                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: JSON.stringify(composable, null, 2)
                        }
                    ]
                };
            }
        }
    ]
});
