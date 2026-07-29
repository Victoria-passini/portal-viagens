import { destinos } from '@/app/data/destino';
import Link from 'next/link';
import { use } from 'react';
import Image from 'next/image';
import styles from './destinos.module.css';


interface ParamsProps {
  params: Promise<{ id: string }>;
}

export default function DetalheDestinoPage({ params }: ParamsProps) {
  const { id } = use(params);
  
  const destino = destinos.find((item) => item.id === Number(id));

  if (!destino) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Destino não encontrado!</h2>
        <Link href="/destinos" style={{ color: '#3182ce', fontWeight: 'bold' }}>
          Voltar para a listagem
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <Link href="/destinos" style={{ display: 'inline-block', marginBottom: '1.5rem', color: '#3182ce', textDecoration: 'none', fontWeight: 'bold' }}>
        &larr; Voltar para destinos
      </Link>
      
      <Image 
  src={destino.imagem} 
  alt={destino.nome} 
  style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem' }}
  width={800}  
  height={400} 
/>

      
      <h1 style={{ color: '#1a365d', marginBottom: '1rem' }}>{destino.nome}</h1>
      
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4a5568', marginBottom: '1.5rem' }}>
        {destino.descricao}
      </p>
      
      <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2b6cb0', padding: '1rem', backgroundColor: '#ebf8ff', borderRadius: '4px', display: 'inline-block' }}>
        Pacote Completo: R$ {destino.preco},00
      </div>
    </div>
  );
}
