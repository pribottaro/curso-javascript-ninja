/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['Priscila', 1, 1.5, {}, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
	return arg;
}

myFunction(arr);
// ['Priscila', 1, 1.5, {}, true];

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(arr)[1])
// 1

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

var array = ['a', 2, 3, 'priscila'];
var number = 2;



function minhaFuncao(arg1, arg2) {
	return arg1[arg2];

}

minhaFuncao(array, number);

// 3

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var meuArray = ['nome', 2, undefined, null, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
function retornaArray(arg) {
	return arg;
}

retornaArray(meuArray);

// ['nome', 2, undefined, null, true];

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {

	var books = {
		'Mindset': {
			quantidadePaginas: 270,
			autor: 'Carol Dweck',
			editora: 'Lua nova'
			},
		'Pequeno príncipe': {
			quantidadePaginas: 180,

			autor: 'Antoine de Saint-Exupéry',
			editora: 'Viva mais'
			},
		'Vendedor de sonhos': {

			quantidadePaginas: 320,
			autor: 'Augusto Cury',

			editora: 'Lua nova'
			}
		};
		return !name ? books: books[name];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var nameBook = 'Mindset';
console.log('O livro ' + nameBook + ' tem ' + book(nameBook).quantidadePaginas + ' paginas!' );
// O livro Mindset tem 270 paginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

var nameBook = 'Pequeno príncipe';
console.log('O autor do livro ' + nameBook + ' é ' + book(nameBook).autor + '.');

// O autor do livro Pequeno príncipe é Antoine de Saint-Exupéry.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

var nameBook = 'Vendedor de sonhos';
console.log('O livro ' + nameBook + ' foi publicado pela editora ' + book(nameBook).editora + '!');

//O livro Vendedor de sonhos foi publicado pela editora Lua nova!
