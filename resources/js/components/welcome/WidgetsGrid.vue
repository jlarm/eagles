<script setup lang="ts">
import { ArrowRight, Calendar, Clock, MapPin, Trophy } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NextGame {
    homeTeam: string;
    awayTeam: string;
    date: string;
    location: string;
}

interface LatestResult {
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    runs: number;
    hits: number;
    errors: number;
    isWin: boolean;
}

interface NewsItem {
    date: string;
    headline: string;
}

withDefaults(
    defineProps<{
        nextGame: NextGame;
        latestResult: LatestResult;
        news: NewsItem[];
    }>(),
    {
        nextGame: () => ({
            homeTeam: 'Eagles',
            awayTeam: 'Titans',
            date: 'Saturday, April 4th @ 7:00 PM',
            location: 'Eagles Memorial Stadium, Field 1',
        }),
        latestResult: () => ({
            homeTeam: 'Eagles',
            awayTeam: 'Titans',
            homeScore: 8,
            awayScore: 3,
            runs: 8,
            hits: 12,
            errors: 1,
            isWin: true,
        }),
        news: () => [
            { date: 'March 30, 2026', headline: 'Eagles Announce New Youth Summer Camp Dates' },
            { date: 'March 28, 2026', headline: 'Ace Pitcher Miller Signs Extension Through 2028' },
            { date: 'March 25, 2026', headline: 'New Stadium Concessions Menu Revealed' },
        ],
    },
);
</script>

<template>
    <section class="relative z-20 -mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card class="border-l-4 border-l-secondary">
                <CardHeader>
                    <div class="flex items-start justify-between">
                        <CardTitle class="flex items-center gap-2 text-primary">
                            <Calendar class="h-5 w-5 text-secondary" />
                            NEXT UP
                        </CardTitle>
                        <span class="rounded-sm bg-secondary px-2 py-0.5 text-xs uppercase tracking-widest text-white">HOME</span>
                    </div>
                </CardHeader>
                <CardContent class="space-y-6">
                    <div class="flex items-center justify-between py-4">
                        <div class="flex-1 text-center">
                            <div class="font-display text-xl">{{ nextGame.homeTeam.toUpperCase() }}</div>
                            <div class="text-xs text-neutral-warm">HOME</div>
                        </div>
                        <div class="font-display text-2xl text-neutral-warm">VS</div>
                        <div class="flex-1 text-center">
                            <div class="font-display text-xl">{{ nextGame.awayTeam.toUpperCase() }}</div>
                            <div class="text-xs text-neutral-warm">AWAY</div>
                        </div>
                    </div>

                    <div class="space-y-3 border-t border-neutral-warm/30 pt-4">
                        <div class="flex items-center gap-3 text-sm">
                            <Clock class="h-4 w-4 text-secondary" />
                            <span>{{ nextGame.date }}</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm">
                            <MapPin class="h-4 w-4 text-secondary" />
                            <span>{{ nextGame.location }}</span>
                        </div>
                    </div>

                    <Button class="w-full uppercase tracking-widest">
                        Get Tickets <ArrowRight class="ml-2 h-4 w-4" />
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle class="flex items-center gap-2 text-primary">
                        <Trophy class="h-5 w-5 text-secondary" />
                        LATEST RESULT
                    </CardTitle>
                </CardHeader>
                <CardContent class="space-y-6">
                    <div class="bg-primary/5 p-4 text-center">
                        <span
                            :class="latestResult.isWin ? 'bg-win/10 text-win' : 'bg-loss/10 text-loss'"
                            class="mb-2 inline-block rounded-sm px-2 py-0.5 text-xs font-semibold uppercase tracking-widest"
                        >
                            FINAL - {{ latestResult.isWin ? 'WIN' : 'LOSS' }}
                        </span>
                        <div class="flex items-center justify-center gap-8">
                            <div class="text-center">
                                <div class="font-display text-4xl font-bold">{{ latestResult.homeScore }}</div>
                                <div class="text-xs uppercase tracking-widest">{{ latestResult.homeTeam }}</div>
                            </div>
                            <div class="font-display text-2xl text-neutral-warm">-</div>
                            <div class="text-center">
                                <div class="font-display text-4xl font-bold">{{ latestResult.awayScore }}</div>
                                <div class="text-xs uppercase tracking-widest">{{ latestResult.awayTeam }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 gap-2 text-center text-xs uppercase tracking-tighter">
                        <div class="border border-neutral-warm/30 p-2">
                            <div class="mb-1 text-neutral-warm">Runs</div>
                            <div class="font-bold">{{ latestResult.runs }}</div>
                        </div>
                        <div class="border border-neutral-warm/30 p-2">
                            <div class="mb-1 text-neutral-warm">Hits</div>
                            <div class="font-bold">{{ latestResult.hits }}</div>
                        </div>
                        <div class="border border-neutral-warm/30 p-2">
                            <div class="mb-1 text-neutral-warm">Errors</div>
                            <div class="font-bold">{{ latestResult.errors }}</div>
                        </div>
                    </div>

                    <Button variant="outline" class="w-full uppercase tracking-widest">
                        Full Box Score
                    </Button>
                </CardContent>
            </Card>

            <Card class="border-none bg-secondary text-white">
                <CardHeader>
                    <CardTitle class="text-white">TEAM NEWS</CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                    <div v-for="item in news" :key="item.date" class="space-y-1">
                        <div class="text-xs uppercase tracking-widest text-white/80">{{ item.date }}</div>
                        <h4 class="font-display text-lg leading-tight">{{ item.headline }}</h4>
                    </div>
                    <Button variant="outline" class="w-full border-white uppercase tracking-widest text-white hover:bg-white hover:text-secondary">
                        Read All News
                    </Button>
                </CardContent>
            </Card>
        </div>
    </section>
</template>
