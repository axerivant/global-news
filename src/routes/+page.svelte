<script>
	import Articles from './Articles.svelte'
	import CountrySelector from './CountrySelector.svelte'
</script>

<main class="w-full bg-neutral-900 min-h-screen text-white">
	<div class="w-9/12 flex gap-24 p-12 px-24">
		<div class="flex flex-col gap-12 w-3/12 sticky top-12 h-fit">
			<h1 class="font-semibold text-2xl">🌎 World News</h1>
			<CountrySelector />
		</div>
		<div class="w-9/12 flex">
			<Articles />
		</div>
	</div>
</main>
