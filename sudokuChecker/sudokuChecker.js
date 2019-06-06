/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

let sudokuChecker = (board, offset = [0,3,6,27,30,33,54,57,60], template = [0,1,2,9,10,11,18,19,20]) => offset.map(i => template.map(index => board.split('\n').map(row => row.split('')).reduce((acc, cur, i, self) => acc.concat(cur),[])[i+index])).every(grid => grid.filter((val, i, self) => self.indexOf(val) === i).length === 9) && board.split('\n').map(row => row.split(''))[0].map((col, i) => board.split('\n').map(row => row.split('')[i])).map(col => col.filter((val, i, self) => self.indexOf(val) === i)).every(row => row.length === 9) && board.split('\n').map(row => row.split('').filter((val, i, self) => self.indexOf(val) === i)).every(row => row.length === 9) ? 'solved' : 'invalid'