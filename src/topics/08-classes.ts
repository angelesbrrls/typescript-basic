

// export class Person {

//     constructor(public name: string, 
//         private address: string = 'No address'
//         ){ }
// }


//Ejemplo de Herencia
// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'New York')
//     }
// }

//
// export class Hero {

//     public person: Person;

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//       this.person = new Person(realName)
//     }
// }



export class Person {

    constructor(
        public firstName: string, 
        public lastname: string, 
        private address: string = 'No address'
        ){ }
}

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    
    ){

    }
      
}

const tony = new Person('Tony','Stark', 'New York')
const ironman = new Hero('IronMan',45,'Tony', tony);
console.log(ironman)

