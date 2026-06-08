import './App.css';
import foto from '../src/minha_foto2.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';


function useScrollAnimation() {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisivel(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visivel];
}

function Header() {
  return (
    <header className='header'>
      <img src={foto} alt='Minha foto' className='header-foto' />
    <div className='header-corpo'>
      <div className='info'>
        <h1>Gabriel Conceição</h1>
        <p className='cargo'> Desenvolvedor FullStack - HTML | CSS | JavaScript | React | MySql | Java </p>
        <a href="mailto:gabrielconceicao2018@gmail.com" className='email'>
          gabrielconceicao2018@gmail.com
        </a>
      </div>
      <div className='links'>
        <a href='https://www.linkedin.com/feed/' target='_blank' rel='noreferrer'><FaLinkedin size={20}/> Linkedin</a>
        <a href='https://github.com/Gabriel-Silva-Tech' target='_blank' rel='noreferrer'><FaGithub size={20}/>Github</a>
      </div>
    </div> 
    </header>
  )
}

function Sobre() {
  const [ref, visivel]  = useScrollAnimation();

  return (
    <section ref={ref} className={`sobre ${visivel ? 'visivel' : ''}`}>
      <h2>Olá, meu nome é Gabriel</h2>
      <p>
      Sou estudante de tecnologia pelo PROA Profissional, com foco em desenvolvimento Fullstack e aprofundando meus conhecimentos em Java, React e JavaScript. Meu objetivo é contribuir com o time no desenvolvimento de projetos excelentes, unindo qualidade técnica a uma boa experiência para o usuário. Acredito no crescimento contínuo tanto nas minhas hard e soft skills, e busco um ambiente onde eu possa aprender, colaborar e evoluir junto com a equipe.
       </p>
      </section>
  )
}

function Etapa({ titulo, status, descrição, softskills, techs }) {
  const [aberta, setAberta] = useState(status === 'atual');

  return (
    <div className='etapa-wrapper'>
      <div className='timeline-dot' />
      <div className={`etapa ${status}`}>

        <div className='etapa-header' onClick={() => setAberta(!aberta)}>
          <h3>{titulo}</h3>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span className='indicador'>
              {status === 'atual' ? 'Eu estou aqui'
                : status === 'proximo' ? 'Próximo passo'
                : 'Objetivo'}
            </span>
            <span className='seta'>{aberta ? "▲" : "▼"}</span>
          </div>
        </div>

        {aberta && (
          <div className="etapa-corpo">
            <p className='etapa-desc'>{descrição}</p>
            <p className='etapa-sub'>Soft skills essenciais:</p>
            <ul className='etapa-lista'>
              {softskills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
            <div className='etapa-tags'>
              {techs.map((t, i) => <span key={i}>{t}</span>)}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

function MapaDeCarreira() {
  const [ref, visivel] = useScrollAnimation();
  return (
    <section ref={ref} className={`mapa ${visivel ? 'visivel' : ''}`}>
      <h2>Mapa de carreira</h2>
      <div className='timeline'>

        <Etapa
          titulo="Desenvolvedor Junior"
          status="atual"
          descrição="Estou no início da minha jornada, construindo uma base sólida em HTML, CSS, JavaScript, React e Java. Foco em aprender boas práticas desde o começo — código limpo, versionamento com Git e trabalho em equipe."
          softskills={[
            'Comunicação assertiva',
            'Trabalho em equipe',
            'Proatividade',
            'Aprendizado contínuo',
          ]}
          techs={[]}
        />

        <Etapa
          titulo="Desenvolvedor Pleno"
          status="proximo"
          descrição="Meu próximo objetivo é atuar com mais autonomia, sendo capaz de resolver problemas complexos, contribuir em decisões técnicas e desenvolver funcionalidades completas com qualidade e responsabilidade, aplicando boas práticas de arquitetura e testes.
"
          softskills={[
            'Code review',
            'Estimativa ',
            'Comunicação técnica ',
            'Aprendizado contínuo',
          ]}
          techs={[]}
        />

        
        <Etapa
          titulo="Desenvolvedor Senior"
          status="proximo"
          descrição="Meu objetivo de longo prazo é me tornar uma referência técnica no time — liderando soluções, mentorando outros desenvolvedores, tomando decisões de arquitetura e entregando projetos com visão estratégica, escalabilidade e excelência técnica.
"
          softskills={[
            'Visão estratégica',
            'Tomada de decisão',
            'Comunicação',
            'Influência positiva',
          ]}
          techs={[]}
        />

      </div>
    </section>
  )
}

function SkillBar({nome, porcentagem}){
  return(
    <div className='skill'>
      <div className='skill-topo'>
          <span className='skill-nome'>{nome}</span>
      </div>
      <div className='skill-barra-bg'>
        <div className='skill-barra' style={{width: `${porcentagem}%`}}/> 
      </div>
    </div>
  )
}

function Skills() {
  const [ref, visivel] = useScrollAnimation();
  const Frontend = [
    { nome: 'HTML/CSS', porcentagem: 80 },
    { nome: 'JavaScript', porcentagem: 30 },
    { nome: 'React', porcentagem: 60 },
  ];

  const backend = [
    { nome: 'Java', porcentagem: 35 },
    { nome: 'Springboot', porcentagem: 25 },
    { nome: 'MySQL', porcentagem: 30 },
  ];

  return (
     <section ref={ref} className={`skills ${visivel ? 'visivel' : ''}`}>
      <h2>Skills</h2>

      <p className="skill-grupo-titulo">Frontend</p>
      {Frontend.map((s, i) => (
        <SkillBar key={i} nome={s.nome} porcentagem={s.porcentagem} />
      ))}

      <p className="skill-grupo-titulo" style={{ marginTop: '3.25rem' }}>Backend</p>
      {backend.map((s, i) => (
        <SkillBar key={i} nome={s.nome} porcentagem={s.porcentagem} />
      ))}

      <div className="idiomas">
        <p className="skill-grupo-titulo">Idiomas</p>
        <div className="idioma-item">
          <span className="idioma-nome">Português</span>
          <span className='idioma-nivel'>Nativo</span>
        </div>
        <div className="idioma-item">
          <span className="idioma-nome">Inglês</span>
          <span className='idioma-nivel'>Técnico</span>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className='pagina'>
      <div className='folha'>
        <Header />
        <Sobre />
        <MapaDeCarreira />
        <Skills /> 

      </div>
    </div>
  )
}
export default App;