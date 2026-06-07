// ── Map Init ──────────────────────────────────────────────────────────────────
const PH_CENTER=[14.5995,120.9842];
const map=L.map('map',{zoomControl:false,center:PH_CENTER,zoom:12});
const layers={
  dark:L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{attribution:'©OSM ©CartoDB'}),
  osm:L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'©OSM'}),
  topo:L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{attribution:'©OpenTopoMap'})
};
layers.dark.addTo(map);
let currentLayer='dark',currentRoute=null,fromMarker=null,toMarker=null,routeLines=[];
let fromCoords=null,toCoords=null,travelMode='transit';

function toggleLayer(){
  const order=['dark','osm','topo'];
  const next=order[(order.indexOf(currentLayer)+1)%order.length];
  map.removeLayer(layers[currentLayer]);
  layers[next].addTo(map);
  currentLayer=next;
}
function centerOnPH(){map.setView(PH_CENTER,12);}

// ── Custom Icons ──────────────────────────────────────────────────────────────
function makeIcon(color,label){
  return L.divIcon({className:'',iconSize:[32,40],iconAnchor:[16,40],popupAnchor:[0,-40],html:`
    <div style="width:32px;height:40px;position:relative">
      <div style="width:32px;height:32px;background:${color};border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.5)"></div>
      <div style="position:absolute;top:6px;left:0;width:32px;text-align:center;font-size:13px;font-weight:700;color:white;transform:none">${label}</div>
    </div>`});
}
const fromIcon=makeIcon('#4CAF50','A');
const toIcon=makeIcon('#E8271A','B');

