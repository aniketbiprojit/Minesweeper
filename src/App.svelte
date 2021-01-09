<script lang="ts">
	export let rows: number, cols: number
</script>

<style>
	.grid {
		display: flex;
		flex-wrap: wrap;
		width: 400px;
		height: 400px;
		background-color: white;
	}
	.cell {
		width: 38px;
		height: 38px;
		border: 1px solid black;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cell > p {
		margin: 0;
	}
</style>

<main>
	<div class="grid" id="grid">
		{#each Array(rows) as _, i}
			{#each Array(cols) as _, j}
				<div class="cell" data-x={i} data-y={j}>
					<p>{i * rows + j}</p>
				</div>
			{/each}
		{/each}
	</div>
</main>
