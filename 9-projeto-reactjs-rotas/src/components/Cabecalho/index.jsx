import { Link, NavLink } from 'react-router-dom'
import './styles.css'

export default function Cabecalho() {
    return (
    <header className='site-header'>
        <div className='header-inner'>
        <Link className='brand' to='/' aria-label='Contabilidade Simples - início'>
            <span className='brand-mark' aria-hidden='true'>CS</span>
            <span className='brand-name'>Contabilidade <strong>Simples</strong></span>
        </Link>
        <nav aria-label='Navegação principal'>
            <NavLink to='/servicos'>Serviços</NavLink>
            <NavLink to='/sobre-nos'>Sobre Nós</NavLink>
            <NavLink to='/historia'>História</NavLink>
            <NavLink to='/trabalhe-conosco'>Trabalhe Conosco</NavLink>
        </nav>
        </div>
    </header>
    )
}