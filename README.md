# Dra. Melissa Randazzo — landing page

## Estratégia antes da implementação

**Empresa:** consultório odontológico da Dra. Melissa Randazzo, em Rondonópolis–MT. Endodontia e CRO-MT 5310 constam no perfil profissional Ident. O Google Maps fornecido confirma telefone, endereço, horários, acessibilidade e avaliações.

**Público-alvo provável (inferência):** moradores de Rondonópolis e região procurando avaliação odontológica, tratamento de canal e cuidados com o sorriso, com preferência por contato direto e orientação sobre agendamento.

**Serviços confirmados:** consulta odontológica e tratamento de canal (perfil profissional e Doctoralia). Clareamento, restaurações, facetas em resina e limpeza aparecem na versão anterior da conversa, mas não foram tratados como confirmação independente. A estrutura de conteúdo permite adicioná-los após validação da clínica.

**Identidade visual:** direção editorial inspirada nas fotos fornecidas: off-white, areia, carvão e dourado discreto; títulos serifados, texto sem serifa, margens amplas e retratos reais. A proposta é uma identidade para o site, não uma reprodução de logotipo oficial. Instagram fornecido, porém não acessível pela consulta web; não se afirma ter analisado o feed completo.

**Proposta de valor:** acesso direto à Dra. Melissa Randazzo para iniciar o cuidado odontológico, com foco em Endodontia e atendimento em localização central.

**Estrutura:** header responsivo → hero → confiança → serviços → diferenciais → sobre → avaliações reais → três passos → localização/mapa → formulário → CTA final → footer/privacidade → WhatsApp flutuante.

**Hero:** “Seu sorriso merece cuidado. Você merece atenção.” Subtítulo: “Odontologia e tratamento de canal em Rondonópolis com a Dra. Melissa Randazzo. Dê o primeiro passo: converse pelo WhatsApp e consulte os horários disponíveis.”

**CTA principal:** “Agendar pelo WhatsApp”. Solicitação de agendamento; a confirmação ocorre na conversa com a clínica.

## Fontes e decisões editoriais

Consulta em 09/09/2026:

- Google Maps fornecido: https://maps.app.goo.gl/FRkHvie9e1zmXEto8 — R. Barão do Rio Branco, 1023, Centro, Rondonópolis–MT, 78740-315; (66) 99938-7525; segunda a sexta 08h–18h, sábado 08h–11h, domingo fechado; entrada acessível; 5,0 em 3 avaliações. Dados lidos diretamente no navegador. Coordenadas do link fornecido: -16.4661296, -54.6321389.
- https://www.ident.com.br/dra.melissarandazzo — CRO-MT 5310; Endodontia; graduação em 2009; especialização em 2012. Endereço antigo divergente foi descartado em favor do Maps fornecido.
- https://www.doctoralia.com.br/servicos-de-tratamento/tratamento-de-canal/rondonopolis — consulta odontológica, tratamento de canal e CRO compatível.
- Instagram fornecido: https://www.instagram.com/dra.melissarandazzo/
- Depoimentos transcritos do Maps: edivan barcelos, “Localização muito boa, Atendimento excelente serviço excepcional. Super indico”; Marcos Vinícius, “Eu super recomendo muito bom o atendimento é ótimo o preço é super barato muito bom”. Ambos com 5 estrelas. Terceira avaliação sem texto: não transformada em depoimento. Nota é um retrato da data, não sincronização automática.
- Fotos: arquivos fornecidos pelo usuário nesta tarefa. Retratos e atendimento usados na página. A comparação de sorriso fica fora da composição principal; não são prometidos resultados clínicos.
- Não há aggregateRating no schema: avaliações sobre a própria empresa não são usadas para prometer estrelas nos resultados de pesquisa.

## Execução

Requer Node.js 22.9+ e npm. Na pasta do projeto:

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. Produção: `npm run build` e `npm start`. Tipagem: `npm run typecheck`.

## GitHub e Vercel

Suba o conteúdo desta pasta a um repositório GitHub. Importe o repositório na Vercel, selecione Next.js e configure `NEXT_PUBLIC_SITE_URL` com o endereço HTTPS definitivo. Não configure diretório de saída manual. O projeto não foi publicado automaticamente. Inclui lockfile e workflow de build. Não use GitHub Pages diretamente: este projeto usa o runtime Next.js.

## Conteúdo e integrações

- `src/lib/site.ts`: dados, serviços e avaliações; fonte única para endereço e contato.
- `src/components/`: componentes reutilizáveis e pequenas ilhas interativas.
- `src/lib/tracking.ts`: eventos tipados whatsapp_click, form_submit, phone_click, map_click e instagram_click. Somente evento e posição do clique: nenhum nome, telefone, mensagem ou serviço clínico é enviado à análise.
- Formulário valida campos e prepara um link para o WhatsApp. Nada é armazenado pelo servidor; não existe confirmação fictícia de envio ou de consulta.
- A mensagem só é enviada quando o visitante confirmar no WhatsApp. O evento form_submit significa formulário validado/preparado, não lead recebido pela clínica.
- Estrutura pronta para GTM, GA4, Meta e Google Ads via dataLayer, após consentimento opcional. Use um único gerenciador para evitar duplicação. Configure tags e conversões no GTM; nenhum ID é inventado.
- O mapa é carregado sob demanda, evitando comunicação com Google antes da escolha do visitante.
- Metadados, imagem Open Graph dinâmica, robots, sitemap e schema Dentist (subtipo de LocalBusiness). Sem domínio configurado, indexação fica desativada e canonical/sitemap não inventam URL pública.

## Antes de publicar

Confirme com a clínica a atualidade dos dados e a autorização de uso das fotos. Configure o domínio definitivo, revise a política de privacidade para o operador real e configure os IDs de análise apenas se forem necessários. Avaliações precisam de atualização manual em `site.ts`.
