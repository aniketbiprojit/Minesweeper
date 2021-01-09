import type { element } from 'svelte/internal'
import App from './App.svelte'

const rows = 10
const cols = 10
const cell_size = 40

const game_over = false

const app = new App({
	target: document.body,
	props: {
		rows,
		cols,
		handleClick,
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
	neighbours: number = 0
	constructor(block: HTMLElement) {
		this.block = block

		if (Math.random() < 0.1) {
			this.bomb = true
			this.block.classList.add('bomb')
		}
	}

	reveal() {
		this.block.classList.remove('hidden')

		if (this.bomb) {
			this.setInner('')
		} else this.setInner(this.neighbours.toString())
	}

	setInner(text: string) {
		this.block.children[0].innerHTML = text
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

for (let i = 0; i < rows; i++) {
	for (let j = 0; j < cols; j++) {
		const neighbours = countNeighbours(i, j)

		const cell = grid[i][j]
		cell.neighbours = neighbours
	}
}
function countNeighbours(i: number, j: number) {
	if (grid[i][j].bomb) {
		return -1
	}
	let count = 0
	for (let x_off = -1; x_off <= 1; x_off++) {
		for (let y_off = -1; y_off <= 1; y_off++) {
			const x = i + x_off
			const y = j + y_off

			if (x === -1 || y === -1 || x === rows || y === cols) continue
			if (grid[x][y].bomb) {
				count++
			}
		}
	}
	return count
}

function handleClick(e) {
	const cell = { block: e.target }
	const x = parseInt(cell.block.dataset.x)
	const y = parseInt(cell.block.dataset.y)
	handleReveal(x, y)
}

function revealAll() {
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			const cell = grid[i][j]
			cell.reveal()
			cell.visible = true
			cell.block.classList.add('blue')
		}
	}
}

function handleReveal(i: number, j: number) {
	const cell = grid[i][j]
	if (cell.bomb) {
		return revealAll()
	}
	cell.reveal()
	cell.block.classList.add('blue')
	cell.visible = true

	if (cell.neighbours === 0) {
		for (let x_off = -1; x_off <= 1; x_off++) {
			for (let y_off = -1; y_off <= 1; y_off++) {
				const x = i + x_off
				const y = j + y_off
				if (x === -1 || y === -1 || x === rows || y === cols) continue
				const inner_cell = grid[x][y]
				inner_cell.reveal()
				inner_cell.block.classList.add('blue')
				if (inner_cell.neighbours === 0 && inner_cell.visible !== true) {
					handleReveal(x, y)
				}
			}
		}
	}
}

export default app
