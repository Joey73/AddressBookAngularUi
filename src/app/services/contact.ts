export class Contact {
    id: number;
    firstname: string;
    lastname: string;
    street: string;
    housenumber: string;
    zip: string;
    city: string;
    country: string;
    phone: string;

    constructor() {
        this.firstname = '';
        this.lastname = '';
        this.street = '';
        this.housenumber = '';
        this.zip = '';
        this.city = '';
        this.country = '';
        this.phone = '';
    }
}
