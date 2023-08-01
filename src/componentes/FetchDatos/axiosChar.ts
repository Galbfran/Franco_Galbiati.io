import axios from 'axios'
interface Character{
    id: number,
    name: string,
    status: string,
    species: string,
    image:string
}

function  getData() {
    
    let response: any;
    return axios.get('https://rickandmortyapi.com/api/character')
        .then((res) => {
            response = res;
            console.log(response)
            let arrayChar:Character[] = response.data.results.map((char:any) => {
                return{
                    id:char.id,
                    name:char.name,
                    status:char.status,
                    species:char.species,
                    image:char.image
                }
            });
            return arrayChar
        })
        .catch((error) => {
            return error.message;
        });
}

export default getData