<script setup lang="ts">
import { defineBlock } from '@bagelink/blox'
import { Icon, defineSchema, $ } from '@bagelink/vue'
import { experts } from '@/content/site'

interface Props {
	title?: string
	body?: string
}

const schema = defineSchema<Props>({
	title: $.text('Titolo', { default: 'Ogni guida porta il nome di chi l’ha controllata.' }),
	body: $.textarea('Testo', {
		default: 'Notai, avvocati e commercialisti firmano con l’iscrizione al proprio albo e la data dell’ultimo controllo.',
	}),
})

defineBlock({
	name: 'ExpertList',
	label: 'Professionisti',
	icon: 'gavel',
	category: 'content',
	order: 40,
	description: 'Ruoli che verificano le guide.',
	schema,
	defaults: {
		title: 'Ogni guida porta il nome di chi l’ha controllata.',
		body: 'Notai, avvocati e commercialisti firmano con l’iscrizione al proprio albo e la data dell’ultimo controllo.',
	},
})

const props = withDefaults(defineProps<Props>(), {
	title: 'Ogni guida porta il nome di chi l’ha controllata.',
	body: 'Notai, avvocati e commercialisti firmano con l’iscrizione al proprio albo e la data dell’ultimo controllo.',
})
</script>

<template>
	<section id="esperti" class="px-2 m_px-1 py-4">
		<div class="w-1100px mx-auto">
			<div class="grid grid-2-col gap-3 m_grid-wrap-1 mb-3">
				<h2 class="txt-36 line-height-11 m-0">{{ props.title }}</h2>
				<p class="sans opacity-7 line-height-15 m-0">{{ props.body }}</p>
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
</template>
