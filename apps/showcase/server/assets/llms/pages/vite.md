# Install PhaseVue with Vite

Setting up PhaseVue in a Vite project.

## Download

PhaseVue is available for download on npm registry .

```vue
# Using npm npm install phasevue @primeuix/themes # Using yarn yarn add phasevue @primeuix/themes # Using pnpm pnpm add phasevue @primeuix/themes
```

## Examples

We've created various samples for the popular options in the Vue ecosystem. Visit the phasevue-examples repository for more samples including vite-quickstart and vite-ts-quickstart .

## Next Steps

Welcome to the Prime UI Ecosystem! Once you have PhaseVue up and running, we recommend exploring the following resources to gain a deeper understanding of the library. Global configuration Auto imports with tree-shaking Customization of styles Pass through attributes Getting support

## Plugin

PhaseVue plugin is required to be installed as an application plugin to set up the default configuration . The plugin is lightweight, and only utilized for configuration purposes.

```vue
import { createApp } from 'vue'; import PhaseVue from 'phasevue/config'; const app = createApp(App); app.use(PhaseVue);
```

## Plugin

Configure PhaseVue to use a theme like Aura.

```vue
import { createApp } from 'vue'; import PhaseVue from 'phasevue/config'; import Aura from '@primeuix/themes/aura'; const app = createApp(App); app.use(PhaseVue, { theme: { preset: Aura } });
```

## Verify

Verify your setup by adding a component such as Button . Each component can be imported and registered individually so that you only include what you use for bundle optimization. Import path is available in the documentation of the corresponding component.

```vue
import Button from "phasevue/button" const app = createApp(App); app.component('Button', Button);
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Button label="Verify" />
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Video

Watch the short video tutorial from Çağatay Çivici to setup PhaseVue in styled mode with Create-Vue .
