<template>
    <DocPTViewer :docs="docs">
        <div class="relative w-full">
            <Dock :model="items">
                <template #itemicon="{ item }">
                    <img v-tooltip.top="item.label" :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            items: [
                {
                    label: 'Finder',
                    icon: '/images/dock/finder.svg'
                },
                {
                    label: 'App Store',
                    icon: '/images/dock/appstore.svg'
                },
                {
                    label: 'Photos',
                    icon: '/images/dock/photos.svg'
                },
                {
                    label: 'Trash',
                    icon: '/images/dock/trash.png'
                }
            ],
            docs: [
                {
                    data: getPTOptions('Dock'),
                    key: 'Dock'
                }
            ]
        };
    }
};
</script>
