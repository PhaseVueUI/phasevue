<template>
    <DocPTViewer :docs="docs">
        <ImageCompare style="width: 728px; height: 410px">
            <template #left>
                <img src="/images/compare/island1.jpg" />
            </template>
            <template #right>
                <img src="/images/compare/island2.jpg" />
            </template>
        </ImageCompare>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('ImageCompare'),
                    key: 'ImageCompare'
                }
            ]
        };
    }
};
</script>