// ── Geocoding (Nominatim) ─────────────────────────────────────────────────────
async function geocode(q){
  const url=`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q+', Philippines')}&format=json&limit=5&countrycodes=ph&addressdetails=1`;
  const r=await fetch(url,{headers:{'Accept-Language':'en'}});
  return r.json();
}
async function reverseGeocode(lat,lon){
  const url=`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
  const r=await fetch(url,{headers:{'Accept-Language':'en'}});
  return r.json();
}

// ── Autocomplete ──────────────────────────────────────────────────────────────
let acTimers={from:null,to:null};
function setupAutocomplete(inputId,dropId,coordSetter,field){
  const inp=document.getElementById(inputId);
  const drop=document.getElementById(dropId);
  inp.addEventListener('input',()=>{
    clearTimeout(acTimers[field]);
    const v=inp.value.trim();
    if(v.length<3){drop.style.display='none';return;}
    acTimers[field]=setTimeout(async()=>{
      const res=await geocode(v);
      drop.innerHTML='';
      if(!res.length){drop.style.display='none';return;}
      res.slice(0,5).forEach(r=>{
        const item=document.createElement('div');
        item.className='autocomplete-item';
        const name=r.display_name.split(',').slice(0,3).join(', ');
        item.innerHTML=`<div>${name}</div><div class="sub">${r.type||'place'}</div>`;
        item.onclick=()=>{
          inp.value=name;
          coordSetter([parseFloat(r.lat),parseFloat(r.lon)]);
          drop.style.display='none';
          placeMarker(field,[parseFloat(r.lat),parseFloat(r.lon)]);
        };
        drop.appendChild(item);
      });
      drop.style.display='block';
    },350);
  });
  document.addEventListener('click',e=>{if(!e.target.closest('#'+inputId)&&!e.target.closest('#'+dropId))drop.style.display='none';});
}
setupAutocomplete('from-input','autocomplete-from',c=>fromCoords=c,'from');
setupAutocomplete('to-input','autocomplete-to',c=>toCoords=c,'to');

function placeMarker(type,coords){
  if(type==='from'){if(fromMarker)map.removeLayer(fromMarker);fromMarker=L.marker(coords,{icon:fromIcon}).addTo(map);}
  else{if(toMarker)map.removeLayer(toMarker);toMarker=L.marker(coords,{icon:toIcon}).addTo(map);}
  if(fromMarker&&toMarker)map.fitBounds([fromMarker.getLatLng(),toMarker.getLatLng()],{padding:[60,60]});
  else map.setView(coords,14);
}

// ── Map Click to set points ───────────────────────────────────────────────────
let nextClick='from';
map.on('click',async e=>{
  const{lat,lng}=e.latlng;
  const res=await reverseGeocode(lat,lng);
  const name=(res.display_name||'').split(',').slice(0,3).join(', ');
  if(nextClick==='from'){
    fromCoords=[lat,lng];
    document.getElementById('from-input').value=name;
    placeMarker('from',fromCoords);
    nextClick='to';
  }else{
    toCoords=[lat,lng];
    document.getElementById('to-input').value=name;
    placeMarker('to',toCoords);
    nextClick='from';
  }
});

// ── Helpers ───────────────────────────────────────────────────────────────────
function setMode(m,el){
  travelMode=m;
  document.querySelectorAll('.mode-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}
function swapInputs(){
  const fi=document.getElementById('from-input'),ti=document.getElementById('to-input');
  [fi.value,ti.value]=[ti.value,fi.value];
  [fromCoords,toCoords]=[toCoords,fromCoords];
  if(fromMarker){map.removeLayer(fromMarker);fromMarker=null;}
  if(toMarker){map.removeLayer(toMarker);toMarker=null;}
  if(fromCoords)placeMarker('from',fromCoords);
  if(toCoords)placeMarker('to',toCoords);
}
function setQuick(type,name){document.getElementById(type+'-input').value=name;}
async function locateMe(){
  if(!navigator.geolocation)return alert('Geolocation not supported');
  navigator.geolocation.getCurrentPosition(async p=>{
    const{latitude:lat,longitude:lng}=p.coords;
    fromCoords=[lat,lng];
    const res=await reverseGeocode(lat,lng);
    document.getElementById('from-input').value=(res.display_name||'').split(',').slice(0,2).join(', ');
    placeMarker('from',fromCoords);
  });
}
async function setFromMyLocation(){
  if(!navigator.geolocation)return alert('Geolocation not supported');
  navigator.geolocation.getCurrentPosition(async p=>{
    const{latitude:lat,longitude:lng}=p.coords;
    fromCoords=[lat,lng];
    const res=await reverseGeocode(lat,lng);
    document.getElementById('from-input').value=(res.display_name||'').split(',').slice(0,2).join(', ');
    placeMarker('from',fromCoords);
  });
}

function fmtDist(m){return m>=1000?`${(m/1000).toFixed(1)} km`:`${Math.round(m)} m`;}
function fmtTime(s){const m=Math.round(s/60);return m<60?`${m} min`:`${Math.floor(m/60)}h ${m%60}m`;}

function clearRouteLines(){routeLines.forEach(l=>map.removeLayer(l));routeLines=[];}

// ── OSRM Routing ──────────────────────────────────────────────────────────────
async function osrmRoute(from,to,profile){
  const profiles={transit:'driving',walk:'foot',drive:'driving',bike:'cycling'};
  const p=profiles[profile]||'driving';
  const url=`https://router.project-osrm.org/route/v1/${p}/${from[1]},${from[0]};${to[1]},${to[0]}?overview=full&geometries=geojson&steps=true&annotations=false`;
  const r=await fetch(url);
  const d=await r.json();
  if(d.code!=='Ok')throw new Error('No route found');
  return d.routes[0];
}

