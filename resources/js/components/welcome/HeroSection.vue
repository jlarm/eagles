<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
    <section class="relative flex h-[70vh] items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2070&auto=format&fit=crop"
                alt="Baseball Stadium"
                class="h-full w-full object-cover"
                referrerpolicy="no-referrer"
            />
            <div class="absolute inset-0 bg-primary/70" />
        </div>

        <div class="relative z-10 px-4 text-center">
            <span class="mb-4 inline-block rounded-sm border border-secondary/50 px-4 py-1 text-sm uppercase tracking-[0.2em] text-secondary">
                Est. 2024
            </span>
            <h1 class="mb-6 text-6xl font-bold tracking-tighter text-white md:text-8xl">
                Eagles ELITE <span class="text-secondary">BASEBALL</span>
            </h1>
            <p class="mx-auto mb-8 max-w-2xl text-xl font-light tracking-wide text-neutral-warm">
                Building champions on and off the field through quality instruction, teamwork, and character development.
            </p>
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" class="bg-secondary uppercase tracking-widest text-white hover:bg-secondary/90">
                    View Schedule
                </Button>
                <Button size="lg" variant="outline" class="border-white uppercase tracking-widest text-white hover:bg-white hover:text-primary">
                    Meet the Team
                </Button>
            </div>
        </div>
    </section>
</template>
