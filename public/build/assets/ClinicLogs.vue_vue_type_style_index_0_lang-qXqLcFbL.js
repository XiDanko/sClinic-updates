import{al as I,am as N,s as P,an as V,ao as Y,f as j,a as t,c as l,b as a,av as b,ap as r,t as d,p as y,M as z,g as h,w as c,z as _,aw as W,B as F,a6 as O,aP as R,d as H,i as J,J as q,K as G,P as C,F as w,r as Q,e as v,O as U,h as X}from"./main-Ch5oawkw.js";import{a as Z}from"./index-Bft6ZF0H.js";import{s as L}from"./index-BgqQP-KU.js";import{a as x,s as ee}from"./index-CwL1rf4b.js";import{s as ne}from"./index-CAO1uAQB.js";var te=`
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
`,ae={root:function(n){var k=n.props;return["p-panel p-component",{"p-panel-toggleable":k.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",contentWrapper:"p-panel-content-wrapper",content:"p-panel-content",footer:"p-panel-footer"},oe=I.extend({name:"panel",style:te,classes:ae}),le={name:"BasePanel",extends:V,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:oe,provide:function(){return{$pcPanel:this,$parentInstance:this}}},A={name:"Panel",extends:le,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(n){this.d_collapsed=n}},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return Y({toggleable:this.toggleable})}},components:{PlusIcon:L,MinusIcon:Z,Button:P},directives:{ripple:N}},se=["data-p"],re=["data-p"],de=["id"],pe=["id","aria-labelledby"];function ie(e,n,k,$,u,o){var g=j("Button");return t(),l("div",r({class:e.cx("root"),"data-p":o.dataP},e.ptmi("root")),[a("div",r({class:e.cx("header"),"data-p":o.dataP},e.ptm("header")),[b(e.$slots,"header",{id:e.$id+"_header",class:z(e.cx("title")),collapsed:u.d_collapsed},function(){return[e.header?(t(),l("span",r({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),d(e.header),17,de)):y("",!0)]}),a("div",r({class:e.cx("headerActions")},e.ptm("headerActions")),[b(e.$slots,"icons"),e.toggleable?b(e.$slots,"togglebutton",{key:0,collapsed:u.d_collapsed,toggleCallback:function(m){return o.toggle(m)},keydownCallback:function(m){return o.onKeyDown(m)}},function(){return[h(g,r({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":o.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!u.d_collapsed,unstyled:e.unstyled,onClick:n[0]||(n[0]=function(s){return o.toggle(s)}),onKeydown:n[1]||(n[1]=function(s){return o.onKeyDown(s)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:c(function(s){return[b(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:u.d_collapsed},function(){return[(t(),_(W(u.d_collapsed?"PlusIcon":"MinusIcon"),r({class:s.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):y("",!0)],16)],16,re),h(R,r({name:"p-collapsible"},e.ptm("transition")),{default:c(function(){return[F(a("div",r({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[a("div",r({class:e.cx("contentWrapper")},e.ptm("contentWrapper")),[a("div",r({class:e.cx("content")},e.ptm("content")),[b(e.$slots,"default")],16),e.$slots.footer?(t(),l("div",r({key:0,class:e.cx("footer")},e.ptm("footer")),[b(e.$slots,"footer")],16)):y("",!0)],16)],16,pe),[[O,!u.d_collapsed]])]}),_:3},16)],16,se)}A.render=ie;const ce=["onClick"],ue={class:"col-span-6"},ge={class:"font-semibold"},he={class:"col-span-6"},me={class:"font-semibold"},fe={key:0,class:"w-full"},be={key:0,class:"p-2"},ye={key:1,class:"p-2"},ke={key:2,class:"p-2"},ve={key:1},Pe=H({__name:"ClinicLogs",props:{mode:{},activityLogs:{},headerText:{},loading:{type:Boolean}},emits:["cancel"],setup(e,{emit:n}){const k=e,$=n,u=()=>{$("cancel")};J(()=>{});const o=Q({});return q(()=>k.activityLogs,g=>{o.value={},g.forEach(s=>{o.value[s.id]=!0})},{immediate:!0}),(g,s)=>{const m=ee,D=ne,T=x,S=A,K=P,M=G;return t(),_(M,{visible:"",modal:"",closable:!1,header:k.headerText,class:"w-[45rem] !min-h-[500px]"},{footer:c(()=>[h(K,{label:g.$t("Close"),severity:"secondary",onClick:u},null,8,["label"])]),default:c(()=>[(t(!0),l(w,null,C(e.activityLogs,p=>(t(),l("div",{key:p.id},[h(S,{collapsed:v(o)[p.id],toggleable:"",class:"hover:bg-surface-50 !mb-4 card !p-0"},{header:c(()=>{var f;return[a("div",{class:"grid grid-cols-12 w-full cursor-pointer p-4",onClick:i=>v(o)[p.id]=!v(o)[p.id]},[a("div",ue,[a("span",ge,d(p.description)+" "+d(g.$t("By"))+": ",1),a("span",null,d((f=p==null?void 0:p.causer)==null?void 0:f.name),1)]),a("div",he,[a("span",me,d(g.$t("At"))+" : ",1),a("span",null,d(v(X)(p.createdAt).format("YYYY-MM-DD hh:mm:A")),1)])],8,ce)]}),default:c(()=>[h(T,{value:p.attributeChanges,stripedRows:"",size:"small",scrollable:"",scrollHeight:"400px"},{default:c(()=>[h(m,{field:"field",class:"w-60"}),h(m,null,{body:c(({data:f})=>[Array.isArray(f.new)?(t(),l("table",fe,[s[0]||(s[0]=a("thead",null,null,-1)),a("tbody",null,[(t(!0),l(w,null,C(f.new,(i,E)=>{var B;return t(),l("tr",{key:E,class:"!text-sm border"},[typeof i=="object"&&i!==null?(t(),l(w,{key:0},[(B=i.procedure)!=null&&B.name?(t(),l("td",be,d(i.procedure.name),1)):y("",!0),i.name?(t(),l("td",ye,d(i.name),1)):y("",!0),i.status?(t(),l("td",ke,d(i.status),1)):y("",!0)],64)):(t(),l("td",ve,d(i),1))])}),128))])])):(t(),_(D,{key:1,severity:"success"},{default:c(()=>[U(d(f.new),1)]),_:2},1024))]),_:1})]),_:1},8,["value"])]),_:2},1032,["collapsed"])]))),128))]),_:1},8,["header"])}}});export{Pe as _};