// ── Transit Route Simulation ──────────────────────────────────────────────────
function guessTransitLegs(distance,from,to){
  // Realistic Metro Manila transit heuristics
  const km=distance/1000;
  const legs=[];
  const walkMin=Math.round(3+Math.random()*4);
  const walkDist=Math.round(200+Math.random()*300);
  
  legs.push({type:'walk',label:'Walk to stop',dist:walkDist,time:walkMin,color:'#4CAF50'});
  
  if(km>20){
    legs.push({type:'bus',label:'P2P Bus',desc:'Express bus service',dist:Math.round(km*0.5*1000),time:Math.round(km*2.5),fare:65+Math.round(km*2),color:'#2196F3'});
    legs.push({type:'lrt',label:'MRT-3 / LRT',desc:'Rail transit',dist:Math.round(km*0.3*1000),time:Math.round(km*1.5),fare:15+Math.round(km*1.2),color:'#FFD600'});
    legs.push({type:'jeep',label:'Jeepney',desc:'Local route',dist:Math.round(km*0.2*1000),time:Math.round(km*1.8),fare:13,color:'#FF6B35'});
  }else if(km>8){
    if(Math.random()>0.4){
      legs.push({type:'lrt',label:'LRT / MRT Line',desc:'Rail transit',dist:Math.round(km*0.5*1000),time:Math.round(km*1.8),fare:15+Math.round(km*1.5),color:'#FFD600'});
    }else{
      legs.push({type:'bus',label:'City Bus',desc:'EDSA or major route',dist:Math.round(km*0.6*1000),time:Math.round(km*3.5),fare:13+Math.round(km*1.2),color:'#2196F3'});
    }
    legs.push({type:'jeep',label:'Jeepney',desc:'Final leg jeepney',dist:Math.round(km*0.25*1000),time:Math.round(km*2),fare:13,color:'#FF6B35'});
  }else{
    legs.push({type:'jeep',label:'Jeepney',desc:'Direct route jeepney',dist:Math.round(km*0.7*1000),time:Math.round(km*4),fare:13,color:'#FF6B35'});
  }
  
  const walkEndMin=Math.round(2+Math.random()*3);
  const walkEndDist=Math.round(100+Math.random()*200);
  legs.push({type:'walk',label:'Walk to destination',dist:walkEndDist,time:walkEndMin,color:'#4CAF50'});
  
  return legs;
}

function generateRouteOptions(osrmRoute,from,to){
  const dist=osrmRoute.distance,dur=osrmRoute.duration;
  const km=dist/1000;
  const routes=[];
  
  if(travelMode==='transit'){
    // Option 1: Fastest
    const legs1=guessTransitLegs(dist,from,to);
    const totalTime1=legs1.reduce((a,l)=>a+l.time,0);
    const totalFare1=legs1.filter(l=>l.fare).reduce((a,l)=>a+(l.fare||0),0);
    routes.push({label:'Fastest',time:totalTime1,dist:Math.round(dist),fare:totalFare1,legs:legs1,transfers:legs1.filter(l=>l.type!=='walk').length-1,co2:Math.round(km*0.04*100)/100});
    
    // Option 2: Fewer transfers
    const legs2=[
      {type:'walk',label:'Walk to stop',dist:350,time:5,color:'#4CAF50'},
      {type:'bus',label:'Direct Bus',desc:'Express to destination area',dist:Math.round(dist*0.75),time:Math.round(dur/60*1.4),fare:Math.round(13+km*2.5),color:'#2196F3'},
      {type:'walk',label:'Walk to destination',dist:280,time:4,color:'#4CAF50'}
    ];
    const totalTime2=legs2.reduce((a,l)=>a+l.time,0);
    const totalFare2=legs2.filter(l=>l.fare).reduce((a,l)=>a+(l.fare||0),0);
    routes.push({label:'Fewer transfers',time:totalTime2,dist:Math.round(dist),fare:totalFare2,legs:legs2,transfers:0,co2:Math.round(km*0.06*100)/100});
    
    // Option 3: Cheapest
    const legs3=[
      {type:'walk',label:'Walk to stop',dist:200,time:3,color:'#4CAF50'},
      {type:'jeep',label:'Jeepney Ride 1',desc:'Local jeepney route',dist:Math.round(dist*0.45),time:Math.round(dur/60*2.2),fare:13,color:'#FF6B35'},
      {type:'jeep',label:'Jeepney Ride 2',desc:'Connecting route',dist:Math.round(dist*0.35),time:Math.round(dur/60*1.8),fare:13,color:'#FF6B35'},
      {type:'walk',label:'Walk to destination',dist:150,time:2,color:'#4CAF50'}
    ];
    const totalTime3=legs3.reduce((a,l)=>a+l.time,0);
    const totalFare3=legs3.filter(l=>l.fare).reduce((a,l)=>a+(l.fare||0),0);
    routes.push({label:'Cheapest',time:totalTime3,dist:Math.round(dist),fare:totalFare3,legs:legs3,transfers:1,co2:Math.round(km*0.03*100)/100});
    
  }else if(travelMode==='walk'){
    routes.push({label:'Walking',time:Math.round(dur/60),dist:Math.round(dist),fare:0,legs:[{type:'walk',label:'Walk entire route',dist:Math.round(dist),time:Math.round(dur/60),color:'#4CAF50'}],transfers:0,co2:0});
  }else if(travelMode==='drive'){
    routes.push({label:'By Car',time:Math.round(dur/60),dist:Math.round(dist),fare:Math.round(km*8+50),legs:[{type:'drive',label:'Drive',dist:Math.round(dist),time:Math.round(dur/60),fare:Math.round(km*8+50),color:'#9E9E9E'}],transfers:0,co2:Math.round(km*0.21*100)/100});
    routes.push({label:'Via Expressway',time:Math.round(dur/60*0.75),dist:Math.round(dist*1.1),fare:Math.round(km*8+120),legs:[{type:'drive',label:'Expressway route',dist:Math.round(dist*1.1),time:Math.round(dur/60*0.75),fare:Math.round(km*8+120),color:'#9E9E9E'}],transfers:0,co2:Math.round(km*1.1*0.21*100)/100});
  }else if(travelMode==='bike'){
    routes.push({label:'Cycling',time:Math.round(dur/60*0.6),dist:Math.round(dist),fare:0,legs:[{type:'bike',label:'Bike route',dist:Math.round(dist),time:Math.round(dur/60*0.6),color:'#00BCD4'}],transfers:0,co2:0});
  }
  
  return routes;
}

