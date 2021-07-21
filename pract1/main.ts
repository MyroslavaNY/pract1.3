class Address {
    street: string;
    suite: any;
    city: string;
    zipcode: number;
    geo:{
        lat: number;
        lng: number;
    }
    constructor(street: string,suite:any, city:string,zipcode: number, geo:{lat: number,lng: number,}) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}
let onAdress = new Address(
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    92998-3874,
    {
        lat: -37.3159,
        lng: 81.1496
    })

class Company{
    name: string;
    catchPhrase: string;
    bs: any;
    constructor(name: string, catchPhrase: string, bs:any) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }

}
let inCompany = new Company(
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    ' harness real-time e-markets,'

)

interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: number;
    website: string;
    company: Company;

}

let onUser:User= {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: onAdress,
    phone: 1 - 770 - 736 - 8031 - 56442,
    website: 'hildegard.org',
    company:inCompany,
}
console.log(onUser);
