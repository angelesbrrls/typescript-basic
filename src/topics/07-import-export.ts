import { Product , taxCalculation2} from "./06-function-destructuring"

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];





const[ total, tax ] = taxCalculation2({ products: shoppingCart, tax: .15 });

console.log('Total', total);
console.log('Tax', tax)