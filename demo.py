import requests

data = {
	'context' : 'my name is k',
	'question' : 'What is my name?'
}

x = requests.post('https://hindi-qa.herokuapp.com/', data = data)

print(x.text) 