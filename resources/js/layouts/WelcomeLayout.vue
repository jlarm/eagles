<script setup lang="ts">
import { ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { BarChart3, Calendar, HomeIcon, Menu, Trophy, Users, X } from 'lucide-vue-next';
import { dashboard, home, login, register } from '@/routes';

defineProps<{
    canRegister: boolean;
}>();

const page = usePage();
const isMenuOpen = ref(false);

const navItems = [
    { name: 'Home', id: 'home', icon: HomeIcon, href: home() },
    { name: 'Roster', id: 'roster', icon: Users, href: undefined },
    { name: 'Schedule', id: 'schedule', icon: Calendar, href: undefined },
    { name: 'Results', id: 'results', icon: BarChart3, href: undefined },
];
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <nav class="sticky top-0 z-50 bg-primary text-white shadow-lg">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-20 justify-between">
                    <div class="flex items-center">
                        <Link :href="home()" class="flex cursor-pointer items-center gap-2">
                            <span class="font-display text-2xl font-bold tracking-tighter">EAGLES<span class="text-secondary">ELITE</span></span>
                        </Link>
                    </div>

                    <div class="hidden items-center space-x-8 md:flex">
                        <template v-for="navItem in navItems" :key="navItem.id">
                            <Link
                                v-if="navItem.href"
                                :href="navItem.href"
                                :class="page.url === navItem.href.url ? 'border-b-2 border-secondary text-secondary' : 'text-white'"
                                class="font-display text-lg font-semibold uppercase tracking-widest transition-colors hover:text-secondary"
                            >{{ navItem.name }}</Link>
                            <span
                                v-else
                                class="cursor-not-allowed font-display text-lg font-semibold uppercase tracking-widest text-white/50"
                            >{{ navItem.name }}</span>
                        </template>

                        <Link
                            v-if="page.props.auth.user"
                            :href="dashboard()"
                            class="rounded-sm border border-white/30 px-4 py-1.5 text-sm transition-colors hover:border-white"
                        >Dashboard</Link>
                        <template v-else>
                            <Link :href="login()" class="text-sm transition-colors hover:text-secondary">Log in</Link>
                            <Link
                                v-if="canRegister"
                                :href="register()"
                                class="rounded-sm border border-white/30 px-4 py-1.5 text-sm transition-colors hover:border-white"
                            >Register</Link>
                        </template>
                    </div>

                    <div class="flex items-center md:hidden">
                        <button class="text-white hover:text-secondary" @click="isMenuOpen = !isMenuOpen">
                            <X v-if="isMenuOpen" class="h-6 w-6" />
                            <Menu v-else class="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            <div v-if="isMenuOpen" class="border-t border-white/10 bg-primary md:hidden">
                <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    <template v-for="navItem in navItems" :key="navItem.id">
                        <Link
                            v-if="navItem.href"
                            :href="navItem.href"
                            :class="page.url === navItem.href.url ? 'text-secondary' : 'text-white'"
                            class="block px-3 py-2 font-display text-lg font-semibold uppercase tracking-widest"
                            @click="isMenuOpen = false"
                        >{{ navItem.name }}</Link>
                        <span
                            v-else
                            class="block cursor-not-allowed px-3 py-2 font-display text-lg font-semibold uppercase tracking-widest text-white/50"
                        >{{ navItem.name }}</span>
                    </template>
                </div>
            </div>
        </nav>

        <main class="flex-grow">
            <slot />
        </main>

        <footer class="border-t border-white/10 bg-primary py-12 text-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
                    <div>
                        <div class="mb-6 flex items-center gap-2">
                            <Trophy class="h-6 w-6 text-secondary" />
                            <span class="font-display text-xl font-bold tracking-tighter">EAGLES<span class="text-secondary">ELITE</span></span>
                        </div>
                        <p class="text-sm leading-relaxed text-neutral-warm">
                            The official home of Eagles Elite Baseball. Dedicated to excellence on and off the diamond.
                        </p>
                    </div>
                    <div>
                        <h4 class="mb-6 font-display text-lg text-secondary">Quick Links</h4>
                        <ul class="space-y-3 text-sm text-neutral-warm">
                            <li><span class="text-neutral-warm/50">Upcoming Games</span></li>
                            <li><span class="text-neutral-warm/50">Team Roster</span></li>
                            <li><span class="text-neutral-warm/50">Fan Zone</span></li>
                            <li><span class="text-neutral-warm/50">Sponsorships</span></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="mb-6 font-display text-lg text-secondary">Contact Us</h4>
                        <p class="text-sm text-neutral-warm">
                            123 Stadium Way<br />
                            Baseball City, ST 12345<br />
                            info@eagleselite.com
                        </p>
                    </div>
                </div>
                <div class="mt-12 border-t border-white/10 pt-8 text-center text-xs uppercase tracking-widest text-neutral-warm">
                    © 2026 Eagles Elite Baseball. All Rights Reserved.
                </div>
            </div>
        </footer>
    </div>
</template>
