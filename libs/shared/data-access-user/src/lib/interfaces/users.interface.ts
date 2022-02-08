export interface IUser {
  email?: string;
  password?: string;
}

export interface IAddress {
  geolocation: IGeolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface IGeolocation {
  lat: string;
  long: string;
}

export interface IName {
  firstname: string;
  lastname: string;
}
