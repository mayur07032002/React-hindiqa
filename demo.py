import requests

data = {
	'context' : 'my name is mayur',
	'question' : 'What is my name?'
}

x = requests.post('https://hindi-qa.herokuapp.com/', data = data)

print(x.text) 