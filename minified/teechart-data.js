/*
 TeeChart(tm) for JavaScript(tm)
 @fileOverview TeeChart for JavaScript(tm)
 v1.9 April 2017
 Copyright(c) 2012-2017 by Steema Software SL. All Rights Reserved.
 http://www.steema.com

 Licensed with commercial and non-commercial attributes,
 specifically: http://www.steema.com/licensing/html5

 JavaScript is a trademark of Oracle Corporation.
*/
var Tee=Tee||{};
(function(){function w(v,t,e){var a,b,c=t,d,g,f;do if(d=c.links)for(g=d.length,b=0;b<g;b++){a=d[b].dimension;do{f=v;do if(a==f)return d[b].searchDimension=d[b].dimension,e.push(d[b]),d[b];while(f=f.parent);if((f=w(v,a,e))||(f=w(a,v,e)))return e.unshift(d[b]),f}while(a=a.parent)}while(c=c.parent);d=t.subDimensions;for(b=0;b<d.length;b++)if(f=w(v,d[b],e))return f;return null}"undefined"!==typeof exports&&(exports.Tee=Tee);Tee.Data=function(){function v(e,a){if(a)for(var b=0,c=a.length,b=0;b<c;b++)e.push({id:a[b],
value:0,count:0})}this.datasets=[];this.addDataSet=function(e,a,b,c){a&&a.implementation&&(a=t(a));e=new Tee.Data.Dimension(e,b,c);e.object=a;e.dataset=e;e.dimensions=[];e.engine=this;this.datasets.push(e);return e};this.addJSON=function(e,a,b,c){return this.addDataSet(e,JSON.parse(a),b,c)};this.applyStyle=function(e,a){switch(a){case 0:e.panel.transparent=!1,e.panel.format.round.x=0,e.panel.format.round.y=0,e.panel.format.stroke.size=2,e.panel.format.stroke.fill="darkgray"}};this.groupOther=function(e,
a,b){var c,d=e.values.length,g,f;if(d>a){f=0;g=d-a;for(c=a;c<d;c++)f+=e.values[c];e.values[a-1]=f;e.labels[a-1]=b;e.values.splice(a,g);e.labels.splice(a,g);e.code.splice(a,g);return g}return-1};this.slider=function(e,a,b,c,d,g){var f=new Tee.Slider(e);f.min=0;f.max=a.length-1;f.step=1;f.position=f.min;f.useRange=!1;f.thumbSize=12;f.horizontal=!0;f.bounds.x=b;f.bounds.y=c;f.bounds.width=d;f.bounds.height=g;e.tools.add(f);return f};var t=function(e){var a={},b;if(1==e.nodeType){if(0<e.attributes.length)for(var c=
0;c<e.attributes.length;c++)b=e.attributes.item(c),a[b.nodeName]=b.value}else 3==e.nodeType&&(a=e.nodeValue);if(e.hasChildNodes())for(c=0;c<e.childNodes.length;c++){b=e.childNodes.item(c);var d=b.nodeName;if("undefined"==typeof a[d])"#text"===d?b.hasChildNodes()?a[d]=t(b):(b=b.nodeValue.trim(),""!==b&&(a=b)):"xml"==d?a=t(b):a[d]=t(b);else{if("undefined"==typeof a[d].push){var g=a[d];a[d]=[];a[d].push(g)}a[d].push(t(b))}}return a};this.loadXMLDoc=function(e){var a=window.XMLHttpRequest?new XMLHttpRequest:
new ActiveXObject("Microsoft.XMLHTTP");a.open("GET",e,!1);a.send();return a.responseXML};this.loadXMLString=function(e){window.DOMParser?(parser=new DOMParser,xmlDoc=parser.parseFromString(e,"text/xml")):(xmlDoc=new ActiveXObject("Microsoft.XMLDOM"),xmlDoc.async=!1,xmlDoc.loadXML(e));return xmlDoc};this.queryDim=function(e,a,b){var c=e.dimension.getLinksTo(a),d,g;if(c){var f=c[0];e.initDims();var k="function"===typeof e.name?e.name:null;e.dimension.traverse(function(d,n){var p=null;if(!e.name||e.consider(d))if(a?
null===f.field&&a==f.dimension?p=a.hasID?a.parent?a.data[a.id]:d[a.id]:a==e.dimension?n||b.length:a.field?d[a.field]:n:(p=a.searchAcross(c,d))&&a.hasID&&(p=p[a.id]):(p=e.dimension.title,p||(p=e.dimension.dataset.object,e.dimension.field&&(p=p[e.dimension.field]))),null!==p&&(!a||a.nulls||""!==p)){var g=-1,u,h=k?k(d):e.name?d[e.name]:d;"undefined"===typeof h?h=null:("number"!==typeof h&&(h=parseFloat(h)),h!==h&&(h=null));if(null!==h){a&&a.datetime&&(p=a.datePart(p));for(u=0;u<b.length;u++)if(b[u].id==
p){g=u;if(0===b[g].count)b[g].count=1,b[g].value=h;else{u=e.measure;var m=h,l=b[g];l.count++;switch(u){case "sum":case "average":l.value+=m;break;case "high":if(1==l.count||m>l.value)l.value=m;break;case "low":if(1==l.count||m<l.value)l.value=m}}break}-1==g&&b.push({id:p,value:h,count:1})}}return!0});if("count"==e.measure)for(d=0;d<b.length;d++)g=b[d],g.value=g.count;else if("average"==e.measure)for(d=0;d<b.length;d++)g=b[d],0<g.count&&(g.value/=g.count);return!0}return!1};this.query=function(e,a){var b,
c,d,g,f,k=[],q,n,p,x,u;c=a instanceof Array?a:[a];g=e instanceof Array?e:[e];x=g.length;0<x&&(q=(u=g[0])?u.selected:null,p=[],q?p=q instanceof Array?q:[q]:u&&(u.id||u.field)&&(p=u.getIds()));for(q=0;q<c.length;q++)if(b=c[q]){for(n=x-1;0<=n;n--)if(d=g[n],0<n){if(d){var h=d.selected,m;if(h)if(h instanceof Array||(h=[h]),d.selectedInclude)m=h;else for(m=d.getIds(),f=0;f<h.length;f++)m.splice(m.indexOf(h[f]),1);else m=d.getIds();for(var l=0;l<m.length;l++)if(d.selected=m[l],d.nulls||""!==d.selected)if(f=
[],v(f,p),this.queryDim(b,g[n-1],f,d)){var r;if(!(r=d.nulls)){r=0;for(var s=void 0,s=0;s<f.length;s++)r+=f[s].count;r=0<r}r&&k.push({metric:b,dimension:d,values:f,master:d.selected,masterdim:g[n-1]})}d.selected=h;break}}else f=[],v(f,p),this.queryDim(b,d,f)&&k.push({metric:b,dimension:d,values:f,master:null});if(0<x&&u&&!u.nulls)for(d=0;d<k[0].values.length;){for(b=n=0;b<k.length;b++)n+=k[b].values[d].count;if(0===n)for(b=0;b<k.length;b++)k[b].values.splice(d,1);else d++}}return k};this.Chart=function(e,
a){function b(a,b){var c=0,d;for(d=0;d<a.length;d++)c+=a[d].data.values[b];return c}var c=new Tee.Chart(e);c.engine=this;c.panel.margins.left=0;var d=new Tee.ToolTip(c);d.render="dom";c.tools.add(d);d.ongettext=function(a,b,c,d){a="";var f=c.data.labels;1<c.chart.series.count()&&(a="<br/>"+c.title);c.data.x&&(a+="<br/>"+c.data.x[d]);return b+" "+(0<f.length?f[d]:"")+a};var g=new Tee.Animation;g.onstart=function(){this.s.fill="yellow"};g.onstop=function(){this.s.fill=this.old};g.duration=100;g.animateHover=
function(a){this.s=a.series.items[0].hover.stroke;this.old=this.s.fill;this.animate(a)};c.title.text=a;c.guessStyle=function(a){return this.defaultStyle?this.defaultStyle:30<a.length?Tee.Line:Tee.Bar};c.newSeries=function(a,b){var d=b.values,f=b.dimension,g=b.master;b.masterdim||(g=g&&f&&f.id?g[f.id]:b.master||b.metric.title);var e=c.guessStyle(d),h=c.addSeries(new e),m=h.data;h.title=""+(g||"(none)");h.marks.style="value";h.cursor="pointer";m.values=[];m.labels=[];m.code=[];var l;l=c.series.items.length;
var g=[],r,s;f&&f.titles&&w(f.titles,f,g);if(1<l){var t=c.series.items[l-2].data;for(s=0;s<t.values.length;s++)m.values.push(0),m.labels.push(t.labels[s]),m.code.push(t.code[s]);for(s=0;s<d.length;s++)l=d[s],r=t.code.indexOf(l.id),-1==r?(m.values.push(l.value),r=f&&f.titles?(r=f.searchAcross(g,l.id))?r[f.titles.id]:"":l.id[f.id],m.labels.push(r),m.code.push(l.id)):m.values[r]=l.value}else for(s=0;s<d.length;s++)l=d[s],m.values.push(l.value),r=f&&f.titles?(r=f.searchAcross(g,l.id))?r[f.titles.id]:
"":""+l.id,m.labels.push(r),m.code.push(l.id);e==Tee.CircularGauge&&h.setValue(h.data.values[0]);if(this.onnewseries)this.onnewseries(this,h);return h};c.defaultStyle=null;c.animateChanges=!1;c.setSeriesStyle=function(a){if(a&&""!==a&&"auto"!==a){var b=this.series,c,d;this.defaultStyle=d="string"===typeof a?eval(a):a;for(var f=0;f<b.items.length;f++)c=b.items[f].data,a=new d,a.setChart(a,this),a.format.fill=b.items[f].format.fill,a.data=c,b.items[f]=a;this.draw()}else this.defaultStyle=null};c.fill=
function(a,b,c){this.fillQuery(this.engine.query(a,b),a,b,c)};c.fillQuery=function(a,b,d,f){var g,e,h,m=c.series.items;c.series.items=[];if(a){for(g=0;g<a.length;g++){e=a[g];h=e.metric;this.newSeries(h,e).onclick=c.engine._onclickseries;if(""===c.title.text||"undefined"===typeof c.title.text)c.title.text=h.dimension.title;d instanceof Array||(c.legend.title.text=h.title+"\n"+h.measure,c.legend.title.format.font.textAlign="right");(e=b instanceof Array?b[0]:b)&&e!=h.dataset&&(c.axes.bottom.title.text=
e.datetime?e.title+" "+e.dateKeys[e.datetime.selected]:e.title)}0<a.length&&(c.axes.left.title.text=a[0].metric.title)}a=this.sort;""!==a.sortBy&&this.sortData(a.sortBy,"ascending"===a.order);""!==a.series&&this.sortSeries("ascending"==a.series);if(c.animateChanges&&m.length==c.series.items.length){a=c.series.items[0];var l=a.data.values;if(m[0].prototype==a.prototype&&m[0].data.values.length==l.length){var r=l.slice(0),s;a=new Tee.Animation(c,function(a){for(var b=0;b<l.length;b++)s=m[0].data.values[b],
l[b]=s+(r[b]-s)*a});b=c.axes.left.automatic;c.axes.left.automatic=!1;a.duration=150;a.animate();c.axes.left.automatic=b}}f||c.draw()};this.applyStyle(c,0);c.animateClick=function(){g.animateHover(c)};this.onclickseries=null;this._onclickseries=function(a,b){var c=a.chart;c.onclickseries&&(c.animateClick(),c.onclickseries(a,b))};c.setSeriesPalette=function(a,b){var c=a.palette,d=a.count(),f=a.data.code,g;c.colors=Array(d);for(var e=0;e<d;e++)g=f[e],b.isSelected(g)||(c.colors[e]="silver")};c.sortData=
function(a,c){var d,f=this.series.count(),g=this.series.items[0];if(0<f){if(1<f&&"values"==a){var f=g.data.values.length,e=this.series.items;d=Array(f);for(g=0;g<f;g++)d[g]=g;d.sort(function(a,d){var f=b(e,a),g=b(e,d);return c?f-g:g-f})}else d=this.series.items[0].doSort(a,c);this.series.each(function(a){for(var b={values:[],labels:[],code:[]},c=a.data,f,g=0;g<c.values.length;g++)f=d[g],b.values.push(c.values[f]),b.labels.push(c.labels[f]),b.code.push(c.code[f]);a.data=b})}};c.sortSeries=function(a){var b=
this.series.items,c=b.length;if(!(2>c)){var d=Array(c),f,g,e=a?-1:1,m=a?1:-1;for(a=0;a<c;a++)d[a]=a;d.sort(function(a,c){f=b[a].title.toLowerCase();g=b[c].title.toLowerCase();return f<g?e:f==g?0:m});var l=Array(c);for(a=0;a<c;a++)l[a]=b[d[a]];this.series.items=l}};c.groupOther=function(a){this.series.each(function(b){var c=Engine.groupOther(b.data,a,"Other");-1<c&&(b.data.code[c]=null,b.data.code.splice(0,c))})};c.totalPoints=function(){var a=0;this.series.each(function(b){a+=b.data.values.length});
return a};c.sort={sortBy:"",order:"descending",series:"ascending"};c.setPositionPercent=function(a,b,c,d){var f=self.innerHeight?self.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body?document.body.clientHeight:0,g=self.innerHeight?self.innerWidth:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientWidth:document.body?document.body.clientWidth:0,e=this.canvas;c=.01*c*g|0;d=.01*
d*f|0;e.style.position="absolute";e.style.left=a*g*.01+"px";e.style.top=b*f*.01+"px";e.style.width=c+"px";e.style.height=d+"px";e.setAttribute("width",c);e.setAttribute("height",d);this.bounds.width=c;this.bounds.height=d;this.draw()};if(Tee.SeriesAnimation){d=c.animation=new Tee.SeriesAnimation(c);d.kind="zoomin";d.duration=300;var f=new Tee.FadeAnimation(c);f.fade.series=!0;d.items.push(f)}return c}};Tee.Data.Metric=function(v,t,e){this.name=e;this.title=t||e;this.dimension=v;var a=(this.dataset=
v.dataset).engine;this.measure="sum";this.initDims=function(){var b,c=a.datasets.length,d,g,f,e,q=this.dimension;this.allDims=[];for(b=0;b<c;b++)for(g=a.datasets[b].dimensions,f=g.length,d=0;d<f;d++)e=g[d],q!=e&&!q.hasParent(e)&&e.anySelected()&&(e._link=e.dataset==q.dataset?null:q.getLinksTo(e),this.allDims.push(e))};this.consider=function(a){var c,d=this.allDims.length,g,f;for(c=0;c<d;c++){g=this.allDims[c];if(g._link){f=a;for(var e=0;e<g._link.length;e++)f=g.search(g._link[e],f);f&&g.id&&(f=f[g.id])}else f=
a[g.field];if("undefined"===typeof f||null===f)return!1;g.datetime&&(f=g.datePart(f));if(!g.inSelected(f))return!1}return!0}};Tee.Data.Dimension=function(v,t,e){this.engine=this.parent=this.dataset=null;this.subDimensions=[];this.field=t;this.id=e;this.title=v||t;this.nulls=!0;this.hasID="undefined"!==typeof e&&null!==e&&""!==e;this.metrics=[];this.links=[];this.select=this.selected=null;this.selectedInclude=!0;this.dateKeys={c:"Century",x:"Decade",y:"Year",m:"Month",w:"Weekday",d:"Day"};this.addDimension=
function(a,b,c){return this.addSubDimension(this,a,b,c)};this.addSubDimension=function(a,b,c,d){b=new Tee.Data.Dimension(b,c,d);b.engine=this.engine;if(b.parent=a)b.dataset=a.dataset,b.dataset&&(b.index=b.dataset.dimensions.push(b)),a.subDimensions.push(b);return b};this.addMetric=function(a,b,c){a=new Tee.Data.Metric(this,a,b);c&&(a.measure=c);this.metrics.push(a);return a};this.addLink=function(a,b,c){a={field:a,dimension:b,datasetField:c,parent:this};this.links.push(a);return a};this.hasParent=
function(a){for(var b=this.parent;b;){if(b==a)return!0;b=b.parent}return!1};this.inSelected=function(a){return this.select?this.select(a):this.selected instanceof Array?this.selectedInclude?-1!=this.selected.indexOf(a):-1==this.selected.indexOf(a):this.selectedInclude?this.selected==a:this.selected!=a};this.get=function(a){var b=this.id,c,d=this.datetime,e=this;this.traverse(function(f){d&&(f=e.datePart(f));return a==(b?f[b]:f)?(c=f,!1):!0});return c};this.datePart=function(a){var b=this.datetime,
c=b.selected;if("string"==typeof a){var d=a.match(/(\d+)/g);if("y"==c)return d[b.yearField||2];if("m"==c)return d[b.monthField||0];if("x"==c)return 10*(parseInt(d[2],10)/10|0);if("d"==c)return d[b.dayField||1];if("w"==c)return(new Date(a)).getDay()}else if(a instanceof Date){if("y"==c)return a.getFullYear();if("m"==c)return a.getMonth()+1;if("x"==c)return 10*(a.getFullYear()/10|0);if("d"==c)return a.getDate();if("w"==c)return a.getDay()}return a};this.getValues=function(){var a=[],b=this.field,c=
this.id,d=this;this.traverse(function(e){c&&(e=b?e[b]:e[c]);d.datetime&&(e=d.datePart(e));-1==a.indexOf(e)&&a.push(e);return!0});return a};this.getIds=function(){var a=[],b,c=this.id,d=this.field,e=this;(this.parent?this.parent:this).traverse(function(f){b=c?f[c]:d?f[d]:f;e.datetime&&(b=e.datePart(b));(e.nulls||b)&&-1==a.indexOf(b)&&a.push(b);return!0});return a};this.isSelected=function(a){return this.select?this.select(a):this.selected?this.inSelected(a):!0};this.anySelected=function(){if(this.select)return!0;
var a=this.selected;if(null!==a&&"undefined"!=typeof a)if(a instanceof Array)for(var b=0;b<a.length;b++){if(a[b])return!0}else return!0;return!1};this.toggleSelected=function(a,b){this.selected||(this.selected=[]);var c=a.data.code[b],d=this.selected.indexOf(c);-1===d?this.selected.push(c):(this.selected.splice(d,1),0===this.selected.length&&(this.selected=null));a.chart.setSeriesPalette(a,this)};this.traverse=function(a){function b(d,e){var k,q;k=c[e];q=k.anySelected();var n=k.field?d[k.field]:d,
p=k.parent?d:n;if(!q||k.isSelected(k.id?p[k.id]:p))if(k.data=p,n instanceof Array)if(q=n.length,0<e)for(k=0;k<q;k++){if(!b(n[k],e-1))return!1}else for(k=0;k<q;k++){if(!a(n[k],k))return!1}else if(0<e){a:if(n&&"object"===typeof n){var t=Object.keys(n),u=t.length,h=c[0],m=h.anySelected();for(k=0;k<u;k++)if(p=t[k],!m||h.isSelected(p))if(q=n[p],h.data=q,!a(q,p)){n=!1;break a}n=!0}else n=a(n,void 0);if(!n)return!1}else if(!a(p))return!1;return!0}var c=[],d=this;do c.push(d);while(d=d.parent);(d=this.dataset.object)&&
b(d,c.length-1)};this.searchAcross=function(a,b){for(var c=b,d=this,e=0;e<a.length;e++)c=d.search(a[e],c,0<e),e<a.length-1&&(d=a[e+1].parent,a[e+1].searchDimension=d);c&&this.engine.cache&&(b.cache||(b.cache=[]),b.cache[this.index]||(b.cache[this.index]=c));return c};this.search=function(a,b,c){if(b.cache&&b.cache[this.index])return b.cache[this.index];var d=null,e,f,k=a.search,q=c?a.field:a.datasetField;c=c?a.datasetField:a.field;var n=c instanceof Array;if(n)for(e=[],f=0;f<c.length;f++)e.push(b[c[f]]);
else e=b[c];a=a.searchDimension||a.dimension;do if(a.traverse(function(a){if(k){if(k(a,b))return d=a,!1}else if(n){var c=!0;for(f=0;f<e.length;f++)if(a[q[f]]!==e[f]){c=!1;break}if(c)return d=a,!1}else if(a[q]==e)return d=a,!1;return!0}),d){if(a.dataset!==this.dataset)return d;if(a!==this)if(a.parent)a=a.parent,d=a.data;else break}else break;while(a!==this);return d?this.id?d:d[this.field]:null};this.getLinksTo=function(a){if(a&&a!=this.dataset&&a.dataset!=this.dataset){var b=[],c=w(a,this,b);c||(c=
w(this,a,b));return c?b:null}return[{field:null,dimension:a,datasetField:null,parent:this}]}}}).call(this);
