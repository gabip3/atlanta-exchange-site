// Menu mobile
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Formulário -> abre o WhatsApp com a mensagem pronta (não precisa de servidor)
const WHATSAPP = '16787700385';
const form = document.getElementById('contact-form');

if (form) form.addEventListener('submit', e => {
  const error = form.querySelector('.form__error');
  e.preventDefault();
  let ok = true;
  form.querySelectorAll('[required]').forEach(f => {
    const valid = f.value.trim() !== '' && f.checkValidity();
    f.classList.toggle('is-invalid', !valid);
    if (!valid) ok = false;
  });
  error.hidden = ok;
  if (!ok) return;

  const d = Object.fromEntries(new FormData(form));
  const lines = [
    'Olá! Vim pelo site da Atlanta Exchange.',
    `Nome: ${d.nome} ${d.sobrenome}`,
    `Email: ${d.email}`,
    d.telefone && `Telefone: ${d.telefone}`,
    `Serviço: ${d.servico}`,
    d.mensagem && `Mensagem: ${d.mensagem}`,
  ].filter(Boolean);
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});

// Cotação do dólar ao vivo (referência comercial USD/BRL — AwesomeAPI)
const quote = document.querySelector('[data-quote]');
if (quote) {
  const fmt = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const pct = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2, signDisplay: 'always' });
  const valueEl = quote.querySelector('[data-quote-value]');
  const changeEl = quote.querySelector('[data-quote-change]');
  const timeEl = quote.querySelector('[data-quote-time]');

  async function updateQuote() {
    try {
      const res = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL', { cache: 'no-store' });
      if (!res.ok) throw new Error(res.status);
      const q = (await res.json()).USDBRL;
      const change = parseFloat(q.pctChange);
      const prev = valueEl.textContent;
      valueEl.textContent = 'R$ ' + fmt.format(parseFloat(q.bid));
      if (prev !== valueEl.textContent && prev !== 'R$ —') {
        valueEl.classList.remove('is-flash'); void valueEl.offsetWidth; valueEl.classList.add('is-flash');
      }
      changeEl.textContent = (change >= 0 ? '▲ ' : '▼ ') + pct.format(change) + '%';
      changeEl.className = 'quote__change ' + (change >= 0 ? 'is-up' : 'is-down');
      const d = new Date(Number(q.timestamp) * 1000);
      timeEl.textContent = 'Comercial · ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      quote.hidden = false;
    } catch (err) {
      // Sem cotação: a faixa simplesmente não aparece
    }
  }
  updateQuote();
  setInterval(updateQuote, 60000);
}
