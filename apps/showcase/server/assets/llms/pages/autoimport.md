# Auto Import

On-demand PhaseVue components with auto imports and tree-shaking.

## Example

A complete example using PhaseVue with auto imports is available at the playground .

## Overview

PhaseVue components need to be imported and configured individually. In the next section, we'll cleanup the code using auto imports.

```vue
import { createApp } from "vue"; import PhaseVue from "phasevue/config"; import InputText from 'phasevue/inputtext'; import Button from 'phasevue/button'; import App from './App.vue' const app = createApp(App); app.use(PhaseVue);
app.component('InputText', InputText); app.component('Button', Button);
```

## Unplugin

The unplugin-vue-components library can automatically import and register PhaseVue components with the help of @phasevueui/auto-import-resolver . Begin with installing the packages as dev dependencies. Next step would be adding the PhaseVueResolver at vite.config using the Components plugin. That's it, now the initialization code can be refactored as the following. For configuration like namespacing, visit the official documentation .
