'use client';
import {useState} from 'react';
import {site} from '@/lib/site';
import {track} from '@/lib/tracking';
export function Map(){const [loaded,setLoaded]=useState(false);return <div className="map-panel">{loaded?<iframe src={site.mapEmbed} title="Mapa da Dra. Melissa Randazzo em Rondonópolis" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>:<div className="map-placeholder"><span className="map-pin" aria-hidden="true">⌖</span><h3>No coração de Rondonópolis.</h3><p>Rua Barão do Rio Branco, 1023 · Centro</p><button className="button button-outline" onClick={()=>{setLoaded(true);track('map_click','map_load')}}>Carregar mapa do Google ↗</button><small>Ao carregar, você se conecta ao Google Maps.</small></div>}</div>}
