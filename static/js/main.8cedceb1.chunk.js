(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{73:function(e,t,a){e.exports=a(86)},78:function(e,t,a){},79:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(9),l=a.n(s),c=(a(78),a(23)),r=a(29),i=(a(79),a(61)),m=a(68),u=a(36),p=a(126),h=a(127),f=a(131),d=a(128),E=a(124),v=a(63),k=a.n(v),g=a(133),b=Object(E.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}});function N(){var e,t=b(),a=o.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(m.a)(a,2),s=n[0],l=n[1],r=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(i.a)({},s,Object(u.a)({},e,t)))}};return o.a.createElement("div",{className:t.root},o.a.createElement(p.a,{position:"fixed"},o.a.createElement(h.a,null,o.a.createElement(f.a,{edge:"start",onClick:r("left",!0),className:t.menuButton,color:"inherit","aria-label":"open drawer"},o.a.createElement(k.a,null)),o.a.createElement(g.a,{open:s.left,onClose:r("left",!1)},(e="left",o.a.createElement("div",{className:"menu",onClick:r(e,!1),onKeyDown:r(e,!1)},o.a.createElement("div",{className:"head_menu"},o.a.createElement("p",null,"Pokedex")),o.a.createElement("div",{className:"menu_section"},o.a.createElement(c.b,{to:"/"},o.a.createElement("p",null,"Home"))),o.a.createElement("div",{className:"menu_section"},o.a.createElement(c.b,{to:"/about"},o.a.createElement("p",null,"About"))),o.a.createElement("div",{className:"menu_section"},o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/WilliaamKing/Pokedex",target:"__blank"},"Code"))),o.a.createElement("div",{className:"menu_section"},o.a.createElement("p",null,o.a.createElement("a",{href:"mailto:dimkas2001@icloud.com",target:"__blank"},"Contact")))))),o.a.createElement(d.a,{className:t.title,variant:"h6",noWrap:!0},"Pokedex"))))}function P(){return o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,"\xa9Project by Shmaliuk Dmitriy",o.a.createElement("br",null),"2019"))}function y(e){var t=e.children;return o.a.createElement("div",{className:"app"},o.a.createElement(N,null),o.a.createElement("div",null,t),o.a.createElement(P,null))}var _=a(27),w=Object(E.a)(function(e){return{link:{"text-decoration":"none"}}});function O(e){var t=e.name,a=e.front_default,n=e.id,s=w();return o.a.createElement(c.b,{to:"/pokemons/".concat(n,"/"),className:s.link},o.a.createElement("div",{className:"card"},o.a.createElement("div",null),o.a.createElement("div",{className:"img_of_card"},o.a.createElement("img",{src:a,alt:t})),o.a.createElement("div",{className:"text_of_card"},o.a.createElement("span",{className:"head_card"},t))))}O.defaultProps={name:"Name of pokemon",front_default:"",id:0};var C=a(49),j=a(8),x=function e(){var t=this;Object(C.a)(this,e),this.pokemons=new Array,this.showPokemons=new Array,this.pokemon=new Object,this.page=1,this.countOfPokemons=50,this.countOfCard=802,this.SetCountPokemons=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;t.pokemons=[],t.showPokemons=[],t.countOfPokemons=e;for(var a=1;a<=t.countOfPokemons;++a)fetch("https://pokeapi.co/api/v2/pokemon/".concat(a,"/")).then(function(e){return e.json()}).then(function(e){t.pokemons.push(e),t.showPokemons.push(e)})},this.SearchAsName=function(){var e=t.pokemons.filter(function(e){return e.name.indexOf(document.getElementById("search").value)>=0});t.showPokemons=e,""===document.getElementById("search").value&&(t.showPokemons=t.pokemons)},this.IncrementPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t.page=e>0?e:t.page},this.NextPage=function(){var e=t.page*t.countOfPokemons;for(t.pokemons=[],t.showPokemons=[],t.page++;e<t.page*t.countOfPokemons&&e<t.countOfCard;++e)fetch("https://pokeapi.co/api/v2/pokemon/".concat(e,"/")).then(function(e){return e.json()}).then(function(e){t.pokemons.push(e),t.showPokemons.push(e)})},this.BackPage=function(){t.pokemons=[],t.showPokemons=[],t.page--;for(var e=t.page*t.countOfPokemons-t.countOfPokemons;e<t.page*t.countOfPokemons&&e<t.countOfCard;++e)fetch("https://pokeapi.co/api/v2/pokemon/".concat(e,"/")).then(function(e){return e.json()}).then(function(e){t.pokemons.push(e),t.showPokemons.push(e)})},this.SettingPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t.page=e>0?e:1;var a=(t.page-1)*t.countOfPokemons;for(t.pokemons=[],t.showPokemons=[],console.log((t.page-1)*t.countOfPokemons),console.log(t.page*t.countOfPokemons);a<t.page*t.countOfPokemons&&a<=t.countOfCard;++a)fetch("https://pokeapi.co/api/v2/pokemon/".concat(a,"/")).then(function(e){return e.json()}).then(function(e){t.pokemons.push(e),t.showPokemons.push(e)})};for(var a=1;a<=this.countOfPokemons;++a)fetch("https://pokeapi.co/api/v2/pokemon/".concat(a,"/")).then(function(e){return e.json()}).then(function(e){t.pokemons.push(e),t.showPokemons.push(e)})};Object(j.h)(x,{pokemons:j.m,showPokemons:j.m,filterPokemons:j.m,page:j.m,countOfPokemons:j.m,SetCountPokemons:j.d,SearchAsName:j.d,SettingPage:j.d,NextPage:j.d,BackPage:j.d});var S=Object(n.createContext)(new x),A=Object(_.a)(function(e){var t=e.number,a=Object(n.useContext)(S);return o.a.createElement("div",{className:"section",onClick:function(){a.SettingPage(t)}},t)}),B=Object(_.a)(function(){var e=Object(n.useContext)(S);return o.a.createElement("div",{className:"pages_list"},e.page>1&&o.a.createElement("div",{className:"button",onClick:e.BackPage},"Back"),function(){var t=new Array;1!==e.page&&(t.push(o.a.createElement(A,{number:1})),t.push(o.a.createElement("div",{className:"section"},"...")));for(var a=e.page;a<e.page+10&&a<Math.ceil(e.countOfCard/e.countOfPokemons);++a)t.push(o.a.createElement(A,{number:a}));return e.page!=Math.ceil(e.countOfCard/e.countOfPokemons)&&t.push(o.a.createElement("div",{className:"section"},"...")),t.push(o.a.createElement(A,{number:Math.ceil(e.countOfCard/e.countOfPokemons)})),t}().map(function(e){return e}),e.page<Math.ceil(e.countOfCard/e.countOfPokemons)&&o.a.createElement("div",{className:"button",onClick:e.NextPage},"Next"))}),I=a(130),D=a(64),M=a.n(D),H=a(65),T=a.n(H);function W(e){var t=e.filterMethod;return o.a.createElement("div",{className:"filter"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Pokedex"),o.a.createElement("h4",null,"Filter")),o.a.createElement("form",{onChange:t},o.a.createElement("div",{className:"check"},o.a.createElement("div",{className:"check_min"},o.a.createElement("div",null,o.a.createElement("span",null,"Min HP: "),o.a.createElement("input",{type:"number",name:"hp",id:"hp"})),o.a.createElement("div",null,o.a.createElement("span",null,"Min Attack: "),o.a.createElement("input",{type:"number",name:"attack",id:"attack"})),o.a.createElement("div",null,o.a.createElement("span",null,"Min Speed: "),o.a.createElement("input",{type:"number",name:"speed",id:"speed"})),o.a.createElement("div",null,o.a.createElement("span",null,"Min Defense: "),o.a.createElement("input",{type:"number",name:"defense",id:"defense"}))),o.a.createElement("div",{className:"types"},o.a.createElement("h3",null,"Types"),o.a.createElement("div",{className:"checkBoxes"},["normal","flying","poison","ground","bug","fire","water","grass","figting","rock","ghost","steel","electric","psychic","ice","dragon","dark","fairy","shadow"].map(function(e){return o.a.createElement("div",null,o.a.createElement("input",{type:"checkbox",name:e,id:e}),o.a.createElement("span",null,e))}))))))}var F=Object(E.a)(function(e){return{filterIcon:{"&:hover":{fill:"red",cursor:"pointer"}},filterForm:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},closeIcon:{position:"absolute",left:"95%",top:"65px",fill:"#ffffff","&:hover":{fill:"red",cursor:"pointer"}}}}),G=Object(_.a)(function(){var e=F(),t=Object(n.useContext)(S);return o.a.createElement("div",{className:"searching_form"},o.a.createElement(I.a,{id:"search",fullWidth:!0,autocomplete:"off",placeholder:"Searching Pokemons",name:"search",onChange:t.SearchAsName}),o.a.createElement(M.a,{className:e.filterIcon,onClick:function(){document.getElementsByClassName("filter_form")[0].style.display="block"}}),o.a.createElement("div",{className:"filter_form"},o.a.createElement("div",{className:e.filterForm},o.a.createElement(T.a,{className:e.closeIcon,onClick:function(){document.getElementsByClassName("filter_form")[0].style.display="none"}}),o.a.createElement(W,null))))}),U=Object(_.a)(function(e){var t=Object(n.useContext)(S);return o.a.createElement("div",{className:"start"},o.a.createElement("div",null,o.a.createElement(G,null)),o.a.createElement("div",{className:"body"},t.showPokemons.map(function(e){return o.a.createElement(O,{name:e.name,front_default:e.sprites.front_default,id:e.id})})),o.a.createElement(B,null),o.a.createElement("div",{className:"result_of_search"},o.a.createElement("div",{className:"pagination"}),o.a.createElement("div",{className:"props"},o.a.createElement("label",null,"Show: ",o.a.createElement("select",{id:"show",onChange:function(){var e=document.getElementById("show").value;t.SetCountPokemons(e)}},o.a.createElement("option",null,"50"),o.a.createElement("option",null,"20"),o.a.createElement("option",null,"10"))))))}),J=a(88),K=Object(J.a)({info:{minHeight:"70vh",marginTop:"90px","& h1, & p":{margin:"30px",width:"85%",fontFamily:"Arial, sans-serif"}}});function R(){var e=K();return o.a.createElement("div",{className:e.info},o.a.createElement("h1",null,"About Pokedex"),o.a.createElement("p",null,"This is Pokedex, application about Pokemons..."),o.a.createElement("h1",null,"About Pokemons"),o.a.createElement("p",null,"Every Pok\xe9mon creature has an array of stats. HP (Hit Points) is a Pok\xe9mon's life force. If your Pok\xe9mon's HP hits zero, it faints and is no longer usable in battle (it can still use Hidden Machines, though). The Speed stat decides which Pok\xe9mon will make the first move in battle. This stat can be critical in long battles. ",o.a.createElement("br",null),o.a.createElement("br",null),"Attack and Special Attack measure the strength of moves used by your Pok\xe9mon; the higher this is, the more damage you will do to opponents. Attack corresponds to moves in the Physical category, while Special Attack corresponds to Special moves.",o.a.createElement("br",null),o.a.createElement("br",null),"Similarly, Defense and Special Defense measure the ability to take attacks from other Pok\xe9mon; the higher the stat is, the fewer Hit Points will be lost when attacked. Defense corresponds to moves in the Physical category, while Special Defense corresponds to Special moves."))}var z=a(37),$=a(69),q=a(66),L=a(70),Q=a(129),V=a(67),X=a.n(V),Y=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object($.a)(this,(e=Object(q.a)(t)).call.apply(e,[this].concat(o)))).state={info:{},add_info:{}},a}return Object(L.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon/".concat(this.props.match.params.number,"/")).then(function(e){return e.json()}).then(function(t){e.setState({info:t})}),fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(this.props.match.params.number,"/")).then(function(e){return e.json()}).then(function(t){e.setState({add_info:t})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"background_card"},void 0!==this.state.info.stats&&o.a.createElement("div",null,o.a.createElement(c.b,{to:"/",className:"back_icon"},o.a.createElement(X.a,null)),o.a.createElement(Q.a,{in:"true",timeout:{enter:500}},o.a.createElement("div",{className:"info_card"},o.a.createElement("div",{className:"head"},o.a.createElement("div",null),o.a.createElement("div",null,this.state.info.name.charAt(0).toUpperCase()+this.state.info.name.slice(1)," "),o.a.createElement("div",null,"#",this.state.info.id)),o.a.createElement("div",{className:"types"},o.a.createElement("div",{className:"type one"},this.state.info.types[0].type.name.toUpperCase()),void 0!==this.state.info.types[1]&&o.a.createElement("div",{className:"type two"},this.state.info.types[1].type.name.toUpperCase())),o.a.createElement("div",{className:"main_info"},o.a.createElement("div",{className:"image"},o.a.createElement("img",{src:this.state.info.sprites.front_default,alt:this.state.info.name})),o.a.createElement("div",{className:"skils"},o.a.createElement("div",null,o.a.createElement("span",null,"HP:")," ",o.a.createElement("span",{className:"count"},this.state.info.stats[5].base_stat)),o.a.createElement("div",null,o.a.createElement("span",null,"Attack:")," ",o.a.createElement("span",{className:"count"},this.state.info.stats[4].base_stat)),o.a.createElement("div",null,o.a.createElement("span",null,"Speed:")," ",o.a.createElement("span",{className:"count"},this.state.info.stats[0].base_stat)),o.a.createElement("div",null,o.a.createElement("span",null,"Defense:")," ",o.a.createElement("span",{className:"count"},this.state.info.stats[3].base_stat)),o.a.createElement("div",null,o.a.createElement("span",null,"Sp Atk:")," ",o.a.createElement("span",{className:"count"},this.state.info.stats[2].base_stat)),o.a.createElement("div",null,o.a.createElement("span",null,"Sp Def:")," ",o.a.createElement("span",{className:"count"},this.state.info.stats[1].base_stat)))),o.a.createElement("div",{className:"profile"},o.a.createElement("h4",null,"Additional information"),o.a.createElement("div",{className:"info_profile"},o.a.createElement("div",null,o.a.createElement("span",{className:"prop"},"Weigth:"),o.a.createElement("span",{className:"c_profile"},this.state.info.weight/10," kg")),o.a.createElement("div",null,o.a.createElement("span",{className:"prop"},"Height:"),o.a.createElement("span",{className:"c_profile"},this.state.info.height/10," m")),o.a.createElement("div",null,o.a.createElement("span",{className:"prop"},"Egg Groups:"),o.a.createElement("span",{className:"c_profile"},void 0!==this.state.add_info.egg_groups&&o.a.createElement("span",null,this.state.add_info.egg_groups.map(function(e){return e.name+" "})))),o.a.createElement("div",null,o.a.createElement("span",{className:"prop"},"Abilities:"),o.a.createElement("span",{className:"c_profile"},this.state.info.abilities[0]&&this.state.info.abilities[0].ability.name,this.state.info.abilities[1]&&this.state.info.abilities[1].ability.name)),o.a.createElement("div",null,o.a.createElement("span",{className:"prop"},"Capture rate:"),o.a.createElement("span",{className:"c_profile"},this.state.add_info.capture_rate)),o.a.createElement("div",null,o.a.createElement("span",{className:"prop"},"Gender rate:"),o.a.createElement("span",{className:"c_profile"},this.state.add_info.gender_rate)),o.a.createElement("div",null,o.a.createElement("span",{className:"prop"},"Base happiness:"),o.a.createElement("span",{className:"c_profile"},this.state.add_info.base_happiness)),o.a.createElement("div",null,o.a.createElement("span",{className:"prop"},"Shape:"),o.a.createElement("span",{className:"c_profile"},void 0!==this.state.add_info.shape&&o.a.createElement("span",null,this.state.add_info.shape.name)))))))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement(y,null,o.a.createElement(r.c,null,o.a.createElement(r.a,{exact:!0,path:"/",component:U}),o.a.createElement(r.a,{path:"/about",component:R}),o.a.createElement(r.a,{path:"/pokemons/:number",component:Y})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[73,1,2]]]);
//# sourceMappingURL=main.8cedceb1.chunk.js.map