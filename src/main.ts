import type { element } from 'svelte/internal'
import App from './App.svelte'

const rows = 7
const cols = 10
const cell_size = 40

const app = new App({
	target: document.body,
	props: {
		rows,
		cols,
	},
})

const grid_elem = document.getElementById('grid')
grid_elem.style.height = Math.floor(cell_size * rows).toString() + 'px'
grid_elem.style.width = Math.floor(cell_size * cols).toString() + 'px'

const grid: Array<Array<Cell>> = Array.from(Array(rows), () => new Array(cols))

class Cell {
	visible = false
	bomb = false
	block: HTMLElement
	constructor(block: HTMLElement) {
		this.block = block

		if (Math.random() < 0.2) {
			this.bomb = true
			this.block.classList.add('bomb')
		}
	}

	reveal() {
		this.visible = true
		this.block.classList.add('revealed')
	}

	setInner(text: string) {
		this.block.innerHTML = text
	}
}

const cells = document.getElementsByClassName('cell')
Array.from(cells).forEach((element) => {
	if (element instanceof HTMLElement) {
		const cell = new Cell(element)
		const x = cell.block.dataset.x.toString()
		const y = cell.block.dataset.y.toString()
		grid[x][y] = cell
	}
})

console.log(grid)

export default app
