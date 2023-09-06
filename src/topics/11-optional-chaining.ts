export interface Passeger {
    name: string;
    children?: string[];
}

const passenger1: Passeger = {
    name: 'Selegna'
}

const passenger2: Passeger = {
    name: 'Maria',
    children: ['Natalia', 'Naty']
}


const printChildren = (passenger: Passeger) =>{

    //if (!passenger.children) return 0;
    const howManyChildren = passenger.children?.length || 0; // Opcional
    //const howManyChildren = passenger.children!.length; //Siempre se va a recibir
    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}


printChildren(passenger2)
printChildren(passenger1)