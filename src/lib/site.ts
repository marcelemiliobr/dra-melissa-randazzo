export const site = {
  name: 'Dra. Melissa Randazzo', phone: '5566999387525', phoneLabel: '(66) 99938-7525',
  city: 'Rondonópolis', region: 'MT', cro: 'CRO-MT 5310',
  street: 'Rua Barão do Rio Branco, 1023', district: 'Centro', postalCode: '78740-315',
  maps: 'https://maps.app.goo.gl/FRkHvie9e1zmXEto8',
  instagram: 'https://www.instagram.com/dra.melissarandazzo/',
  mapEmbed: 'https://www.google.com/maps?q=-16.4661296,-54.6321389&z=17&output=embed',
  verifiedAt: '09/09/2026',
};
export const publicUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || undefined;
export const services = [
  { name: 'Tratamento de canal', category: 'ENDODONTIA', text: 'Um cuidado dedicado à saúde do seu dente. Converse sobre sua necessidade e agende uma avaliação com a Dra. Melissa.' },
  { name: 'Consulta odontológica', category: 'SEU PRIMEIRO PASSO', text: 'Um momento para avaliar seu sorriso, apresentar suas dúvidas e entender as possibilidades de cuidado para você.' },
];
export const reviews = [
  { name: 'edivan barcelos', text: 'Localização muito boa, Atendimento excelente serviço excepcional. Super indico' },
  { name: 'Marcos Vinícius', text: 'Eu super recomendo muito bom o atendimento é ótimo o preço é super barato muito bom' },
];
export function whatsappUrl(message = 'Olá, Dra. Melissa! Encontrei o site e gostaria de agendar uma avaliação.'){ return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`; }
