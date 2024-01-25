import axios from "axios"
//npm install --save-dev @types/lodash (lodash can be changed for other libraries)
import _ from "lodash"

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        chatchphrase: string,
        bs: string
    }
}

axios.get<User>("https://jsonplaceholder.typicode.com/users/1").then((res) => {
    const { data } = res
    printUser(data)
})

function printUser(user: User) {
    console.log(user.name)
    console.log(user.email)
    console.log(user.phone)
}
