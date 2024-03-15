function addTwo(num: number): number {

    // return num + 2
    return 6
}

function getUpper(val : string) {

    return val.toUpperCase()
}

function signUpUser(name: string, email: string, password: number, isPaid: boolean) {
    return name
}

let loginUser = (name: string, email: string, isPAid : boolean = false) => {

}

let myVal = addTwo(5)
let result = getUpper("fufu")


signUpUser("will","wfundir1",4,true)
loginUser("h", "h@gmail.com")


console.log("This is the result ")
console.log(result)

// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }

//     return "200 Ok"
// }

const getHello = (s: string): string => {
    return ""
}


const  heroes = ["thor", "spiderman", "hulk"]

heroes.map(hero => {
    return 'hero is ${hero}';
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errormsg: string): never {
    throw new Error(errormsg);
}







export {}