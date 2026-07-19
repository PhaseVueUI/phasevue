<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import TabListStyle from 'phasevue/tablist/style';

export default {
    name: 'BaseTabList',
    extends: BaseComponent,
    props: {},
    style: TabListStyle,
    provide() {
        return {
            $pcTabList: this,
            $parentInstance: this
        };
    }
};
</script>
