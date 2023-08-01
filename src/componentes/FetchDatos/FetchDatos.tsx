import getData from './axiosChar';
import { useState , useEffect } from 'react';
import styles from './FetchDatos.module.css'
import TextoFetch from './TextoFetch';
import CardFetch from './CardFetch';

interface Character{
    id: number,
    name: string,
    status: string,
    species: string,
    image:string
}



const FetchDatos = () => {
    const [character, setCharacter] = useState<Character[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            console.log(data)
            setCharacter(data);
        };
        fetchData();
    }, []);

    return (
        <article className={styles.article}>
            <section className={styles.section}>
                <TextoFetch/>
            </section>
            <section className={styles.section}>
                <div className={styles.container}>
                    {character.map((char: Character) => (
                        <CardFetch
                            key={char.id}
                            name={char.name}
                            status={char.status}
                            species={char.species}
                            image={char.image}
                        />
                    ))}

                </div>
            </section>
        </article>
    );
};

export default FetchDatos;