<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import FeaturedSection from '@/components/welcome/FeaturedSection.vue';
import HeroSection from '@/components/welcome/HeroSection.vue';
import WidgetsGrid from '@/components/welcome/WidgetsGrid.vue';
import WelcomeLayout from '@/layouts/WelcomeLayout.vue';

withDefaults(
    defineProps<{
        canRegister: boolean;
    }>(),
    {
        canRegister: false,
    },
);
</script>

<template>
    <Head title="Welcome" />

    <WelcomeLayout :can-register="canRegister">
        <HeroSection />
        <WidgetsGrid />
        <FeaturedSection />
    </WelcomeLayout>
</template>
