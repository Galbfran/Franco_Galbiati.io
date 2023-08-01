import React from 'react';
import styles from './CardFetch.module.css'

interface CardProps {
    key: number;
    name: string;
    status: string;
    species: string;
    image: string;
}

const CardFetch: React.FC<CardProps> = ({ key, name, status, species, image }) => {
    return (
        <div key={key} className={styles.container}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
        </div>
    );
};

export default CardFetch;