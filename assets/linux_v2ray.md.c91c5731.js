import{_ as s,o as a,c as n,a as l}from"./app.e08fe782.js";const u=JSON.parse('{"title":"配置ubuntu 20.04","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用root用户","slug":"使用root用户","link":"#使用root用户","children":[]},{"level":2,"title":"环境配置(安装依赖/开启BBR)","slug":"环境配置-安装依赖-开启bbr","link":"#环境配置-安装依赖-开启bbr","children":[]},{"level":2,"title":"安装/升级","slug":"安装-升级","link":"#安装-升级","children":[]},{"level":2,"title":"Caddy安装配置","slug":"caddy安装配置","link":"#caddy安装配置","children":[]},{"level":2,"title":"创建测速文件","slug":"创建测速文件","link":"#创建测速文件","children":[]},{"level":2,"title":"防火墙","slug":"防火墙","link":"#防火墙","children":[]}],"relativePath":"linux/v2ray.md","lastUpdated":null}'),p={name:"linux/v2ray.md"},e=l(`<h1 id="配置ubuntu-20-04" tabindex="-1">配置ubuntu 20.04 <a class="header-anchor" href="#配置ubuntu-20-04" aria-hidden="true">#</a></h1><h2 id="使用root用户" tabindex="-1">使用root用户 <a class="header-anchor" href="#使用root用户" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo -i</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="环境配置-安装依赖-开启bbr" tabindex="-1">环境配置(安装依赖/开启BBR) <a class="header-anchor" href="#环境配置-安装依赖-开启bbr" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">#依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">apt update</span></span>
<span class="line"><span style="color:#A6ACCD;">apt install curl wget unzip</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># bbr</span></span>
<span class="line"><span style="color:#A6ACCD;">echo net.core.default_qdisc=fq &gt;&gt; /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">echo net.ipv4.tcp_congestion_control=bbr &gt;&gt; /etc/sysctl.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">sysctl -p</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="安装-升级" tabindex="-1">安装/升级 <a class="header-anchor" href="#安装-升级" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">bash &lt;(curl -s https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">#使用域名</span></span>
<span class="line"><span style="color:#A6ACCD;">h2_domain=&quot;demo.example.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#生成uuid</span></span>
<span class="line"><span style="color:#A6ACCD;">uuid=$(v2ray uuid)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">tee /usr/local/etc/v2ray/config.json&lt;&lt;-&quot;EOF&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;log&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;loglevel&quot;: &quot;warning&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;access&quot;: &quot;/var/log/v2ray/access&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;error&quot;: &quot;/var/log/v2ray/error&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;inbounds&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;protocol&quot;: &quot;vmess&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;listen&quot;: &quot;127.0.0.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;port&quot;: 40001,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;settings&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;clients&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot;: &quot;\${uuid}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;streamSettings&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;network&quot;: &quot;h2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;httpSettings&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;host&quot;: [&quot;\${h2_domain}&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;path&quot;: &quot;/h2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;outbounds&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;protocol&quot;: &quot;freedom&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">EOF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sed -i &quot;s/&quot;&#39;\${uuid}&#39;&quot;/\${uuid}/g&quot; /usr/local/etc/v2ray/config.json</span></span>
<span class="line"><span style="color:#A6ACCD;">sed -i &quot;s/&quot;&#39;\${h2_domain}&#39;&quot;/\${h2_domain}/g&quot; /usr/local/etc/v2ray/config.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#启用并重启服务</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable v2ray</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart v2ray</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#输出uuid</span></span>
<span class="line"><span style="color:#A6ACCD;">echo $uuid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="caddy安装配置" tabindex="-1">Caddy安装配置 <a class="header-anchor" href="#caddy安装配置" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt install -y debian-keyring debian-archive-keyring apt-transport-https</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -1sLf &#39;https://dl.cloudsmith.io/public/caddy/stable/gpg.key&#39; | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -1sLf &#39;https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt&#39; | sudo tee /etc/apt/sources.list.d/caddy-stable.list</span></span>
<span class="line"><span style="color:#A6ACCD;">apt update</span></span>
<span class="line"><span style="color:#A6ACCD;">apt install caddy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">h2_domain=&quot;demo.example.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">tee /etc/caddy/Caddyfile&lt;&lt;-&quot;EOF&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">\${h2_domain} {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root * /var/www/caddy</span></span>
<span class="line"><span style="color:#A6ACCD;">    file_server</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @v2ray_ws {</span></span>
<span class="line"><span style="color:#A6ACCD;">        path /ws</span></span>
<span class="line"><span style="color:#A6ACCD;">        header Connection *Upgrade*</span></span>
<span class="line"><span style="color:#A6ACCD;">        header Upgrade websocket</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #reverse_proxy @v2ray_ws 127.0.0.1:40002</span></span>
<span class="line"><span style="color:#A6ACCD;">    @v2ray_h2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">        path /h2</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    reverse_proxy @v2ray_h2 127.0.0.1:40001 {</span></span>
<span class="line"><span style="color:#A6ACCD;">          transport http {</span></span>
<span class="line"><span style="color:#A6ACCD;">            versions h2c</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">EOF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sed -i &quot;s/&quot;&#39;\${h2_domain}&#39;&quot;/\${h2_domain}/g&quot; /etc/caddy/Caddyfile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p /var/www/caddy/test</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">service caddy restart</span></span>
<span class="line"><span style="color:#A6ACCD;">service v2ray restart</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="创建测速文件" tabindex="-1">创建测速文件 <a class="header-anchor" href="#创建测速文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd /var/www/caddy/test</span></span>
<span class="line"><span style="color:#A6ACCD;">dd if=/dev/zero of=256M count=4 bs=64M</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="防火墙" tabindex="-1">防火墙 <a class="header-anchor" href="#防火墙" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt install ufw</span></span>
<span class="line"><span style="color:#A6ACCD;">ufw allow ssh</span></span>
<span class="line"><span style="color:#A6ACCD;">ufw allow http</span></span>
<span class="line"><span style="color:#A6ACCD;">ufw allow https</span></span>
<span class="line"><span style="color:#A6ACCD;">ufw enable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),o=[e];function t(c,r,i,C,A,d){return a(),n("div",null,o)}const D=s(p,[["render",t]]);export{u as __pageData,D as default};
