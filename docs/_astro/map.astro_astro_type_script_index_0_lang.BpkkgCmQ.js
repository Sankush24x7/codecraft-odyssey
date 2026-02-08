import{g}from"./gameState.DZ7lyuG1.js";const m=g(),i=m.get();document.getElementById("playerName").textContent=i.playerName;document.getElementById("currentLevel").textContent=i.currentLevel;document.getElementById("badgeCount").textContent=i.badges.length;document.getElementById("completedCount").textContent=i.completedLevels.length;const x=document.getElementById("healthContainer");for(let t=0;t<i.maxHealth;t++){const e=document.createElement("span");e.className=t<i.health?"heart full":"heart empty",e.textContent="♥",x.appendChild(e)}const p=m.getLevelProgress();document.getElementById("xpProgress").textContent=`${p.current} / ${p.required} XP`;document.getElementById("xpFill").style.width=`${p.percentage}%`;document.getElementById("xpPercent").textContent=`${p.percentage}%`;const f=document.getElementById("levelGrid");for(let t=1;t<=15;t++){const e=document.createElement("button");e.className="pixel-button";const n=i.completedLevels.includes(t),l=m.isLevelUnlocked(t),o=t===i.completedLevels.length+1,s=t===15;n?(e.style.background="var(--pixel-primary)",e.innerHTML=`
          ✓ LEVEL ${t}<br>
          <span style="font-size: 10px;">COMPLETE</span>
        `):o&&s?(e.style.background="var(--pixel-danger)",e.style.animation="pulse 1.5s ease-in-out infinite",e.innerHTML=`
          🐉 BOSS ${t}<br>
          <span style="font-size: 10px;">FIGHT NOW!</span>
        `):o?(e.style.background="var(--pixel-accent)",e.innerHTML=`
          ▶ LEVEL ${t}<br>
          <span style="font-size: 10px;">PLAY NOW</span>
        `):l&&s?(e.style.background="var(--pixel-danger)",e.innerHTML=`
          🐉 BOSS ${t}<br>
          <span style="font-size: 10px;">UNLOCKED</span>
        `):l?(e.style.background="var(--pixel-secondary)",e.innerHTML=`
          LEVEL ${t}<br>
          <span style="font-size: 10px;">UNLOCKED</span>
        `):s?(e.style.background="var(--pixel-border)",e.style.cursor="not-allowed",e.innerHTML=`
          🐉 BOSS ${t}<br>
          <span style="font-size: 10px;">LOCKED</span>
        `):(e.style.background="var(--pixel-border)",e.style.cursor="not-allowed",e.innerHTML=`
          🔒 LEVEL ${t}<br>
          <span style="font-size: 10px;">LOCKED</span>
        `),e.style.padding="16px",e.style.fontSize="12px",e.style.lineHeight="1.5",l&&e.addEventListener("click",()=>{window.location.href=`/mission/${t}`}),f.appendChild(e)}const v=document.getElementById("skillWorldBtn"),y=document.getElementById("skillWorldModal"),L=document.getElementById("closeSkillModal"),d=document.getElementById("skillWorldContent");let c=null;function u(t){d.innerHTML="";const e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fit, minmax(220px, 1fr))",e.style.gap="12px",Object.keys(t).sort((n,l)=>n-l).forEach(n=>{const l=t[n],o=document.createElement("div");o.className="pixel-card",o.style.padding="12px",o.style.cursor="pointer",o.innerHTML=`
          <div style="font-weight:800; font-family:var(--font-pixel);">WORLD ${n.toUpperCase?n.toUpperCase():n}</div>
          <div style="margin-top:6px; color:var(--pixel-text-dim);">${l[0]&&l[0].world?l[0].world.replace(/-/g," ").toUpperCase():"Unknown Region"}</div>
          <div style="margin-top:8px; font-size:13px;">Levels: ${l.length}</div>
        `,o.addEventListener("click",()=>E(n,t[n])),e.appendChild(o)}),d.appendChild(e)}function E(t,e){d.innerHTML="";const n=document.createElement("div");n.style.display="flex",n.style.justifyContent="space-between",n.style.alignItems="center",n.style.marginBottom="12px";const l=document.createElement("div");l.innerHTML=`<strong>WORLD ${t}</strong> — ${e[0]&&e[0].world?e[0].world.replace(/-/g," ").toUpperCase():""}`,n.appendChild(l);const o=document.createElement("button");o.className="pixel-button",o.textContent="Back",o.addEventListener("click",()=>u(c)),n.appendChild(o),d.appendChild(n);const s=document.createElement("div");s.style.display="grid",s.style.gridTemplateColumns="repeat(auto-fit, minmax(220px, 1fr))",s.style.gap="8px",e.forEach(r=>{const a=document.createElement("div");a.style.background="var(--pixel-surface)",a.style.border="2px solid var(--pixel-border)",a.style.padding="8px",a.style.fontSize="13px",a.innerHTML=`
          <div style="font-weight:700; margin-bottom:6px;">LEVEL ${r.id}: ${r.title}</div>
          <div style="color:var(--pixel-text-dim); font-size:12px; max-height:72px; overflow:hidden;">${r.story||r.instructions||""}</div>
          <div style="margin-top:8px; font-size:11px; color:var(--pixel-text-dim);">Difficulty: ${r.difficulty||"unknown"}</div>
        `,s.appendChild(a)}),d.appendChild(s)}v.addEventListener("click",async()=>{if(y.style.display="flex",d.innerHTML='<p style="color:var(--pixel-text-dim);">Loading worlds...</p>',!c){const t=[];let e=0;for(let l=1;l<=100;l++){const o=String(l).padStart(3,"0");try{const s=await fetch(`/missions/level-${o}.json`);if(!s.ok){if(e++,e>=5)break;continue}e=0;const r=await s.json();t.push(r)}catch{}}if(t.length===0){d.innerHTML='<p style="color:var(--pixel-text-dim);">No worlds found.</p>';return}const n={};t.sort((l,o)=>l.id-o.id),t.forEach(l=>{const o=l.worldId||Math.ceil(l.id/15);n[o]||(n[o]=[]),n[o].push(l)}),c=n}u(c)});L.addEventListener("click",()=>{y.style.display="none"});
