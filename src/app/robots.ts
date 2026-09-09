import type {MetadataRoute} from 'next';
import {publicUrl} from '@/lib/site';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',...(publicUrl?{allow:'/'}:{disallow:'/'})},...(publicUrl?{sitemap:publicUrl+'/sitemap.xml'}:{})}}
