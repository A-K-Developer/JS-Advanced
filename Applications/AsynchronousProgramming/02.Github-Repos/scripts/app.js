
let baseUrl = 'http://localhost:3030/data'
let baseUrl1 = 'http://localhost:3000'
let movieList = document.getElementById('movie-list');

document.getElementById('load-movies').addEventListener('click', () => {
	fetch(`${baseUrl}`)
		.then(res => res.json())
		.then(movies => {
			movies.forEach(element => {
				let liElement = document.createElement('li');
				liElement.textContent = element.title;

				movieList.appendChild(liElement)
			});
		})
});

document.getElementById('addMovie').addEventListener('click', () => {

	fetch(`${baseUrl1}`,{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: 'Man of Steel'
		})
	})
		.then(res => {
			console.log(res);
			console.log('sended');
		})
	
})

function loadCharacter(){
	let baseUrl = 'https://swapi.dev/api/people/1';

	fetch(`${baseUrl}`)
		.then(res => res.json())
		.then((character) => {
			console.log(character);
		})
}

/*
function loadCharacter(){
	let baseUrl = 'https://swapi.dev/api/people/1';
	
	let promise =  fetch(`${baseUrl}`)
	console.log(promise);
	
	promise.then((response) => {
		if(response.ok) {
			let jsonResponse  = response.json();
			jsonResponse.then((character) => {
				console.log(character);
			})
		}
	})
}

*/
document.getElementById('load').addEventListener('click',loadCharacter)
async function loadRepos() {
	//read input field 
	const username = document.getElementById('username').value;
	const list = document.getElementById('repos');


	//send reques
	try {
		const response = await fetch(`https://api.github.com/users/${username}/repos`)

		if (response.ok == false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		const data = await response.json();

		list.innerHTML = '';
		for (let repo of data) {
			list.innerHTML += `
			<li>
			<a href="${repo.html_url}" target="_blank">
				${repo.full_name}
			</a>
			</li>
			`
		}
	}catch(error){
		list.innerHTML = `${error.message}`
	}



}

function handleError(error) {
	list.innerHTML = `${error.message}`;
}

	/*





*********************************************************
function loadRepos() {
	//read input field 
	const username = document.getElementById('username').value;
	const list = document.getElementById('repos');
	

	//send request
	fetch(`https://api.github.com/users/${username}/repos`)
		.then(handleResponse)
		.then(displayRepos)
		.catch(handleError);

	function handleResponse(response){
		if(response.ok == false){
			throw new Error(`${response.status} ${response.statusText}`)
		}
		return response.json();
	}
	//display response data
	function displayRepos(data){
		list.innerHTML = '';
		for(let repo of data){
			list.innerHTML += `
			<li>
			<a href="${repo.html_url}" target="_blank">
				${repo.full_name}
			</a>
			</li>
			`
		}
	}
	function handleError(error){
		list.innerHTML = `${error.message}`;
	}
}
*/