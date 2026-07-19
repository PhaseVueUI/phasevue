<template>
    <DocSectionText v-bind="$attrs">
        <p>Edit <i>~/.codeium/windsurf/mcp_config.json</i> to add the PhaseVue MCP server.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggle />
    <p class="doc-section-description">See <a href="https://docs.windsurf.com/windsurf/cascade/mcp" class="font-medium hover:underline text-primary" target="_blank" rel="noopener noreferrer">Windsurf MCP Documentation</a> for more details.</p>
</template>

<script>
export default {
    name: 'WindsurfDoc',
    data() {
        return {
            code: {
                basic: `
{
    "mcpServers": {
        "phasevue": {
            "command": "npx",
            "args": ["-y", "@phasevueui/mcp"]
        }
    }
}
`
            }
        };
    }
};
</script>
