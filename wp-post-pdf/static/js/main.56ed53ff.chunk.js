(this["webpackJsonpwp-post-to-pdf-react"]=this["webpackJsonpwp-post-to-pdf-react"]||[]).push([[0],{228:function(t,e,o){},232:function(t,e){},234:function(t,e){},276:function(t,e){},277:function(t,e){},409:function(t,e,o){},410:function(t,e,o){"use strict";o.r(e);var n=o(25),s=o.n(n),a=o(207),r=o.n(a),i=(o(228),o(149)),c=o(208),l=o(209),d=o(223),p=o(222),u=o(31),g=o(24);u.b.register({family:"Oswald",src:"https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf"});var f=u.f.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:24,textAlign:"center",fontFamily:"Oswald"},author:{fontSize:12,textAlign:"center",marginBottom:40},text:{margin:12,fontSize:14,textAlign:"justify",fontFamily:"Times-Roman"},image:{marginVertical:15,marginHorizontal:100},pageNumber:{position:"absolute",fontSize:12,bottom:30,left:0,right:0,textAlign:"center",color:"grey"}}),h=function(t){return Object(g.jsxs)(g.Fragment,{children:[console.log(t),Object(g.jsx)(u.a,{children:Object(g.jsxs)(u.e,{style:f.body,children:[Object(g.jsx)(u.g,{style:f.title,children:t.postTitle}),Object(g.jsxs)(u.g,{style:f.author,children:[" ",t.postAuthor," "]}),Object(g.jsx)(u.c,{style:f.image,src:t.postImage}),Object(g.jsx)(u.g,{style:f.text,children:t.postText}),Object(g.jsx)(u.g,{style:f.pageNumber,render:function(t){var e=t.pageNumber,o=t.totalPages;return"".concat(e," / ").concat(o)},fixed:!0})]})})]})},j=(o(409),function(t){Object(d.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(c.a)(this,o);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={post:{postTitle:"",postImage:"",postText:"",postAuthor:""},isLoaded:!1},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=this;fetch("http://localhost/wp-json/wp/v2/posts/"+postId+"?_embed").then((function(t){return t.json()})).then((function(e){var o=e.content.rendered.replace(/<\/?[^>]+(>|$)/g,"").replace("&#8217;","'");t.setState(Object(i.a)(Object(i.a)({},t.state),{},{post:{postTitle:e.title.rendered,postImage:e._embedded["wp:featuredmedia"][0].source_url,postText:o,postAuthor:e._embedded.author[0].name},isLoaded:!0}))}),(function(e){t.setState({isLoaded:!1,error:e})}))}},{key:"render",value:function(){var t=this.state.post,e=t.postTitle,o=t.postImage,n=t.postText,s=t.postAuthor;return Object(g.jsx)("div",{className:"App",children:this.state.isLoaded?Object(g.jsx)(u.d,{children:Object(g.jsx)(h,{postTitle:e,postImage:o,postText:n,postAuthor:s})}):"PDF Loading..."})}}]),o}(n.Component)),m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,411)).then((function(e){var o=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;o(t),n(t),s(t),a(t),r(t)}))};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(j,{})}),document.getElementById("root")),m()}},[[410,1,2]]]);
//# sourceMappingURL=main.56ed53ff.chunk.js.map