export interface GuideEntry {
	kicker: string
	title: string
	dek?: string
	verifier: string
	to?: string
}

export interface TopicEntry {
	n: string
	id: string
	title: string
	dek: string
	to?: string
}

export const topics: TopicEntry[] = [
	{
		n: '01',
		id: 'eredita',
		title: 'Eredità e successione',
		dek: 'Testamento, dichiarazione di successione, tasse, beni ereditati.',
		to: '/eredita',
	},
	{
		n: '02',
		id: 'debiti',
		title: 'Debiti e prestiti',
		dek: 'Come organizzare i debiti, le opzioni di rientro e cosa chiedere a un consulente.',
	},
	{
		n: '03',
		id: 'anziani',
		title: 'Genitori anziani',
		dek: 'Costi delle RSA, contributi pubblici, tutela e amministrazione di sostegno.',
	},
	{
		n: '04',
		id: 'separazione',
		title: 'Separazione e divorzio',
		dek: 'Divisione dei beni, casa familiare, assegno e passi pratici.',
	},
]

export const popularGuides: GuideEntry[] = [
	{
		kicker: 'Eredità',
		title: 'Testamento olografo: come scriverlo, con un fac simile',
		verifier: 'Verificato da un notaio',
		to: '/eredita',
	},
	{
		kicker: 'Eredità',
		title: 'Tassa di successione: quanto si paga e quando',
		verifier: 'Verificato da un commercialista',
		to: '/eredita',
	},
	{
		kicker: 'Eredità',
		title: 'Rinuncia all’eredità: come funziona e chi subentra',
		verifier: 'Verificato da un avvocato',
		to: '/eredita',
	},
	{
		kicker: 'Eredità',
		title: 'Oro e gioielli ereditati: tasse, successione e vendita',
		verifier: 'Verificato da un commercialista',
		to: '/eredita/oro-e-gioielli',
	},
]

export const topicGuides: GuideEntry[] = [
	{
		kicker: 'Testamento',
		title: 'Testamento olografo: come scriverlo, con un fac simile',
		dek: 'Le regole perché sia valido, gli errori più comuni e un modello da cui partire.',
		verifier: 'Notaio',
	},
	{
		kicker: 'Tasse',
		title: 'Tassa di successione: quanto si paga e quando',
		dek: 'Aliquote e franchigie per grado di parentela, con esempi di calcolo.',
		verifier: 'Commercialista',
	},
	{
		kicker: 'Dichiarazione',
		title: 'Dichiarazione di successione: come si presenta e quanto costa',
		dek: 'Online, al CAF o dal professionista: tempi, documenti e costi a confronto.',
		verifier: 'Commercialista',
	},
	{
		kicker: 'Chi eredita',
		title: 'Successione legittima: chi eredita senza testamento',
		dek: 'Le quote di coniuge, figli, genitori e fratelli, in una tabella.',
		verifier: 'Avvocato',
	},
	{
		kicker: 'Chi eredita',
		title: 'Rinuncia all’eredità: come funziona e chi subentra',
		dek: 'Quando conviene, come si fa e cosa succede ai figli di chi rinuncia.',
		verifier: 'Avvocato',
	},
	{
		kicker: 'Dichiarazione',
		title: 'Accettazione tacita dell’eredità: quando avviene e cosa comporta',
		dek: 'I comportamenti che valgono come accettazione e i costi da prevedere.',
		verifier: 'Notaio',
	},
	{
		kicker: 'Beni ereditati',
		title: 'Oro e gioielli ereditati: tasse, successione e vendita',
		dek: 'Se vanno dichiarati, quando si pagano tasse alla vendita e perché la valutazione conta.',
		verifier: 'Commercialista',
		to: '/eredita/oro-e-gioielli',
	},
]

export const filters = ['Tutte', 'Testamento', 'Dichiarazione', 'Tasse', 'Chi eredita', 'Beni ereditati']

export const steps = [
	'Verifica se esiste un testamento',
	'Decidi se accettare o rinunciare',
	'Fai l’inventario dei beni',
	'Presenta la dichiarazione entro 12 mesi',
]

export const experts = [
	{ role: 'Notaio', detail: 'Testamento, accettazione e inventario.', icon: 'history_edu' },
	{ role: 'Commercialista', detail: 'Imposte, franchigie e dichiarazione.', icon: 'calculate' },
	{ role: 'Avvocato', detail: 'Quote, rinuncia e conflitti tra eredi.', icon: 'gavel' },
]
