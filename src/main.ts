import App from './App.svelte'

const rows = 7
const cols = 7
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
console.log(grid_elem.style.height, grid_elem.style.width)
export default app
