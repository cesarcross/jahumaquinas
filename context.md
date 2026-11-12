# Contexto do projeto: novo site da JAHU Máquinas e Ferramentas

> Este arquivo é o ponto de partida para o Claude Code. Junto com ele foram anexados 4 screenshots do site atual (Home, Produtos/JT2D, Assistência Técnica, Contato). Use-os como referência de conteúdo e de identidade visual.

## 1. Visão geral

Reformular o site institucional **jahumaquinas.com.br**, da JAHU Máquinas e Ferramentas, fabricante brasileira de máquinas para pisos (politrizes, lixadeiras, lapidadoras, raspadoras e fresadoras) para construção civil. O site atual é antigo, com visual datado e sem responsividade.

**Objetivo:** site moderno, responsivo, rápido e **bem posicionado no Google**, mantendo a identidade visual (concreto + azul), com catálogo de produtos, download de manuais e contato direto por telefone, WhatsApp e e-mail.

**Idioma do site:** português do Brasil (pt-BR). Todo o conteúdo, `lang="pt-BR"`, metadados e textos de interface em português.

## 2. Stack decidida

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS**
- Geração **estática (SSG)**: o conteúdo muda raramente. Usar `generateStaticParams` nas rotas de produto.
- **Deploy na Vercel**, domínio `jahumaquinas.com.br` com DNS apontado a partir do **registro.br**
- **Sem CMS** por enquanto: dados dos produtos em `src/data/products.ts` (tipado)
- `next/image` para todas as imagens (WebP/AVIF, lazy loading, tamanhos corretos)
- **Sem backend e sem formulário de contato** (decisão do cliente: evitar integração com Resend ou similar)

## 3. Estrutura de páginas e rotas

As tabs de produto devem ser **rotas reais** (não apenas estado no cliente), para que cada produto tenha URL, `<title>` e meta description próprios e seja indexável.

| Rota | Conteúdo |
|---|---|
| `/` | Home: apresentação, selos, lista de linhas de produtos, destaque dos produtos, CTA de contato |
| `/produtos` | Redireciona (ou renderiza) o primeiro produto |
| `/produtos/jt2d` | Página do produto JT2D |
| `/produtos/jm2d` | Página do produto JM2D |
| `/produtos/jahu-turbo` | Página do produto JAHU TURBO |
| `/produtos/jahu-3d-lapidadora` | Página do produto JAHU 3D LAPIDADORA |
| `/produtos/jf300-fresadora` | Página do produto JF300 FRESADORA |
| `/assistencia-tecnica` | Revendedor autorizado e assistência técnica (APC) |
| `/contato` | Telefones, WhatsApp e e-mail (sem formulário) |
| `/galeria` e `/parceiros` | **A definir** (ver seção 12). Existem no site atual, mas não há screenshots deles |

Como alternativa, a home pode ser uma landing de página única com seções (Sobre, Produtos, Assistência, Contato) e âncoras no menu, **desde que** as páginas individuais de produto continuem existindo como rotas.

Menu de navegação atual (manter a ordem): **HOME, PRODUTOS, GALERIA, PARCEIROS, ASSISTÊNCIA TÉCNICA, CONTATO**.

## 4. Conteúdo atual (extraído dos screenshots)

### 4.1 Cabeçalho / selos (aparecem em todas as páginas)

- Logo JAHU "Máquinas & Ferramentas" (azul, letras brancas)
- Três selos em destaque, em amarelo/azul:
  - **Compre com o Cartão BNDES**
  - **Desde 1988**
  - **Empresa 100% nacional** (com bandeira do Brasil)
- Imagem do cartão BNDES no canto superior direito

Esses selos são argumentos de venda importantes. Mantê-los em destaque (header e/ou faixa na home).

### 4.2 Home

Título: **JAHU MÁQUINAS 100% BRASILEIRA DESDE 1988**

Texto: "A JAHU - Máquinas e Ferramentas, fabrica máquinas politrizes há mais de 25 anos em parceria com a APC - Manutenção de Máquinas e Equipamentos para construção civil. Juntas, são responsáveis pela fabricação, manutenção e comercialização de:"

Lista:
- Lixadeira de pisos
- Lapidadora de pisos
- Raspadora de pisos
- Fresadoras de pisos
- Máquinas para raspar e polir pisos

Imagem: foto do estande da JAHU numa feira, com três máquinas verdes (JAHU Turbo ao centro). Ver screenshot 1.

> Observação: "há mais de 25 anos" é de um texto antigo (rodapé indica © 2014). Como a marca é "desde 1988", sugerir ao cliente atualizar para "mais de 35 anos" ou usar apenas "desde 1988". **Não alterar sem confirmar.**

