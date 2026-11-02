<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineBlock } from '@bagelink/blox'
import { Icon } from '@bagelink/vue'
import { article, compare, documented, documents, faqs, rates, undocumented } from '@/content/article'

const succession = article.toc.slice(0, 4)
const sale = article.toc.slice(4)

defineBlock({
	name: 'GuidePage',
	label: 'Guida',
	icon: 'article',
	category: 'content',
	order: 30,
	description: 'Articolo lungo: sintesi, aliquote, confronto e domande.',
	schema: {},
})
</script>

<template>
	<article class="px-2 m_px-1 pt-3 pb-5">
		<div class="w-1100px mx-auto guide-layout">
			<header>
				<p class="sans txt13 quiet m-0 mb-2">
					<RouterLink to="/" class="decoration-none">Home</RouterLink>
					<span> / </span>
					<RouterLink to="/eredita" class="decoration-none">Eredità</RouterLink>
					<span> / Beni ereditati</span>
				</p>
				<h1 class="txt-48 line-height-11 m-0 m_txt-32">{{ article.title }}</h1>
				<p class="sans txt14 quiet mt-1 mb-2">{{ article.byline }} · {{ article.updated }}</p>
				<p class="txt-20 line-height-14 measure m-0" style="border-inline-start: 2px solid var(--bgl-primary); padding-inline-start: 1rem">
					{{ article.brief }}
				</p>
			</header>

			<aside class="guide-aside sans txt14" aria-label="In questa guida">
				<p class="m-0">In questa guida</p>
				<p class="quiet m-0 mt-1">In successione</p>
				<nav class="toc">
					<a v-for="item in succession" :key="item.id" :href="`#${item.id}`" class="gap-075">
						<Icon :name="item.icon" />
						{{ item.label }}
					</a>
				</nav>
				<p class="quiet m-0 mt-1">Alla vendita</p>
				<nav class="toc">
					<a v-for="item in sale" :key="item.id" :href="`#${item.id}`" class="gap-075">
						<Icon :name="item.icon" />
						{{ item.label }}
					</a>
				</nav>
			</aside>

			<div class="guide-body">
				<section id="dichiarare" class="mb-3">
					<h2 class="txt-28 line-height-12">L’oro ereditato va dichiarato in successione?</h2>
					<p class="sans line-height-16 measure">
						Sì. Oro e gioielli entrano nell’attivo ereditario e vanno indicati nella dichiarazione di successione, da presentare entro 12 mesi dall’apertura della successione, al loro valore di mercato alla data del decesso.
					</p>
					<p class="sans line-height-16 measure">
						L’articolo 9, comma 2, del D.Lgs. 346/1990 presume che nell’eredità ci siano denaro, gioielli e mobilia per un valore pari al 10% dell’asse ereditario netto, anche se non dichiarati. Questa presunzione si può superare con un inventario redatto secondo le regole di legge.
					</p>
				</section>

				<section id="imposta" class="mb-3">
					<h2 class="txt-28 line-height-12">Quanto si paga di imposta di successione?</h2>
					<p class="sans line-height-16 measure">
						L’oro segue le stesse aliquote degli altri beni. Per coniuge e figli l’aliquota è del 4%, ma solo sulla parte che supera 1 milione di euro per ciascun erede: nella maggior parte dei casi, quindi, non si paga nulla.
					</p>
					<ul class="bare mob-only sans">
						<li v-for="row in rates" :key="row[0]" class="border-bottom py-075">
							<p class="m-0">{{ row[0] }}</p>
							<p class="quiet txt14 m-0 mt-025">Aliquota {{ row[1] }} · Franchigia {{ row[2] }}</p>
						</li>
					</ul>
					<table class="rates sans desk-only">
						<thead>
							<tr><th>Erede</th><th>Aliquota</th><th>Franchigia per erede</th></tr>
						</thead>
						<tbody>
							<tr v-for="row in rates" :key="row[0]">
								<td>{{ row[0] }}</td>
								<td class="tabular-nums">{{ row[1] }}</td>
								<td class="tabular-nums">{{ row[2] }}</td>
							</tr>
						</tbody>
					</table>
				</section>

				<section id="differenza" class="mb-3">
					<h2 class="txt-28 line-height-12">Oro da investimento o gioielli</h2>
					<p class="sans line-height-16 measure">
						Al momento della vendita, il fisco tratta in modo diverso l’oro da investimento e l’oro lavorato in gioielli.
					</p>
					<ul class="bare mob-only sans">
						<li v-for="row in compare" :key="row[0]" class="border-bottom py-075">
							<p class="m-0">{{ row[0] }}</p>
							<p class="quiet txt14 m-0 mt-025">Oro da investimento: {{ row[1] }}</p>
							<p class="quiet txt14 m-0">Gioielli: {{ row[2] }}</p>
						</li>
					</ul>
					<table class="rates sans desk-only">
						<thead>
							<tr><th>Confronto</th><th>Oro da investimento</th><th>Gioielli</th></tr>
						</thead>
						<tbody>
							<tr v-for="row in compare" :key="row[0]">
								<td class="quiet">{{ row[0] }}</td>
								<td>{{ row[1] }}</td>
								<td>{{ row[2] }}</td>
							</tr>
						</tbody>
					</table>
				</section>

				<section id="plusvalenza" class="mb-3">
					<h2 class="txt-28 line-height-12">Come si calcola la plusvalenza</h2>
					<p class="sans line-height-16 measure">
						Per l’erede, il prezzo di acquisto dell’oro è il valore indicato nella dichiarazione di successione. Si paga il 26% sulla differenza tra prezzo di vendita e quel valore. Con le regole in vigore dal 2024, se manca un valore documentato, il 26% si applica all’intero prezzo di vendita.
					</p>
					<div class="grid grid-2-col gap-1 m_grid-wrap-1">
						<div class="sheet p-1-5">
							<p class="sans txt14 m-0">Con valore documentato</p>
							<p v-for="row in documented" :key="row[0]" class="flex space-between gap-1 sans txt14 border-bottom py-05 m-0">
								<span class="quiet">{{ row[0] }}</span><span class="tabular-nums">{{ row[1] }}</span>
							</p>
						</div>
						<div class="sheet p-1-5">
							<p class="sans txt14 m-0">Senza valore documentato</p>
							<p v-for="row in undocumented" :key="row[0]" class="flex space-between gap-1 sans txt14 border-bottom py-05 m-0">
								<span class="quiet">{{ row[0] }}</span><span class="tabular-nums">{{ row[1] }}</span>
							</p>
						</div>
					</div>
				</section>

				<section id="vendere" class="mb-3">
					<h2 class="txt-28 line-height-12">Vendere gioielli ereditati</h2>
					<p class="sans line-height-16 measure">
						Se un privato vende occasionalmente i gioielli ricevuti in eredità, senza farne un’attività abituale, in generale non deve pagare imposte sulla vendita. Le cose cambiano se le vendite diventano frequenti o se si tratta di oro da investimento: in questi casi conviene chiedere a un commercialista.
					</p>
				</section>

				<section id="valutare" class="mb-3">
					<h2 class="txt-28 line-height-12">Perché una valutazione fatta subito fa risparmiare</h2>
					<p class="sans line-height-16 measure">
						Un valore troppo basso in dichiarazione sembra un risparmio, ma per l’oro da investimento si traduce in una plusvalenza più alta quando vendi. Una stima professionale fatta subito fissa un valore difendibile e utile anni dopo. Per diamanti e gioielli con pietre, una valutazione indipendente aiuta a stabilire un valore documentato.
					</p>
				</section>

				<section id="documenti" class="mb-3">
					<h2 class="txt-28 line-height-12">I documenti per vendere</h2>
					<ul class="bare">
						<li v-for="d in documents" :key="d.label" class="sans border-bottom py-075 flex align-items-center gap-1">
							<Icon :name="d.icon" />
							{{ d.label }}
						</li>
					</ul>
				</section>

				<section id="faq">
					<h2 class="txt-28 line-height-12">Domande frequenti</h2>
					<details v-for="f in faqs" :key="f.q" class="faq border-bottom py-1">
						<summary class="txt-20">{{ f.q }}</summary>
						<p class="sans line-height-16 measure">{{ f.a }}</p>
					</details>
					<p class="sans txt13 quiet line-height-15 measure mt-3">
						Fonti: D.Lgs. 31 ottobre 1990, n. 346, art. 9 · Legge 30 dicembre 2023, n. 213 · Agenzia delle Entrate, dichiarazione di successione. Questo articolo ha scopo informativo e non sostituisce una consulenza professionale.
					</p>
				</section>
			</div>
		</div>
	</article>
</template>
