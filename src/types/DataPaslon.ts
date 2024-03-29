export interface DataPaslon  {
    id:number
    name:string
    visi:string[]
    koalisi:string[]
    akumulasi:string
    vote:number
    bg:string
}
export interface Votes {
    
        no:number
        name:string
        alamat:string
        gender:string
        paslon:string
    
}

export interface TypePaslon {
    no:number
    img:string
    name:string
    visi:string[]
    koalisi:string[]
}

export interface TypePartai {
    no:number,
    img:string,
    name:string,
    visi:string[],
    alamat:string
}

export interface TypeRegist {
    name:string,
    address:string,
    sex:string,
    username:string,
    password:string
}

export interface User {
    fullname:string,
    id: number
}

export interface LoginData {
    username:string,
    password:string
}

export interface TypeBlogs {
    title:string
    description:string,
    image:string,
    // user:number,
    author:string
}