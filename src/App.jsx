import {
  Camera,
  ChevronRight,
  FileText,
  Globe,
  MapPin,
  MessageCircle,
} from 'lucide-react'
import kamilaPhoto from './assets/dra-kamila-mota-uniforme.png'
import logoKm from './assets/logo-km-azul.png'
import raspagemImage from './assets/raspagem-profilaxia.png'
import restauracaoImage from './assets/restauracao.png'
import exodontiaImage from './assets/exodontia.png'
import botoxImage from './assets/botox.png'
import moldeiraImage from './assets/clareamento-moldeira.png'
import consultorioImage from './assets/clareamento-consultorio.png'
import './App.css'

const whatsappNumber = '5548998269160'
const whatsappMessage = encodeURIComponent('Olá, gostaria de agendar uma avaliação.')
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const links = [
  {
    title: 'AGENDAMENTO',
    description: 'Agende sua avaliação',
    icon: MessageCircle,
    href: whatsappLink,
    external: true,
  },
  {
    title: 'PROCEDIMENTOS',
    description: 'Conheça os procedimentos realizados',
    icon: FileText,
    href: '#procedimentos',
  },
  {
    title: 'LOCALIZAÇÃO',
    description: 'Um ambiente acolhedor, sofisticado e pensado para você.',
    icon: MapPin,
    href: '#localizacao',
  },
]

const procedures = [
  { name: 'Raspagem e profilaxia', image: raspagemImage },
  { name: 'Restauração', image: restauracaoImage },
  { name: 'Exodontia', image: exodontiaImage },
  { name: 'Botox', image: botoxImage },
  { name: 'Clareamento com moldeira', image: moldeiraImage },
  { name: 'Clareamento em consultório', image: consultorioImage },
]

function App() {
  return (
    <main className="page">
      <section className="profile-card">
        <div className="hero">
          <div
            className="profile-photo"
            role="img"
            aria-label="Dra. Kamila Mota"
            style={{ backgroundImage: `url(${kamilaPhoto})` }}
          />

          <div className="presentation">
            <img className="logo-km" src={logoKm} alt="Logotipo KM" />
            <div className="brand-line" />
            <h1>Dra. Kamila Mota</h1>
            <p className="profession">CRO 26815</p>
            <span className="ornament">✦</span>
            <p className="intro">
              Cuidando do seu sorriso com delicadeza, atenção e procedimentos
              pensados para promover saúde, beleza e autoestima.
            </p>
            <div className="hero-socials">
              <a href="#" aria-label="Instagram"><Camera /></a>
              <a href="#" aria-label="WhatsApp"><MessageCircle /></a>
              <a href="#" aria-label="Localização"><MapPin /></a>
            </div>
          </div>
        </div>

        <nav className="links" aria-label="Links principais">
          {links.map(({ title, description, icon: Icon, href, external }) => (
            <a
              className="link-card"
              href={href || '#'}
              key={title}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
            >
              <span className="link-icon"><Icon /></span>
              <span className="link-copy">
                <strong>{title}</strong>
                <small>{description}</small>
              </span>
              <span className="link-arrow"><ChevronRight /></span>
            </a>
          ))}
          <div className="care-card">
            <p>Seu cuidado merece ser individualizado, seguro e, acima de tudo, humano!</p>
          </div>
        </nav>

        <section className="procedures" id="procedimentos">
          <div className="section-heading">
            <span>ODONTOLOGIA E ESTÉTICA</span>
            <h2>Procedimentos</h2>
            <p>Cuidados pensados para a saúde, harmonia e beleza do seu sorriso.</p>
          </div>
          <div className="procedure-grid">
            {procedures.map((procedure) => (
              <article
                className="procedure-card"
                key={procedure.name}
                style={{ backgroundImage: `url(${procedure.image})` }}
              >
                <h3>{procedure.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="location-section" id="localizacao">
          <div className="location-info">
            <h2>Regiões de atendimento</h2>
            <p className="location-intro">
              Atendimento próximo de você, com cuidado e acolhimento.
            </p>

            <div className="city-grid">
              <article className="city-card">
                <MapPin />
                <h3>Criciúma</h3>
              </article>
              <article className="city-card">
                <MapPin />
                <h3>Içara</h3>
              </article>
            </div>
          </div>
        </section>

        <footer>
          <p>CONECTE-SE</p>
          <span className="footer-ornament">✦</span>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><Camera /></a>
            <a href="#" aria-label="WhatsApp"><MessageCircle /></a>
            <a href="#" aria-label="Site"><Globe /></a>
          </div>
          <small>© 2026 Dra. Kamila Mota · CRO 26815. Todos os direitos reservados.</small>
        </footer>
      </section>
    </main>
  )
}

export default App
