import { useMemo, useState } from 'react'
import './App.css'

const initialClients = [
  { id: 1, name: 'Metalúrgica Horizonte', initials: 'MH', category: 'Indústria', email: 'contato@horizonte.com.br', phone: '(71) 3333-1020', date: '12/08/2024', status: 'Ativo', color: 'blue' },
  { id: 2, name: 'Ana Paula Ribeiro', initials: 'AR', category: 'Pessoa física', email: 'ana.ribeiro@email.com', phone: '(71) 99124-0881', date: '03/08/2024', status: 'Ativo', color: 'purple' },
  { id: 3, name: 'Grupo Nova Bahia', initials: 'NB', category: 'Comércio', email: 'administrativo@novabahia.com.br', phone: '(71) 3201-4432', date: '28/07/2024', status: 'Pendente', color: 'orange' },
  { id: 4, name: 'Carlos Eduardo Santos', initials: 'CS', category: 'Pessoa física', email: 'carlos.santos@email.com', phone: '(71) 99802-5610', date: '19/07/2024', status: 'Ativo', color: 'green' },
  { id: 5, name: 'TecnoMais Soluções', initials: 'TS', category: 'Tecnologia', email: 'oi@tecnomais.com.br', phone: '(71) 3012-7755', date: '15/07/2024', status: 'Inativo', color: 'pink' },
]

const menuItems = [
  { icon: '▦', label: 'Visão geral' },
  { icon: '♧', label: 'Clientes' },
  { icon: '▤', label: 'Atendimentos' },
  { icon: '◷', label: 'Relatórios' },
]

