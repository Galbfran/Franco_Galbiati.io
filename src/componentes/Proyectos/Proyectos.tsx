
import style from "./Proyectos.module.css"
import CardTecno from "../Inicio/CardTecno";
const Proyectos = () => {
    return (
        <div className={style.proyectos}>
            <h2>Proyectos:</h2>
            <div className={style.proyects}>
                <div className={style.container}>
                    <img className={style.liliana} src="https://lilianagamesstore.onrender.com/assets/LilianaGameStore-1977a027.png" alt="Tecnologias"/>
                    <a href="https://lilianagamesstore.onrender.com/" target="_blank">Liliana GameStore</a>
                </div>
                <div className={style.container}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAZlBMVEX///9tsz9rsjxpsThkry9msDNiritfrSb2+vTx9+5brB18ulZdrCHl8N/T5sn9/vxxtUXN48G52Kh2t02Xx3yx1J7G37jC3bPq8+WeyoXa6tGBvF2p0JSjzYyTxXe+266LwWtVqQmN6RLVAAAIFUlEQVRogb1bh7LjKgyNEcW9l8Q9//+Ti504sTG4XbJn5r2Zm2Q5IIQa4nY7j+DuR3HT9okxIHT6tOmi0row0ml4Ue0YgDEGQGikNxAAwZigsC1+OgezrCtE8UQrAgHFSdvdg5+Ql4/QJQrmxRT6ztTNfc8MG/a43wBsp75O8rLfX/dyBhS0icCvMJzhfu0CDTMdelj29Dz5NAGpFnrHya2He438PYFIMmZ/P8qeMXKZfJyAW63WWj5lc5LAS/CfyAcAzcTF4/4Qe3xB4ySg1ULYJTHIgUNhtVQHOQdAPhu3AgPvS9+Dv+36HIg9vou3uYdo9tjz5ykzswecvG1AEJImBbbDnjGd5BwQvk5ARpnlM7fcZH/8XePX/OW4pbi5WQapt9hb/excAXB5CypCuSFMSbXhlPtfsHN+28soHZQ+p7ba8P1k7SMIweMRMG0c/8d9/wCql8HpSa9gr3/IjuDtAGIcyqVf6DJ1MtjTefMYk4ZD3vOX7F/bC+QhYbeOhnNXQGfq1uBkzR60+uz8Cgtl9zGsDV/8w41n3ULMIS1WG/9DpX/mS65qffRCLdGFDEDEkCvGrvBJ9rPF03VwWVK63HxLt4+dgGi9Dq6sRLC76Y9ED1QaWvWkXUjD/gk5cnt5XJnhecgTVD9ZvDzPGOC59kwdo18ceUIyZUhtAp1Zgh8snpB0I5sLepJ+/vC1Hzpw2+14sibORzSaF4+w+9jLYyPGJmvg6TzziNhVvJ9GWTab1LLW5ukQpk5THiouMfwOtwMt7AgwQU5dHi2qfAI+373KiBDAUNWjrv0M084/U06p8Vv32lOKN1QRKXNt2yVhUvVt2mRd5J2v4+T4FXlahyMsLl+XOP2j7qLybppmEPyhhFhiOsab/kG9Bxr2NafVVLW0yCv6exzRPIRxGx2uCR0CGcNd09kXPthJoaFMuJSbAw7/v7e7eLD7bQN6FEtLmBLjNuSbO2KnlR7ym7ekzzCyxklsgRiFrgq54H5zSvi6ks2tp72+G4J2+adPsb996hFTJuLnUQhjlQTnQ5lPCUCadn1AgAQ5ekPiFakjDTBOFJ93kSPhg3tI6lunXD3COs2MGXbCJ1bC7U6jotfLfsuYOFzgQKt2d1jjvnNJ01b8iNP3t0qh+SyXjXIZvb0up1Tc6irWLq1+XEfkSiqJFSQKegRa7+JMwlblhIE+VNDL88LLaEkosdx83+X0UGllj9m6ljLSK1ZPtGq9T5Bocl70ir3nB0IjrBCw7BgFjkLz5TXHq0gAJFW8Icziy5Sp/Va5/TRaorBgVsKtnoQei1dvf0FDDSy3IdzlNLdkTe9qNPYZNVAij1g8IJnE6CJHn+yHQqmrsCE+xoXE5cDuNdtxdrZhvnOKI0lyTbU5m9gezLfq2xpz81Ksop2Ne55zyIYQflVP/aAHnmP6q9U/NbE3A7v60ugGyDC5/omap5TWOaQje6r8/k64yb+ZK8XX4m4sZ5AqbByiCMMQAIkZphaDX8IgVIQ2oobslWCLsaYO+m7ss0F4K1B30FhTF+upf6cPxm03ENmKWcynMV7meaLw/7r3U8uHLL76oqBvJRPMLpJ6x+PI3Nd49iY7t7bvup54b7rXW7AJr3qPtsNuUePdRFAKZb3n9SDXjMnLjCBpcDdDTFHy4jGFDH+ntWEDfvUukiGyw25WCCZXJBy9DTu5CaudGqwQ24vTfWa4U0TnLe9xYJWNHSJvnpP5BthNzB0wyPcPQffPb/69/vb5EGe3HhPheftIt9R9VXiiJm/QdwSc7gdLCRjsK6Fgqfsnpe+39Ks8iB7QnIIaY0lxglBX3bTVS3gZmnf0kSP1GH7ml0mk4PSPLt+LEzZv4pw3Z22gB9G0CrVFsp/mWGXmAF7oLHUOZUdD9CtYJaGwyxPvLQRW9HDoktvgNvzQiSlhiOWFnwq7v1HcCPy6Ykzs8kBs3RYphWUgiTO0BK/vShXY9LPKlvTsIveY3PnkDZAmMmL3ABMTvXtUOxgTSSEMWHXUUljO8O/ttVcJDGFNuP3sj+UVqWNQeacyIb1/NCvzXgFoL/lqdYlNwijgWubXreNSRUcP1/3d69IvSmOUnbxeueraQW71SGyGVc1EQJ99dMI/vOMghV0U/f4wAWUbEwKG2/xMKuw5L/EqQ9n5NTpCqlcAw5eEhemZdXP1qac4CClTyOyz/Th0nFBeakcYnObkKwgrM6bBtoq1/XuGZGhutwq2EgBgnGTeyfKD1wCdRlIUWl4wXz+bynr35VEDalfF2ez7Hjv2V6flNa7vjwdD/pXP7KoDKG3PXiVySxUuXCKEO5vGCVH4YfnccGLjFLdpeX7MLRVeig+hXRuRU5jl5O/KT5iVfMAiq+vmMaCp6yzu8jzyy9LjuL//K/28y5q0rxLCJJYKH3AM3XOmHY+RHlUVtV1GyQwYU0oZc13X/sDlv+E/+r4YWsI+5Bni5KvZ01HQ0UR5jJ0f/49DErPfPwAdkfwLn/aPXltLC6ATZWprPN0aW0dP3kh6j66riTZ2snfeRZiVra+RiqnLa0pkWJPeARGvTw+h1PAsxxgexly8iDYfF59jzZdO6+vl+dL5Wy+b7FHUKRTougoonoSdglkb11RA+SDuJO58AqcloOs54AArxueUUOdjyBFRax99oKb9KegIM+6xKtn5yhwYafU/hB0R3Is2wYpUb4iPKXHa/KePoa2ySENjfPU8BDVo7JfksQ9PIpJH7v1m3QJMz8/jJm37ynGqvn/Uce5fY/4Hethst4iC5IoAAAAASUVORK5CYII=" alt="Tecnologias"/>
                    <a href="https://next-java-curso-dzt616zm3-galbfran.vercel.app/" target="_blank">Next con Java y Spring Boot</a>
                </div>
                <div className={style.container}>
                    <img src="data:image/png;base64,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" alt="" />
                    <a href="https://next-java-curso-dzt616zm3-galbfran.vercel.app/" target="_blank">Next con  MongoDB</a>
                </div>
            </div>
        </div>
    )
}

export default Proyectos;