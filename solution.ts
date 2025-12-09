type FormatValue= (value: string | number | boolean) => string | number | boolean;

const formatValue: FormatValue = (value) => {
    if (typeof value === 'string'){
        return value.toUpperCase();
    }
    else if (typeof value === 'number'){
        return value*10;
    }
    else{
        return !value;
    }
}

type GetLength=(value: string | Array<any>) => number;

const getLength: GetLength=(value)=>{
    if(typeof value === 'string'){
        return value.length;
    }
    else if(Array.isArray(value)){
        return value.length;
    }
    return 0;
}


class Person{
    name: string;
    age:number;
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

type Value={title:string, rating:number};

type FilterByRating=(value: Value[]) => Value[];

const filterByRating: FilterByRating=(value)=>{
   return value.reduce((acc: Value[],curr: Value)=>{
        if(curr.rating>=4){
            acc.push(curr);
        }
        return acc;
    },[])
}

type User={
    id:number,
    name:string,
    email:string,
    isActive:boolean
}
type FilterActiveUsers=(users: User[]) => User[];

const filterActiveUsers: FilterActiveUsers=(users)=>{
    return users.reduce((acc: User[], curr: User)=>{
        if(curr.isActive){
            acc.push(curr);
        }
        return acc;
    },[])
}

interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}

interface PrintBookDetails{
    (book: Book): void;
}

const printBookDetails: PrintBookDetails = (book)=>{
    console.log(`Title: ${book.title}, Author: ${book.author}, Published Year: ${book.publishedYear}, Available: ${book.isAvailable}`);
}

type GenericArray<T>=Array<T>;

const getUniqueValues =(arr1: GenericArray<string | number >, arr2: GenericArray<string | number >): GenericArray<string | number>=>{
    const set = new Set<string | number>();
    arr1.forEach(item => set.add(item));
    arr2.forEach(item => set.add(item));
    return Array.from(set);
}

type Product={
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}

type CalculateTotalPrice=(products: Product[]) => number;

const calculateTotalPrice: CalculateTotalPrice=(products)=>{
    return products.reduce((total, product)=>{
        if(product.discount){
            total=total + (product.price * product.quantity * (1 - product.discount / 100));
        }
        else{
            total=total + (product.price * product.quantity);
        }
        return total;
    },0)
}

