<script setup lang="ts">
import { defineBlock } from '@bagelink/blox'
import { Btn, defineSchema, $ } from '@bagelink/vue'
import { steps } from '@/content/site'

interface Props {
	title?: string
	linkLabel?: string
	linkTo?: string
	calloutKicker?: string
	calloutTitle?: string
	calloutBody?: string
	calloutLabel?: string
	calloutTo?: string
}

const schema = defineSchema<Props>({
	title: $.text('Titolo', { default: 'Da dove partire' }),
	linkLabel: $.text('Testo del link', { default: 'La guida sull’oro e i gioielli' }),
	linkTo: $.text('Destinazione', { default: '/eredita/oro-e-gioielli' }),
	calloutKicker: $.text('Occhiello strumento', { default: 'Strumento' }),
	calloutTitle: $.text('Titolo strumento', { default: 'Calcola l’imposta di successione' }),
	calloutBody: $.textarea('Testo strumento', {
		default: 'Il grado di parentela e un valore documentato spostano la cifra. Nella guida sull’oro, due esempi sullo stesso prezzo: 520 € contro 3.120 €.',
	}),
	calloutLabel: $.text('Pulsante strumento', { default: 'Vedi gli esempi' }),
	calloutTo: $.text('Destinazione strumento', { default: '/eredita/oro-e-gioielli#imposta' }),
})

defineBlock({
	name: 'GettingStarted',
	label: 'Da dove partire',
	icon: 'route',
	category: 'content',
	order: 80,
	description: 'Passi iniziali e riquadro di uno strumento.',
	schema,
	defaults: {
		title: 'Da dove partire',
		linkLabel: 'La guida sull’oro e i gioielli',
		linkTo: '/eredita/oro-e-gioielli',
		calloutKicker: 'Strumento',
		calloutTitle: 'Calcola l’imposta di successione',
		calloutBody: 'Il grado di parentela e un valore documentato spostano la cifra. Nella guida sull’oro, due esempi sullo stesso prezzo: 520 € contro 3.120 €.',
		calloutLabel: 'Vedi gli esempi',
		calloutTo: '/eredita/oro-e-gioielli#imposta',
	},
})

const props = withDefaults(defineProps<Props>(), {
	title: 'Da dove partire',
	linkLabel: 'La guida sull’oro e i gioielli',
	linkTo: '/eredita/oro-e-gioielli',
	calloutKicker: 'Strumento',
	calloutTitle: 'Calcola l’imposta di successione',
	calloutBody: 'Il grado di parentela e un valore documentato spostano la cifra. Nella guida sull’oro, due esempi sullo stesso prezzo: 520 € contro 3.120 €.',
	calloutLabel: 'Vedi gli esempi',
	calloutTo: '/eredita/oro-e-gioielli#imposta',
})
</script>

<template>
	<section class="px-2 m_px-1 pb-4">
		<div class="w-1100px mx-auto grid grid-2-col gap-3 m_grid-wrap-1 mt-4">
			<div>
				<h2 id="steps-title" class="txt-28 m-0 mb-1">{{ props.title }}</h2>
				<ol class="bare">
					<li v-for="(s, i) in steps" :key="s" class="flex gap-1 border-bottom py-075 align-items-baseline">
						<span class="sans txt12 opacity-4">0{{ i + 1 }}</span>
						<span class="txt18">{{ s }}</span>
					</li>
				</ol>
				<Btn class="mt-1-5" flat icon-end="arrow_forward" :value="props.linkLabel" :to="props.linkTo" />
			</div>
			<aside class="sheet p-2 self-start">
				<p class="sans txt12 uppercase tracking-wider opacity-5 m-0">{{ props.calloutKicker }}</p>
				<h2 class="txt-28 line-height-12 m-0 mt-1">{{ props.calloutTitle }}</h2>
				<p class="sans txt14 opacity-7 line-height-15 m-0 mt-05">{{ props.calloutBody }}</p>
				<Btn class="mt-1-5" :value="props.calloutLabel" :to="props.calloutTo" />
			</aside>
		</div>
	</section>
</template>
