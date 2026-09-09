# Validação da entrega

- Build de produção Next.js 16.3.4: aprovado.
- TypeScript em modo estrito: aprovado.
- Instalação: zero vulnerabilidades reportadas pelo npm no momento da entrega.
- Navegador: versão desktop e larguras 375, 390 e 430 px sem rolagem horizontal; um H1; nenhuma imagem quebrada.
- Menu mobile: abre, navega e fecha após seleção.
- Formulário: rejeita telefone inválido; com dados de teste válidos prepara corretamente o link para 5566999387525. Nenhuma mensagem foi enviada à clínica.
- Mapa: botão substitui a prévia por iframe do Google nas coordenadas fornecidas.
- Tracking: cinco eventos tipados, consentimento respeitado, payload sem dados pessoais e falha de armazenamento não interrompe o clique.
- Privacidade, robots, sitemap e imagem Open Graph: respostas HTTP 200.
- Não foi feita medição de Core Web Vitals em tráfego real nem prometida pontuação Lighthouse.
- GA4, Meta e Google Ads: estrutura disponível via GTM, sem IDs de produção; recebimento em contas externas não testado.

As dependências estão fixadas no package.json e package-lock.json. A publicação exige configurar NEXT_PUBLIC_SITE_URL; até lá a página usa noindex.
