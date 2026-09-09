'use client';
import type { ReactNode } from 'react';
import {track, type EventName} from '@/lib/tracking';
import {whatsappUrl} from '@/lib/site';
export function ContactLink({children = 'Agendar pelo WhatsApp', placement, href, event = 'whatsapp_click', className = 'button', message}: {children?:ReactNode;placement:string;href?:string;event?:EventName;className?:string;message?:string}) {
 return <a href={href || whatsappUrl(message)} target={href?.startsWith('tel:') ? undefined : '_blank'} rel="noopener noreferrer" className={className} onClick={()=>track(event,placement)}>{children}<span aria-hidden="true">↗</span></a>;
}
