<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import IconFieldStyle from 'phasevue/iconfield/style';

export default {
    name: 'BaseIconField',
    extends: BaseComponent,
    style: IconFieldStyle,
    provide() {
        return {
            $pcIconField: this,
            $parentInstance: this
        };
    }
};
</script>
