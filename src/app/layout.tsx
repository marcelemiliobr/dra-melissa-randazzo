import type {Metadata} from 'next';
import {Analytics} from '@/components/Analytics';
import {publicUrl} from '@/lib/site';
import './globals.css';
export const metadata:Metadata={...(publicUrl?{metadataBase:new URL(publicUrl),alternates:{canonical:'/'}}:{}),title:{default:'Dra. Melissa Randazzo | Dentista em Rondonópolis – MT',template:'%s | Dra. Melissa Randazzo'},description:'Odontologia e tratamento de canal em Rondonópolis com a Dra. Melissa Randazzo. Consultório no Centro. Agende sua avaliação pelo WhatsApp.',robots:{index:!!publicUrl,follow:!!publicUrl},openGraph:{title:'Dra. Melissa Randazzo | Odontologia em Rondonópolis',description:'Seu sorriso merece cuidado. Você merece atenção. Agende sua avaliação pelo WhatsApp.',type:'website',locale:'pt_BR',siteName:'Dra. Melissa Randazzo',...(publicUrl?{url:publicUrl}: {})},twitter:{card:'summary_large_image'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}<Analytics/></body></html>}
