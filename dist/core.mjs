export const project=([lon,lat])=>[(lon+180)*3,(90-lat)*3];
export function filterWars(wars,{query='',region='全部',year=null}={}){return wars.filter(w=>(!query||[w.name,w.summary,w.region,...w.tags].join(' ').toLowerCase().includes(query.trim().toLowerCase()))&&(region==='全部'||w.region===region||w.tags.includes(region))&&(year==null||(w.start<=year&&w.end>=year)))}
export const grade=(q,choice)=>Number.isInteger(choice)&&choice===q.answer;

export function filterPlaces(items,{query='',region='全部'}={}){const q=query.trim().toLowerCase();return items.filter(c=>(region==='全部'||c.continent===region||c.region===region)&&(!q||[c.name,c.formal,c.en,c.region,c.kind,c.capital].join(' ').toLowerCase().includes(q)))}
