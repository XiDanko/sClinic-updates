import{am as K,an as N,s as P,ao as E,ap as I,f as V,a as s,c,b as n,av as b,aq as l,t as d,p as w,N as H,g,w as i,A as k,aw as W,C as j,a7 as z,aP as F,d as R,i as q,K as O,L as Q,Q as B,F as C,r as G,e as y,h as _,P as J}from"./main-DtUMKdEE.js";import{a as L}from"./index-vY6iHOtW.js";import{s as U}from"./index-DvwjWSyi.js";import{a as X,s as Z}from"./index-CMjBS-ma.js";import{s as x}from"./index-DvXDWMtP.js";var ee=`
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
`,ne={root:function(t){var f=t.props;return["p-panel p-component",{"p-panel-toggleable":f.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",contentWrapper:"p-panel-content-wrapper",content:"p-panel-content",footer:"p-panel-footer"},te=K.extend({name:"panel",style:ee,classes:ne}),ae={name:"BasePanel",extends:E,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:te,provide:function(){return{$pcPanel:this,$parentInstance:this}}},D={name:"Panel",extends:ae,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return I({toggleable:this.toggleable})}},components:{PlusIcon:U,MinusIcon:L,Button:P},directives:{ripple:N}},oe=["data-p"],le=["data-p"],se=["id"],re=["id","aria-labelledby"];function de(e,t,f,$,p,a){var u=V("Button");return s(),c("div",l({class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[n("div",l({class:e.cx("header"),"data-p":a.dataP},e.ptm("header")),[b(e.$slots,"header",{id:e.$id+"_header",class:H(e.cx("title")),collapsed:p.d_collapsed},function(){return[e.header?(s(),c("span",l({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),d(e.header),17,se)):w("",!0)]}),n("div",l({class:e.cx("headerActions")},e.ptm("headerActions")),[b(e.$slots,"icons"),e.toggleable?b(e.$slots,"togglebutton",{key:0,collapsed:p.d_collapsed,toggleCallback:function(h){return a.toggle(h)},keydownCallback:function(h){return a.onKeyDown(h)}},function(){return[g(u,l({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":a.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!p.d_collapsed,unstyled:e.unstyled,onClick:t[0]||(t[0]=function(o){return a.toggle(o)}),onKeydown:t[1]||(t[1]=function(o){return a.onKeyDown(o)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:i(function(o){return[b(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:p.d_collapsed},function(){return[(s(),k(W(p.d_collapsed?"PlusIcon":"MinusIcon"),l({class:o.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):w("",!0)],16)],16,le),g(F,l({name:"p-collapsible"},e.ptm("transition")),{default:i(function(){return[j(n("div",l({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[n("div",l({class:e.cx("contentWrapper")},e.ptm("contentWrapper")),[n("div",l({class:e.cx("content")},e.ptm("content")),[b(e.$slots,"default")],16),e.$slots.footer?(s(),c("div",l({key:0,class:e.cx("footer")},e.ptm("footer")),[b(e.$slots,"footer")],16)):w("",!0)],16)],16,re),[[z,!p.d_collapsed]])]}),_:3},16)],16,oe)}D.render=de;const ie=["onClick"],pe={class:"col-span-6"},ce={class:"font-semibold"},ue={class:"col-span-6"},ge={class:"font-semibold"},he={key:0,class:"w-full"},we=R({__name:"ClinicLogs",props:{mode:{},activityLogs:{},headerText:{},loading:{type:Boolean}},emits:["cancel"],setup(e,{emit:t}){const f=e,$=t,p=()=>{$("cancel")};q(()=>{});const a=G({});return O(()=>f.activityLogs,u=>{a.value={},u.forEach(o=>{a.value[o.id]=!0})},{immediate:!0}),(u,o)=>{const h=Z,A=x,T=X,Y=D,M=P,S=Q;return s(),k(S,{visible:"",modal:"",closable:!1,header:f.headerText,class:"w-[45rem] !min-h-[500px]"},{footer:i(()=>[g(M,{label:u.$t("Close"),severity:"secondary",onClick:p},null,8,["label"])]),default:i(()=>[(s(!0),c(C,null,B(e.activityLogs,r=>(s(),c("div",{key:r.id},[g(Y,{collapsed:y(a)[r.id],toggleable:"",class:"hover:bg-surface-50 !mb-4 card !p-0"},{header:i(()=>{var m;return[n("div",{class:"grid grid-cols-12 w-full cursor-pointer p-4",onClick:v=>y(a)[r.id]=!y(a)[r.id]},[n("div",pe,[n("span",ce,d(r.description)+" "+d(u.$t("By"))+": ",1),n("span",null,d((m=r==null?void 0:r.causer)==null?void 0:m.name),1)]),n("div",ue,[n("span",ge,d(u.$t("At"))+" : ",1),n("span",null,d(y(_)(r.createdAt).format("YYYY-MM-DD hh:mm:A")),1)])],8,ie)]}),default:i(()=>[g(T,{value:r.attributeChanges,stripedRows:"",size:"small",scrollable:"",scrollHeight:"400px"},{default:i(()=>[g(h,{field:"field",class:"w-60"}),g(h,null,{body:i(({data:m})=>[Array.isArray(m.new)?(s(),c("table",he,[o[0]||(o[0]=n("thead",null,[n("tr",null,[n("th",null,"items"),n("th",null,"Date")])],-1)),n("tbody",null,[(s(!0),c(C,null,B(m.new,v=>(s(),c("tr",{key:v.id,class:"!text-sm border"},[n("td",null,d(v.attribute_changes.attributes["procedure.name"]),1),n("td",null,d(y(_)(v.created_at).format("YYYY-MM-DD HH:mm")),1)]))),128))])])):(s(),k(A,{key:1,severity:"success"},{default:i(()=>[J(d(m.new),1)]),_:2},1024))]),_:1})]),_:1},8,["value"])]),_:2},1032,["collapsed"])]))),128))]),_:1},8,["header"])}}});export{we as _};
