import Link from "next/link";
import styles from "./Layout.module.css";


interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>  
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/destinos">Destinos</Link>
            </nav>
        </header>

        <main className={styles.main}>
            {children}   
        </main>

        <footer className={styles.footer}>
         <p>&copy; {new Date().getFullYear()} Portal de Viagens. Todos os direitos reservados.</p>
        </footer>
        
        </div>
    );
}
