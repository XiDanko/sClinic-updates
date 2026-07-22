import{am as I,an as V,s as A,ao as j,ap as H,f as W,a as o,c as p,b as n,av as f,aq as s,t as d,p as w,N as z,g,w as i,A as $,aw as F,C as R,a7 as q,aP as O,d as Q,i as G,K as J,L,Q as P,F as k,r as U,e as v,h as D,P as X}from"./main-B3S3Bo5q.js";import{a as Z}from"./index-CeHI9Qq5.js";import{s as x}from"./index-Du0EXR6u.js";import{a as ee,s as ne}from"./index-gcgfKdmt.js";import{s as te}from"./index-5uVVTVDj.js";var ae=`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,oe={root:function(t){var y=t.props;return["p-panel p-component",{"p-panel-toggleable":y.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",contentWrapper:"p-panel-content-wrapper",content:"p-panel-content",footer:"p-panel-footer"},le=I.extend({name:"panel",style:ae,classes:oe}),se={name:"BasePanel",extends:j,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:le,provide:function(){return{$pcPanel:this,$parentInstance:this}}},T={name:"Panel",extends:se,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return H({toggleable:this.toggleable})}},components:{PlusIcon:x,MinusIcon:Z,Button:A},directives:{ripple:V}},re=["data-p"],de=["data-p"],pe=["id"],ie=["id","aria-labelledby"];function ce(e,t,y,B,c,a){var u=W("Button");return o(),p("div",s({class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[n("div",s({class:e.cx("header"),"data-p":a.dataP},e.ptm("header")),[f(e.$slots,"header",{id:e.$id+"_header",class:z(e.cx("title")),collapsed:c.d_collapsed},function(){return[e.header?(o(),p("span",s({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),d(e.header),17,pe)):w("",!0)]}),n("div",s({class:e.cx("headerActions")},e.ptm("headerActions")),[f(e.$slots,"icons"),e.toggleable?f(e.$slots,"togglebutton",{key:0,collapsed:c.d_collapsed,toggleCallback:function(h){return a.toggle(h)},keydownCallback:function(h){return a.onKeyDown(h)}},function(){return[g(u,s({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":a.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!c.d_collapsed,unstyled:e.unstyled,onClick:t[0]||(t[0]=function(l){return a.toggle(l)}),onKeydown:t[1]||(t[1]=function(l){return a.onKeyDown(l)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:i(function(l){return[f(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:c.d_collapsed},function(){return[(o(),$(F(c.d_collapsed?"PlusIcon":"MinusIcon"),s({class:l.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):w("",!0)],16)],16,de),g(O,s({name:"p-collapsible"},e.ptm("transition")),{default:i(function(){return[R(n("div",s({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[n("div",s({class:e.cx("contentWrapper")},e.ptm("contentWrapper")),[n("div",s({class:e.cx("content")},e.ptm("content")),[f(e.$slots,"default")],16),e.$slots.footer?(o(),p("div",s({key:0,class:e.cx("footer")},e.ptm("footer")),[f(e.$slots,"footer")],16)):w("",!0)],16)],16,ie),[[q,!c.d_collapsed]])]}),_:3},16)],16,re)}T.render=ce;const ue=["onClick"],ge={class:"col-span-6"},he={class:"font-semibold"},me={class:"col-span-6"},be={class:"font-semibold"},fe={key:0,class:"w-full"},ye={key:1},Ce=Q({__name:"ClinicLogs",props:{mode:{},activityLogs:{},headerText:{},loading:{type:Boolean}},emits:["cancel"],setup(e,{emit:t}){const y=e,B=t,c=()=>{B("cancel")};G(()=>{});const a=U({});return J(()=>y.activityLogs,u=>{a.value={},u.forEach(l=>{a.value[l.id]=!0})},{immediate:!0}),(u,l)=>{const h=ne,Y=te,M=ee,S=T,K=A,N=L;return o(),$(N,{visible:"",modal:"",closable:!1,header:y.headerText,class:"w-[45rem] !min-h-[500px]"},{footer:i(()=>[g(K,{label:u.$t("Close"),severity:"secondary",onClick:c},null,8,["label"])]),default:i(()=>[(o(!0),p(k,null,P(e.activityLogs,r=>(o(),p("div",{key:r.id},[g(S,{collapsed:v(a)[r.id],toggleable:"",class:"hover:bg-surface-50 !mb-4 card !p-0"},{header:i(()=>{var m;return[n("div",{class:"grid grid-cols-12 w-full cursor-pointer p-4",onClick:b=>v(a)[r.id]=!v(a)[r.id]},[n("div",ge,[n("span",he,d(r.description)+" "+d(u.$t("By"))+": ",1),n("span",null,d((m=r==null?void 0:r.causer)==null?void 0:m.name),1)]),n("div",me,[n("span",be,d(u.$t("At"))+" : ",1),n("span",null,d(v(D)(r.createdAt).format("YYYY-MM-DD hh:mm:A")),1)])],8,ue)]}),default:i(()=>[g(M,{value:r.attributeChanges,stripedRows:"",size:"small",scrollable:"",scrollHeight:"400px"},{default:i(()=>[g(h,{field:"field",class:"w-60"}),g(h,null,{body:i(({data:m})=>[Array.isArray(m.new)?(o(),p("table",fe,[l[0]||(l[0]=n("thead",null,[n("tr",null,[n("th",null,"items"),n("th",null,"Date")])],-1)),n("tbody",null,[(o(!0),p(k,null,P(m.new,(b,E)=>{var C,_;return o(),p("tr",{key:E,class:"!text-sm border"},[typeof b=="object"&&b!==null?(o(),p(k,{key:0},[n("td",null,d((_=(C=b.attribute_changes)==null?void 0:C.attributes)==null?void 0:_["procedure.name"]),1),n("td",null,d(v(D)(b.created_at).format("YYYY-MM-DD HH:mm")),1)],64)):(o(),p("td",ye,d(b),1))])}),128))])])):(o(),$(Y,{key:1,severity:"success"},{default:i(()=>[X(d(m.new),1)]),_:2},1024))]),_:1})]),_:1},8,["value"])]),_:2},1032,["collapsed"])]))),128))]),_:1},8,["header"])}}});export{Ce as _};
