const puzzle = [
	['a', 'k', 'f', 'o', 'x', 'e', 's'],
	['s', 'o', 'a', 'w', 'a', 'h', 'p'],
	['i', 't', 'c', 'k', 'e', 't', 'n'],
	['o', 't', 's', 'd', 'h', 'o', 'h'],
	['s', 'e', 'x', 'g', 's', 't', 'a'],
	['u', 'r', 'p', 'i', 'w', 'e', 'u'],
	['z', 's', 'b', 'n', 'u', 'i', 'r'],
]
const word = 'foxes'
console.table(puzzle)
// console.log(puzzle[i][i]) Вызвало буквы по диагонали
// console.log(puzzle[1][0]);

function searchStraightLineInclude(word, puzzle) {
	// Проверка горизонтальных линий
	for (let i = 0; i < puzzle.length; i += 1) {
		if (
			puzzle[i].join('').includes(word) ||
			puzzle[i].reverse().join('').includes(word)
		) {
			return true
		}
	}
	return false
}
console.log(searchStraightLineInclude(word, puzzle))

// function searchSnakingInclude(word, puzzle) {}

// module.export = {
// 	searchStraightLineInclude,
// 	searchSnakingInclude,
// }
