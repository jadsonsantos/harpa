import { WHATSSAPP_URL } from '@/constants'
import { InitiativeData } from '@/types'

const data: InitiativeData[] = [
  {
    title: 'Soluções educacionais',
    content: [
      {
        title: 'Mentorias customizadas',
        description: [
          `Em nossas mentorias, você aprenderá Inglês de forma disruptiva e com conteúdos 100% customizados. Isso quer dizer que desenharemos, juntos, o plano de aulas, usando como base o seu assessment pessoal e as suas atuais prioridades.`
        ]
      },
      {
        title: 'Desenvolvimento de conteúdos',
        description: [
          `Desenvolvemos e aplicamos conteúdos de educação executiva customizados em inglês. Nós nos baseamos sempre no diagnóstico feito após uma boa conversa com a sua empresa. Agende uma visita e levamos todas a ideias!`
        ]
      },
      {
        title: 'Traduções',
        description: [
          `Traduzimos todos os materiais não juramentados: contratos, teses, websites, publicidade, vídeos, roteiros, entre outros.`
        ]
      },
      {
        title: 'Revisões',
        description: [
          `Você poderá contar com a gente sempre que precisar fazer revisões e transcrições tanto em português como em inglês.`
        ]
      },
      {
        title: 'English performance',
        description: [
          `No Performance, o aluno aprenderá habilidades como: construção e uso da retórica, apresentações executivas, oratória e entonações e uso assertivo de vocabulário.`
        ]
      },
      {
        title: 'Mediações',
        description: [
          `Trabalhamos em múltiplas formas no quesito mediação, em workshops, apresentações, painéis de talks, aplicações de treinamentos bilíngues, entre outras.`
        ]
      }
    ],
    cta: {
      text: 'ENTRE EM CONTATO E SAIBA MAIS >',
      href: WHATSSAPP_URL
    },
    hasAccordion: true
  },
  {
    title: 'HÁRPÁ para empresas',
    content: [
      {
        title: 'Serviços customizados para empresas',
        description: [
          'Condições especiais para empresas ou grandes turmas. Entre em contato para saber mais.'
        ]
      }
    ],
    cta: {
      text: 'ENTRE EM CONTATO E SAIBA MAIS >',
      href: WHATSSAPP_URL
    }
  },
  {
    title: 'Collab',
    content: [
      {
        title: '<strong>Parcerias de sucesso</strong>',
        description: [
          'Para parcerias entre sua empresa e a HÁRPA, entre em contato conosco e saiba como podemos colaborar.'
        ]
      }
    ],
    cta: {
      text: 'ENTRE EM CONTATO >',
      href: WHATSSAPP_URL
    }
  }
]

export default data
