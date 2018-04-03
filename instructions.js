var objToSend = {
    "email": "sydney@fife",
    "password": "pistol"
}

$.post('https://reqres.in/api/register', objToSend, function (data) {
    console.log(data)
})