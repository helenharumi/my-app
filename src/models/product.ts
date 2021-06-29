import { Factory } from "./factory";

export interface Product {
  id: number;
  name: string;
  price: number;
  amout: number;
  factory: Factory;
}