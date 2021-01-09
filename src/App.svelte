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
		border: 1px solid white;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.cell > p {
		margin: 0;
		pointer-events: none;
	}

	.blue {
		background-color: rgb(153, 153, 153);
	}

	.bomb {
		background-color: red;
	}

	.hidden {
		background-color: rgb(68, 68, 68);
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