function App() {
  const [clients, setClients] = useState(initialClients)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('Todos os status')
  const [activeMenu, setActiveMenu] = useState('Clientes')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredClients = useMemo(() => clients.filter((client) => {
    const matchesSearch = `${client.name} ${client.email} ${client.category}`.toLowerCase().includes(search.toLowerCase())
    return matchesSearch && (statusFilter === 'Todos os status' || client.status === statusFilter)
  }), [clients, search, statusFilter])

  function addClient(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const category = formData.get('category')
    const client = {
      id: Date.now(),
      name,
      initials: name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase(),
      category,
      email,
      phone: formData.get('phone').trim() || '—',
      date: new Intl.DateTimeFormat('pt-BR').format(new Date()),
      status: 'Ativo',
      color: 'blue',
    }

    setClients((currentClients) => [client, ...currentClients])
    setIsModalOpen(false)
    setSearch('')
    setStatusFilter('Todos os status')
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#inicio" aria-label="SENAI, início">
          <span className="brand-mark">S</span>
          <span className="brand-copy"><strong>SENAI</strong><small>GESTÃO DE CLIENTES</small></span>
        </a>

        <div className="sidebar-label">MENU PRINCIPAL</div>
        <nav className="main-nav" aria-label="Menu principal">
          {menuItems.map((item) => (
            <button
              className={`nav-item ${activeMenu === item.label ? 'selected' : ''}`}
              key={item.label}
              onClick={() => setActiveMenu(item.label)}
              type="button"
            >
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
              {item.label === 'Clientes' && <span className="nav-count">{clients.length}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <span className="help-icon">?</span>
            <strong>Precisa de ajuda?</strong>
            <p>Acesse nosso suporte para tirar dúvidas.</p>
            <button type="button">Falar com suporte <span aria-hidden="true">→</span></button>
          </div>
          <button className="profile" type="button">
            <span className="profile-avatar">MC</span>
            <span className="profile-copy"><strong>Mariana Costa</strong><small>Administradora</small></span>
            <span className="profile-more" aria-hidden="true">···</span>
          </button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb"><span>Início</span><span className="breadcrumb-separator">/</span><strong>{activeMenu}</strong></div>
          <div className="topbar-actions">
            <span className="unit-label"><span className="unit-dot" /> Unidade Salvador</span>
            <button className="icon-button notification-button" type="button" aria-label="Notificações">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg>
              <i />
            </button>
            <span className="topbar-avatar">MC</span>
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow">QUINTA-FEIRA, 15 DE AGOSTO DE 2024</div>
              <h1>Olá, Mariana <span aria-hidden="true">✦</span></h1>
              <p>Acompanhe e gerencie seus clientes em um só lugar.</p>
            </div>
            <button className="primary-button" type="button" onClick={() => setIsModalOpen(true)}>
              <span aria-hidden="true">＋</span> Novo cliente
            </button>
          </section>

          <section className="stats-grid" aria-label="Resumo de clientes">
            <article className="stat-card">
              <div className="stat-top"><span>Total de clientes</span><span className="stat-icon blue-icon">♧</span></div>
              <div className="stat-value">{clients.length.toString().padStart(2, '0')}<span className="stat-change">+12,5%</span></div>
              <div className="stat-foot"><span className="trend-up">↗</span> em relação ao mês passado</div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span>Clientes ativos</span><span className="stat-icon green-icon">✓</span></div>
              <div className="stat-value">{clients.filter((client) => client.status === 'Ativo').length.toString().padStart(2, '0')}<span className="stat-change">+8,2%</span></div>
              <div className="stat-foot"><span className="trend-up">↗</span> em relação ao mês passado</div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span>Novos este mês</span><span className="stat-icon orange-icon">↗</span></div>
              <div className="stat-value">08<span className="stat-change">+2,4%</span></div>
              <div className="stat-foot"><span className="trend-up">↗</span> em relação ao mês passado</div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span>Aguardando retorno</span><span className="stat-icon purple-icon">◷</span></div>
              <div className="stat-value">03<span className="stat-neutral">no momento</span></div>
              <div className="stat-foot">Clientes aguardando contato</div>
            </article>
          </section>

          <section className="workspace-grid">
            <div className="clients-panel">
              <div className="panel-heading">
                <div><h2>Seus clientes</h2><p>Visualize e gerencie sua base de clientes.</p></div>
                <button className="text-button" type="button" onClick={() => setStatusFilter('Todos os status')}>Ver todos <span aria-hidden="true">→</span></button>
              </div>
              <div className="table-toolbar">
                <label className="search-box">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16 16 4 4" /></svg>
                  <input aria-label="Buscar clientes" placeholder="Buscar cliente..." value={search} onChange={(event) => setSearch(event.target.value)} />
                  <kbd>⌘ K</kbd>
                </label>
                <label className="filter-select">
                  <span className="sr-only">Filtrar por status</span>
                  <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                    <option>Todos os status</option>
                    <option>Ativo</option>
                    <option>Pendente</option>
                    <option>Inativo</option>
                  </select>
                </label>
                <button className="filter-button" type="button" onClick={() => { setSearch(''); setStatusFilter('Todos os status') }} aria-label="Limpar filtros">↕</button>
              </div>
              <div className="table-scroll">
                <table>
                  <thead><tr><th>CLIENTE</th><th>CATEGORIA</th><th>CONTATO</th><th>CADASTRO</th><th>STATUS</th><th><span className="sr-only">Ações</span></th></tr></thead>
                  <tbody>
                    {filteredClients.map((client) => (
                      <tr key={client.id}>
                        <td><div className="client-name"><span className={`client-avatar ${client.color}`}>{client.initials}</span><strong>{client.name}</strong></div></td>
                        <td><span className="category-label">{client.category}</span></td>
                        <td><div className="contact-info"><strong>{client.email}</strong><span>{client.phone}</span></div></td>
                        <td className="date-cell">{client.date}</td>
                        <td><span className={`status-badge ${client.status.toLowerCase()}`}><i />{client.status}</span></td>
                        <td><button className="row-menu" type="button" aria-label={`Mais opções para ${client.name}`}>···</button></td>
                      </tr>
                    ))}
                    {filteredClients.length === 0 && <tr><td className="empty-state" colSpan="6">Nenhum cliente encontrado. Tente alterar sua busca ou filtros.</td></tr>}
                  </tbody>
                </table>
              </div>
              <div className="table-footer"><span>Mostrando <strong>{filteredClients.length}</strong> de <strong>{clients.length}</strong> clientes</span><div><button type="button" disabled aria-label="Página anterior">‹</button><button className="current-page" type="button">1</button><button type="button" disabled aria-label="Próxima página">›</button></div></div>
            </div>

            <aside className="right-column">
              <section className="activity-card">
                <div className="panel-heading compact-heading"><div><h2>Atividade recente</h2><p>Últimas atualizações</p></div><button className="more-button" type="button" aria-label="Mais opções">···</button></div>
                <div className="activity-list">
                  <div className="activity-item"><span className="activity-avatar green">✓</span><div><p><strong>Ana Paula Ribeiro</strong> foi cadastrada</p><small>Há 2 horas <span>·</span> Novo cliente</small></div></div>
                  <div className="activity-item"><span className="activity-avatar blue">↻</span><div><p>Dados de <strong>Metalúrgica Horizonte</strong> atualizados</p><small>Ontem, 16:42 <span>·</span> Atualização</small></div></div>
                  <div className="activity-item"><span className="activity-avatar orange">!</span><div><p><strong>Grupo Nova Bahia</strong> aguarda retorno</p><small>Ontem, 10:15 <span>·</span> Atendimento</small></div></div>
                </div>
                <button className="activity-link" type="button">Ver todas as atividades <span aria-hidden="true">→</span></button>
              </section>

              <section className="tip-card">
                <div className="tip-decoration">✦</div>
                <div className="tip-eyebrow">DICA SENAI</div>
                <h3>Relacionamentos que geram resultados.</h3>
                <p>Mantenha os dados dos seus clientes sempre atualizados para oferecer um atendimento ainda melhor.</p>
                <button type="button">Saiba mais <span aria-hidden="true">→</span></button>
              </section>
            </aside>
          </section>
          <footer className="page-footer"><span>© 2024 SENAI Bahia. Todos os direitos reservados.</span><span>Feito para conectar você aos seus clientes <b>♥</b></span></footer>
        </div>
      </main>

      {isModalOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsModalOpen(false) }}>
          <section className="client-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal-heading"><div><span className="modal-kicker">SENAI · CLIENTES</span><h2 id="modal-title">Cadastrar cliente</h2><p>Preencha os dados para adicionar um novo cliente.</p></div><button type="button" className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Fechar">×</button></div>
            <form onSubmit={addClient}>
              <label>Nome completo ou razão social<input name="name" required placeholder="Ex.: Empresa Exemplo Ltda." autoFocus /></label>
              <label>E-mail<input name="email" type="email" required placeholder="contato@empresa.com.br" /></label>
              <div className="form-row">
                <label>Categoria<select name="category"><option>Indústria</option><option>Comércio</option><option>Serviços</option><option>Tecnologia</option><option>Pessoa física</option></select></label>
                <label>Telefone<input name="phone" type="tel" placeholder="(00) 00000-0000" /></label>
              </div>
              <div className="modal-actions"><button className="cancel-button" type="button" onClick={() => setIsModalOpen(false)}>Cancelar</button><button className="primary-button" type="submit">Cadastrar cliente</button></div>
            </form>
          </section>
        </div>
      )}
    </div>
  )
}

export default App
