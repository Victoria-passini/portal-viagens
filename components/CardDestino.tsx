import Image from 'next/image';
import Link from "next/link";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
    id: number;
    nome: string;
    imagem: string;
    preco: number;
}

export default function CardDestino({ id, nome, imagem, preco }: CardDestinoProps) {
    return (
        <div className={styles.card}>
           <Image 
  src={imagem} 
  alt={nome} 
  className={styles.image} 
  width={400}  
  height={200} 
/>


            <div className={styles.content}>
                <h3> {nome} </h3>
                <p className={styles.price}> A Preço: R$ {preco} </p>
                
                <Link href={`/destinos/${id}`} style={{ textDecoration: 'none' }}>
          <button className={styles.button}>Ver Detalhes</button>
        </Link>
      </div>
    </div>
  );
}