import { PUBLIC_NEWSAPI_APIKEY } from '$env/static/public'
import countries from './countries'
import axios from 'axios'

export const fetchArticlesForAllCountries = async () => {
	const allCountriesArticles = new Map()
	// fetch articles for each country
	for (let [key, val] of [...countries]) {
		const res = await axios.get('https://newsapi.org/v2/top-headlines', {
			params: {
				country: key,
				apiKey: PUBLIC_NEWSAPI_APIKEY
			}
		})
		const articles = res.data.articles
		allCountriesArticles.set(key, articles)
	}
	return allCountriesArticles
}
