import { createLanguageService } from "typescript"

const User = {
    name: "Will",
    email: "wfundir1swarthmore.edu",
    isActive: true

}

function createUser({name: string, isPaid: boolean}) {
}

let newUser = {name: "Will", isPaid: false, email: "wfundir1@swarthmore.edu"}
createUser(newUser)





function createCourse():{}{
    return {name: "reactjs", price: 399}
}


type User = {
    name: string
    email: string
    isPaid: boolean
}


function createdUser(user: User) {

}

export {}