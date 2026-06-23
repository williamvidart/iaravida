# Design System — Iara Vida

## Atmosphere

Um refúgio visual para pessoas que sentem saudade da sua essência criativa.
O site é claro, arejado e terroso — como papel de algodão com pigmentos de terra moídos na palma da mão.
Quem chega deve sentir que entrou num lugar seguro e ao mesmo tempo ficar impressionado com a linguagem visual, querendo explorar mais e mais.

## Color

Cada cor: Nome descritivo / Hex / Função.

- Pele de Pêssego / #E8D5C8 / background — o fundo principal, rosa-bege suave e aconchegante
- Areia Quente / #C9A882 / surface — cards, seções, painéis sobre o fundo
- Creme / #F5EDE4 / highlight — contraste suave, áreas de respiro máximo
- Rosa Argila / #B07A6E / accent — a cor da marca; botões, destaques, o que chama atenção
- Siena / #9C6244 / secondary — cor de apoio, detalhes, ícones, elementos de natureza
- Terra Escura / #3D1F15 / ink — texto principal; aparece em doses certeiras para gerar contraste

## Typography

- Heading family: Grandenhas (fonte manuscrita criada pela Iara — uso reservado para títulos de destaque e momentos de assinatura)
  - Arquivo: `public/fonts/Grandenhas-WithComma.otf` (versão final: vírgula = cauda do ponto-e-vírgula; ê com circunflexo em forma de montanha)
  - Usar com parcimônia: em H1 de hero, títulos de seção de impacto, citações da artista
- Body family: Nunito (sans-serif arredondado, suave, contemporâneo — para tudo o mais)
- Scale: body 16px → subtitle 20px → h3 26px → h2 34px → h1 48–72px (ratio ~1.28)
- Notes: Grandenhas SEMPRE maior que o Nunito equivalente — mínimo text-6xl (60px), títulos de seção text-6xl/text-7xl, hero text-6xl sm:text-8xl. Fontes manuscritas têm cap-height menor opticamente; compensar com tamanho generoso. Nunito em 300–400 para suavidade; corpo em 400, confortável para leitura
- Glifos customizados em Grandenhas-WithComma.otf: vírgula (cauda do ponto-e-vírgula), ê (e + circunflexo montanha), ó (o + agudo diagonal /)

## Dials

- Variance: 4, ordenado e calmo — seções previsíveis, respiram entre si
- Density: 3, muito arejado — silêncio faz parte do design, não é falta de conteúdo
- Motion: 6, mais vivo — as obras chegam com presença; elementos entram como respiração profunda, não saltam

## Components

Botões arredondados (border-radius generoso), fundo Rosa Argila, texto Creme.
Hover suave — pequena elevação ou leve escurecimento, nenhum flash brusco.
Cards com fundo Areia Quente, bordas inexistentes ou levíssimas, muito espaço interno.
Links em Siena, sem sublinhado, com transição suave de opacidade.
Seções separadas por espaço generoso, não por linhas ou divisores.
Imagens das obras com fundo Pele de Pêssego — a arte respira, não compete com moldura.

## Tone

Quente, próximo, poético com pé no chão. Fala como uma amiga que acredita em você.
Nunca vendedor. Nunca distante. Frases curtas que abrem espaço para sentir.
Convida, não empurra. Compartilha, não promove.

## Anti-patterns e regras

- Nunca fundo branco frio de tela — o Pele de Pêssego é o mínimo de calor
- Nunca cinza dominante — apenas como detalhe mínimo ou sombra
- Nunca mais de dois pesos de fonte na mesma tela
- A Terra Escura só aparece como texto — não como bloco ou fundo
- Nada de cores vibrantes, neon, ou saturadas — a paleta é sempre empoeirada
- O silêncio (espaço vazio) é conteúdo — nunca preencher por preencher
- As obras de arte são as protagonistas — o design serve, não compete