### 4.3 Produtos

Cinco produtos, selecionados por tabs (botões verdes arredondados):
**JT2D, JM2D, JAHU TURBO, JAHU 3D LAPIDADORA, JF300 FRESADORA**

Estrutura de cada página de produto (exemplo real, JT2D):

- **Foto principal** + botão "Ver fotos" (abre mais fotos)
- **CARACTERÍSTICAS**
  - Mod JT2D motor weg trifásico - 4CV - 4P
  - Voltagem: 220/380V
  - Peso: 150kg
  - Utilizada para polir e raspar pisos.
  - Pisos de alta resistência, granilite, mármores e granitos, concreto e epoxi.
  - Construída em alumínio, aço e ferro fundido. Rolamentos esféricos.
  - Alta produtividade. Utiliza pedra abrasiva para raspar e polir.
- **ACESSÓRIOS**
  - Alavanca para transporte
  - Paralama de correia laminada
  - Tubo de Aspiração (opcional): material alumínio, diâmetro de 2", ideal para raspagem a seco, adaptação de 1 ou 2 tubos por máquina. (com foto do acessório)
- Botão **BAIXAR MANUAL** (PDF)

Os dados dos outros 4 produtos **não estão nos screenshots**. Devem ser coletados do site atual (ou fornecidos pelo cliente) e preenchidos em `products.ts`. Enquanto isso, usar placeholders claramente marcados com `TODO`.

### 4.4 Assistência Técnica

Título: **Revendedor Autorizado e Assistência Técnica**

- APC Manutenção de Máquinas e Equipamentos para Construção Civil S/C Ltda
- Telefones: ver seção 7 (os telefones antigos (11) 3858-6226 / 3966-0459 foram substituídos e **não** aparecem mais no site; a página não exibe telefones, apenas os botões de ligar e WhatsApp)
- "Assistência técnica de politrizes, acabadoras de superfícies, fresas, serra de corte, etc."
- Ícone de chave de boca e chave de fenda

### 4.5 Contato

- Telefones antigos (substituídos, não usar): +55 (11) 3858-6226 e +55 (11) 3966-0459
- E-mail antigo: `jahu@jahumaquinas.com.br`. **Não exibir no novo site**: ninguém sabe para onde ele encaminha hoje (ver seção 11).
- **E-mail oficial a usar no novo site: `jahumaquinas@gmail.com`**
- O formulário atual (Nome, Telefone, E-mail, Mensagem) **será removido**.

### 4.6 Rodapé

"COPYRIGHT 2014 JAHU MÁQUINAS • TODOS OS DIREITOS RESERVADOS" → atualizar o ano dinamicamente.

## 5. Modelo de dados (sugestão)

```ts
// src/data/products.ts
export type ProductPhoto = { src: string; alt: string };

export type Product = {
  slug: string;              // "jt2d"
  name: string;              // "JT2D"
  shortDescription: string;  // para cards e meta description
  characteristics: string[]; // itens da lista "Características"
  accessories: { name: string; details?: string[]; photo?: ProductPhoto }[];
  photos: ProductPhoto[];    // a primeira é a principal
  manualUrl?: string;        // "/manuais/jt2d.pdf"
  seo: { title: string; description: string };
};

export const products: Product[] = [ /* ... */ ];
```

Dados da empresa (telefones, e-mail, WhatsApp, endereço se houver) em `src/data/company.ts`, usados no header, no rodapé, na página de contato e no JSON-LD.

## 6. Página de produto: requisitos de UI

1. **Tabs de produtos** no topo do container, estilizadas como botões (verde, arredondados, como no site atual). Implementar com `<Link>` para as rotas reais, com estado ativo e `aria-current="page"`. No mobile, scroll horizontal ou grade de 2 colunas.
2. **Foto principal grande** do produto.
3. **Galeria de miniaturas** abaixo da foto principal, para alternar a foto exibida:
   - Componente client pequeno (`"use client"`) apenas para o estado da foto selecionada. O resto da página continua server component.
   - Thumbnails clicáveis e acessíveis por teclado (`button`, foco visível, `aria-label`/`alt` descritivo).
   - No mobile, fileira com scroll horizontal.
   - Opcional: lightbox ao clicar na imagem principal (substitui o botão "Ver fotos" atual).
