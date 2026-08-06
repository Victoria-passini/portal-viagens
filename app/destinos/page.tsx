import { destinos } from '../data/destino'; 
import styles from './destinos.module.css';
import CardDestino from '../../components/CardDestino';

export default function DestinosPage() {
  return (
    <div>
  <h1 className={styles.titulo}>
            Escolha o seu próximo destino
      </h1>
 <div className={styles.grid}>
        
        {destinos.map((item) => (
          <CardDestino
            key={item.id}
              id={item.id}
              nome={item.nome}
            imagem={item.imagem}
            preco={item.preco}
          />
        ))}

      </div>
    </div>
  );
}