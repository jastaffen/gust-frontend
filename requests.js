const headers = { 'Content-Type': "application/json", "Accept": "application/json"};

const usersUrl = "http://localhost:3000/api/v1/users";

const parseData = resp => resp.json();
const catchError = obj => console.log(obj.error)

//Users

export const signUp = (user, city, country) => fetch(usersUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
        user: {
            username: user.firstName,
            password: user.lastName,
            first_name: user.firstName,
            last_name: user.lastName,
            city: city,
            country: country
        }})
    })
    .then(parseData)
    .catch(catchError)