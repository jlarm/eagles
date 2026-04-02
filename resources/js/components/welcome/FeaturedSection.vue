<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
    <section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center gap-12 md:flex-row">
            <div class="flex-1 space-y-6">
                <h2 class="text-4xl font-bold tracking-tighter md:text-5xl">
                    BEYOND THE <span class="text-secondary">DIAMOND</span>
                </h2>
                <p class="text-lg leading-relaxed text-neutral-warm">
                    At Eagles Elite Baseball, we believe in building more than just athletes. Our program focuses on leadership, community service, and academic excellence. We're proud to represent our city and inspire the next generation of ballplayers.
                </p>
                <div class="grid grid-cols-2 gap-6">
                    <div class="space-y-1">
                        <div class="font-display text-3xl font-bold text-secondary">15+</div>
                        <div class="text-sm uppercase tracking-widest">Championships</div>
                    </div>
                    <div class="space-y-1">
                        <div class="font-display text-3xl font-bold text-secondary">250+</div>
                        <div class="text-sm uppercase tracking-widest">Alumni</div>
                    </div>
                </div>
                <Button size="lg" class="uppercase tracking-widest">Our Mission</Button>
            </div>
            <div class="w-full flex-1">
                <div class="relative aspect-video overflow-hidden rounded-lg">
                    <img
                        src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop"
                        alt="Team Practice"
                        class="h-full w-full object-cover"
                        referrerpolicy="no-referrer"
                    />
                    <div class="absolute inset-0 bg-primary/20" />
                </div>
            </div>
        </div>
    </section>
</template>
