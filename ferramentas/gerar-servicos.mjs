// Gera site/servicos/<slug>.html e os cartões de serviço da home.
// Uso (na pasta D:\ATLANTA EXCHANGE):  node ferramentas/gerar-servicos.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { servicos } from './servicos.mjs';

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'site');
const SITE = 'https://www.atlantaexchangellc.com';
const WHATS = '16787700385';

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const waLink = msg => `https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`;
const icone = d => `<svg viewBox="0 0 24 24">${d}</svg>`;

let home = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');

// ---- 1. Cartões da home ----
const cartoes = servicos.map(s => `        <a class="card card--link" href="servicos/${s.slug}.html">
          <div class="card__icon">${icone(s.icone)}</div>
          <h3>${esc(s.nome)}</h3>
          <p>${esc(s.resumo)}</p>
          <span class="card__more">Saiba mais <span aria-hidden="true">→</span></span>
        </a>`).join('\n');
home = home.replace(/(<!-- SERVICOS:INICIO[^>]*-->)[\s\S]*?(<!-- SERVICOS:FIM -->)/, `$1\n${cartoes}\n$2`);
const rodape = servicos.map(s => `        <li><a href="servicos/${s.slug}.html">${esc(s.nome)}</a></li>`).join('\n');
home = home.replace(/(<!-- RODAPE-SERVICOS:INICIO -->)[\s\S]*?(<!-- RODAPE-SERVICOS:FIM -->)/, `$1\n${rodape}\n$2`);
fs.writeFileSync(path.join(raiz, 'index.html'), home);

