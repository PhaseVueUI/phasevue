# PhaseVue Forms Core

Framework-agnostic form validation utilities for PhaseVue packages.

The package provides schema resolvers for Zod, Yup, Joi, Valibot and Superstruct. Install the validator you use separately and import its resolver from the matching subpath.

```ts
import { zodResolver } from '@phasevueui/forms-core/resolvers/zod';
```

The Vue components and Vue state-management composable are provided by `@phasevueui/forms`.
