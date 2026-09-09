import {ImageResponse} from 'next/og';
export const alt='Dra. Melissa Randazzo — Odontologia em Rondonópolis';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'center',padding:90,width:'100%',height:'100%',background:'#f4f1ea',color:'#292923',borderBottom:'18px solid #a28351'}}><div style={{fontSize:23,letterSpacing:5,marginBottom:44}}>ODONTOLOGIA EM RONDONÓPOLIS · MT</div><div style={{fontSize:72,fontFamily:'serif',lineHeight:1.1}}>Seu sorriso merece cuidado.</div><div style={{fontSize:72,fontFamily:'serif',lineHeight:1.1}}>Você merece atenção.</div><div style={{display:'flex',fontSize:27,marginTop:48,color:'#80663c'}}>Dra. Melissa Randazzo · Agende pelo WhatsApp</div></div>,size)}
