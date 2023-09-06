
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[]

}


function taxCalculation(options: TaxCalculationOptions): number[] {  
    let total = 0;

    options.products.forEach ( product => {
        total += product.price;
    });

    return [total, total * options.tax]
}

//Destructuración 1
function taxCalculation1({ tax, products }: TaxCalculationOptions): [number, number] {  
    let total = 0;

    products.forEach ( ({price}) => {
        total += price;
    });

    return [total, total * tax]
}

//Destructuración 2
export function taxCalculation2(options: TaxCalculationOptions): [number, number] {  

    const {tax, products } = options;
    let total = 0;

    products.forEach ( ({price}) => {
        total += price;
    });

    return [total, total * tax]
}



const shoppingCard = [phone, tablet];
const tax = 0.15;


const result = taxCalculation({
    products: shoppingCard,
    tax: tax
})

console.log('Total', result[0])
console.log('Total', result[1])

console.log('Destructuración')

const [total, taxtTotal] = taxCalculation({
    products: shoppingCard,
    tax: tax
})

