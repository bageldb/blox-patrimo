<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { defineBlock } from '@bagelink/blox'
import { Btn } from '@bagelink/vue'
import GuideList from '@/components/GuideList.vue'
import { filters, steps, topicGuides } from '@/content/site'

defineBlock({
	name: 'TopicPage',
	label: 'Pagina di sezione',
	icon: 'account_tree',
	category: 'content',
	order: 20,
	description: 'Indice di una sezione: filtri, guide e da dove partire.',
	schema: {},
})

const active = ref('Tutte')
const shown = computed(() =>
	active.value === 'Tutte' ? topicGuides : topicGuides.filter((g) => g.kicker === active.value),
)
</script>

<template>
	<div class="px-2 m_px-1 pt-3 pb-4">
		<div class="w-1100px mx-auto">
			<p class="sans txt13 opacity-5 m-0 mb-2">
				<RouterLink to="/" class="decoration-none">Home</RouterLink>
				<span class="opacity-5"> / Eredità e successione</span>
			</p>
			<div class="grid grid-2-col gap-3 m_grid-wrap-1 align-items-end mb-3">
				<div>
					<h1 class="txt-48 line-height-11 m-0 m_txt-32">Eredità e successione</h1>
					<p class="sans txt-18 opacity-7 line-height-15 measure m-0 mt-1">
						Dal testamento alla dichiarazione di successione, fino a cosa fare con i beni ricevuti.
					</p>
				</div>
				<p class="sans txt14 opacity-6 m-0">
					Guide pratiche verificate da notai, avvocati e commercialisti.
				</p>
			</div>

			<div class="flex gap-1 flex-wrap border-bottom pb-1 mb-0 sans txt13" role="tablist">
				<button
					v-for="f in filters"
					:key="f"
					type="button"
					class="bg-transparent border-none pointer p-0 pb-05"
					:class="f === active ? 'color-primary' : 'opacity-5'"
					:style="f === active ? 'box-shadow: inset 0 -2px 0 var(--bgl-primary)' : ''"
					@click="active = f"
				>{{ f }}</button>
			</div>
			<GuideList :guides="shown" />

			<div class="grid grid-2-col gap-3 m_grid-wrap-1 mt-4">
				<section aria-labelledby="steps-title">
					<h2 id="steps-title" class="txt-28 m-0 mb-1">Da dove partire</h2>
					<ol class="bare">
						<li v-for="(s, i) in steps" :key="s" class="flex gap-1 border-bottom py-075 align-items-baseline">
							<span class="sans txt12 opacity-4">0{{ i + 1 }}</span>
							<span class="txt18">{{ s }}</span>
						</li>
					</ol>
					<Btn class="mt-1-5" flat icon-end="arrow_forward" value="La guida sull’oro e i gioielli" to="/eredita/oro-e-gioielli" />
				</section>
				<aside class="sheet p-2 self-start">
					<p class="sans txt12 uppercase tracking-wider opacity-5 m-0">Strumento</p>
					<h2 class="txt-28 line-height-12 m-0 mt-1">Calcola l’imposta di successione</h2>
					<p class="sans txt14 opacity-7 line-height-15 m-0 mt-05">
						Il grado di parentela e un valore documentato spostano la cifra. Nella guida sull’oro, due esempi sullo stesso prezzo: 520 € contro 3.120 €.
					</p>
					<Btn class="mt-1-5" value="Vedi gli esempi" to="/eredita/oro-e-gioielli#imposta" />
				</aside>
			</div>
		</div>
	</div>
</template>
