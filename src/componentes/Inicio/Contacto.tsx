import styles from './Contacto.module.css'

const Contacto = () => {
    interface Cont {
        url: string;
        nombre: string
    }

    let linksContacto:Cont[] = [
        {
            url:'francogalbiati984@gmail.com',
            nombre:'Mail'
        },
        {
            url:'+54 11 6227 1014',
            nombre:'Telefono'
        },
        {
            url:'https://www.linkedin.com/in/franco-galbiati/',
            nombre:'Linkedin'
        },
        {
            url:'https://github.com/Galbfran',
            nombre:'Github'
        },
    ]


    return(
        <ul className={styles.lista}>
            {linksContacto.map((link , index) => {
                if(link.nombre === 'Github' ||link.nombre === 'Linkedin'  ){
                    return <li key={index}>{link.nombre}: <a href={link.url} target="_blank">{link.url}</a></li>
                }else{
                    return <li key={index}>{link.nombre}: {link.url}</li>
                }
            } )}
        </ul>
    )
}

export default Contacto;