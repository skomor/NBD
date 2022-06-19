import requests

data = {
    'name': "Supra",
    'brand': "Toyota",
    'hp': 300,
    'max_speed': 260
}
print("data to create:")
print(data)

createResult = requests.put('http://localhost:8098/buckets/s25884/keys/supra',
    data = data,
    headers = {
        'content-type': 'application/json'
    },
)

print("created status: ")
print(createResult)

res = requests.get('http://localhost:8098/buckets/s25884/keys/supra')
print("GET1: ")
print(res.content)

data["max_speed"] = 265
print("data to update:")
print(data)

editResult = requests.put('http://localhost:8098/buckets/s25884/keys/supra',
    data = data,
    headers = {
        'content-type': 'application/json'
    },
)
print("edit status: ")
print(editResult)

res = requests.get('http://localhost:8098/buckets/s25884/keys/supra')
print("GET2: ")
print(res.content)


print("deleting")
deleteResult = requests.delete('http://localhost:8098/buckets/s25884/keys/supra')
print("delete status: ")
print(deleteResult)
res = requests.get('http://localhost:8098/buckets/s25884/keys/supra')

print("GET3: ")
print(res.content)