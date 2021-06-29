import { Product } from "../models/product";
import { User } from "../models/user";

import api from "./api";

import userUtils from "../utils/userUtils";

export async function getProducts() {

  const { data } = await api.get('/product/list');

  const products: Product[] = data;

  const list = Array.from(products.values());
  return list;
}

export async function save(name: string, email:string , age:number, address:string, userPassword:string) {
  
  let user = { name, email, age, address, userPassword } as User;

  if (user.name === undefined || user.name.trim() === '') {
    throw 'Nome obrigatório!';
  }
  if (user.email === undefined || user.email.trim() === '') {
    throw 'Email obrigatório!';
  }
  if (user.age === undefined || user.age === 0 || user.age>110) {
    throw 'Idade Inválida!';
  }
  if (user.userPassword === undefined || user.userPassword.trim() === '') {
    throw 'Senha obrigatória!';
  }

  const params = JSON.stringify(user);
  await api.post('/user/customer/add', params)
  .then((response) => { })
  .catch((error) => {
    const erro = `${error.response.data} [${error.response.status}]`;
    throw erro;
  });
  
}

export async function login(email: string, userPassword:string) {

  let user = { login:email, password:userPassword };

  if (user.login === undefined || user.login.trim() === '') {
    throw 'Email é obrigatório!';
  }
  if (user.password === undefined || user.password.trim() === '') {
    throw 'Senha é obrigatória!';
  }
  
  const params = JSON.stringify(user);
  await api.post('/user/login', params)
  .then((response) => {
    let user = { email, userPassword, token:response.data} as User;
    userUtils.save(user);
  })
  .catch((error) => {
    const erro = `${error.response.data} [${error.response.status}]`;
    throw erro;
  });
}