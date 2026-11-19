import './styles.css'

export default function Rodape() {
    return (
        <footer className='site-footer'>
            <p>© {new Date().getFullYear()} Contabilidade Simples. Todos os direitos reservados.</p>
        </footer>
    )
}