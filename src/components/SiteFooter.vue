<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<footer class="border-top mt-6">
		<div class="w-1100px mx-auto px-2 m_px-1 py-3 grid gap-2">
			<div class="flex space-between align-items-end gap-2 m_column m_align-items-start">
				<p class="txt-28 m-0" style="letter-spacing: -0.03em">Patrimo</p>
				<p class="sans txt13 quiet m-0 measure">
					Un progetto di Auctentic. I contenuti hanno scopo informativo e non sostituiscono una consulenza professionale.
				</p>
			</div>
			<nav class="flex gap-1-5 flex-wrap sans txt13 quiet" aria-label="Informazioni">
				<RouterLink to="/#esperti" class="decoration-none">Chi siamo</RouterLink>
				<RouterLink to="/#esperti" class="decoration-none">Come verifichiamo</RouterLink>
				<RouterLink to="/#esperti" class="decoration-none">Esperti</RouterLink>
				<a class="decoration-none" href="mailto:redazione@patrimo.it">Contatti</a>
			</nav>
		</div>
	</footer>
</template>
