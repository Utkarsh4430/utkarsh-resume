(this["webpackJsonputkarsh-resume"]=this["webpackJsonputkarsh-resume"]||[]).push([[0],{22:function(e,s,t){},25:function(e,s,t){},36:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(15),n=t.n(a),r=(t(22),t(7)),i=t(8),l=t(10),j=t(9),d=t(13),o=t(16),h=t.n(o),b=(t(25),t(17)),m=t(5),O=t.n(m),u=t(1),x=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s=this.props.data.description,t=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(b.a,{type:"circle",bg:!0}),Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Research"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(O.a,{bottom:!0,children:Object(u.jsx)("h1",{className:"responsive-headline",children:e})}),Object(u.jsxs)(O.a,{bottom:!0,duration:1200,children:[Object(u.jsx)("h3",{children:s}),Object(u.jsx)("h3",{children:"Machine Learning Enthusiast"})]}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{bottom:!0,duration:2e3,children:Object(u.jsx)("ul",{className:"social",children:t})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s=this.props.data.image,t=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,n=this.props.data.address.state,r=this.props.data.address.zip,i=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(O.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:s,alt:"Nordic Giant Profile Pic"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:t}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Contact Details"}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsx)("span",{children:e}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[c,Object(u.jsx)("br",{}),a," ",n," ",r]}),Object(u.jsx)("span",{children:i}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:l})]})]}),Object(u.jsx)("div",{className:"columns download",children:Object(u.jsx)("p",{children:Object(u.jsxs)("a",{href:j,className:"button",target:"_blank",rel:"noreferrer",children:[Object(u.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),t}(c.Component),f=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:e.predescription}),e.description,Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:e.predescription2}),e.description2,Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:e.predescription3}),e.description3]})]},e.company)})),a=this.props.data.skills.map((function(s){var t=e.getRandomColor(),c="bar-expand "+s.name.toLowerCase(),a=s.level;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{style:{width:a,backgroundColor:t},className:c}),Object(u.jsx)("em",{children:s.name})]},s.name)}));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Work"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row skill",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Skills"})})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("p",{children:s}),Object(u.jsx)("div",{className:"bars",children:Object(u.jsx)("ul",{className:"skills",children:a})})]})]})})]})}}]),t}(c.Component),v=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.research.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:Object(u.jsx)("em",{children:e.title})}),Object(u.jsxs)("p",{className:"info",children:[e.site,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.status}),Object(u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:"\u2003 Link"})]}),Object(u.jsx)("p",{children:e.cite})]},e.title)}));return Object(u.jsx)("section",{id:"portfolio",children:Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h3",{children:Object(u.jsx)("span",{children:"Research"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:e})]})})})}}]),t}(c.Component),N=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(i.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{data:this.state.resumeData.main}),Object(u.jsx)(p,{data:this.state.resumeData.main}),Object(u.jsx)(v,{data:this.state.resumeData.resume}),Object(u.jsx)(f,{data:this.state.resumeData.resume})]})}}]),t}(c.Component),w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,r=s.getTTFB;t(e),c(e),a(e),n(e),r(e)}))};n.a.render(Object(u.jsx)(N,{}),document.getElementById("root")),w()}},[[36,1,2]]]);
//# sourceMappingURL=main.cf628281.chunk.js.map