// ── Draw Route on Map ─────────────────────────────────────────────────────────
function drawRoute(geometry,color='#E8271A',weight=5,opacity=0.85){
  const line=L.geoJSON(geometry,{style:{color,weight,opacity,lineCap:'round',lineJoin:'round'}}).addTo(map);
  routeLines.push(line);
  return line;
}

// ── Render Results ────────────────────────────────────────────────────────────
function renderRoutes(routes,osrmGeom){
  const panel=document.getElementById('results');
  panel.innerHTML=`<div class="section-title">Route options</div>`;
  
  routes.forEach((route,i)=>{
    const card=document.createElement('div');
    card.className='route-card'+(i===0?' selected':'');
    
    const stepsHtml=route.legs.map((l,j)=>`
      ${j>0?'<span class="step-arrow">›</span>':''}
      <div class="step-pill ${l.type}">
        ${l.type==='walk'?'🚶':l.type==='jeep'?'🚌':l.type==='bus'?'🚍':l.type==='lrt'||l.type==='mrt'?'🚆':l.type==='bike'?'🚴':l.type==='drive'?'🚗':'🚌'}
        ${l.label.split(' ')[0]}
      </div>`).join('');
    
    const fareText=route.fare>0?`<span class="fare-badge">₱${route.fare}</span>`:'<span class="fare-badge">Free</span>';
    const co2Text=route.co2>0?`<span class="co2-badge">+${route.co2}kg CO₂</span>`:`<span class="co2-badge">0 CO₂</span>`;
    const transferText=route.transfers>0?`${route.transfers} transfer${route.transfers>1?'s':''} · `:'Direct · ';
    
    card.innerHTML=`
      <div class="route-header">
        <div>
          <div style="font-size:11px;color:var(--muted);margin-bottom:2px;letter-spacing:0.5px;text-transform:uppercase">${route.label}</div>
          <div class="route-time">${route.time} min</div>
        </div>
        <div class="route-meta">
          <div>${fareText} ${co2Text}</div>
          <div style="margin-top:4px">${transferText}${fmtDist(route.dist)}</div>
        </div>
      </div>
      <div class="steps-row">${stepsHtml}</div>
      <div class="route-detail" id="detail-${i}">
        ${route.legs.map(l=>`
          <div class="detail-step">
            <div class="detail-step-icon" style="background:${l.color}22;border:1px solid ${l.color}44">
              ${l.type==='walk'?'🚶':l.type==='jeep'?'🚌':l.type==='bus'?'🚍':l.type==='lrt'||l.type==='mrt'?'🚆':l.type==='bike'?'🚴':l.type==='drive'?'🚗':'🚌'}
            </div>
            <div class="detail-step-info">
              <div class="detail-step-title">${l.label}</div>
              <div class="detail-step-desc">${l.desc||''} ${fmtDist(l.dist)} · ${l.time} min${l.fare?` · ₱${l.fare}`:''}</div>
            </div>
          </div>`).join('')}
      </div>`;
    
    card.addEventListener('click',()=>{
      document.querySelectorAll('.route-card').forEach(c=>c.classList.remove('selected'));
      card.classList.add('selected');
      const det=document.getElementById('detail-'+i);
      det.classList.toggle('open');
      // Redraw route with different color per selection
      clearRouteLines();
      const colors=['#E8271A','#2196F3','#FF6B35'];
      drawRoute(osrmGeom,colors[i%colors.length]);
    });
    
    panel.appendChild(card);
    if(i===0){setTimeout(()=>document.getElementById('detail-0')&&document.getElementById('detail-0').classList.add('open'),100);}
  });
  
  // Summary footer
  const summ=document.createElement('div');
  summ.style.cssText='padding:12px 0;text-align:center;font-size:12px;color:var(--muted)';
  summ.textContent='Tap a route to see turn-by-turn details. Click map to set points.';
  panel.appendChild(summ);
}

