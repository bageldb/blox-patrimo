<script setup lang="ts">
import { defineBlock } from '@bagelink/blox'
import { Btn, defineSchema, $ } from '@bagelink/vue'

interface Props {
	eyebrow?: string
	title?: string
	body?: string
	linkLabel?: string
	linkTo?: string
	leftLabel?: string
	leftAmount?: string
	leftNote?: string
	rightLabel?: string
	rightAmount?: string
	rightNote?: string
}

const schema = defineSchema<Props>({
	eyebrow: $.text('Occhiello', { default: 'Lo stesso oro, due imposte' }),
	title: $.text('Titolo', { default: 'Un valore scritto in successione cambia il conto.' }),
	body: $.textarea('Testo', {
		default: 'Vendi un lingotto a 12.000 €. Con il valore documentato l’imposta è 520 €. Senza, è 3.120 €.',
	}),
	linkLabel: $.text('Testo del link', { default: 'Leggi il calcolo' }),
	linkTo: $.text('Destinazione', { default: '/eredita/oro-e-gioielli#imposta' }),
	leftLabel: $.text('Etichetta sinistra', { default: 'Con valore' }),
	leftAmount: $.text('Importo sinistro', { default: '520 €' }),
	leftNote: $.text('Nota sinistra', { default: '26% su 2.000 € di plusvalenza' }),
	rightLabel: $.text('Etichetta destra', { default: 'Senza valore' }),
	rightAmount: $.text('Importo destro', { default: '3.120 €' }),
	rightNote: $.text('Nota destra', { default: '26% sull’intero prezzo di vendita' }),
})

defineBlock({
	name: 'TaxPair',
	label: 'Due importi',
	icon: 'balance',
	category: 'content',
	order: 30,
	description: 'Confronto di due cifre sulla stessa carta.',
	schema,
	defaults: {
		eyebrow: 'Lo stesso oro, due imposte',
		title: 'Un valore scritto in successione cambia il conto.',
		body: 'Vendi un lingotto a 12.000 €. Con il valore documentato l’imposta è 520 €. Senza, è 3.120 €.',
		linkLabel: 'Leggi il calcolo',
		linkTo: '/eredita/oro-e-gioielli#imposta',
		leftLabel: 'Con valore',
		leftAmount: '520 €',
		leftNote: '26% su 2.000 € di plusvalenza',
		rightLabel: 'Senza valore',
		rightAmount: '3.120 €',
		rightNote: '26% sull’intero prezzo di vendita',
	},
})

const props = withDefaults(defineProps<Props>(), {
	eyebrow: 'Lo stesso oro, due imposte',
	title: 'Un valore scritto in successione cambia il conto.',
	body: 'Vendi un lingotto a 12.000 €. Con il valore documentato l’imposta è 520 €. Senza, è 3.120 €.',
	linkLabel: 'Leggi il calcolo',
	linkTo: '/eredita/oro-e-gioielli#imposta',
	leftLabel: 'Con valore',
	leftAmount: '520 €',
	leftNote: '26% su 2.000 € di plusvalenza',
	rightLabel: 'Senza valore',
	rightAmount: '3.120 €',
	rightNote: '26% sull’intero prezzo di vendita',
})
</script>

<template>
	<section id="strumenti" class="px-2 m_px-1 py-3">
		<div class="w-1100px mx-auto grid grid-2-col gap-3 m_grid-wrap-1 align-items-stretch">
			<div class="grid align-content-center gap-1">
				<p class="sans txt12 uppercase tracking-wider opacity-5 m-0">{{ props.eyebrow }}</p>
				<h2 class="txt-36 line-height-11 m-0">{{ props.title }}</h2>
				<p class="sans opacity-7 line-height-15 m-0 measure">{{ props.body }}</p>
				<Btn flat class="ps-0 justify-self-start" icon-end="arrow_forward" :value="props.linkLabel" :to="props.linkTo" />
			</div>
			<div class="grid grid-2-col m_grid-wrap-1">
				<div class="sheet p-1-5">
					<p class="sans txt14 m-0">{{ props.leftLabel }}</p>
					<p class="txt-40 m-0 mt-1">{{ props.leftAmount }}</p>
					<p class="sans txt14 quiet m-0 mt-05">{{ props.leftNote }}</p>
				</div>
				<div class="sheet p-1-5">
					<p class="sans txt14 m-0">{{ props.rightLabel }}</p>
					<p class="txt-40 m-0 mt-1">{{ props.rightAmount }}</p>
					<p class="sans txt14 quiet m-0 mt-05">{{ props.rightNote }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
