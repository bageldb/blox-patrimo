<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { defineBlock } from '@bagelink/blox'
import { Btn, TextInput, defineSchema, $ } from '@bagelink/vue'
import { topics } from '@/content/site'

interface Props {
	eyebrow?: string
	title?: string
	subtitle?: string
}

const schema = defineSchema<Props>({
	eyebrow: $.text('Occhiello', { default: 'Guide verificate da professionisti' }),
	title: $.text('Titolo', {
		required: true,
		default: 'Eredità, debiti, genitori anziani, separazione: cosa fare, passo dopo passo.',
	}),
	subtitle: $.textarea('Sottotitolo', {
		default: 'Risposte chiare alle domande pratiche su soldi, beni e burocrazia, scritte e controllate da notai, avvocati e commercialisti.',
	}),
})

defineBlock({
	name: 'HomeHero',
	label: 'Apertura',
	icon: 'menu_book',
	category: 'hero',
	order: 10,
	description: 'Titolo, indice dei percorsi e ricerca.',
	schema,
	defaults: {
		eyebrow: 'Guide verificate da professionisti',
		title: 'Eredità, debiti, genitori anziani, separazione: cosa fare, passo dopo passo.',
		subtitle: 'Risposte chiare alle domande pratiche su soldi, beni e burocrazia, scritte e controllate da notai, avvocati e commercialisti.',
	},
})

const props = withDefaults(defineProps<Props>(), {
	eyebrow: 'Guide verificate da professionisti',
	title: 'Eredità, debiti, genitori anziani, separazione: cosa fare, passo dopo passo.',
	subtitle: 'Risposte chiare alle domande pratiche su soldi, beni e burocrazia, scritte e controllate da notai, avvocati e commercialisti.',
})

const router = useRouter()
const query = ref('')

function search() {
	const q = query.value.toLowerCase()
	if (q.includes('oro') || q.includes('gioiell')) {
		router.push('/eredita/oro-e-gioielli')
		return
	}
	router.push('/eredita')
}
</script>

<template>
	<section class="px-2 m_px-1 pt-4 pb-3 m_pt-2" aria-labelledby="home-title">
		<div class="w-1100px mx-auto">
			<p class="sans txt12 uppercase tracking-wider opacity-5 m-0 mb-2">{{ props.eyebrow }}</p>
			<div class="grid grid-2-col gap-4 m_grid-wrap-1 m_gap-2 align-items-end">
				<h1 id="home-title" class="display m-0">{{ props.title }}</h1>
				<ol class="bare">
					<li v-for="t in topics" :key="t.id" :id="t.id" class="border-bottom">
						<component
							:is="t.to ? 'router-link' : 'div'"
							:to="t.to"
							class="flex gap-1 py-075 decoration-none align-items-baseline"
						>
							<span class="sans txt12 opacity-4 noshrink">{{ t.n }}</span>
							<span>
								<span class="txt18">{{ t.title }}</span>
								<span class="sans txt13 opacity-6 block line-height-14">{{ t.dek }}</span>
							</span>
						</component>
					</li>
				</ol>
			</div>
			<p class="sans txt-18 opacity-8 line-height-15 measure mt-2 mb-2">{{ props.subtitle }}</p>
			<form class="flex gap-1 align-items-end m_column m_align-items-stretch" @submit.prevent="search">
				<TextInput v-model="query" class="flex-1" underlined label="Cerca una guida" placeholder="Oro ereditato, testamento, RSA…" />
				<Btn type="submit" value="Cerca" />
			</form>
		</div>
	</section>
</template>
