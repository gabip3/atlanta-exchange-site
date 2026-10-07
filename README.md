# Atlanta Exchange — site

Site estático (HTML/CSS/JS) da Atlanta Exchange LLC. A pasta publicada é `site/`.

## Como publicar (fora do Wix)

O site é só HTML/CSS/JS — não precisa de servidor nem mensalidade de plataforma.

## Arquivos
- `index.html` – página (textos, telefones, serviços)
- `styles.css` – visual (cores, fontes)
- `script.js` – menu mobile e formulário (envia a mensagem pelo WhatsApp)
- `img/` – logo e fotos

## Opção recomendada: Netlify (grátis)
1. Crie uma conta em https://app.netlify.com
2. Vá em **Add new site → Deploy manually** e arraste a pasta `site` inteira.
3. Em **Domain management → Add a domain**, coloque `atlantaexchangellc.com`.
4. O Netlify mostra os registros DNS (A / CNAME). Altere-os onde o domínio está registrado
   (se o domínio foi comprado pelo Wix, dá para manter lá e só mudar o DNS, ou transferir
   para outro registrador como Cloudflare/Namecheap).
5. O HTTPS é ativado automaticamente.

Alternativas equivalentes: Cloudflare Pages, Vercel, GitHub Pages.

## ⚠️ Antes de cancelar o Wix
- **E-mail**: se `luciano@atlantaexchangellc.com` usa Google Workspace/outro via Wix, copie os
  registros **MX** (e TXT/SPF) para o novo DNS, senão o e-mail para de funcionar.
- Só cancele o plano Wix depois que o site novo estiver no ar pelo domínio.

## Testar localmente
Abra `site/index.html` no navegador, ou rode `npx http-server site`.

## Editar os serviços
O texto de cada serviço (cartão da home + página própria) fica em
`ferramentas/servicos.mjs` (fora da pasta `site`). Depois de editar, rode na pasta `ATLANTA EXCHANGE`:

    node ferramentas/gerar-servicos.mjs

Isso recria `site/servicos/*.html`, os cartões da home e o `sitemap.xml`.
Menu e rodapé das páginas de serviço são copiados da home — mude na home e rode o comando.

## Fotos dos serviços
`site/img/servicos/<slug>.jpg` — fotos do Unsplash (licença gratuita para uso comercial, sem crédito obrigatório).
Para trocar, substitua o arquivo mantendo o mesmo nome (formato 4:3, ~1200px de largura).

## Cotação do dólar no topo
Vem da AwesomeAPI (economia.awesomeapi.com.br), cotação comercial USD/BRL, atualizada a cada minuto.
É uma referência de mercado — a cotação do envio continua sendo informada no atendimento.
Se a API ficar fora do ar, a faixa some sozinha (o site não quebra).
