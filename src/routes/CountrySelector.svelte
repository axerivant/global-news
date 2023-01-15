<script lang="ts">
	import countries from './countries'
	import { selectedCountryKey } from './store'

	const handleSelect = (countryKey: string) => {
		selectedCountryKey.set(countryKey)
	}
</script>

<div class="flex flex-col gap-6">
	<h2 class="uppercase text-xs font-bold text-white/40 tracking-wide">
		select country
	</h2>
	<div class="flex flex-col gap-3">
		{#each [...countries] as [key, val]}
			<button
				on:click={() => handleSelect(key)}
				class="w-fit px-4 py-3 rounded-full text-white/80 cursor-pointer text-center
                {$selectedCountryKey === key ? 'bg-white/10' : ''}"
				>{val}</button
			>
		{/each}
	</div>
</div>