4. **Descrição / Características** e **Acessórios** (lista com foto do acessório quando existir).
5. **Botão "Baixar manual (PDF)"** bem visível: link direto `<a href="/manuais/<slug>.pdf" download>` (ou Vercel Blob se os PDFs forem pesados). Esconder o botão se o produto não tiver manual.
6. **CTA de contato** na página do produto: botões de WhatsApp e ligar, já preenchidos com o nome do produto na mensagem (ex.: "Olá! Tenho interesse na JT2D.").

## 7. Contato (sem formulário)

Dados oficiais de contato (centralizar em `src/data/company.ts`):

| Canal | Valor | Link |
|---|---|---|
| Telefone 1 (mesmo número do WhatsApp) | (11) 98195-2433 | `tel:+5511981952433` |
| Telefone 2 | (11) 94747-0026 | `tel:+5511947470026` |
| WhatsApp | +55 (11) 98195-2433 | `https://wa.me/5511981952433?text=<mensagem codificada>` |
| E-mail | jahumaquinas@gmail.com | `mailto:jahumaquinas@gmail.com` |

- Telefones como links `tel:` e e-mail como `mailto:`.
- **Botão de WhatsApp** com o número `5511981952433`: flutuante no canto inferior direito em todas as telas (usa `public/images/assets/walogo.png`, que também substitui qualquer ícone de WhatsApp desenhado), na página de contato (cartão clicável) e em cada produto. Não há botão de WhatsApp na navbar nem em Galeria/Parceiros (mensagem pré-preenchida com o nome do produto, usando `encodeURIComponent`). No texto exibido, formatar como `(11) 98195-2433`.
- E-mail exposto com leve ofuscação para reduzir spam (ex.: montar o endereço no cliente, ou usar componente que renderiza `jahumaquinas` + `@` + `gmail.com`), mantendo o link `mailto:` funcional.
- **Não** usar `jahu@jahumaquinas.com.br` em nenhum lugar (site, JSON-LD, metadados).
- Se houver endereço físico, incluir com link para o Google Maps. **TODO: confirmar com o cliente.**

## 8. SEO (requisito importante)

O domínio e a marca são antigos, então preservar o posicionamento na migração é prioridade.

1. **Metadata API** do Next com `title` e `description` únicos por página (incluindo `generateMetadata` nos produtos), `canonical` e `lang="pt-BR"`.
2. **Dados estruturados (JSON-LD):**
   - `Organization` / `LocalBusiness` na home, com telefones, e-mail e logo
   - `Product` em cada página de produto (nome, descrição, imagem, marca JAHU)
3. **`app/sitemap.ts`** e **`app/robots.ts`** (incluir URL do sitemap).
4. **Open Graph e Twitter Cards** com imagem (importante para compartilhamento no WhatsApp). Criar `og:image` padrão e por produto.
5. **Redirects 301** (`next.config.js` → `redirects`) das URLs antigas para as novas, quando mudarem. **Antes de implementar, levantar todas as URLs do site atual** (inclusive PDFs e imagens com backlinks) e mapear.
6. **Palavras-chave reais do segmento** nos títulos, headings e textos: "lixadeira de pisos", "lapidadora de pisos", "politriz", "raspadora de pisos", "fresadora de pisos", "máquina para polir concreto/granilite" etc. Texto natural, sem keyword stuffing.
7. **HTML semântico:** um único `h1` por página, hierarquia de headings, `alt` descritivo nas imagens, links com texto significativo.
8. **Performance (Core Web Vitals):** `next/image` com `sizes` corretos, `priority` só na imagem acima da dobra, fontes via `next/font`, sem JS desnecessário.
9. **Pós-deploy (checklist manual, para o Cesar):** verificar o domínio no Google Search Console e enviar o sitemap; criar/atualizar o Google Business Profile; validar JSON-LD no Rich Results Test.

## 9. Identidade visual

Manter a identidade do site atual, de forma mais moderna:

- **Fundo:** textura sutil de concreto (imagem leve ou ruído via CSS), não cinza chapado. Containers claros (quase branco) com sombra suave, como os cards do site atual.
- **Cor primária:** azul do logo (aprox. `#3B82F6`) para header/menu, com um azul mais escuro para contraste e texto. Barra de menu em azul sólido, item ativo em branco com texto azul (como no site atual).
- **Acento:** verde das máquinas (botões das tabs, botão de manual) e amarelo dos selos (BNDES, Desde 1988, 100% nacional).
- **Tipografia:** sans-serif legível e robusta (a atual é estilo Ubuntu). Sugestão: Ubuntu ou similar via `next/font`.
- **Logo:** usar o logo JAHU existente (pedir arquivo vetorial/SVG ao cliente; se não houver, extrair/recriar a partir dos screenshots).
- Contraste adequado (WCAG AA) nos textos sobre azul e sobre a textura.

