import Link from 'next/link';
import styles from './page.module.css';


export default function Home() {
  return (
    <div> 
      <h1>Portal de Viagens!</h1>
      <p>Explore destinos incríveis ao redor do mundo!</p>
      <Link href="/destinos" className={styles.link}>
        Ver Destinos
      </Link>
    </div>
  );
}
