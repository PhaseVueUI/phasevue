<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import TagStyle from 'phasevue/tag/style';

export default {
    name: 'BaseTag',
    extends: BaseComponent,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    style: TagStyle,
    provide() {
        return {
            $pcTag: this,
            $parentInstance: this
        };
    }
};
</script>
