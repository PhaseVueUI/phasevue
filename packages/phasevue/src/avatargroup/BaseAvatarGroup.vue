<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import AvatarGroupStyle from 'phasevue/avatargroup/style';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $pcAvatarGroup: this,
            $parentInstance: this
        };
    }
};
</script>
