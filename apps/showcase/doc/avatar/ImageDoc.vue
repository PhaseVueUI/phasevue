<template>
    <DocSectionText v-bind="$attrs">
        <p>Use the <i>image</i> property to display an image as an Avatar.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap gap-8">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <OverlayBadge value="4" severity="danger" class="inline-flex">
                    <Avatar class="p-overlay-badge" image="/images/organization/walter.jpg" size="xlarge" />
                </OverlayBadge>
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="/images/avatar/gravatar.png" class="flex items-center justify-center mr-2" size="xlarge" />
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Avatar image="/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
<Avatar image="/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
<Avatar image="/images/avatar/onyamalimba.png" shape="circle" />

<OverlayBadge value="4" severity="danger" class="inline-flex">
    <Avatar class="p-overlay-badge" image="/images/organization/walter.jpg" size="xlarge" />
</OverlayBadge>

<Avatar image="/images/avatar/gravatar.png" class="flex items-center justify-center mr-2" size="xlarge" />
`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap gap-8">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <OverlayBadge value="4" severity="danger" class="inline-flex">
                    <Avatar class="p-overlay-badge" image="/images/organization/walter.jpg" size="xlarge" />
                </OverlayBadge>
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="/images/avatar/gravatar.png" class="flex items-center justify-center mr-2" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap gap-8">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <OverlayBadge value="4" severity="danger" class="inline-flex">
                    <Avatar class="p-overlay-badge" image="/images/organization/walter.jpg" size="xlarge" />
                </OverlayBadge>
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="/images/avatar/gravatar.png" class="flex items-center justify-center mr-2" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script setup>

<\/script>
`
            }
        };
    }
};
</script>
