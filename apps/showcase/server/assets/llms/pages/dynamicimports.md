# Dynamic Imports

Dynamic imports enable the loading of multiple items as needed, streamlining the import process.

## Overview

With @phasevueui/icons for icons and phasevue for components (except Editor and Chart), multiple items can be imported together.

```vue
import { Button, InputText } from 'phasevue'; import { SearchIcon, BellIcon } from '@phasevueui/icons';

<script setup>
import * as PhaseVue from 'phasevue';

const items = [
    { as: 'Button', class: 'my-button-class' },
    { as: 'InputText', class: 'my-inputtext-class' }
};
</script>

<template>
    <component v-for="item of items" :is="PhaseVue[item.as]" :class="item.class" />
</template>
```
