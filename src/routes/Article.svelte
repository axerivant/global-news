<script lang="ts">
	export let article: any
	console.log(article)
</script>

<a href={article.url} target="_blank" rel="noreferrer">
	<div
		class="border bg-neutral-900 border-white/10 p-6 w-[48rem] rounded cursor-pointer hover:brightness-125 focus:brightness-125 transition-all flex flex-col gap-3"
	>
		<h2 class="text-xl font-bold">{article.title}</h2>
		<p class="text-lg text-white/30 font-medium">
			{article.description ? article.description : 'No description'}
		</p>
	</div>
</a>
