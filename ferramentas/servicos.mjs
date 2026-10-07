// Conteúdo de cada serviço. Edite aqui e rode:  node ferramentas/gerar-servicos.mjs
// Cada serviço vira uma página em site/servicos/<slug>.html e um cartão na home.
//
// Regras conferidas em fontes oficiais (out/2026): revisar todo ano:
//  - FMCSA: USDOT p/ veículos 10.001+ lbs (interestadual); Geórgia exige USDOT também p/ intraestadual >10.000 lbs (GA DPS)
//  - FMCSA: MCS-150 a cada 2 anos (49 CFR 390.19); multa até $1.000/dia, máx. $10.000; número desativado
//  - UCR: anual p/ transportadores interestaduais, inclusive "private carriers"
//  - GA SOS: Annual Registration 1/jan a 1/abr, $50 (+$25 após 1/abr); LLC online $100 + taxa
//  - GA: Workers' Comp obrigatório com 3+ empregados; contratante responde por sub sem seguro
//  - GA: seguro auto mínimo 25/50/25
//  - IRS: 1040/Schedule C até 15/abr; 1065 até 15/mar; 4868 estende entrega até 15/out (não o pagamento)
//  - IRS: ITIN expira se não usado em declaração por 3 anos seguidos
//  - CFPB: remessa: divulgar câmbio, tarifas e valor recebido; cancelamento em 30 min

