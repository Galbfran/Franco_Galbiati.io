import CardTecno from "./CardTecno";
import styles from './Tecnologias.module.css'

const Tecnologias = () => {

    interface Tecno {
        url: string;
        nombre: string
    }

    let tecnologias:Tecno[] = [ 
        { 
            url:'https://w7.pngwing.com/pngs/186/608/png-transparent-html5-icon-%E2%80%A2-html-social-network-icon.png',
            nombre:'HTML'
        },
        {
            url:'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
            nombre:'CSS'
        },
        {
            url:'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
            nombre:'JavaScript'
        },
        {
            url:'https://ionicframework.com/docs/icons/logo-react-icon.png',
            nombre:'React'
        },
        {
            url:'https://miro.medium.com/v2/resize:fit:1400/1*1LLrDEqeSUp5okZ7CeORuw.png',
            nombre:'Redux'
        },
        {
            url:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/745px-Postgresql_elephant.svg.png',
            nombre:'PostgresSQL'
        },
        {
            url:'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
            nombre:'Express'
        },
        {
            url:'https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg',
            nombre:'Node'
        },
        {
            url:'https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png',
            nombre:'GitHub'
        },
    ]


    return(
        <div className={styles.container}>
            {tecnologias.map((tec, index) => <CardTecno key={index} img={tec.url}  nombre={tec.nombre}/>)}
        </div>
    )
}

export default Tecnologias;