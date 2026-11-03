<script setup lang="ts">
import { computed, ref } from 'vue'
import { defineBlock } from '@bagelink/blox'
import GuideList from '@/components/GuideList.vue'
import { filters, topicGuides } from '@/content/site'

defineBlock({
	name: 'FilteredGuides',
	label: 'Guide filtrate',
	icon: 'filter_list',
	category: 'content',
	order: 70,
	description: 'Filtri di sezione e elenco delle guide.',
	schema: {},
})

const active = ref('Tutte')
const shown = computed(() =>
	active.value === 'Tutte' ? topicGuides : topicGuides.filter((g) => g.kicker === active.value),
)
</script>

<template>
	<section class="px-2 m_px-1" aria-label="Guide della sezione">
		<div class="w-1100px mx-auto">
			<div class="flex gap-1 flex-wrap border-bottom pb-1 mb-0 sans txt13 mt-3" role="tablist">
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
		</div>
	</section>
</template>
