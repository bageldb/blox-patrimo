<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { defineBlock } from '@bagelink/blox'
import { Btn, Icon, TextInput, defineSchema, $ } from '@bagelink/vue'
import GuideList from '@/components/GuideList.vue'
import { experts, popularGuides, topics } from '@/content/site'

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
	name: 'HomePage',
	label: 'Home Patrimo',
	icon: 'menu_book',
	category: 'hero',
	order: 10,
	description: 'Apertura del sito: titolo, percorsi e guide più lette.',
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
const email = ref('')
const joined = ref(false)
const submitting = ref(false)
const submitError = ref('')

async function subscribe() {
	if (submitting.value) return
	submitting.value = true
	submitError.value = ''
	try {
		const response = await fetch('/api/form/submit/patrimo_newsletter', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: email.value,
				_meta: { locale: 'it' },
			}),
		})
		if (!response.ok) throw new Error('submit failed')
		joined.value = true
	} catch {
		submitError.value = 'Non siamo riusciti a iscriverti. Riprova.'
	} finally {
		submitting.value = false
	}
}

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
	<div>
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

		<section class="px-2 m_px-1 py-4" aria-labelledby="guides-title">
			<div class="w-1100px mx-auto">
				<div class="flex space-between border-bottom pb-075 mb-0">
					<h2 id="guides-title" class="txt-28 m-0">Le guide più lette</h2>
					<span class="sans txt12 uppercase tracking-wider opacity-5">Eredità</span>
				</div>
				<GuideList :guides="popularGuides" />
			</div>
		</section>

		<section id="strumenti" class="px-2 m_px-1 py-3">
			<div class="w-1100px mx-auto grid grid-2-col gap-3 m_grid-wrap-1 align-items-stretch">
				<div class="grid align-content-center gap-1">
					<p class="sans txt12 uppercase tracking-wider opacity-5 m-0">Lo stesso oro, due imposte</p>
					<h2 class="txt-36 line-height-11 m-0">Un valore scritto in successione cambia il conto.</h2>
					<p class="sans opacity-7 line-height-15 m-0 measure">
						Vendi un lingotto a 12.000 €. Con il valore documentato l’imposta è 520 €. Senza, è 3.120 €.
					</p>
					<Btn flat class="ps-0 justify-self-start" icon-end="arrow_forward" value="Leggi il calcolo" to="/eredita/oro-e-gioielli#imposta" />
				</div>
				<div class="grid grid-2-col m_grid-wrap-1">
					<div class="sheet p-1-5">
						<p class="sans txt14 m-0">Con valore</p>
						<p class="txt-40 m-0 mt-1">520 €</p>
						<p class="sans txt14 quiet m-0 mt-05">26% su 2.000 € di plusvalenza</p>
					</div>
					<div class="sheet p-1-5">
						<p class="sans txt14 m-0">Senza valore</p>
						<p class="txt-40 m-0 mt-1">3.120 €</p>
						<p class="sans txt14 quiet m-0 mt-05">26% sull’intero prezzo di vendita</p>
					</div>
				</div>
			</div>
		</section>

		<section id="esperti" class="px-2 m_px-1 py-4">
			<div class="w-1100px mx-auto">
				<div class="grid grid-2-col gap-3 m_grid-wrap-1 mb-3">
					<h2 class="txt-36 line-height-11 m-0">Ogni guida porta il nome di chi l’ha controllata.</h2>
					<p class="sans opacity-7 line-height-15 m-0">
						Notai, avvocati e commercialisti firmano con l’iscrizione al proprio albo e la data dell’ultimo controllo.
					</p>
				</div>
				<div class="grid grid-wrap-3 gap-2 m_grid-wrap-1 border-top">
					<div v-for="e in experts" :key="e.role" class="border-bottom py-1-5">
						<p class="txt-24 m-0 flex align-items-center gap-075">
							<Icon :name="e.icon" :size="1.5" />
							{{ e.role }}
						</p>
						<p class="sans txt14 opacity-6 m-0 mt-025">{{ e.detail }}</p>
					</div>
				</div>
			</div>
		</section>

		<section class="px-2 m_px-1 pb-4" aria-label="Newsletter">
			<div class="w-1100px mx-auto border-top pt-3">
				<div v-if="joined" class="txt-28">Ti scriviamo quando esce una guida nuova.</div>
				<form v-else class="grid grid-2-col gap-2 m_grid-wrap-1 align-items-end" @submit.prevent="subscribe">
					<div>
						<h2 class="txt-32 m-0">Una guida utile ogni mese.</h2>
						<p class="sans txt14 opacity-6 m-0 mt-05">Novità su tasse, scadenze e regole. Niente spam.</p>
						<p v-if="submitError" class="sans txt14 m-0 mt-05" style="color: var(--bgl-primary)">{{ submitError }}</p>
					</div>
					<div class="flex gap-1 align-items-end">
						<TextInput v-model="email" class="flex-1" underlined type="email" required label="Email" placeholder="La tua email" />
						<Btn type="submit" value="Iscriviti" :disabled="submitting" />
					</div>
				</form>
			</div>
		</section>
	</div>
</template>