## 10. Responsividade

- Mobile first. Menu colapsa em hambúrguer abaixo de `md`.
- Selos do header: em linha no desktop; empilhados ou em carrossel/faixa no mobile.
- Grid do produto: 2 colunas no desktop (foto + info), 1 coluna no mobile.
- Botões de ação (ligar, WhatsApp, baixar manual) com área de toque grande.

## 11. Infraestrutura e DNS

- Deploy na Vercel (plano gratuito deve bastar). Usar o preview deployment para validação com o cliente antes de trocar o DNS.
- No projeto da Vercel, adicionar **apex** (`jahumaquinas.com.br`) e **www**, definindo qual redireciona para qual (preferência: apex como principal, `www` → apex com 301).
- No registro.br: `A` para o IP indicado pela Vercel no apex e `CNAME` do `www` para o domínio indicado pela Vercel (ou delegação de nameservers).
- ⚠️ **Não quebrar os registros MX/SPF/DKIM:** o domínio pode ter e-mail ativo (`jahu@jahumaquinas.com.br`), cujo destino atual é desconhecido. Antes de mexer no DNS, **exportar/anotar todos os registros atuais** (principalmente `MX` e `TXT`) e preservá-los. Alterar o `A` do apex e o `CNAME` do `www` não afeta o e-mail; o risco está em trocar nameservers ou apagar registros.
- **Descobrir para onde vai o e-mail antigo:** consultar os registros `MX` do domínio (`dig MX jahumaquinas.com.br`, ou MXToolbox) e o painel do registro.br (DNS). O `MX` indica qual serviço recebe o e-mail (Google Workspace, Locaweb, UOL Host, etc.); a caixa/encaminhamento em si é configurado nesse serviço, não no registro.br. Se o DNS estiver delegado a outro provedor (nameservers que não são do registro.br), os registros ficam lá.
- O novo site **não depende** desse e-mail (usa `jahumaquinas@gmail.com`), então isso não bloqueia o lançamento. Só preserve os registros atuais até o cliente decidir se mantém, redireciona ou descarta o endereço antigo.

## 12. Pendências / perguntas para o cliente

- [x] WhatsApp definido: +55 11 98195-2433
- [x] Telefones definidos: (11) 98195-2433 e (11) 94747-0026 (substituem os antigos 3858-6226 e 3966-0459)
- [x] E-mail oficial definido: jahumaquinas@gmail.com
- [ ] Descobrir para onde vai o e-mail antigo `jahu@jahumaquinas.com.br` (ver seção 11)
- [ ] Endereço físico (para mapa e `LocalBusiness`)
- [ ] Conteúdo completo dos produtos **JM2D, JAHU TURBO, JAHU 3D LAPIDADORA e JF300 FRESADORA** (características, acessórios, fotos)
- [ ] Manuais em PDF de cada produto
- [ ] Fotos em alta resolução (e a galeria existente)
- [ ] O que fazer com **Galeria** e **Parceiros** (manter como páginas, ou integrar na home?). Pegar o conteúdo atual
- [ ] Logo em vetor (SVG)
- [ ] Atualizar o texto "há mais de 25 anos" e o copyright 2014
- [ ] Lista de URLs antigas para redirects 301

## 13. Ordem de trabalho sugerida

1. Inicializar o projeto (Next.js App Router + TS + Tailwind) e configurar fontes, cores e tokens do tema.
2. Criar `company.ts` e `products.ts` (com `TODO` onde faltar dado).
3. Layout base: header (logo, selos, menu responsivo), rodapé, botão flutuante de WhatsApp.
4. Home.
5. Página de produto: tabs (rotas), galeria de miniaturas, características, acessórios, botão de manual.
6. Assistência Técnica e Contato.
7. SEO: metadata, JSON-LD, sitemap, robots, Open Graph, redirects.
8. Revisão de acessibilidade e performance (Lighthouse), teste em mobile.
9. Deploy em preview na Vercel → validação com o cliente → troca do DNS → Search Console.

## 14. Convenções de código

- TypeScript estrito, componentes funcionais, server components por padrão; `"use client"` só onde necessário (galeria, menu mobile).
- Componentes em `src/components`, dados em `src/data`, imagens em `public/images/<produto>/`, manuais em `public/manuais/`.
- Tailwind para estilos; sem bibliotecas de UI pesadas.
- Textos de conteúdo fora dos componentes (em `src/data`) sempre que possível, para facilitar edição futura.
- Nunca inventar especificações técnicas dos produtos: se o dado não existir, deixar `TODO` e avisar.