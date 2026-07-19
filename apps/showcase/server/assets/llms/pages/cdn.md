# Install PhaseVue with CDN

Setting up PhaseVue in a project using CDN.

## CreateApp

Create an app container element and setup the application using createApp .

```vue
<body>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>

    <div id="app">
    </div>

    <script>
        const { createApp, ref } = Vue;

        const app = createApp({
            setup() {

            }
        });

        app.mount('#app');
    <\/script>
</body>
```

## Example

A complete example using a PhaseVue DatePicker. You can also view this sample live at Stackblitz .

```vue
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>PhaseVue + CDN</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
    </head>
    <body>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
        <script src="https://unpkg.com/phasevue/umd/phasevue.min.js"><\/script>
        <script src="https://unpkg.com/@phasevueui/themes/umd/aura.js"><\/script>

        <div id="app">
            <p-datepicker v-model="date"></p-datepicker>
            <br /><br />
            {{ date }}
        </div>

        <script>
            const { createApp, ref } = Vue;

            const app = createApp({
                setup() {
                const date = ref();

                return {
                    date
                };
                },
            });

            app.use(PhaseVue.Config, {
                theme: {
                    preset: PrimeUIX.Themes.Aura
                }
            });

            app.component('p-datepicker', PhaseVue.DatePicker);

            app.mount('#app');
        <\/script>
    </body>
</html>
```

## Plugin

PhaseVue plugin is required to be installed as an application plugin to set up the default configuration .

```vue
app.use(PhaseVue.Config);
```

## Script

You can use PhaseVue and Vue.js from a CDN with a script tag. This approach does not involve any build step, and is suitable for enhancing static HTML. This guide uses unpkg however other providers such as jsdeliver and cdnjs can also be used.

```vue
https://unpkg.com/vue@3/dist/vue.global.js https://unpkg.com/phasevue/umd/phasevue.min.js https://unpkg.com/@phasevueui/themes/umd/aura.js // see theming for alternatives
```

## Theming

Include the theme preset via a script element after adding PhaseVue, valid options are Aura, Lara, Nora and Material.

```vue
<!-- <script src="https://unpkg.com/@phasevueui/themes/umd/{preset}.js"><\/script> -->

<script src="https://unpkg.com/@phasevueui/themes/umd/aura.js"><\/script>
<script src="https://unpkg.com/@phasevueui/themes/umd/lara.js"><\/script>
<script src="https://unpkg.com/@phasevueui/themes/umd/nora.js"><\/script>
<script src="https://unpkg.com/@phasevueui/themes/umd/material.js"><\/script>
```
