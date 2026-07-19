<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import BreadcrumbStyle from 'phasevue/breadcrumb/style';

export default {
    name: 'BaseBreadcrumb',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        home: {
            type: null,
            default: null
        }
    },
    style: BreadcrumbStyle,
    provide() {
        return {
            $pcBreadcrumb: this,
            $parentInstance: this
        };
    }
};
</script>
