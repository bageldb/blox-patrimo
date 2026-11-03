<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineBlock } from '@bagelink/blox'
import { defineSchema, $ } from '@bagelink/vue'

interface Props {
	crumb?: string
	title?: string
	dek?: string
	note?: string
}

const schema = defineSchema<Props>({
	crumb: $.text('Percorso', { default: 'Eredità e successione' }),
	title: $.text('Titolo', { default: 'Eredità e successione' }),
	dek: $.textarea('Sottotitolo', {
		default: 'Dal testamento alla dichiarazione di successione, fino a cosa fare con i beni ricevuti.',
	}),
	note: $.text('Nota', { default: 'Guide pratiche verificate da notai, avvocati e commercialisti.' }),
})

defineBlock({
	name: 'TopicHeader',
	label: 'Intestazione sezione',
	icon: 'account_tree',
	category: 'hero',
	order: 60,
	description: 'Titolo di una sezione con percorso.',
	schema,
	defaults: {
		crumb: 'Eredità e successione',
		title: 'Eredità e successione',
		dek: 'Dal testamento alla dichiarazione di successione, fino a cosa fare con i beni ricevuti.',
		note: 'Guide pratiche verificate da notai, avvocati e commercialisti.',
	},
})

const props = withDefaults(defineProps<Props>(), {
	crumb: 'Eredità e successione',
	title: 'Eredità e successione',
	dek: 'Dal testamento alla dichiarazione di successione, fino a cosa fare con i beni ricevuti.',
	note: 'Guide pratiche verificate da notai, avvocati e commercialisti.',
})
</script>

<template>
	<header class="px-2 m_px-1 pt-3">
		<div class="w-1100px mx-auto">
			<p class="sans txt13 opacity-5 m-0 mb-2">
				<RouterLink to="/" class="decoration-none">Home</RouterLink>
				<span class="opacity-5"> / {{ props.crumb }}</span>
			</p>
			<div class="grid grid-2-col gap-3 m_grid-wrap-1 align-items-end">
				<div>
					<h1 class="txt-48 line-height-11 m-0 m_txt-32">{{ props.title }}</h1>
					<p class="sans txt-18 opacity-7 line-height-15 measure m-0 mt-1">{{ props.dek }}</p>
				</div>
				<p class="sans txt14 opacity-6 m-0">{{ props.note }}</p>
			</div>
		</div>
	</header>
</template>
