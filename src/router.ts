import { createRouter as _createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Layout from '@/components/Layout.vue'
import HomePage from '@/components/pages/HomePage.vue'
import TopicPage from '@/components/pages/TopicPage.vue'
import GuidePage from '@/components/blocks/GuidePage.vue'

export function createRouter(mode: 'web' | 'memory' = 'web', _initialUrl?: string) {
	const history = mode === 'memory'
		? createMemoryHistory()
		: createWebHistory(import.meta.env.BASE_URL)

	const router = _createRouter({
		history,
		routes: [
			{
				path: '/',
				component: Layout,
				children: [
					{ path: '', name: 'home', component: HomePage },
					{ path: 'eredita', name: 'eredita', component: TopicPage },
					{ path: 'eredita/oro-e-gioielli', name: 'oro', component: GuidePage },
				],
			},
		],
		scrollBehavior(to) {
			if (to.hash) return { behavior: 'smooth', el: to.hash }
			return { top: 0 }
		},
	})

	router.onError((error, to) => {
		if (typeof window !== 'undefined' && error.message.includes('Failed to fetch dynamically imported module')) {
			Object.assign(window, { location: to.fullPath })
		}
	})

	return router
}

export default createRouter()