// ---- 2. Partes compartilhadas (menu, rodapé, WhatsApp, ícone) tiradas da home ----
const pega = (ini, fim) => home.slice(home.indexOf(ini), home.indexOf(fim, home.indexOf(ini)) + fim.length);
const sub = html => html
  .replace(/href="#top"/g, 'href="../"')
  .replace(/href="#/g, 'href="../#')
  .replace(/src="img\//g, 'src="../img/')
  .replace(/href="servicos\//g, 'href="../servicos/');
const header = sub(pega('<header class="nav"', '</header>'));
const footer = sub(pega('<footer class="footer">', '</footer>'));
const waFloat = pega('<a href="https://wa.me/16787700385" class="wa-float"', '</a>');
const waIco = pega('<svg class="wa-ico"', '</svg>');

// ---- 3. Página de cada serviço ----
fs.mkdirSync(path.join(raiz, 'servicos'), { recursive: true });

for (const s of servicos) {
  const url = `${SITE}/servicos/${s.slug}.html`;
  const outros = servicos.filter(o => o !== s);
  const titulo = `${s.seo} | Atlanta Exchange`;
  const descricao = `${s.resumo} Atendimento em português em Marietta, GA.`;
  const ld = [
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: s.nome, description: s.resumo, url,
      image: `${SITE}/img/servicos/${s.slug}.jpg`,
      areaServed: [{ '@type': 'State', name: 'Georgia' }, { '@type': 'City', name: 'Atlanta' }],
      availableLanguage: ['pt-BR', 'en'],
      provider: { '@type': 'FinancialService', '@id': `${SITE}/#empresa`, name: 'Atlanta Exchange LLC', telephone: '+1-678-382-9799' },
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${SITE}/#servicos` },
        { '@type': 'ListItem', position: 3, name: s.nome, item: url },
      ],
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: s.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ];

  const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(titulo)}</title>
  <meta name="description" content="${esc(descricao)}">
  <link rel="canonical" href="${url}">
  <meta name="theme-color" content="#0a2540">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Atlanta Exchange">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(titulo)}">
  <meta property="og:description" content="${esc(descricao)}">
  <meta property="og:image" content="${SITE}/img/servicos/${s.slug}.jpg">
  <meta property="og:image:alt" content="${esc(s.foto)}">
  <meta property="og:locale" content="pt_BR">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="../img/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="../img/apple-touch-icon.png">
  <link rel="preload" as="image" href="../img/servicos/${s.slug}.jpg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css">
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>

${header}

<main>
  <section class="page-hero">
    <div class="wrap">
      <nav class="crumbs" aria-label="Você está em"><a href="../">Início</a> <span>/</span> <a href="../#servicos">Serviços</a> <span>/</span> ${esc(s.nome)}</nav>
      <div class="page-hero__inner">
        <div>
          <p class="eyebrow">${esc(s.nome)}</p>
          <h1>${esc(s.titulo)}</h1>
          <p class="page-hero__lead">${esc(s.lead)}</p>
          <a href="${waLink(s.whats)}" class="btn btn--wa" target="_blank" rel="noopener">${waIco} Falar no WhatsApp</a>
        </div>
        <figure class="page-hero__photo">
          <img src="../img/servicos/${s.slug}.jpg" alt="${esc(s.foto)}" width="1200" height="900">
          <span class="page-hero__icon">${icone(s.icone)}</span>
        </figure>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap detail">
      <div>
        <h2>O que fazemos</h2>
        <ul class="checks checks--light">
${s.inclui.map(i => `          <li>${esc(i)}</li>`).join('\n')}
        </ul>
      </div>
      <aside class="docs">
        <h3>O que você precisa trazer</h3>
        <ul>
${s.documentos.map(d => `          <li>${esc(d)}</li>`).join('\n')}
        </ul>
        <p class="docs__note">Em dúvida? Chame no WhatsApp que a gente confirma para o seu caso.</p>
      </aside>
    </div>
  </section>

  <section class="section section--dark">
    <div class="wrap">
      <div class="section__head"><p class="eyebrow">Prazos e regras importantes</p><h2>O que a lei exige</h2></div>
      <div class="rules rules--${s.prazos.length}">
${s.prazos.map(([t, d]) => `        <div class="rule"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="section section--tint">
    <div class="wrap">
      <div class="section__head"><p class="eyebrow">Como funciona</p><h2>Simples, em 3 passos</h2></div>
      <ol class="steps">
${s.passos.map(([t, d]) => `        <li><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('\n')}
      </ol>
    </div>
  </section>

  <section class="section">
    <div class="wrap faq">
      <div class="section__head"><p class="eyebrow">Dúvidas frequentes</p><h2>Perguntas sobre ${esc(s.nome)}</h2></div>
${s.faq.map(([q, a]) => `      <details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n')}
      <p class="sources"><strong>Fontes oficiais:</strong> ${s.fontes.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${esc(n)}</a>`).join(' · ')}</p>
      <p class="disclaimer">As informações desta página são gerais e podem mudar. Confirmamos as regras do seu caso no atendimento.</p>
    </div>
  </section>

  <section class="cta-band">
    <div class="wrap cta-band__inner">
      <div>
        <h2>Vamos resolver isso juntos?</h2>
        <p>Atendimento em português · 1695 Lower Roswell Rd, Suite 100 · Marietta, GA</p>
      </div>
      <a href="${waLink(s.whats)}" class="btn btn--wa" target="_blank" rel="noopener">${waIco} Fale conosco agora</a>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section__head"><p class="eyebrow">Outros serviços</p><h2>Tudo em um só lugar</h2></div>
      <div class="others">
${outros.map(o => `        <a href="${o.slug}.html"><span class="card__icon">${icone(o.icone)}</span>${esc(o.nome)}</a>`).join('\n')}
      </div>
    </div>
  </section>
</main>

${footer}

${waFloat}

<script src="../script.js"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(raiz, 'servicos', `${s.slug}.html`), html);
}

// ---- 4. sitemap.xml ----
const urls = ['/', ...servicos.map(s => `/servicos/${s.slug}.html`)];
fs.writeFileSync(path.join(raiz, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${SITE}${u}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>`).join('\n')}\n</urlset>\n`);

console.log(`OK: ${servicos.length} páginas geradas em site/servicos/, cartões da home e sitemap.xml atualizados.`);
