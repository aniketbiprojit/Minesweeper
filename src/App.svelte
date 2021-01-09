<script lang="ts">
	export let rows: number, cols: number
	export let handleClick
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
		cursor: pointer;
	}
	.cell > p {
		margin: 0;
		pointer-events: none;
		color: white;
	}

	.blue {
		background-color: black;
	}

	.bomb {
		background-color: rgb(34, 34, 34);
	}

	.hidden {
		background-color: white;
	}
</style>

<main>
	<span class="hidden" />
	<span class="bomb" />
	<span class="blue" />
	<div class="grid" id="grid">
		{#each Array(rows) as _, i}
			{#each Array(cols) as _, j}
				<div on:click={handleClick} class="cell hidden" data-x={i} data-y={j}>
					<p />
				</div>
			{/each}
		{/each}
	</div>
</main>
