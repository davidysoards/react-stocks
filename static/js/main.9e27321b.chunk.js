(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/react-stocks-land.e427e3e9.svg"},19:function(e,a,t){e.exports=t(48)},28:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(12),l=t.n(c),o=(t(25),t(2)),s=t.n(o),u=t(3),m=t(13),i=t(14),d=t(17),h=t(15),p=t(18),f=(t(28),t(4)),E=t.n(f),v={};var _=function(){var e;return function(){var a=Object(u.a)(s.a.mark(function a(t){var r,n;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&e.cancel(),e=E.a.CancelToken.source(),a.prev=2,!v[t]){a.next=5;break}return a.abrupt("return",v[t]);case 5:return a.next=7,E()(t,{cancelToken:e.token});case 7:return r=a.sent,n=r.data,v[t]=n,a.abrupt("return",n);case 13:a.prev=13,a.t0=a.catch(2),E.a.isCancel(a.t0)?console.log("Request canceled",a.t0.message):console.log("Something went wrong: ",a.t0);case 16:case"end":return a.stop()}},a,null,[[2,13]])}));return function(e){return a.apply(this,arguments)}}()}(),g=t(16),b=t.n(g),k=function(e){var a=e.clearSearch,t=e.cursor,r=e.handleSearchChange,c=e.handleQuoteChange,l=e.handleSearchKeyDowns,o=e.searchValue,s=e.searchResults;return n.a.createElement("form",{className:"searchForm"},n.a.createElement("div",{className:"searchForm__inputs"},n.a.createElement("input",{type:"text",className:"searchForm__text",placeholder:"Search by symbol or company name",value:o,onChange:function(e){return r(e)},onKeyDown:l}),""!==o&&n.a.createElement("button",{className:"searchForm__clear",onClick:function(e){e.preventDefault(),a()}},"clear")),null!=s&&""!==o&&n.a.createElement("div",{className:"searchForm__results"},s.map(function(e,a){var r=e.symbol,l=e.name;return n.a.createElement("ul",{className:t===a?"searchForm__result active":"searchForm__result",key:r,onClick:function(){c(r)}},n.a.createElement("li",{className:"searchForm__resultSymbol"},r),n.a.createElement("li",{className:"searchForm__resultName"},l))})))},y=function(e){var a=e.featuredStocks,t=e.upColor,r=e.downColor;return n.a.createElement("div",{className:"l-featured-container"},a.map(function(e){var a=e.day_change>=0?t:r;return n.a.createElement("div",{className:"l-featured-container__item",key:e.symbol},n.a.createElement("ul",{className:"featured-stock"},n.a.createElement("li",{className:"featured-stock__name"},e.name),n.a.createElement("li",{className:"featured-stock__price"},e.price),n.a.createElement("li",{className:"featured-stock__change",style:{color:a}},"".concat(e.day_change," (").concat(e.change_pct,"%)"))))}))},w=function(e){var a=e.quote,t=e.upColor,r=e.downColor,c=a.name,l=a.symbol,o=a.price,s=a.stock_exchange_long,u=a.day_change,m=a.change_pct,i=a.price_open,d=a.day_high,h=a.day_low,p=a.volume,f=a.volume_avg,E=a["52_week_high"],v=a["52_week_low"],_=u>=0?t:r;return n.a.createElement("div",{className:"l-quote-grid"},n.a.createElement("div",{className:"l-quote-grid__header"},n.a.createElement("ul",{className:"quote-header"},n.a.createElement("li",{className:"quote-header__name-and-symbol"},n.a.createElement("span",{className:"quote-header__name"},c),n.a.createElement("span",{className:"quote-header__symbol"},"(".concat(l,")"))),n.a.createElement("li",{className:"quote-header__exchange"},s),n.a.createElement("li",{className:"quote-header__price"},o),n.a.createElement("li",{className:"quote-header__change",style:{color:_}},"".concat(u," (").concat(m,")%")))),n.a.createElement("div",{className:"l-quote-grid__details"},n.a.createElement("table",{className:"quote-details-table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Open"),n.a.createElement("td",null,i)),n.a.createElement("tr",null,n.a.createElement("td",null,"Day's Range"),n.a.createElement("td",null,"".concat(h," - ").concat(d))),n.a.createElement("tr",null,n.a.createElement("td",null,"52 Week Range"),n.a.createElement("td",null,"".concat(v," - ").concat(E))),n.a.createElement("tr",null,n.a.createElement("td",null,"Volume"),n.a.createElement("td",null,p)),n.a.createElement("tr",null,n.a.createElement("td",null,"Avg. Volume"),n.a.createElement("td",null,f))))))},S=function(e){return n.a.createElement("table",{className:"favorites-table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"favorites-table__header",colSpan:3},"Favorites")),n.a.createElement("tr",{className:"favorites-table__labels"},n.a.createElement("td",null,"Symbol"),n.a.createElement("td",null,"Price"),n.a.createElement("td",null,"% Change")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("span",{className:"favorites-table__symbol"},"FB"),n.a.createElement("br",null),n.a.createElement("span",{className:"favorites-table__name"},"Facebook")),n.a.createElement("td",null,"161.89"),n.a.createElement("td",null,"+1.16")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("span",{className:"favorites-table__symbol"},"FB"),n.a.createElement("br",null),n.a.createElement("span",{className:"favorites-table__name"},"Facebook")),n.a.createElement("td",null,"161.89"),n.a.createElement("td",null,"+1.16"))))},N=function(e){function a(){var e,t;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).state={featuredStocks:[],favoriteStocks:[],quoteSymbol:"",quote:{},loading:!1,searchResults:null,searchValue:"",cursor:0},t.getFeaturedStocks=function(){var e=Object(u.a)(s.a.mark(function e(a){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getStockData(a);case 2:r=e.sent,t.setState({featuredStocks:r}),console.log(r);case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.handleQuoteChange=function(){var e=Object(u.a)(s.a.mark(function e(a){var r,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getStockData(a);case 2:r=e.sent,n=r[0],console.log(n),t.setState({quote:n,quoteSymbol:a}),t.clearSearch();case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.getStockData=function(){var e=Object(u.a)(s.a.mark(function e(a){var r,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.prev=1,e.next=4,E()("https://www.worldtradingdata.com/api/v1/stock?symbol=".concat(a,"&api_token=J5Kh3eJUGOQ7Qj1tTVSjIcm6azCpvbRd6roOoMk23TLVpudmFuKlMDjkQVUq"));case 4:return r=e.sent,n=r.data.data,t.setState({loading:!1}),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(1),console.log("Error fetching stock data",e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(a){return e.apply(this,arguments)}}(),t.search=function(){var e=Object(u.a)(s.a.mark(function e(a){var r,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_("https://www.worldtradingdata.com/api/v1/stock_search?search_term=".concat(a,"&search_by=symbol,name&limit=50&page=1&api_token=J5Kh3eJUGOQ7Qj1tTVSjIcm6azCpvbRd6roOoMk23TLVpudmFuKlMDjkQVUq"));case 3:r=e.sent,n=r.data,t.setState({searchResults:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("No search results");case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),t.handleSearchChange=function(e){document.addEventListener("click",function(e){e.target.closest(".searchForm")||t.clearSearch()}),t.search(e.target.value),t.setState({searchValue:e.target.value})},t.clearSearch=function(){t.setState({searchValue:"",cursor:0})},t.handleSearchKeyDowns=function(e){var a=t.state,r=a.cursor,n=a.searchResults;38===e.keyCode&&r>0?t.setState(function(e){return{cursor:e.cursor-1}}):40===e.keyCode&&r<n.length-1?t.setState(function(e){return{cursor:e.cursor+1}}):13===e.keyCode?(e.preventDefault(),t.handleQuoteChange(n[r].symbol)):27===e.keyCode&&t.clearSearch()},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getFeaturedStocks("^DJI,^SP400,^IXIC,^RUT"),this.handleQuoteChange("AAPL")}},{key:"render",value:function(){var e=this.state,a=e.cursor,t=e.featuredStocks,r=e.quoteSymbol,c=e.quote,l=e.searchValue,o=e.searchResults,s=c.day_change>=0?"#1ac567":"#ff333a";return n.a.createElement("div",{className:"l-site-container"},n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"l-header-grid"},n.a.createElement("div",{className:"l-header-grid__logo"},n.a.createElement("img",{src:b.a,alt:"react stocks logo",width:"300px"})),n.a.createElement("div",{className:"l-header-grid__search"},n.a.createElement(k,{clearSearch:this.clearSearch,cursor:a,searchValue:l,searchResults:o,handleSearchChange:this.handleSearchChange,handleQuoteChange:this.handleQuoteChange,handleSearchKeyDowns:this.handleSearchKeyDowns})))),n.a.createElement("section",{className:"featured"},n.a.createElement(y,{featuredStocks:t,upColor:"#1ac567",downColor:"#ff333a"})),n.a.createElement("main",{className:"main"},n.a.createElement("div",{className:"l-main-grid",style:{borderTop:"solid 1rem ".concat(s)}},n.a.createElement("div",{className:"l-main-grid__quote"},n.a.createElement(w,{quoteSymbol:r,quote:c,upColor:"#1ac567",downColor:"#ff333a"})),n.a.createElement("div",{className:"l-main-grid__favorites"},n.a.createElement(S,{upColor:"#1ac567",downColor:"#ff333a"})))),n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"l-footer-container"},"\xa9 2019 David Y. Soards")))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.9e27321b.chunk.js.map