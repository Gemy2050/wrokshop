export interface IFood {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IMenu {
  name: string;
  items: IFood[];
}

export interface ISelectedFood {
  id: number;
  price: number;
  selected: boolean;
  quantity: number;
}

export interface IMenuList {
  name: string;
  items: IFood[];
}
