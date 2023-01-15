<script lang="ts">
	import { onMount } from 'svelte'
	import Article from './Article.svelte'
	import { fetchArticlesForAllCountries } from './news'
	import { selectedCountryKey } from './store'

	let allCountriesArticles: Map<string, any[]>
	$: selectedCountryArticles =
		allCountriesArticles && allCountriesArticles.get($selectedCountryKey)
	let isErrorOccured = false

	onMount(async () => {
		try {
			allCountriesArticles = await fetchArticlesForAllCountries()
		} catch (error) {
			console.error(error)
			isErrorOccured = true
		}
	})
</script>

{#if selectedCountryArticles}
	<div class="flex flex-col gap-6">
		{#each selectedCountryArticles as article}
			<Article {article} />
		{/each}
	</div>
{:else if isErrorOccured}
	<p>
		Oops! Looks like this project has reached it's API usage quota. Please
		check back in a couple of hours.
	</p>
{:else}
	<p>Loading...</p>
{/if}
