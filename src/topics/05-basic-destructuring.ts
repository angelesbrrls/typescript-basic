interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPrayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New song';
console.log('Song', song)
console.log('Author',audioPrayer.details.author)

//Destructurar
const {
    song: anotherSong, 
    songDuration: duration,
    details
    //details: { author } // Option válida
 } = audioPrayer;

 const {
    author
 } = details;

console.log('::: Destructurar objetos :::')
console.log('Song',anotherSong)
console.log('Duraction',duration)
console.log('Author', author)

console.log('::: Destructurar arreglos:::')

const [,,trunks]: string[] = ['Goku', 'Vegeta', 'Trunks']
console.log('Personaje 3: ', trunks)
const [,,trunks2 = 'Not found']: string[] = ['Goku', 'Vegeta']
console.log('Personaje 3: ', trunks2)


export {};