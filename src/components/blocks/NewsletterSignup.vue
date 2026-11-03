<script setup lang="ts">
import { ref } from 'vue'
import { defineBlock } from '@bagelink/blox'
import { Btn, TextInput, defineSchema, $ } from '@bagelink/vue'

interface Props {
	title?: string
	body?: string
	success?: string
}

const schema = defineSchema<Props>({
	title: $.text('Titolo', { default: 'Una guida utile ogni mese.' }),
	body: $.text('Testo', { default: 'Novità su tasse, scadenze e regole. Niente spam.' }),
	success: $.text('Messaggio di conferma', { default: 'Ti scriviamo quando esce una guida nuova.' }),
})

defineBlock({
	name: 'NewsletterSignup',
	label: 'Iscrizione',
	icon: 'mail',
	category: 'form',
	order: 50,
	description: 'Modulo email, salvato come invio del modulo patrimo_newsletter.',
	schema,
	defaults: {
		title: 'Una guida utile ogni mese.',
		body: 'Novità su tasse, scadenze e regole. Niente spam.',
		success: 'Ti scriviamo quando esce una guida nuova.',
	},
})

const props = withDefaults(defineProps<Props>(), {
	title: 'Una guida utile ogni mese.',
	body: 'Novità su tasse, scadenze e regole. Niente spam.',
	success: 'Ti scriviamo quando esce una guida nuova.',
})

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
			body: JSON.stringify({ email: email.value, _meta: { locale: 'it' } }),
		})
		if (!response.ok) throw new Error('submit failed')
		joined.value = true
	} catch {
		submitError.value = 'Non siamo riusciti a iscriverti. Riprova.'
	} finally {
		submitting.value = false
	}
}
</script>

<template>
	<section class="px-2 m_px-1 pb-4" aria-label="Newsletter">
		<div class="w-1100px mx-auto border-top pt-3">
			<div v-if="joined" class="txt-28">{{ props.success }}</div>
			<form v-else class="grid grid-2-col gap-2 m_grid-wrap-1 align-items-end" @submit.prevent="subscribe">
				<div>
					<h2 class="txt-32 m-0">{{ props.title }}</h2>
					<p class="sans txt14 opacity-6 m-0 mt-05">{{ props.body }}</p>
					<p v-if="submitError" class="sans txt14 m-0 mt-05" style="color: var(--bgl-primary)">{{ submitError }}</p>
				</div>
				<div class="flex gap-1 align-items-end">
					<TextInput v-model="email" class="flex-1" underlined type="email" required label="Email" placeholder="La tua email" />
					<Btn type="submit" value="Iscriviti" :disabled="submitting" />
				</div>
			</form>
		</div>
	</section>
</template>
