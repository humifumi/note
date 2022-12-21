import{_ as s,o as a,c as l,a as n}from"./app.e08fe782.js";const C=JSON.parse('{"title":"在js中导入excel数据","description":"","frontmatter":{},"headers":[{"level":2,"title":"js-xlsx使用方法","slug":"js-xlsx使用方法","link":"#js-xlsx使用方法","children":[]}],"relativePath":"tampermonkey/getting-data-from-excel.md","lastUpdated":null}'),p={name:"tampermonkey/getting-data-from-excel.md"},o=n(`<h1 id="在js中导入excel数据" tabindex="-1">在js中导入excel数据 <a class="header-anchor" href="#在js中导入excel数据" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">使用js-xlsx工具库即可</p><p>官方链接:<a href="https://github.com/SheetJS/sheetjs" target="_blank" rel="noreferrer">github</a></p></div><h2 id="js-xlsx使用方法" tabindex="-1">js-xlsx使用方法 <a class="header-anchor" href="#js-xlsx使用方法" aria-hidden="true">#</a></h2><p>先在网页中引入标签</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.core.min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>关于读取excel的函数</summary><p>读取excel主要是通过XLSX.read(data, {type: type});方法来实现，返回一个叫WorkBook的对象</p><p>type如下:</p><ul><li>base64: 以base64方式读取；</li><li>binary: BinaryString格式(byte n is data.charCodeAt(n))</li><li>string: UTF8编码的字符串；</li><li>buffer: nodejs Buffer；</li><li>array: Uint8Array，8位无符号数组；</li><li>file: 文件的路径（仅nodejs下支持）；</li></ul></details><p>js读取本地文件代码:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 读取本地excel文件</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">readWorkbookFromLocalFile</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">file</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">callback</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reader</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">FileReader</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">reader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">workbook</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">XLSX</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">binary</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;">) </span><span style="color:#82AAFF;">callback</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">workbook</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">reader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readAsBinaryString</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>上述代码通过回调获得了Workbook对象,随后使用这个对象对excel文件进行操作</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//按钮事件</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getData</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file_el</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zdw_file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">file_el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">files</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">zdw_file</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file_el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">files</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">readWorkbookFromLocalFile</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">zdw_file</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">workbook</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//workboot就在这，就根据文档自行处理</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">选择excel文件</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,10),e=[o];function t(c,r,F,y,D,i){return a(),l("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
