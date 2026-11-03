<script setup lang="ts">
import { defineBlock } from '@bagelink/blox'
import { defineSchema, $ } from '@bagelink/vue'
import GuideList from '@/components/GuideList.vue'
import { popularGuides } from '@/content/site'

interface Props {
	title?: string
	kicker?: string
}

const schema = defineSchema<Props>({
	title: $.text('Titolo', { default: 'Le guide più lette' }),
	kicker: $.text('Sezione', { default: 'Eredità' }),
})

defineBlock({
	name: 'GuideIndex',
	label: 'Indice guide',
	icon: 'format_list_bulleted',
	category: 'content',
	order: 20,
	description: 'Elenco di guide con titolo e sezione.',
	schema,
	defaults: { title: 'Le guide più lette', kicker: 'Eredità' },
})

const props = withDefaults(defineProps<Props>(), {
	title: 'Le guide più lette',
	kicker: 'Eredità',
})
</script>

<template>
	<section class="px-2 m_px-1 py-4" aria-labelledby="guides-title">
		<div class="w-1100px mx-auto">
			<div class="flex space-between border-bottom pb-075 mb-0">
				<h2 id="guides-title" class="txt-28 m-0">{{ props.title }}</h2>
				<span class="sans txt12 uppercase tracking-wider opacity-5">{{ props.kicker }}</span>
			</div>
			<GuideList :guides="popularGuides" />
		</div>
	</section>
</template>
