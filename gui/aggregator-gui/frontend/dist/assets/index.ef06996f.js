(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();function O(){return window.go.main.App.GetConfig()}function D(e){return window.go.main.App.GetGistUser(e)}function H(){return window.go.main.App.GetHistoryLogs()}function B(e,t){return window.go.main.App.GetRemoteFiles(e,t)}function N(){return window.go.main.App.GetResultBrief()}function z(){return window.go.main.App.OpenDataFolder()}function M(e){return window.go.main.App.SaveConfig(e)}function F(){return window.go.main.App.StartCrawl()}function P(){return window.go.main.App.StopCrawl()}function E(e,t,i){return window.go.main.App.SyncToGist(e,t,i)}function j(e,t,i){return window.runtime.EventsOnMultiple(e,t,i)}function k(e,t){return j(e,t,-1)}window.currentConfig=null;let g=[],b="",f="ALL",y="";document.querySelector("#app").innerHTML=`
    <div class="app-container">
        <div class="top-actions">
            <div class="custom-select-wrapper" id="theme-select-wrapper" style="min-width: 160px;">
                <div class="custom-select" onclick="toggleDropdown(this, event)">
                    <span class="selected-value">\u{1F4BB} \u6781\u5BA2\u9ED1\u5BA2</span>
                    <div class="dropdown-arrow"></div>
                </div>
                <div class="dropdown-menu">
                    <div class="dropdown-item active" onclick="selectOption(this, 'hacker', event)">\u{1F4BB} \u6781\u5BA2\u9ED1\u5BA2</div>
                    <div class="dropdown-item" onclick="selectOption(this, 'aurora', event)">\u{1F30C} \u6781\u5149\u4E4B\u591C</div>
                    <div class="dropdown-item" onclick="selectOption(this, 'cyberpunk', event)">\u{1F303} \u8D5B\u535A\u670B\u514B</div>
                    <div class="dropdown-item" onclick="selectOption(this, 'dark', event)">\u{1F311} \u7ECF\u5178\u6697\u9ED1</div>
                    <div class="dropdown-item" onclick="selectOption(this, 'green', event)">\u{1F343} \u62A4\u773C\u6A21\u5F0F</div>
                    <div class="dropdown-item" onclick="selectOption(this, 'holographic', event)">\u{1F4BF} \u5168\u606F\u79D1\u6280</div>
                    <div class="dropdown-item" onclick="selectOption(this, 'mocha', event)">\u2615 \u6469\u5361\u6696\u5496</div>
                    <div class="dropdown-item" onclick="selectOption(this, 'ocean', event)">\u{1F30A} \u6DF1\u6D77\u4E4B\u84DD</div>
                    <div class="dropdown-item" onclick="selectOption(this, 'quantum', event)">\u269B\uFE0F \u91CF\u5B50\u7D2B\u7535</div>
                    <div class="dropdown-item" onclick="selectOption(this, 'sakura', event)">\u{1F338} \u6A31\u82B1\u7C89\u6A31</div>
                    <div class="dropdown-item" onclick="selectOption(this, 'starry', event)">\u{1F320} \u7E41\u661F\u6DF1\u7A7A</div>
                    <div class="dropdown-item" onclick="selectOption(this, 'sunset', event)">\u{1F307} \u66AE\u8272\u5915\u9633</div>
                </div>
            </div>
        </div>
        <nav class="sidebar">
            <div class="sidebar-header">
                <h1>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="min-width:28px">
                        <defs>
                            <linearGradient id="logo-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stop-color="#38bdf8"/>
                                <stop offset="100%" stop-color="#c084fc"/>
                            </linearGradient>
                        </defs>
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#logo-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="url(#logo-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 7V17" stroke="url(#logo-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 7V17" stroke="url(#logo-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 12V22" stroke="url(#logo-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Node Horizon
                </h1>
                <p>\u8282\u70B9\u89C6\u754C \xB7 Free Proxy</p>
            </div>
            <div class="nav-item active" onclick="showTab('dashboard')">\u{1F4CA} \u8FD0\u884C\u770B\u677F</div>
            <div class="nav-item" onclick="showTab('config')">\u2699\uFE0F \u914D\u7F6E\u7BA1\u7406</div>
            <div class="nav-item" onclick="showTab('results')">\u{1F4C2} \u6570\u636E\u900F\u89C6</div>
        </nav>
        <main class="content">
            <!-- Dashboard Tab -->
            <div id="dashboard-tab" class="tab-content active">
                <div class="header-status">
                    <h2>\u5B9E\u65F6\u72B6\u6001\u76D1\u63A7</h2>
                    <span id="status-tag" class="status-tag idle">\u4F11\u7720\u4E2D</span>
                </div>
                
                <div class="progress-wrapper">
                    <div class="progress-info">
                        <span id="progress-phase">\u7B49\u5F85\u6267\u884C...</span>
                        <span id="progress-text">0/0 (0%)</span>
                    </div>
                    <div class="progress-container">
                        <div id="progress-bar"></div>
                    </div>
                </div>

                    <div class="dashboard-controls" style="gap:15px;">
                        <div class="main-controls">
                            <button id="start-btn" class="btn" onclick="startCrawl()">\u{1F680} \u542F\u52A8\u6293\u53D6</button>
                            <button id="stop-btn" class="btn danger" onclick="stopCrawl()" disabled>\u23F9\uFE0F \u505C\u6B62\u4EFB\u52A1</button>
                            <button class="btn secondary" onclick="loadHistoryLogs()">\u{1F552} \u5386\u53F2\u65E5\u5FD7</button>
                            <button class="btn secondary" onclick="clearLogs()">\u{1F9F9} \u6E05\u7A7A\u65E5\u5FD7</button>
                        </div>
                        <div class="search-box" style="display:flex; gap:10px; flex:1; max-width:650px;">
                            <div class="custom-select-wrapper" id="level-filter-wrapper">
                                <div class="custom-select" onclick="toggleDropdown(this, event)">
                                    <span class="selected-value">\u5168\u90E8\u7EA7\u522B</span>
                                    <div class="dropdown-arrow"></div>
                                </div>
                                <div class="dropdown-menu">
                                    <div class="dropdown-item active" onclick="selectOption(this, 'ALL', event)">\u5168\u90E8\u7EA7\u522B</div>
                                    <div class="dropdown-item" onclick="selectOption(this, 'INFO', event)">INFO</div>
                                    <div class="dropdown-item" onclick="selectOption(this, 'WARNING', event)">WARN</div>
                                    <div class="dropdown-item" onclick="selectOption(this, 'ERROR', event)">ERROR</div>
                                </div>
                            </div>
                            <div class="search-input-wrapper">
                                <input type="text" id="log-search" placeholder="\u641C\u7D22\u65E5\u5FD7\u5185\u5BB9..." oninput="filterLogs(this.value)">
                            </div>
                            <input type="date" id="date-filter" style="position:fixed; opacity:0; pointer-events:none" onchange="changeDateFilter(this.value)">
                        </div>
                    </div>
                <div class="log-container">
                    <div id="logs" class="logs">\u7B49\u5F85\u4EFB\u52A1\u542F\u52A8...</div>
                </div>
            </div>

            <!-- Config Tab -->
            <div id="config-tab" class="tab-content">
                <div class="header-status">
                    <h2>\u2699\uFE0F \u914D\u7F6E\u7BA1\u7406\u63A7\u5236\u4E2D\u5FC3</h2>
                </div>
                
                <div class="config-grid">
                    <!-- Gist & Cloud Card -->
                    <div class="config-card">
                        <div class="card-header">
                            <span class="card-icon">\u2601\uFE0F</span>
                            <h3>\u4E91\u7AEF\u540C\u6B65\u914D\u7F6E</h3>
                        </div>
                        <div id="cloud-settings" class="card-body"></div>
                    </div>

                    <!-- Strategy Card -->
                    <div class="config-card">
                        <div class="card-header">
                            <span class="card-icon">\u{1F6E1}\uFE0F</span>
                            <h3>\u6293\u53D6\u7B56\u7565\u63A7\u5236</h3>
                        </div>
                        <div id="global-settings" class="card-body"></div>
                    </div>
                </div>

                <div class="controls sticky-footer">
                    <button class="btn" onclick="window.saveCurrentConfig()">\u{1F4BE} \u4FDD\u5B58\u5168\u90E8\u914D\u7F6E</button>
                    <button class="btn secondary" onclick="window.loadConfig()">\u{1F504} \u5237\u65B0\u6570\u636E</button>
                </div>
            </div>

            <!-- Results Tab -->
            <div id="results-tab" class="tab-content">
                <div class="header-status">
                    <h2>\u5168\u65B9\u4F4D\u6570\u636E\u4E2D\u5FC3</h2>
                </div>
                <div class="controls" style="margin-bottom: 20px;">
                    <button class="btn" onclick="updateResults()">\u{1F504} \u5237\u65B0\u6570\u636E\u72B6\u6001</button>
                </div>
                
                <div class="config-grid">
                    <!-- Stats Section (Injected dynamically) -->
                    <div id="results-brief" style="grid-column: 1 / -1; display:flex; gap:20px; flex-direction:column;"></div>

                    <!-- File List Card -->
                    <div class="config-card" style="grid-column: 1 / -1;">
                        <div class="card-header">
                            <span class="card-icon">\u2601\uFE0F</span>
                            <h3>\u4E91\u7AEF\u5907\u4EFD\u6587\u4EF6</h3>
                        </div>
                        <div class="card-body" id="file-perspective" style="padding:0">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>\u6587\u4EF6\u540D</th>
                                        <th>\u5927\u5C0F</th>
                                        <th style="text-align:center">\u64CD\u4F5C</th>
                                    </tr>
                                </thead>
                                <tbody id="file-list-body"></tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Subscription Links Card (Injected dynamically) -->
                    <div id="sub-perspective" style="grid-column: 1 / -1;"></div>
                </div>
            </div>

        </main>
    </div>
`;window.toggleDropdown=e=>{window.event&&window.event.stopPropagation();const i=e.closest(".custom-select-wrapper").querySelector(".dropdown-menu");document.querySelectorAll(".dropdown-menu").forEach(n=>{n!==i&&n.classList.remove("show")}),i.classList.toggle("show")};window.selectOption=(e,t)=>{window.event&&window.event.stopPropagation();const i=e.parentElement,n=i.parentElement,o=n.querySelector(".selected-value");i&&(i.querySelectorAll(".dropdown-item").forEach(s=>s.classList.remove("active")),e.classList.add("active"),i.classList.remove("show")),o&&(o.innerText=e.innerText),n.id==="level-filter-wrapper"?window.changeLevelFilter(t):n.id==="theme-select-wrapper"&&window.changeTheme(t)};document.addEventListener("click",e=>{e.target.closest(".custom-select-wrapper")||document.querySelectorAll(".dropdown-menu").forEach(t=>t.classList.remove("show"))});const d=document.getElementById("logs"),I=document.getElementById("status-tag"),L=document.getElementById("progress-bar"),R=document.getElementById("progress-text"),G=document.getElementById("progress-phase");window.changeTheme=e=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("ccnexus-theme",e)};changeTheme(localStorage.getItem("ccnexus-theme")||"hacker");window.showTab=function(e){document.querySelectorAll(".tab-content").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(t=>t.classList.remove("active")),document.getElementById(e+"-tab").classList.add("active"),event&&event.currentTarget&&event.currentTarget.classList.add("active"),e==="config"&&loadConfig(),e==="results"&&updateResults()};k("log",e=>{e.includes("\u4EFB\u52A1\u5DF2\u542F\u52A8")&&(g=[],d.innerText="",L.style.width="0%",h=0,x=0);let t="INFO";(e.includes("WARNING")||e.includes("WARN"))&&(t="WARNING"),e.includes("ERROR")&&(t="ERROR"),e.includes("DEBUG")&&(t="DEBUG");let i=new Date().toISOString().split("T")[0];const n=e.match(/^(\d{4}-\d{2}-\d{2})/);n&&(i=n[1]);const o={level:t,msg:e,time:new Date().toLocaleTimeString(),date:i};g.push(o),C(o)&&T(o)});function C(e){const t=f==="ALL"||e.level===f,i=!b||e.msg.toLowerCase().includes(b.toLowerCase()),n=!y||e.date===y;return t&&i&&n}function T(e){const t=document.createElement("div");t.className="log-line";let i=e.level.toLowerCase();i==="warning"&&(i="warn");const n="level-"+i,o=e.time==="HISTORY"?'<span class="log-level" style="margin-right:8px; min-width:auto; padding:4px 10px; border-radius:10px; background:rgba(255,255,255,0.08); color:var(--text-secondary); border:1px dashed var(--border-color)">HIST</span>':"";t.innerHTML=`${o}<span class="log-level ${n}">${e.level}</span> <span style="color:var(--text-secondary); font-size:11px; opacity:0.7">${e.time}</span> ${e.msg}`;const s=d.scrollTop+d.clientHeight>=d.scrollHeight-50;d.appendChild(t),s&&(d.scrollTop=d.scrollHeight)}window.filterLogs=e=>{b=e,$()};window.changeLevelFilter=e=>{f=e,$()};window.changeDateFilter=e=>{y=e,q()};function $(){d.innerHTML="",g.filter(C).forEach(T)}let h=0,x=0;const m=["\u{1F50D} \u6B63\u5728\u591A\u6E90\u722C\u53D6\u4E0E\u6536\u96C6...","\u{1F9EA} \u6B63\u5728\u8FDB\u884C\u4EE3\u7406\u6D3B\u6027\u6D4B\u8BD5...","\u{1F4E6} \u6B63\u5728\u683C\u5F0F\u8F6C\u6362\u4E0E\u805A\u5408\u8F93\u51FA..."];k("progress",e=>{const t=parseInt(e.percentage);t<h-20&&x++,h=t,L.style.width=t+"%",R.innerText=`${e.current}/${e.total} (${t}%)`,G.innerText=m[x]||m[m.length-1]});k("status",e=>{I.innerText=e==="running"?"\u6B63\u5728\u8FD0\u884C":"\u7A7A\u95F2\u4F11\u7720",I.className="status-tag "+e,document.getElementById("start-btn").disabled=e==="running",document.getElementById("stop-btn").disabled=e!=="running",e!=="running"&&(G.innerText="\u2705 \u4EFB\u52A1\u5DF2\u5B8C\u6210",L.style.width="100%",R.innerText="\u5C31\u7EEA")});window.clearLogs=()=>{g=[],d.innerHTML="\u9762\u677F\u5DF2\u624B\u52A8\u91CD\u7F6E\u3002"};window.startCrawl=F;window.stopCrawl=P;window.syncGist=async()=>{if(!window.currentConfig.cloud||!window.currentConfig.cloud.gistID)return alert("\u8BF7\u5148\u5728\u914D\u7F6E\u7BA1\u7406\u4E2D\u8BBE\u7F6E Gist ID");try{await E(window.currentConfig.cloud.gistToken||"",window.currentConfig.cloud.gistID,"crawled-subs.json"),await E(window.currentConfig.cloud.gistToken||"",window.currentConfig.cloud.gistID,"crawled-proxies.json"),alert("\u2705 \u4E91\u7AEF\u540C\u6B65\u6210\u529F\uFF01"),updateResults()}catch(e){alert("\u274C \u540C\u6B65\u5931\u8D25: "+e)}};window.openDataFolder=z;window.loadHistoryLogs=async()=>{const e=document.getElementById("date-filter");e.showPicker?e.showPicker():e.click()};async function q(e){try{const t=await H();if(!t)return alert("\u6682\u65E0\u5386\u53F2\u65E5\u5FD7\u8BB0\u5F55");g=[],t.split(`
`).forEach(n=>{if(!n.trim())return;let o="INFO";n.includes("WARN")&&(o="WARNING"),n.includes("ERROR")&&(o="ERROR"),n.includes("DEBUG")&&(o="DEBUG");let s="";const r=n.match(/^(\d{4}-\d{2}-\d{2})/);r&&(s=r[1]);const u={level:o,msg:n,time:"HISTORY",date:s};g.push(u),C(u)&&T(u)}),d.scrollTop=d.scrollHeight}catch(t){alert("\u52A0\u8F7D\u5386\u53F2\u65E5\u5FD7\u5931\u8D25: "+t)}}window.loadConfig=async()=>{try{const e=await O();if(!e)throw new Error("Empty config result");window.currentConfig=JSON.parse(e),window.currentConfig.crawl||(window.currentConfig.crawl={}),window.currentConfig.cloud||(window.currentConfig.cloud={}),window.renderGlobalSettings(),window.renderCloudSettings()}catch(e){alert("\u914D\u7F6E\u52A0\u8F7D\u5931\u8D25: "+e)}};window.renderGlobalSettings=function(){const e=window.currentConfig.crawl||{};document.getElementById("global-settings").innerHTML=`
        <div class="setting-group">
            <label>\u5168\u5C40\u5E76\u53D1\u7EBF\u7A0B\u6570</label>
            <input type="number" value="${e.num||64}" onchange="window.currentConfig.crawl.num=parseInt(this.value)" placeholder="\u9ED8\u8BA4: 64">
        </div>
        <div class="setting-group">
            <label>\u8FDE\u63A5\u8D85\u65F6 (ms)</label>
            <input type="number" value="${e.timeout||5e3}" onchange="window.currentConfig.crawl.timeout=parseInt(this.value)" placeholder="\u9ED8\u8BA4: 5000">
        </div>
        <div class="setting-group">
            <label>\u6392\u9664\u6B63\u5219</label>
            <input type="text" value="${e.exclude||""}" onchange="window.currentConfig.crawl.exclude=this.value" placeholder="\u4F8B\u5982: (\u5B98\u7F51|\u5730\u5740|\u6D41\u91CF)">
        </div>
    `};window.renderCloudSettings=function(){const e=window.currentConfig.cloud||{};document.getElementById("cloud-settings").innerHTML=`
        <div class="setting-group">
            <label>GitHub Gist Token</label>
            <input type="password" value="${e.gistToken||""}" onchange="window.currentConfig.cloud.gistToken=this.value" placeholder="ghp_xxx...">
        </div>
        <div class="setting-group">
            <label>Gist ID (Main)</label>
            <input type="text" value="${e.gistID||""}" onchange="window.currentConfig.cloud.gistID=this.value" placeholder="32\u4F4D Gist ID">
        </div>
    `};window.saveCurrentConfig=async()=>{try{await M(JSON.stringify(window.currentConfig,null,2)),alert("\u2705 \u914D\u7F6E\u4FDD\u5B58\u6210\u529F\uFF01")}catch(e){alert("\u274C \u4FDD\u5B58\u5931\u8D25: "+e)}};window.updateResults=async()=>{var u;if(!window.currentConfig)try{const a=await O();window.currentConfig=JSON.parse(a)}catch{}const e=await N();let t=0;const i=parseInt(e.totalProxies)||0,n=parseInt(e.aliveProxies)||0;i>0&&(t=Math.round(n/i*100)),document.getElementById("results-brief").innerHTML=`
        <div class="config-card">
            <div class="card-header"><span class="card-icon">\u{1F4CA}</span><h3>\u8FD0\u884C\u7EDF\u8BA1\u900F\u89C6</h3></div>
            <div class="card-body">
                <div style="display:flex; flex-direction:column; gap:24px;">
                    <div>
                        <h4 style="margin:0 0 12px 0; color:var(--accent-color); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; opacity:0.9; border-left:3px solid var(--accent-color); padding-left:8px;">\u{1F4CB} \u722C\u53D6\u9636\u6BB5\u6570\u636E</h4>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
                            <div class="stats-mini-card" style="background:var(--bg-primary); padding:15px; border-radius:8px; border:1px solid var(--border-color);">
                                <span class="label" style="display:block; font-size:12px; color:var(--text-secondary); margin-bottom:4px;">\u627E\u5230\u8BA2\u9605</span>
                                <span class="value" style="font-size:24px; font-weight:bold; color:#22c55e">${e.crawledSubs||0}</span>
                            </div>
                            <div class="stats-mini-card" style="background:var(--bg-primary); padding:15px; border-radius:8px; border:1px solid var(--border-color);">
                                <span class="label" style="display:block; font-size:12px; color:var(--text-secondary); margin-bottom:4px;">\u4EE3\u7406\u94FE\u63A5</span>
                                <span class="value" style="font-size:24px; font-weight:bold; color:#3b82f6">${e.proxyLinks||0}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 style="margin:0 0 12px 0; color:var(--accent-color); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; opacity:0.9; border-left:3px solid var(--accent-color); padding-left:8px;">\u{1F9EA} \u6D4B\u8BD5\u4E0E\u805A\u5408\u7ED3\u679C</h4>
                        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:15px;">
                            <div class="stats-mini-card" style="background:var(--bg-primary); padding:15px; border-radius:8px; border:1px solid var(--border-color);">
                                <span class="label" style="display:block; font-size:12px; color:var(--text-secondary); margin-bottom:4px;">\u603B\u8BA1\u6D4B\u8BD5</span>
                                <span class="value" style="font-size:20px; font-weight:bold;">${e.totalProxies||0}</span>
                            </div>
                            <div class="stats-mini-card" style="background:var(--bg-primary); padding:15px; border-radius:8px; border:1px solid var(--border-color);">
                                <span class="label" style="display:block; font-size:12px; color:var(--text-secondary); margin-bottom:4px;">\u5B58\u6D3B\u8282\u70B9</span>
                                <span class="value" style="font-size:20px; font-weight:bold; color:#22c55e">${e.aliveProxies||0}</span>
                            </div>
                            <div class="stats-mini-card" style="background:var(--bg-primary); padding:15px; border-radius:8px; border:1px solid var(--border-color);">
                                <span class="label" style="display:block; font-size:12px; color:var(--text-secondary); margin-bottom:4px;">\u5931\u6548\u8282\u70B9</span>
                                <span class="value" style="font-size:20px; font-weight:bold; color:#ef4444">${e.deadProxies||0}</span>
                            </div>
                            <div class="stats-mini-card" style="background:var(--bg-primary); padding:15px; border-radius:8px; border:1px solid var(--border-color);">
                                <span class="label" style="display:block; font-size:12px; color:var(--text-secondary); margin-bottom:4px;">\u6210\u529F\u7387</span>
                                <span class="value" style="font-size:20px; font-weight:bold; color:#eab308">${t}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;const o=document.getElementById("file-list-body");o.innerHTML="<tr><td colspan='3' align='center'>\u6B63\u5728\u83B7\u53D6\u4E91\u7AEF Gist \u6570\u636E...</td></tr>";const s=document.getElementById("sub-perspective");s.innerHTML="";let r="";try{if(window.currentConfig.cloud&&window.currentConfig.cloud.gistID&&window.currentConfig.cloud.gistToken){const a=window.currentConfig.cloud.gistID,S=window.currentConfig.cloud.gistToken;let w=[],c="unknown",U=null;try{const l=B(S,a),p=D(S),[v,A]=await Promise.all([l,p]);w=v||[],c=A||"unknown"}catch(l){console.error("API Fetch Error",l);const p=((u=window.currentConfig.storage)==null?void 0:u.items)||{};for(const v in p)if(p[v].username){c=p[v].username;break}}w&&w.length>0?w.forEach(l=>{const p=l.filename||l.name||"unknown",v=l.size?l.size>1024?`${(l.size/1024).toFixed(1)} KB`:`${l.size} B`:"N/A";r+=`<tr>
                        <td>${p}</td>
                        <td>${v}</td>
                        <td style="text-align:center"><button class="btn accent btn-sm" onclick="window.open('${l.url}', '_blank')">\u6D4F\u89C8\u67E5\u770B</button></td>
                    </tr>`}):r="<tr><td colspan='3' align='center'>\u4E91\u7AEF\u6682\u65E0\u6587\u4EF6 (\u4F46\u8BA2\u9605\u94FE\u63A5\u5982\u4E0B)</td></tr>",c&&c!=="unknown"?s.innerHTML=`
                    <div class="config-card">
                        <div class="card-header"><span class="card-icon">\u{1F517}</span><h3>\u8BA2\u9605\u94FE\u63A5 (\u6C38\u4E45\u6709\u6548)</h3></div>
                        <div class="card-body">
                             <div class="sub-links-container">
                                <div class="link-group" style="margin-bottom:20px;">
                                    <label style="color:var(--text-secondary); font-size:12px; margin-bottom:5px; display:block;">Clash \u914D\u7F6E\u94FE\u63A5</label>
                                    <div style="display:flex; gap:10px;">
                                        <input type="text" readonly value="https://gist.githubusercontent.com/${c}/${a}/raw/free-clash.yaml" style="flex:1; background:var(--bg-primary); border:1px solid var(--border-color); padding:10px; border-radius:8px; color:var(--text-primary); font-family:monospace;">
                                        <button class="btn secondary" onclick="navigator.clipboard.writeText(this.previousElementSibling.value); alert('\u5DF2\u590D\u5236!')">\u590D\u5236</button>
                                    </div>
                                </div>
                                <div class="link-group" style="margin-bottom:20px;">
                                    <label style="color:var(--text-secondary); font-size:12px; margin-bottom:5px; display:block;">SingBox \u914D\u7F6E\u94FE\u63A5</label>
                                    <div style="display:flex; gap:10px;">
                                        <input type="text" readonly value="https://gist.githubusercontent.com/${c}/${a}/raw/free-singbox.json" style="flex:1; background:var(--bg-primary); border:1px solid var(--border-color); padding:10px; border-radius:8px; color:var(--text-primary); font-family:monospace;">
                                        <button class="btn secondary" onclick="navigator.clipboard.writeText(this.previousElementSibling.value); alert('\u5DF2\u590D\u5236!')">\u590D\u5236</button>
                                    </div>
                                </div>
                                <div class="link-group">
                                    <label style="color:var(--text-secondary); font-size:12px; margin-bottom:5px; display:block;">\u539F\u59CB\u722C\u53D6\u6570\u636E\u6E90 (JSON)</label>
                                    <div style="margin-bottom:10px; display:flex; gap:10px;">
                                        <input type="text" readonly value="https://gist.githubusercontent.com/${c}/${a}/raw/crawled-subs.json" style="flex:1; background:var(--bg-primary); border:1px solid var(--border-color); padding:8px; border-radius:6px; color:var(--text-secondary); font-size:12px; font-family:monospace;">
                                        <button class="btn secondary btn-sm" onclick="navigator.clipboard.writeText(this.previousElementSibling.value)">\u590D\u5236</button>
                                    </div>
                                    <div style="display:flex; gap:10px;">
                                        <input type="text" readonly value="https://gist.githubusercontent.com/${c}/${a}/raw/crawled-proxies.json" style="flex:1; background:var(--bg-primary); border:1px solid var(--border-color); padding:8px; border-radius:6px; color:var(--text-secondary); font-size:12px; font-family:monospace;">
                                        <button class="btn secondary btn-sm" onclick="navigator.clipboard.writeText(this.previousElementSibling.value)">\u590D\u5236</button>
                                    </div>
                                </div>
                                <div style="margin-top:25px; padding-top:15px; border-top:1px solid var(--border-color); text-align:right;">
                                    <a href="https://gist.github.com/${c}/${a}" target="_blank" class="btn accent" style="text-decoration:none">\u{1F310} \u8BBF\u95EE Gist \u4E3B\u9875</a>
                                </div>
                             </div>
                        </div>
                    </div>
                `:s.innerHTML='<div class="config-card"><div class="card-body"><p style="color:var(--text-secondary);">\u26A0\uFE0F \u65E0\u6CD5\u83B7\u53D6 GitHub \u7528\u6237\u540D\uFF0C\u8BF7\u68C0\u67E5 Token \u662F\u5426\u6709\u6548</p></div></div>'}else r="<tr><td colspan='3' align='center'>\u672A\u914D\u7F6E\u4E91\u7AEF\u540C\u6B65\u4FE1\u606F</td></tr>"}catch(a){r=`<tr><td colspan='3' style='color:#ef4444'>\u83B7\u53D6\u5931\u8D25: ${a}</td></tr>`}o.innerHTML=r};