// ── Main Route Function ───────────────────────────────────────────────────────
async function getRoute(){
  // If no coords yet, try geocoding
  if(!fromCoords&&document.getElementById('from-input').value){
    const res=await geocode(document.getElementById('from-input').value);
    if(res.length){fromCoords=[parseFloat(res[0].lat),parseFloat(res[0].lon)];placeMarker('from',fromCoords);}
  }
  if(!toCoords&&document.getElementById('to-input').value){
    const res=await geocode(document.getElementById('to-input').value);
    if(res.length){toCoords=[parseFloat(res[0].lat),parseFloat(res[0].lon)];placeMarker('to',toCoords);}
  }
  if(!fromCoords||!toCoords){
    alert('Please enter valid start and destination points.');return;
  }
  
  const btn=document.getElementById('route-btn');
  btn.disabled=true;btn.textContent='Finding routes…';
  const panel=document.getElementById('results');
  panel.innerHTML=`<div class="loading"><div class="spinner"></div><div>Calculating routes…</div><div style="font-size:12px;margin-top:6px;color:var(--muted)">Fetching real road data</div></div>`;
  clearRouteLines();
  
  try{
    const route=await osrmRoute(fromCoords,toCoords,travelMode);
    const geom=route.geometry;
    
    // Draw base route
    drawRoute(geom,'#E8271A',5,0.85);
    
    // Fit map
    const coords=geom.coordinates.map(c=>[c[1],c[0]]);
    if(coords.length)map.fitBounds(coords,{padding:[60,80]});
    
    // Generate route options
    const options=generateRouteOptions(route,fromCoords,toCoords);
    renderRoutes(options,geom);
    
  }catch(e){
    panel.innerHTML=`<div class="empty-state"><div class="empty-icon">⚠️</div><h3>Route not found</h3><p style="font-size:13px">${e.message||'Could not find a route between these points. Try different locations.'}</p></div>`;
  }finally{
    btn.disabled=false;btn.textContent='Get Directions';
  }
}

// ── Enter key ─────────────────────────────────────────────────────────────────
document.getElementById('to-input').addEventListener('keydown',e=>{if(e.key==='Enter')getRoute();});
document.getElementById('from-input').addEventListener('keydown',e=>{if(e.key==='Enter')getRoute();});

// ── Map attribution ───────────────────────────────────────────────────────────
map.attributionControl.setPrefix('');
L.control.attribution({position:'bottomright'}).addTo(map);

// ── Scale ─────────────────────────────────────────────────────────────────────
L.control.scale({imperial:false,position:'bottomleft'}).addTo(map);

// ── Welcome popup ─────────────────────────────────────────────────────────────
setTimeout(()=>{
  const marker=L.marker(PH_CENTER,{icon:L.divIcon({className:'',html:'<div style="background:#E8271A;color:white;padding:8px 12px;border-radius:8px;font-family:DM Sans,sans-serif;font-size:13px;font-weight:500;white-space:nowrap;box-shadow:0 2px 12px rgba(0,0,0,.5)">📍 Click map to set points</div>',iconAnchor:[-10,20]})}).addTo(map);
  setTimeout(()=>map.removeLayer(marker),4000);
},500);