export const servicos = [
  {
    slug: 'envio-de-pix',
    foto: 'Mulher sorrindo enquanto faz um pagamento pelo celular',
    nome: 'Envio de PIX',
    resumo: 'Mande dinheiro dos EUA para qualquer chave PIX no Brasil, com cotação clara antes de fechar.',
    icone: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M14.5 9.5h-3.2a1.5 1.5 0 0 0 0 3h1.4a1.5 1.5 0 0 1 0 3H9.5M12 8v1.5M12 15.5V17M5.5 9v.01M18.5 15v.01"/>',
    titulo: 'Envie PIX para o Brasil direto de Atlanta',
    lead: 'Você paga aqui em dólar e o valor cai em reais na chave PIX de quem você escolher, com a cotação, as tarifas e o valor final informados antes de você confirmar.',
    inclui: [
      'Envio para qualquer chave PIX: CPF, CNPJ, e-mail, celular ou chave aleatória',
      'Taxa de câmbio, tarifas e valor exato em reais informados antes do pagamento',
      'Recibo do envio, com todos os valores, para você guardar',
      'Envios para pessoa física e para empresas (CNPJ)',
      'Atendimento presencial em Marietta ou pelo WhatsApp, em português',
    ],
    passos: [
      ['Fale com a gente', 'Informe o valor e a chave PIX de quem vai receber.'],
      ['Confira a cotação', 'Você vê quanto chega em reais, já com as tarifas, antes de pagar.'],
      ['Pronto', 'O envio é feito e você recebe o recibo.'],
    ],
    prazos: [
      ['Seus direitos por lei', 'Pela regra federal de remessas (CFPB), quem envia dinheiro para o exterior tem direito a saber a taxa de câmbio, as tarifas e o valor que será entregue antes de pagar, e a receber um recibo depois.'],
      ['Cancelamento', 'Em geral, você pode cancelar uma remessa em até 30 minutos após o pagamento e receber o dinheiro de volta, desde que o valor ainda não tenha sido creditado.'],
      ['Identificação', 'Por exigência das leis americanas contra lavagem de dinheiro, pedimos documento com foto. Envios de valores maiores podem exigir informações adicionais.'],
    ],
    documentos: ['Documento com foto válido (passaporte, driver license ou ID)', 'Chave PIX de quem vai receber', 'Nome completo de quem vai receber'],
    faq: [
      ['Quanto tempo demora para chegar?', 'Na maioria dos casos o valor é creditado no mesmo dia. O prazo de disponibilidade aparece no seu recibo.'],
      ['Posso enviar para conta de empresa?', 'Sim, também enviamos para chaves PIX ligadas a CNPJ.'],
      ['Por que pedem documento?', 'Toda empresa que envia dinheiro para o exterior nos EUA é obrigada por lei a identificar o cliente. Isso protege você e quem recebe.'],
    ],
    fontes: [
      ['CFPB: Envio de dinheiro ao exterior (em espanhol/inglês)', 'https://www.consumerfinance.gov/consumer-tools/sending-money/'],
    ],
    whats: 'Olá! Quero fazer um envio de PIX para o Brasil.',
  },
  {
    slug: 'envio-de-dinheiro',
    foto: 'Notas de cem dólares',
    nome: 'Envio de Dinheiro',
    resumo: 'Remessas internacionais para conta bancária no Brasil e em outros países, com recibo e acompanhamento.',
    icone: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    titulo: 'Remessas internacionais com segurança',
    lead: 'Envie dinheiro para conta bancária no Brasil e em outros países com quem atende a comunidade há mais de 20 anos. Tudo informado antes, com recibo e acompanhamento até o crédito.',
    inclui: [
      'Depósito em conta bancária no Brasil',
      'Envios para outros países (consulte os destinos disponíveis)',
      'Taxa de câmbio, tarifas e valor final informados antes do pagamento',
      'Recibo com a data em que o dinheiro estará disponível',
      'Acompanhamento até a confirmação do crédito',
    ],
    passos: [
      ['Informe o destino', 'País, banco e dados de quem vai receber.'],
      ['Feche a cotação', 'Você sabe o valor final que chega antes de pagar.'],
      ['Acompanhe', 'Avisamos quando o dinheiro for creditado.'],
    ],
    prazos: [
      ['Transparência obrigatória', 'A regra federal de remessas (CFPB) garante que você saiba a taxa de câmbio, as tarifas, o valor que será entregue e a data de disponibilidade antes de pagar.'],
      ['Cancelamento e erros', 'Em geral, você tem 30 minutos após o pagamento para cancelar. Se houver erro no envio, você tem direito a pedir correção.'],
      ['Identificação', 'As leis americanas exigem identificação do cliente em remessas internacionais. Valores maiores podem exigir informações sobre a origem do dinheiro.'],
    ],
    documentos: ['Documento com foto válido', 'Dados bancários completos de quem vai receber (banco, agência, conta, CPF)'],
    faq: [
      ['Qual a diferença para o PIX?', 'O PIX é creditado em uma chave PIX, normalmente no mesmo dia. A remessa bancária deposita direto em conta e também atende outros países.'],
      ['Existe limite de valor?', 'Depende do tipo de envio e do destino. Fale com a gente e informamos as condições.'],
    ],
    fontes: [
      ['CFPB: Envio de dinheiro ao exterior', 'https://www.consumerfinance.gov/consumer-tools/sending-money/'],
    ],
    whats: 'Olá! Quero fazer um envio de dinheiro.',
  },
  {
    slug: 'emprestimos',
    foto: 'Entrega da chave de um carro financiado',
    nome: 'Empréstimos',
    resumo: 'Empréstimo pessoal, financiamento de veículo e crédito para empresa, com SSN ou ITIN.',
    icone: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/>',
    titulo: 'Empréstimos e financiamentos com orientação de verdade',
    lead: 'Precisa de dinheiro para um carro, uma caminhonete de trabalho ou para o seu negócio? Analisamos o seu perfil e mostramos as opções que fazem sentido, inclusive para quem tem ITIN.',
    inclui: [
      'Empréstimo pessoal',
      'Financiamento de carros, caminhonetes e equipamentos de trabalho',
      'Capital de giro e crédito para empresas (LLC)',
      'Opções para quem tem SSN ou ITIN, conforme a instituição',
      'Orientação para construir e melhorar o seu credit score',
    ],
    passos: [
      ['Conte o que precisa', 'Valor, finalidade e prazo desejado.'],
      ['Análise do perfil', 'Avaliamos renda, histórico e documentos.'],
      ['Decida com segurança', 'Você vê juros (APR), prazo e parcela antes de assinar.'],
    ],
    prazos: [
      ['Entenda o APR', 'Por lei federal (Truth in Lending Act), o credor é obrigado a informar o custo total do empréstimo, incluindo a taxa anual (APR), antes de você assinar. Compare sempre o APR, não só a parcela.'],
      ['Seu crédito conta', 'Pagar em dia constrói o seu credit score nos EUA, o que abre portas para juros menores no futuro.'],
    ],
    documentos: ['Documento com foto', 'SSN ou ITIN', 'Comprovantes de renda (holerites, extratos ou Tax Returns)', 'Comprovante de endereço', 'Para empresas: documentos da LLC e EIN'],
    faq: [
      ['Quem tem ITIN consegue empréstimo?', 'Sim, existem instituições que fazem empréstimos e financiamentos com ITIN. As condições dependem do seu histórico e da sua renda declarada.'],
      ['A aprovação é garantida?', 'Não. Toda aprovação depende da análise de crédito da instituição financeira. Desconfie de quem garante aprovação antes de analisar.'],
      ['Declarar imposto ajuda?', 'Muito. Tax Returns em dia comprovam sua renda e são exigidos pela maioria dos credores.'],
    ],
    fontes: [
      ['CFPB: Empréstimos e crédito', 'https://www.consumerfinance.gov/consumer-tools/'],
    ],
    whats: 'Olá! Gostaria de informações sobre empréstimos.',
  },
  {
    slug: 'seguros',
    foto: 'Pai sorrindo com os dois filhos em frente de casa',
    nome: 'Seguros',
    resumo: 'Seguro de carro, casa, vida e empresa, incluindo General Liability e Workers’ Comp para construção.',
    icone: '<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
    titulo: 'Seguros para você, sua família e sua empresa',
    lead: 'Cotamos com diferentes seguradoras e explicamos a apólice em português. Para empresas de construção, cuidamos do General Liability e do Workers’ Comp que os contratantes exigem.',
    inclui: [
      'Seguro de carro (auto), pessoal e comercial',
      'Seguro residencial e de aluguel (renters)',
      'Seguro de vida',
      'General Liability (responsabilidade civil) para empresas',
      'Workers’ Compensation (acidente de trabalho)',
      'Certificados de seguro (COI) para enviar aos contratantes',
    ],
    passos: [
      ['Diga o que quer proteger', 'Carro, casa, família ou empresa.'],
      ['Receba as cotações', 'Comparamos opções e explicamos as diferenças.'],
      ['Contrate com tranquilidade', 'E conte com a gente na renovação e no sinistro.'],
    ],
    prazos: [
      ['Seguro de carro é obrigatório', 'Na Geórgia, todo veículo precisa de seguro contínuo com, no mínimo, cobertura 25/50/25: $25 mil por pessoa ferida, $50 mil por acidente e $25 mil de danos à propriedade.'],
      ['Workers’ Comp na Geórgia', 'Empresas com 3 ou mais funcionários (incluindo meio período) são obrigadas a ter seguro de acidente de trabalho.'],
      ['Atenção, contratante', 'Se você contrata subcontratado sem Workers’ Comp, a lei da Geórgia pode tornar a sua empresa responsável pelos funcionários dele, e a seguradora cobra isso na auditoria.'],
    ],
    documentos: ['Driver license', 'Dados do veículo (VIN) ou do imóvel', 'Para empresas: dados da LLC, atividade, folha de pagamento estimada e subcontratados'],
    faq: [
      ['Minha empresa de construção precisa de seguro?', 'Quase sempre. A maioria dos contratantes exige General Liability (geralmente $1 milhão) e Workers’ Comp antes de liberar o trabalho, e a lei exige Workers’ Comp a partir de 3 funcionários.'],
      ['O que é o COI?', 'O Certificate of Insurance é o comprovante de que sua empresa tem seguro. Os contratantes pedem antes de começar a obra.'],
      ['Posso fazer seguro de carro com driver license de outro país?', 'Algumas seguradoras aceitam. Verificamos as opções para o seu caso.'],
    ],
    fontes: [
      ['Georgia State Board of Workers’ Compensation', 'https://sbwc.georgia.gov/'],
      ['Georgia Office of Insurance Commissioner', 'https://oci.georgia.gov/'],
    ],
    whats: 'Olá! Gostaria de uma cotação de seguro.',
  },
  {
    slug: 'abertura-de-empresas',
    foto: 'Empreendedora atendendo cliente no balcão do seu negócio',
    nome: 'Abertura de Empresas',
    resumo: 'Abra sua LLC na Geórgia e mantenha tudo em dia: EIN, Registered Agent e Annual Registration.',
    icone: '<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6M4 21h16"/>',
    titulo: 'Abra e mantenha sua empresa em dia na Geórgia',
    lead: 'Cuidamos da abertura da sua LLC e de tudo que vem depois, para sua empresa ficar 100% regular: sem multa, sem bloqueio e com Good Standing para fechar contratos.',
    inclui: [
      'Abertura de LLC na Secretaria de Estado da Geórgia (Articles of Organization)',
      'EIN, o número fiscal da empresa no IRS',
      'Registered Agent com endereço físico na Geórgia',
      'Operating Agreement (contrato entre os sócios)',
      'Annual Registration todo ano, dentro do prazo',
      'Certificado de Good Standing, alterações e encerramento da empresa',
    ],
    passos: [
      ['Planejamento', 'Definimos nome, sócios e atividade da empresa.'],
      ['Registro', 'Abrimos a LLC no estado e tiramos o EIN no IRS.'],
      ['Manutenção', 'Lembramos e fazemos as renovações todo ano.'],
    ],
    prazos: [
      ['Annual Registration: 1º de janeiro a 1º de abril', 'Toda LLC da Geórgia precisa renovar o registro todo ano nesse período. A taxa do estado é $50; depois de 1º de abril, há multa de $25.'],
      ['Risco de dissolução', 'A empresa que não renova pode ser dissolvida administrativamente pelo estado e, com isso, perde o Good Standing e o direito de operar.'],
      ['Registered Agent obrigatório', 'Toda LLC precisa manter um Registered Agent com endereço físico na Geórgia (não vale caixa postal) para receber documentos oficiais.'],
    ],
    documentos: ['Documento com foto dos sócios', 'Endereço da empresa', 'Nome desejado (e duas opções)', 'Atividade da empresa e divisão entre os sócios'],
    faq: [
      ['Preciso ter Green Card ou SSN para abrir uma LLC?', 'Não. Não é preciso ser residente para abrir uma LLC. Para o EIN, explicamos o caminho no seu caso.'],
      ['Quanto custa abrir?', 'A taxa do estado da Geórgia para abrir a LLC é de $100 (online), mais o nosso serviço. Passamos o valor total antes de começar.'],
      ['LLC paga imposto?', 'Depende do tipo. LLC de um sócio declara junto com o imposto pessoal (Schedule C); LLC com sócios declara pelo Form 1065. Veja nossa página de Tax.'],
    ],
    fontes: [
      ['Georgia Secretary of State: Corporations Division', 'https://sos.ga.gov/corporations-division-georgia-secretary-states-office'],
      ['IRS: Obter EIN', 'https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number'],
    ],
    whats: 'Olá! Quero abrir (ou regularizar) minha empresa.',
  },
  {
    slug: 'tax-income-tax-id',
    foto: 'Pessoa preenchendo o formulário 1040 do imposto de renda',
    nome: 'Tax Income / Tax ID',
    resumo: 'Imposto de renda (Tax Return) pessoal e da empresa, e emissão ou renovação de ITIN.',
    icone: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
    titulo: 'Imposto de renda e ITIN sem dor de cabeça',
    lead: 'Preparamos sua declaração (Tax Return) pessoal ou da empresa e cuidamos do seu ITIN, tudo explicado em português e dentro dos prazos do IRS.',
    inclui: [
      'Tax Return pessoal (Form 1040), individual ou em família',
      'Autônomos e LLC de um sócio (Schedule C)',
      'LLC com sócios (Form 1065)',
      'Emissão e renovação de ITIN (Form W-7)',
      'Emissão de 1099 para seus subcontratados',
      'Pedido de extensão de prazo e resposta a cartas do IRS',
    ],
    passos: [
      ['Separe os documentos', 'Enviamos a lista do que você precisa trazer.'],
      ['Preparamos tudo', 'Calculamos e conferimos cada detalhe com você.'],
      ['Enviamos ao IRS', 'Você recebe a cópia da declaração.'],
    ],
    prazos: [
      ['15 de março', 'Prazo da declaração das LLCs com sócios (Form 1065).'],
      ['15 de abril', 'Prazo da declaração pessoal (Form 1040), incluindo LLC de um sócio. A extensão (Form 4868) adia a entrega para 15 de outubro, mas não adia o pagamento: o imposto devido deve ser pago até 15 de abril.'],
      ['31 de janeiro', 'Prazo para enviar os 1099 aos subcontratados e ao IRS.'],
      ['ITIN vence', 'O ITIN expira se não for usado em nenhuma declaração por 3 anos seguidos. Precisa renovar antes de declarar.'],
    ],
    documentos: ['Documento com foto e SSN ou ITIN', 'W-2 e/ou 1099 recebidos no ano', 'Dados dos dependentes (documentos e datas de nascimento)', 'Para empresas: receitas, despesas, recibos e pagamentos a subcontratados', 'Declaração do ano anterior'],
    faq: [
      ['Quem não tem Social Security precisa declarar?', 'Se você teve renda nos EUA, em geral sim. Quem não pode ter SSN usa o ITIN para declarar.'],
      ['Declarar ajuda em quê?', 'Comprova renda para empréstimos, financiamentos e aluguel, e mantém você em dia com o IRS.'],
      ['Perdi o prazo. E agora?', 'Quanto antes declarar, menores as multas e os juros. Fale com a gente e regularizamos os anos atrasados.'],
    ],
    fontes: [
      ['IRS: ITIN', 'https://www.irs.gov/individuals/individual-taxpayer-identification-number'],
      ['IRS: Prazos e extensão', 'https://www.irs.gov/filing/individuals/when-to-file'],
    ],
    whats: 'Olá! Preciso de ajuda com Tax Return / ITIN.',
  },
  {
    slug: 'dot-usdot',
    foto: 'Caminhonete puxando trailer com trator de obra',
    nome: 'DOT (USDOT Number)',
    resumo: 'USDOT para empresas de construção: registro, renovação (MCS-150), UCR e auditorias do DOT.',
    icone: '<path d="M2 7h11v9H2zM13 10h4l3 3v3h-7"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    titulo: 'USDOT para empresas de construção',
    lead: 'Sua empresa usa caminhonete com trailer ou caminhão para levar material e equipamento? Na Geórgia, isso pode exigir USDOT. Cuidamos de tudo para você trabalhar sem multa e sem veículo parado.',
    inclui: [
      'Avaliação: se a sua empresa precisa ou não de USDOT',
      'Registro do USDOT Number na FMCSA',
      'Renovação obrigatória a cada 2 anos (Biennial Update / MCS-150)',
      'UCR: registro anual para quem cruza a divisa do estado',
      'Organização dos arquivos dos motoristas (Driver Qualification File e cartão médico)',
      'Preparação e acompanhamento de auditorias do DOT',
    ],
    passos: [
      ['Avaliação', 'Vemos o peso dos veículos (com trailer) e onde eles rodam.'],
      ['Registro ou renovação', 'Cuidamos de todo o processo na FMCSA.'],
      ['Em dia sempre', 'Avisamos das renovações e preparamos você para auditorias.'],
    ],
    prazos: [
      ['Quem precisa de USDOT', 'Veículo comercial (ou caminhonete + trailer) com peso bruto de 10.001 lbs ou mais que cruza a divisa do estado precisa de USDOT. A Geórgia também exige USDOT para quem roda só dentro do estado, acima de 10.000 lbs.'],
      ['Renovação a cada 2 anos', 'O MCS-150 deve ser atualizado a cada 2 anos, mesmo que nada tenha mudado. O último dígito do seu USDOT define o mês (1 = janeiro … 0 = outubro) e o penúltimo define se é em ano par ou ímpar. Quem não atualiza tem o número desativado e pode levar multa de até $1.000 por dia (máximo $10.000).'],
      ['UCR anual', 'Empresas que transportam o próprio material e equipamento para outros estados também precisam fazer o UCR todo ano (abre em 1º de outubro).'],
      ['Auditoria de empresa nova', 'Empresas novas que rodam entre estados passam por uma auditoria de segurança da FMCSA nos primeiros 12 meses. Arquivos de motoristas, manutenção e seguro precisam estar em ordem.'],
    ],
    documentos: ['Dados da empresa (LLC e EIN)', 'Dados dos veículos e trailers (VIN, placas e peso/GVWR)', 'Driver license dos motoristas', 'Seguro dos veículos'],
    faq: [
      ['Minha caminhonete precisa de DOT?', 'Depende do peso somado da caminhonete com o trailer (GVWR/GCWR). Se passar de 10.000 lbs, na Geórgia normalmente precisa. Avaliamos com os dados do seu veículo.'],
      ['Preciso de MC Number?', 'Normalmente não. O MC é para quem transporta carga de terceiros por pagamento. Quem leva o próprio material e equipamento costuma precisar só do USDOT.'],
      ['Preciso de CDL?', 'A CDL (carteira comercial) só é exigida a partir de 26.001 lbs ou em casos específicos. Abaixo disso, o motorista precisa de driver license normal e, entre estados, do cartão médico do DOT.'],
      ['Meu USDOT foi desativado. E agora?', 'Dá para reativar fazendo a atualização do MCS-150. Não rode com o número desativado. Fale com a gente.'],
    ],
    fontes: [
      ['FMCSA: Preciso de USDOT?', 'https://www.fmcsa.dot.gov/registration/do-i-need-usdot-number'],
      ['FMCSA: Biennial Update (MCS-150)', 'https://www.fmcsa.dot.gov/registration/updating-your-registration'],
      ['UCR: Unified Carrier Registration', 'https://plan.ucr.gov/'],
    ],
    whats: 'Olá! Preciso de ajuda com o DOT da minha empresa.',
  },
  {
    slug: 'auditorias',
    foto: 'Documentos fiscais e calculadora sobre a mesa',
    nome: 'Auditorias',
    resumo: 'Auditoria do seguro (Workers’ Comp e General Liability), do DOT ou carta do IRS? A gente organiza tudo.',
    icone: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M8 11h6M11 8v6"/>',
    titulo: 'Auditoria marcada? A gente organiza tudo',
    lead: 'Recebeu aviso de auditoria da seguradora, do DOT ou uma carta do IRS? Organizamos os documentos e acompanhamos o processo para evitar cobranças e multas que não são suas.',
    inclui: [
      'Auditoria anual do seguro: Workers’ Comp e General Liability',
      'Coleta e conferência dos COIs dos seus subcontratados',
      'Auditorias do DOT (empresa nova e fiscalizações)',
      'Cartas e notificações do IRS',
      'Organização de folha de pagamento, 1099s, extratos e recibos',
      'Revisão preventiva, antes da auditoria chegar',
    ],
    passos: [
      ['Traga o aviso', 'Analisamos o que está sendo pedido e o prazo.'],
      ['Organizamos', 'Separamos e conferimos toda a documentação.'],
      ['Acompanhamos', 'Respondemos junto com você até o fim.'],
    ],
    prazos: [
      ['Por que a seguradora audita?', 'O valor do seguro é cobrado por uma estimativa. No fim da apólice, a seguradora confere a folha de pagamento real e ajusta o valor, para mais ou para menos.'],
      ['O erro mais caro', 'Pagamentos a subcontratados sem certificado de seguro (COI) válido costumam ser tratados como se fossem seus funcionários. Resultado: cobrança extra de Workers’ Comp e General Liability.'],
      ['Prazo conta', 'Auditorias e cartas do IRS têm prazo para resposta. Não responder pode virar cobrança automática.'],
    ],
    documentos: ['A carta ou o aviso de auditoria', 'Folha de pagamento e relatórios trimestrais', '1099s e pagamentos a subcontratados', 'Certificados de seguro (COI) dos subcontratados', 'Extratos bancários do período'],
    faq: [
      ['Paguei subcontratados em dinheiro. Tem problema?', 'Sem comprovante e sem COI, a seguradora pode considerar esse valor como folha de pagamento sua. Ajudamos a organizar o que for possível.'],
      ['Posso me preparar antes?', 'Sim, e é o ideal: guardar COIs atualizados de cada subcontratado e registrar todos os pagamentos evita a maior parte das cobranças.'],
    ],
    fontes: [
      ['Georgia State Board of Workers’ Compensation', 'https://sbwc.georgia.gov/'],
      ['IRS: Entendendo sua carta do IRS', 'https://www.irs.gov/individuals/understanding-your-irs-notice-or-letter'],
    ],
    whats: 'Olá! Recebi um aviso de auditoria e preciso de ajuda.',
  },
  {
    slug: 'consultoria-de-negocios',
    foto: 'Aperto de mãos em reunião de negócios',
    nome: 'Consultoria de Negócios',
    resumo: 'Orientação para quem quer empreender ou crescer o negócio nos Estados Unidos, do jeito certo.',
    icone: '<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',
    titulo: 'Seu negócio nos EUA, do jeito certo',
    lead: 'Quer começar a empreender ou crescer a empresa que já tem? Orientamos cada passo com a experiência de quem atende empresários brasileiros em Atlanta há mais de 20 anos.',
    inclui: [
      'Planejamento para abrir o negócio: estrutura, custos e licenças',
      'Business License da cidade ou do condado',
      'Organização financeira: conta da empresa separada da pessoal',
      'Calendário de obrigações: impostos, renovações, seguros e DOT',
      'Preparação para crédito e financiamento da empresa',
    ],
    passos: [
      ['Conversa inicial', 'Entendemos o seu momento e os seus objetivos.'],
      ['Plano', 'Montamos os próximos passos e o calendário de obrigações.'],
      ['Execução', 'Cuidamos da burocracia para você focar no trabalho.'],
    ],
    prazos: [
      ['Business License', 'Além da LLC no estado, a maioria das cidades e condados da Geórgia exige uma Business License (licença de funcionamento) renovada todo ano.'],
      ['Separe as contas', 'Misturar dinheiro pessoal e da empresa dificulta a declaração de imposto e as auditorias, e pode enfraquecer a proteção da LLC.'],
    ],
    documentos: ['Nada para começar, só marcar uma conversa'],
    faq: [
      ['Atendem empresas de qualquer área?', 'Sim, com bastante experiência em construção, serviços e pequenos negócios.'],
      ['Já tenho empresa. Vale a pena?', 'Sim. Muitos clientes chegam com a empresa aberta, mas com renovações, impostos ou seguros atrasados. Colocamos tudo em dia.'],
    ],
    fontes: [
      ['Georgia Secretary of State', 'https://sos.ga.gov/corporations-division-georgia-secretary-states-office'],
      ['SBA: Small Business Administration', 'https://www.sba.gov/'],
    ],
    whats: 'Olá! Gostaria de uma consultoria para o meu negócio.',
  },
];
