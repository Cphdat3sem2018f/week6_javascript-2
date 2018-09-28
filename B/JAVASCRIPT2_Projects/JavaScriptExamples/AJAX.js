//AJAX BASIC
const ajaxBasic = () => {
	const request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		console.log('State: ' + request.readyState + ' Status: ' + request.status);
		if (request.readyState === 4 && request.status === 200) {
			console.log(JSON.parse(request.responseText));
		}
	}
	request.open('GET', 'http://localhost:3333/api/users', true);
	request.send();
}
//ajaxBasic();

//AJAX GENERAL
const ajaxGeneral = (url, cb) => {
	const request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		if (request.readyState == 4 && request.status == 200) {
			cb(JSON.parse(request.responseText));
		}
	}
	request.open("GET", url, true);
	request.send();
}
/*
ajaxGeneral('http://localhost:3333/api/users', (json) => {
	console.log(json);
});
*/

//FETCH BASIC
const fetchBasic = () => {
	fetch('http://localhost:3333/api/users')
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			console.log(json);
		});
}
//fetchBasic();

//FETCH GENERAL
const fetchGeneral = (url, cb) => {
	fetch(url)
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			cb(json);
		})
		.catch(function (error) {
			console.log('Error: ' + error);
		});
}
/*
fetchGeneral('http://localhost:3333/api/users', json => {
	console.log(json);
});
*/

//FETCH OPTIONS
function makeOptions(requestType, body) {
	return {
		method: requestType,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	};
}

//FETCH PATTERN...
/*
function handleHttpErrors(response) {
	if (!response.ok) {
		return Promise.reject({ status: response.status, error: response.json() })
	}
	return response.json();
}
const url1 = 'http://localhost:3333/api/users';
const data1 = { age: 34, name: "Anton Benson", gender: "female", email: "ab@ab.com" };
const options1 = makeOptions("POST", data1);
fetch(url1, options1)
	.then(handleHttpErrors)
	.then(json => console.log(json))
	.catch(error => {
		if (error.status) {
			error.error.then(e => console.log(e))
		}
		else {
			console.log("Network error");
		}
	});
*/

//FETCH JSON ASYNC
const fetchJsonAsync = async (url, options) => {
	try {
		const response = await fetch(url, options);
		const json = await response.json();
		if (!response.ok) {
			return Promise.reject({ status: response.status, json: json });
		}
		return Promise.resolve({ json: json });
	}
	catch (error) {
		return Promise.reject({ error: 'Network error' });
	}
}
/*
const url2 = 'http://localhost:3333/api/users';
const data2 = { age: 34, name: "Anton Benson", gender: "male", email: "ab@ab.com" };
const options2 = makeOptions("POST", data2);
fetchJson(url2, options2)
.then((resolve) => console.log(resolve.json))
.catch((reject) => console.log(reject.json));
*/

//FETCH JSON PROMISE
const fetchJsonPromise = (requestURL, requestMethod, requestBody) => {	
	const options = {
	method: requestMethod,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(requestBody)};
	
	return fetch(requestURL, options)
	.then(response => { return response.json(); })
	.catch(error => { return Promise.reject({ status: "Network error", msg: "Unable to process request" }); });
}
//FETCH JSON PROMISE - GET REJECTED
fetchJsonPromise("", "GET")
.then((json) => {
	if(json.status)
	{
		console.log("RESOLVED NOTOK: " + JSON.stringify(json));
	}
	else
	{
		console.log("RESOLVED OK: " + JSON.stringify(json));
	}
})
.catch((json) => { console.log("REJECTED: " + JSON.stringify(json)); });
		
//FETCH JSON PROMISE - GET RESOLVED NOTOK
fetchJsonPromise("http://localhost:3333/api/doesnotexist", "GET")
.then((json) => {
	if(json.status)
	{
		console.log("RESOLVED NOTOK: " + JSON.stringify(json));
	}
	else
	{
		console.log("RESOLVED OK: " + JSON.stringify(json));
	}
})
.catch((json) => { console.log("REJECTED: " + JSON.stringify(json)); });

//FETCH JSON PROMISE - GET RESOLVED OK
fetchJsonPromise("http://localhost:3333/api/users", "GET")
.then((json) => {
	if(json.status)
	{
		console.log("RESOLVED NOTOK: " + JSON.stringify(json));
	}
	else
	{
		console.log("RESOLVED OK: " + JSON.stringify(json));
	}
})
.catch((json) => { console.log("REJECTED: " + JSON.stringify(json)); });

//FETCH JSON PROMISE - POST RESOLVED OK
const user = { age: 34, name: "Anton Benson", gender: "male", email: "ab@ab.com" };
fetchJsonPromise("http://localhost:3333/api/users", "POST", user)
.then((json) => {
	if(json.status)
	{
		console.log("RESOLVED NOTOK: " + JSON.stringify(json));
	}
	else
	{
		console.log("RESOLVED OK: " + JSON.stringify(json));
	}
})
.catch((json) => { console.log("REJECTED: " + JSON.stringify(json)); });