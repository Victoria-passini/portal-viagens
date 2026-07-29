import { destinos } from '../data/destino'; 

import CardDestino from '../../components/CardDestino';

export default function DestinosPage() {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center', color: '#1a365d' }}>
        Escolha o seu próximo destino
      </h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        padding: '1rem 0'
      }}>
        
        {destinos.map((item) => (
          <CardDestino
            key={item.id}
            nome={item.nome}
            imagem={item.imagem}
            preco={item.preco}
          />
        ))}

      </div>
    </div>
  );
}
