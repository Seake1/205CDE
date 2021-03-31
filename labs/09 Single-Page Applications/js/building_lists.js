const request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
const data = JSON.parse(request.responseText);
console.log(data);

const books = data.books;
const allHeaders = books.map(book => Object.keys(book)).flat()
const headers = [];



allHeaders.forEach(header => {
	if (!headers.includes(header)) headers.push(header)
});


headers.forEach(header => {
	const td = document.createElement('td');
	td.innerHTML = `<b>${header}</b>`;
	document.getElementById('headers').appendChild(td)
});

for (const book of books) {
	const tr = document.createElement('tr');


	for (const field in book) {
		const data = book[field];
		const td = document.createElement('td');
		td.innerText = data;
		tr.appendChild(td)
	}


	tr.onclick = () => {
		document.getElementById('clicked book name').innerText = book.title
	};

	document.querySelector('tbody').appendChild(tr)
}
