(()=>{"use strict";var t={458:(t,e,a)=>{var s=a(751),r=a(641);const n={id:"app",class:"d-flex flex-column min-vh-100"},i={class:"navbar navbar-light bg-white sticky-top shadow"},l={class:"container justify-content-between text-center py-2"},c={class:"collapse navbar-collapse",id:"navbarNav"},o={class:"ms-auto"},u={class:"container mt-4 position-relative flex-grow-1"};function d(t,e,a,s,d,p){const h=(0,r.g2)("router-link"),m=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",n,[(0,r.Lk)("nav",i,[(0,r.Lk)("div",l,[e[2]||(e[2]=(0,r.Fv)('<div class="d-flex align-items-center"><img src="/logo.png" alt="UPick Logo" width="60" height="60" class="me-3"><a class="navbar-brand fs-2 fw-bold text-primary m-0" href="#">UPick</a></div><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>',2)),(0,r.Lk)("div",c,[(0,r.Lk)("div",o,[(0,r.bF)(h,{to:"/",class:"btn btn-outline-primary me-2"},{default:(0,r.k6)((()=>e[0]||(e[0]=[(0,r.eW)("Manage Restaurants")]))),_:1}),(0,r.bF)(h,{to:"/tournament",class:"btn btn-outline-success"},{default:(0,r.k6)((()=>e[1]||(e[1]=[(0,r.eW)("Tournament")]))),_:1})])])])]),e[3]||(e[3]=(0,r.Lk)("div",{class:"background-shapes"},[(0,r.Lk)("div",{class:"shape shape-1"}),(0,r.Lk)("div",{class:"shape shape-2"}),(0,r.Lk)("div",{class:"shape shape-3"})],-1)),(0,r.Lk)("div",u,[(0,r.bF)(m)]),e[4]||(e[4]=(0,r.Lk)("footer",{class:"bg-primary text-white text-center py-3 mt-auto"},[(0,r.Lk)("p",{class:"mb-0"},"© 2025 UPick. All rights reserved.")],-1))])}const p={class:"d-flex justify-content-center mb-4 flex-lg-row flex-column"},h={key:0,class:"text-center py-5"},m={key:1,class:"restaurant-grid"},b={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"},v={key:2,class:"mt-5"},y={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"},g={key:3,class:"text-center py-5 bg-white rounded shadow-sm"};function k(t,e,a,n,i,l){const c=(0,r.g2)("RestaurantCard"),o=(0,r.g2)("DisabledRestaurantCard");return(0,r.uX)(),(0,r.CE)("div",null,[e[10]||(e[10]=(0,r.Lk)("h1",{class:"text-primary mb-4 text-center"},"Find Your Next Meal",-1)),(0,r.Lk)("div",p,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.searchLocation=t),type:"text",class:"form-control me-2",placeholder:"Enter a location",style:{"max-width":"300px"}},null,512),[[s.Jo,i.searchLocation]]),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.priceFilter=t),class:"form-select me-2",style:{"max-width":"150px"}},e[4]||(e[4]=[(0,r.Fv)('<option value="" data-v-9c75ac7a>Any Price</option><option value="1" data-v-9c75ac7a>$</option><option value="2" data-v-9c75ac7a>$$</option><option value="3" data-v-9c75ac7a>$$$</option><option value="4" data-v-9c75ac7a>$$$$</option>',5)]),512),[[s.u1,i.priceFilter]]),(0,r.Lk)("button",{class:"btn btn-primary me-2 px-4 py-2 rounded-pill",onClick:e[2]||(e[2]=(...t)=>l.fetchNearbyRestaurants&&l.fetchNearbyRestaurants(...t))},e[5]||(e[5]=[(0,r.Lk)("i",{class:"bi bi-search me-2"},null,-1),(0,r.eW)("Find Restaurants ")])),(0,r.Lk)("button",{class:"btn btn-outline-secondary px-4 py-2 rounded-pill",onClick:e[3]||(e[3]=(...t)=>l.clearDatabase&&l.clearDatabase(...t))},e[6]||(e[6]=[(0,r.Lk)("i",{class:"bi bi-trash me-2"},null,-1),(0,r.eW)("Clear List ")]))]),i.loading?((0,r.uX)(),(0,r.CE)("div",h,e[7]||(e[7]=[(0,r.Lk)("div",{class:"spinner-border text-primary",role:"status"},[(0,r.Lk)("span",{class:"visually-hidden"},"Loading...")],-1),(0,r.Lk)("p",{class:"mt-3"},"Finding restaurants near you...",-1)]))):i.restaurants.length?((0,r.uX)(),(0,r.CE)("div",m,[(0,r.Lk)("div",b,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.restaurants,(t=>((0,r.uX)(),(0,r.Wv)(c,{key:t.place_id,restaurant:t,onDisable:l.disableRestaurant},null,8,["restaurant","onDisable"])))),128))])])):(0,r.Q3)("",!0),i.disabledRestaurants.length?((0,r.uX)(),(0,r.CE)("div",v,[e[8]||(e[8]=(0,r.Lk)("h2",{class:"text-secondary mb-4 text-center"},"Disabled Restaurants",-1)),(0,r.Lk)("div",y,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.disabledRestaurants,(t=>((0,r.uX)(),(0,r.Wv)(o,{key:t.place_id,restaurant:t},null,8,["restaurant"])))),128))])])):((0,r.uX)(),(0,r.CE)("div",g,e[9]||(e[9]=[(0,r.Lk)("i",{class:"bi bi-info-circle fs-1 text-secondary"},null,-1),(0,r.Lk)("p",{class:"mt-3"},'No restaurants found. Click "Find Restaurants" to discover places near you!',-1)])))])}var f=a(143);const w=new f.Ay("RestaurantDB");w.version(1).stores({restaurants:"&place_id, name, rating, address, photoUrl, price_level, disabled, wins, losses"});const L=w;class x{constructor(){this.Place=null,this.init()}async init(){const{Place:t}=await google.maps.importLibrary("places");this.Place=t}async searchRestaurants(t){if(!this.Place)throw new Error("Google Places API not initialized.");const{places:e}=await this.Place.searchByText({fields:["displayName","formattedAddress","id","photos","rating","priceLevel","websiteURI","primaryTypeDisplayName"],textQuery:`Restaurants in ${t}`,includedType:"restaurant"});return e}}const R=new x;var _=a(33);const C={class:"card h-100 restaurant-card shadow-sm"},E={class:"card-body"},X={class:"d-flex flex-row"},M={class:"restaurant-image-container"},$=["src","alt"],F={key:1,class:"restaurant-placeholder d-flex align-items-center justify-content-center"},A={class:"flex-grow-1"},I={class:"d-flex justify-content-between align-items-start mb-2"},P={class:"card-title mb-0"},N={class:"badge bg-success rounded-pill"},T={class:"card-text text-muted small mb-2"},D={class:"d-flex justify-content-between align-items-center actions"},U={class:"badge bg-secondary"},j={key:0,class:"small"},O={key:1,class:"small text-muted"},W={class:"card-footer"},S={class:"d-flex flex-row gap-2 flex-lg-column flex-sm-row justify-content-between"};function K(t,e,a,s,n,i){return(0,r.uX)(),(0,r.CE)("div",C,[(0,r.Lk)("div",E,[(0,r.Lk)("div",X,[(0,r.Lk)("div",M,[a.restaurant.photoUrl?((0,r.uX)(),(0,r.CE)("img",{key:0,src:a.restaurant.photoUrl,alt:a.restaurant.name,class:"restaurant-image shadow"},null,8,$)):((0,r.uX)(),(0,r.CE)("div",F,e[1]||(e[1]=[(0,r.Lk)("i",{class:"bi bi-image text-secondary",style:{"font-size":"2rem"}},null,-1)])))]),(0,r.Lk)("div",A,[(0,r.Lk)("div",I,[(0,r.Lk)("h5",P,(0,_.v_)(a.restaurant.name),1),(0,r.Lk)("span",N,(0,_.v_)(a.restaurant.rating)+" ★",1)]),(0,r.Lk)("p",T,(0,_.v_)(a.restaurant.address),1),(0,r.Lk)("div",D,[(0,r.Lk)("small",U,(0,_.v_)(a.restaurant.type),1),a.restaurant.price_level?((0,r.uX)(),(0,r.CE)("span",j,(0,_.v_)(i.getPriceLevel(a.restaurant.price_level)),1)):((0,r.uX)(),(0,r.CE)("span",O,"Price N/A")),(0,r.RG)(t.$slots,"stats",{},void 0,!0)])])])]),(0,r.Lk)("div",W,[(0,r.Lk)("div",S,[(0,r.RG)(t.$slots,"action",{},void 0,!0),(0,r.Lk)("button",{class:"btn btn-danger btn-sm mt-2 mt-sm-0",onClick:e[0]||(e[0]=(...t)=>i.disable&&i.disable(...t))}," Disable ")])])])}const V={methods:{disable(){confirm(`Are you sure you want to disable ${this.restaurant.name}?`)&&this.$emit("disable",this.restaurant)},getPriceLevel(t){switch(t){case"INEXPENSIVE":return"$";case"MODERATE":return"$$";case"EXPENSIVE":return"$$$";case"VERY_EXPENSIVE":return"$$$$";case"CHEAP":return"$";default:return"N/A"}}},props:{restaurant:{type:Object,required:!0}}};var z=a(262);const Q=(0,z.A)(V,[["render",K],["__scopeId","data-v-7e29fada"]]),q=Q,B={class:"card h-100 restaurant-card shadow-sm"},G={class:"restaurant-image-container"},H=["src","alt"],Y={key:1,class:"restaurant-placeholder d-flex align-items-center justify-content-center"},J={class:"card-body"},Z={class:"d-flex justify-content-between align-items-start mb-2"},tt={class:"card-title mb-0"},et={class:"card-text text-muted small mb-2"};function at(t,e,a,s,n,i){return(0,r.uX)(),(0,r.CE)("div",B,[(0,r.Lk)("div",G,[a.restaurant.photoUrl?((0,r.uX)(),(0,r.CE)("img",{key:0,src:a.restaurant.photoUrl,alt:a.restaurant.name,class:"card-img-top restaurant-image"},null,8,H)):((0,r.uX)(),(0,r.CE)("div",Y,e[0]||(e[0]=[(0,r.Lk)("i",{class:"bi bi-image text-secondary",style:{"font-size":"2rem"}},null,-1)])))]),(0,r.Lk)("div",J,[(0,r.Lk)("div",Z,[(0,r.Lk)("h5",tt,(0,_.v_)(a.restaurant.name),1),e[1]||(e[1]=(0,r.Lk)("span",{class:"badge bg-secondary rounded-pill"},"Disabled",-1))]),(0,r.Lk)("p",et,(0,_.v_)(a.restaurant.address),1)])])}const st={props:{restaurant:{type:Object,required:!0}}},rt=(0,z.A)(st,[["render",at],["__scopeId","data-v-aa9c7268"]]),nt=rt,it={components:{RestaurantCard:q,DisabledRestaurantCard:nt},data(){return{restaurants:[],disabledRestaurants:[],loading:!1,searchLocation:"College Station, TX",priceFilter:""}},async created(){await this.loadRestaurants()},methods:{async loadRestaurants(){const t=await L.restaurants.toArray();this.restaurants=t.filter((t=>!t.disabled)),this.disabledRestaurants=t.filter((t=>t.disabled))},async fetchNearbyRestaurants(){this.loading=!0;const t=await R.searchRestaurants(this.searchLocation),e=t.filter((t=>{const e=this.restaurants.some((e=>e.place_id===t.id)),a=!this.priceFilter||t.priceLevel===parseInt(this.priceFilter);return!e&&a})).map((t=>{let e=t.photos[0]?.getURI({maxWidth:400,maxHeight:300});return{place_id:t.id,name:t.displayName||"Unknown",rating:t.rating||"N/A",address:t.formattedAddress||"Unknown",photoUrl:e,price_level:t.priceLevel||0,type:t.primaryTypeDisplayName||"Unknown",disabled:!1}}));await Promise.all(e.map((t=>L.restaurants.add(t).catch((e=>{"ConstraintError"===e.name?console.warn(`Duplicate restaurant skipped: ${t.place_id}`):console.error("Error adding restaurant:",e)}))))),await this.loadRestaurants(),this.loading=!1},async clearDatabase(){try{await L.restaurants.clear(),this.restaurants=[],console.log("Database cleared successfully.")}catch(t){console.error("Error clearing the database:",t)}},async disableRestaurant(t){const e=await L.restaurants.update(t.place_id,{disabled:!0});0!==e?(this.restaurants=this.restaurants.filter((e=>e.place_id!==t.place_id)),this.disabledRestaurants.push({...t,disabled:!0})):console.error("Update failed: No record found with place_id:",t.place_id)}}},lt=(0,z.A)(it,[["render",k],["__scopeId","data-v-9c75ac7a"]]),ct=lt,ot=(0,r.pM)({name:"App",components:{FetchRestaurants:ct}}),ut=(0,z.A)(ot,[["render",d]]),dt=ut;var pt=a(220);const ht={key:1,class:"text-center py-5 bg-white rounded shadow-sm"};function mt(t,e,a,s,n,i){const l=(0,r.g2)("Tournament");return(0,r.uX)(),(0,r.CE)("div",null,[e[1]||(e[1]=(0,r.Lk)("h1",{class:"text-primary mb-4 text-center"},"Tournament",-1)),n.restaurants.length?((0,r.uX)(),(0,r.Wv)(l,{key:0,restaurants:n.restaurants,onTournamentFinished:i.handleTournamentFinished},null,8,["restaurants","onTournamentFinished"])):((0,r.uX)(),(0,r.CE)("div",ht,e[0]||(e[0]=[(0,r.Lk)("i",{class:"bi bi-info-circle fs-1 text-secondary"},null,-1),(0,r.Lk)("p",{class:"mt-3"},"No restaurants available for the tournament. Please add some restaurants first!",-1)])))])}const bt={class:"text-center text-muted"},vt={class:"text-center text-muted"},yt={key:0,class:"text-center py-5"},gt={key:0,class:"text-center py-5"},kt={class:"text-success"},ft={class:"text-muted"},wt=["href"],Lt={class:"matchup gap-2"},xt=["onClick","disabled"],Rt={class:"text-muted"},_t={key:0,class:"text-center mt-4"},Ct={class:"text-success"},Et={key:2,class:"text-center py-5 bg-white rounded shadow-sm"};function Xt(t,e,a,n,i,l){const c=(0,r.g2)("RestaurantCard");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",null,[(0,r.Lk)("p",bt,[(0,r.Lk)("strong",null,(0,_.v_)(i.restaurants.length),1),e[1]||(e[1]=(0,r.eW)(" contestants still in the running! "))]),(0,r.Lk)("p",vt,[(0,r.Lk)("strong",null,"Round "+(0,_.v_)(i.round),1)]),i.loading?((0,r.uX)(),(0,r.CE)("div",yt,e[2]||(e[2]=[(0,r.Lk)("div",{class:"spinner-border text-primary",role:"status"},[(0,r.Lk)("span",{class:"visually-hidden"},"Loading...")],-1),(0,r.Lk)("p",{class:"mt-3"},"Loading restaurants for the tournament...",-1)]))):(0,r.Q3)("",!0),(0,r.bF)(s.eB,{name:"fade"},{default:(0,r.k6)((()=>[1!==i.restaurants.length||i.loading?i.currentMatchup?((0,r.uX)(),(0,r.CE)("div",{key:l.currentMatchupKey},[(0,r.Lk)("div",Lt,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.currentMatchup,((t,e)=>((0,r.uX)(),(0,r.Wv)(c,{key:e,restaurant:t,class:(0,_.C4)(l.getMatchupClass(t,e)),onDisable:l.disableRestaurant},{action:(0,r.k6)((()=>[(0,r.Lk)("button",{class:"btn btn-primary btn-sm",onClick:e=>l.resolveMatchup(t),disabled:i.winnerSelected}," Choose Me ",8,xt)])),stats:(0,r.k6)((()=>[(0,r.Lk)("p",Rt,"W: "+(0,_.v_)(t.wins)+" | L: "+(0,_.v_)(t.losses),1)])),_:2},1032,["restaurant","class","onDisable"])))),128))]),i.winnerSelected?((0,r.uX)(),(0,r.CE)("div",_t,[(0,r.Lk)("h2",Ct,"Winner: "+(0,_.v_)(i.winner.name),1),(0,r.Lk)("button",{class:"btn btn-link text-muted",onClick:e[0]||(e[0]=(...t)=>l.nextMatchup&&l.nextMatchup(...t))},"Next Matchup")])):(0,r.Q3)("",!0)])):((0,r.uX)(),(0,r.CE)("div",Et,e[4]||(e[4]=[(0,r.Lk)("i",{class:"bi bi-info-circle fs-1 text-secondary"},null,-1),(0,r.Lk)("p",{class:"mt-3"},"No restaurants available for the tournament. Please add some restaurants first!",-1)]))):((0,r.uX)(),(0,r.CE)("div",gt,[(0,r.Lk)("h2",kt,"🎉 Tournament Winner: "+(0,_.v_)(i.restaurants[0].name)+" 🎉",1),e[3]||(e[3]=(0,r.Lk)("p",{class:"text-muted"},"Congratulations to the champion!",-1)),(0,r.bF)(c,{restaurant:i.restaurants[0]},{stats:(0,r.k6)((()=>[(0,r.Lk)("p",ft,"Wins: "+(0,_.v_)(i.restaurants[0].wins)+" | Losses: "+(0,_.v_)(i.restaurants[0].losses),1)])),action:(0,r.k6)((()=>[(0,r.Lk)("a",{href:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(i.restaurants[0].address),target:"_blank",class:"btn btn-primary btn-sm"}," View Address ",8,wt)])),_:1},8,["restaurant"])]))])),_:1})]),e[5]||(e[5]=(0,r.Lk)("div",{class:"tournament-container"},[(0,r.Lk)("div",{class:"restaurant-card"}),(0,r.Lk)("div",{class:"restaurant-card"})],-1))],64)}const Mt={components:{RestaurantCard:q},data(){return{restaurants:[],currentMatchup:null,winner:null,loading:!0,winnerSelected:!1,usedInRound:[],round:1,currentMatchupKey:0}},computed:{currentMatchupKey(){return`${this.round}-${this.currentMatchup?.map((t=>t.name)).join("-")}`}},async created(){await this.loadRestaurants(),this.restaurants=this.restaurants.sort((()=>Math.random()-.5)),this.restaurants=this.restaurants.slice(0,32),this.nextMatchup()},methods:{async loadRestaurants(){const t=await L.restaurants.toArray();this.restaurants=t.filter((t=>!t.disabled)).map((t=>({...t,wins:t.wins||0,losses:t.losses||0}))),this.loading=!1},nextMatchup(){if(this.restaurants.length<2)return void(this.currentMatchup=null);this.usedInRound.length>=this.restaurants.length&&(this.usedInRound=[],this.round++);const t=this.restaurants.filter((t=>!this.usedInRound.includes(t)));if(t.length<2)return this.usedInRound=[],this.round++,void this.nextMatchup();const e=this.getRandomIndices(t.length,2);this.currentMatchup=[t[e[0]],t[e[1]]],this.usedInRound.push(...this.currentMatchup),this.winnerSelected=!1,this.winner=null,this.currentMatchupKey++},getRandomIndices(t,e){const a=new Set;while(a.size<e)a.add(Math.floor(Math.random()*t));return Array.from(a)},resolveMatchup(t){this.winner=t,this.winnerSelected=!0;const e=this.currentMatchup.find((e=>e!==t));t.wins++,e.losses++,console.log("Adding win to restaurant:",t),L.restaurants.put({...t}),L.restaurants.put({...e}),setTimeout((()=>{this.restaurants=this.restaurants.filter((t=>t!==e)),setTimeout((()=>{this.nextMatchup()}),500)}),500)},getMatchupClass(t,e){return this.winnerSelected?t===this.winner?0===e?"winner-right":"winner-left":"loser":""},async disableRestaurant(t){t.disabled=!0,await L.restaurants.put(t),this.restaurants=this.restaurants.filter((t=>!t.disabled)),this.nextMatchup()}}},$t=(0,z.A)(Mt,[["render",Xt],["__scopeId","data-v-8ba23dc2"]]),Ft=$t,At={components:{Tournament:Ft},data(){return{restaurants:[]}},async created(){await this.loadRestaurants()},methods:{async loadRestaurants(){const t=await L.restaurants.toArray();this.restaurants=t.filter((t=>!t.disabled))},handleTournamentFinished(t){alert(`The winner is: ${t.name}`)}}},It=(0,z.A)(At,[["render",mt],["__scopeId","data-v-5de825c4"]]),Pt=It,Nt=[{path:"/",name:"FetchRestaurants",component:ct},{path:"/tournament",name:"Tournament",component:Pt}],Tt=(0,pt.aE)({history:(0,pt.LA)(),routes:Nt}),Dt=Tt;a(736);const Ut=(0,s.Ef)(dt);Ut.use(Dt),Ut.config.globalProperties.$db=L,Ut.mount("#app")}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,(()=>{var t=[];a.O=(e,s,r,n)=>{if(!s){var i=1/0;for(u=0;u<t.length;u++){for(var[s,r,n]=t[u],l=!0,c=0;c<s.length;c++)(!1&n||i>=n)&&Object.keys(a.O).every((t=>a.O[t](s[c])))?s.splice(c--,1):(l=!1,n<i&&(i=n));if(l){t.splice(u--,1);var o=r();void 0!==o&&(e=o)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[s,r,n]}})(),(()=>{a.d=(t,e)=>{for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={524:0};a.O.j=e=>0===t[e];var e=(e,s)=>{var r,n,[i,l,c]=s,o=0;if(i.some((e=>0!==t[e]))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(c)var u=c(a)}for(e&&e(s);o<i.length;o++)n=i[o],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},s=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})();var s=a.O(void 0,[504],(()=>a(458)));s=a.O(s)})();
//# sourceMappingURL=app.c17a5478.js.map