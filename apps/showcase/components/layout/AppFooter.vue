<template>
    <div class="layout-footer">
        <div>
            <span>PhaseVue {{ version }} on Vue 3</span>
        </div>
    </div>
</template>

<script>
import pkg from '@/package.json';

export default {
    data() {
        return {
            version: pkg.version
        };
    }
};
</script>
