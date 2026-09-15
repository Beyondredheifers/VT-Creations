
export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export interface Member {
  id: number;
  name: string;
  gender: Gender;
  birthDate: Date;
  email: string;
}