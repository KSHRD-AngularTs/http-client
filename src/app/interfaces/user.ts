import {BaseUser} from './base-user';

export class User implements BaseUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };

  constructor(user: BaseUser) {
    this.id = user.id;
    this.name = user.name.toUpperCase();
    this.username = user.username.toUpperCase();
    this.email = user.email;
    this.address = user.address;
    this.phone = user.phone;
    this.website = user.website;
    this.company = user.company;
  }

}
