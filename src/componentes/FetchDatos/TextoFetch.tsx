


const TextoFetch = () => {
let texto = 'FetchDatos es un componente de React que muestra información de personajes obtenida a través de una API externa. Utiliza el hook useState para almacenar los datos de los personajes y el hook useEffect para realizar una llamada a la API al cargar el componente. Los detalles de cada personaje se representan en una serie de tarjetas de estilo definido por CardFetch, que muestra el nombre, estado, especie e imagen del personaje.'

    return(
        <>
            <h3>Proyecto Fetch Data</h3>
            <p>{texto}</p>
        </>
    )
}

export default TextoFetch;