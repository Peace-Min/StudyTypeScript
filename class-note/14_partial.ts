interface Address{
    email: string;
    address: string;
}

type z = Partial<Address>;
const me0:z = {};
const me1:z = {email :'asd'}
const me2:z = { email : 'asd' , address:'asd'}