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

// Formulário de contato
// Com a chave do Web3Forms preenchida, a mensagem vai para o e-mail do Luciano.
// Sem a chave, o formulário abre o WhatsApp com a mensagem pronta.
const WEB3FORMS_KEY = ''; // cole aqui a Access Key do web3forms.com
const WHATSAPP = '16787700385';
const form = document.getElementById('contact-form');

if (form) form.addEventListener('submit', async e => {
  e.preventDefault();
  const error = form.querySelector('.form__error');
  const button = form.querySelector('[data-submit]');
  let ok = true;
  form.querySelectorAll('[required]').forEach(f => {
    const valid = f.value.trim() !== '' && f.checkValidity();
    f.classList.toggle('is-invalid', !valid);
    if (!valid) ok = false;
  });
  error.textContent = 'Preencha os campos obrigatórios (*).';
  error.hidden = ok;
  if (!ok) return;

  const d = Object.fromEntries(new FormData(form));
  if (d.botcheck) return; // robô de spam

  if (!WEB3FORMS_KEY) {
    const lines = [
      'Olá! Vim pelo site da Atlanta Exchange.',
      `Nome: ${d.nome} ${d.sobrenome}`,
      `Email: ${d.email}`,
      d.telefone && `Telefone: ${d.telefone}`,
      `Serviço: ${d.servico}`,
      d.mensagem && `Mensagem: ${d.mensagem}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    return;
  }

  button.disabled = true;
  button.textContent = 'Enviando...';
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Site: ${d.servico}, ${d.nome} ${d.sobrenome}`,
        from_name: 'Site Atlanta Exchange',
        replyto: d.email,
        Nome: `${d.nome} ${d.sobrenome}`,
        Email: d.email,
        Telefone: d.telefone || '(não informado)',
        Serviço: d.servico,
        Mensagem: d.mensagem || '(sem mensagem)',
        botcheck: '',
      }),
    });
    const out = await res.json();
    if (!out.success) throw new Error(out.message);
    form.querySelectorAll('label, .form__row, .form__note, [data-submit]').forEach(el => el.hidden = true);
    form.querySelector('.form__success').hidden = false;
  } catch (err) {
    error.textContent = 'Não foi possível enviar agora. Tente de novo ou chame no WhatsApp.';
    error.hidden = false;
    button.disabled = false;
    button.textContent = 'Enviar mensagem';
  }
});

// Cotação do dólar ao vivo (referência comercial USD/BRL, AwesomeAPI)
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
      if (prev !== valueEl.textContent && prev !== 'R$ ...') {
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

// Animação de entrada dos blocos ao rolar a página
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const alvos = document.querySelectorAll('.section__head, .card, .value, .steps li, .rule, .split__media, .split__text, .contact__info, .form, .docs, .detail > div, .faq details, .others a');
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  alvos.forEach(el => {
    const irmaos = [...el.parentElement.children];
    el.style.transitionDelay = `${Math.min(irmaos.indexOf(el), 5) * 70}ms`;
    el.classList.add('reveal');
    io.observe(el);
  });
}
