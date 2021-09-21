

fetch("http://localhost:3006/cars", {
    method: "POST",
    headers: new Headers({
        'Content-Type': "application/json",
    }),
    body: '{"make": "mazda","model": "eletronic","year": 2022}'
})
