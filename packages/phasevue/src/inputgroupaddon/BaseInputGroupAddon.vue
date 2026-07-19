<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import InputGroupAddonStyle from 'phasevue/inputgroupaddon/style';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $pcInputGroupAddon: this,
            $parentInstance: this
        };
    }
};
</script>
