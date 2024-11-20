const {
	searchStraightLineInclude,
	searchSnakingInclude,
} = require('../wordSearch')

let puzzle

beforeEach(() => {
	puzzle = [
		['a', 'k', 'f', 'o', 'x', 'e', 's'],
		['s', 'o', 'a', 'w', 'a', 'h', 'p'],
		['i', 't', 'c', 'k', 'e', 't', 'n'],
		['o', 't', 's', 'd', 'h', 'o', 'h'],
		['s', 'e', 'x', 'g', 's', 't', 'a'],
		['u', 'r', 'p', 'i', 'w', 'e', 'u'],
		['z', 's', 'b', 'n', 'u', 'i', 'r'],
	]
    
})

describe('Найти все слова в линию', () => {
	it('Выводит true если есть слово в строке', () => {
		expect(searchStraightLineInclude('foxes', puzzle)).toBe(true)
	})

	it('Выводит false если слова нет', () => {
		expect(searchStraightLineInclude('akoxes', puzzle)).toBe('false')
	})
})

describe('Найти все слова путем змейки', () => {
	it('', () => {
		expect()
	})

	it('', () => {
		expect()
	})
})
