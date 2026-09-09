import type {MetadataRoute} from 'next';
import {publicUrl} from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{return publicUrl?[{url:publicUrl,changeFrequency:'monthly',priority:1},{url:publicUrl+'/privacidade',changeFrequency:'yearly',priority:0.2}]:[]}
