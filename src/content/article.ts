export const article = {
	kicker: 'Beni ereditati',
	title: 'Oro e gioielli ereditati: tasse, successione e vendita',
	byline: 'Verificato da un commercialista',
	updated: 'Controllato sulle norme in vigore',
	brief: 'Per il coniuge, i figli e i genitori l’imposta di successione è il 4%, e solo sulla parte che supera 1 milione di euro per ciascun erede. Nella maggior parte dei casi non si paga nulla. Oro e gioielli vanno comunque dichiarati, al valore di mercato il giorno del decesso.',
	toc: [
		{ id: 'dichiarare', label: 'Va dichiarato?', icon: 'fact_check' },
		{ id: 'imposta', label: 'Imposta di successione', icon: 'percent' },
		{ id: 'differenza', label: 'Oro o gioielli', icon: 'diamond' },
		{ id: 'plusvalenza', label: 'Plusvalenza', icon: 'show_chart' },
		{ id: 'vendere', label: 'Vendere i gioielli', icon: 'payments' },
		{ id: 'valutare', label: 'Perché valutare subito', icon: 'balance' },
		{ id: 'documenti', label: 'Documenti', icon: 'description' },
		{ id: 'faq', label: 'Domande', icon: 'help' },
	],
}

export const rates = [
	['Coniuge, figli, genitori', '4%', '1.000.000 €'],
	['Fratelli e sorelle', '6%', '100.000 €'],
	['Altri parenti fino al 4° grado, affini', '6%', 'Nessuna'],
	['Altri soggetti', '8%', 'Nessuna'],
]

export const compare = [
	['Esempi', 'Lingotti, monete, oro grezzo', 'Anelli, collane, orologi, gioielli con pietre'],
	['In successione', 'Si dichiara', 'Si dichiara, o rientra nel 10% presunto'],
	['Alla vendita', '26% sulla plusvalenza', 'In generale non tassata, se occasionale'],
]

export const documented = [
	['Valore in successione', '10.000 €'],
	['Prezzo di vendita', '12.000 €'],
	['Plusvalenza', '2.000 €'],
	['Imposta (26%)', '520 €'],
]

export const undocumented = [
	['Valore in successione', 'Non documentato'],
	['Prezzo di vendita', '12.000 €'],
	['Base imponibile', '12.000 €'],
	['Imposta (26%)', '3.120 €'],
]

export const documents = [
	{ icon: 'badge', label: 'Documento d’identità e codice fiscale' },
	{ icon: 'description', label: 'Copia della dichiarazione di successione, con il valore indicato' },
	{ icon: 'diamond', label: 'Perizia o stima dei gioielli, se disponibile' },
	{ icon: 'verified', label: 'Certificati delle pietre, per esempio GIA o IGI, se presenti' },
]

export const faqs = [
	{
		q: 'I gioielli vanno sempre in successione?',
		a: 'Sì, fanno parte dell’eredità. Se non li dichiari, la legge presume comunque un valore pari al 10% dell’asse per denaro, gioielli e mobilia.',
	},
	{
		q: 'Se vendo l’oro allo stesso valore dichiarato, pago tasse?',
		a: 'No: senza plusvalenza non c’è imposta, purché il valore in successione sia documentato.',
	},
	{
		q: 'Come si dividono i gioielli tra più eredi?',
		a: 'Con un accordo tra gli eredi, una stima comune, e se serve la vendita con divisione del ricavato.',
	},
]
