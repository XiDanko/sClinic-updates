import{W as A,Y as ee,Z as O,$ as te,aa as k,aF as ae,a7 as ue,a9 as H,aG as D,ac as ne,D as R,af as L,z as V,a as r,w as f,ad as M,J as G,aH as W,aI as be,aJ as pe,aK as U,a4 as me,aL as Y,c as m,p,b as F,F as j,ao as ve,j as ie,r as E,i as se,I as he,d as ye,aM as fe,G as ge,k as Z,g as y,aw as Fe,e as l,as as $e,M as we,t as g,q as Te,n as ke,L as P,O as Ve,y as xe,v as X,K as Se}from"./main-i206Aic9.js";import{a as Be,s as Pe}from"./index-0kHyDb4a.js";import{s as _e}from"./index-Dbip6MeH.js";import{s as Le}from"./index-Bd-Tb_k8.js";import{s as Ce}from"./index-IabAqfdO.js";import{s as Ne}from"./index-DOjw5hAf.js";import{F as Ae}from"./form-mode-C9Uh-S2W.js";import{D as _,a as $}from"./data-source-dynamic-field-NFjE1Vbj.js";var Oe={root:function(e){var n=e.instance,s=e.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":s.disabled}]}},Ie=A.extend({name:"tab",classes:Oe}),Ke={name:"BaseTab",extends:O,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Ie,provide:function(){return{$pcTab:this,$parentInstance:this}}},ze={name:"Tab",extends:Ke,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var n=this.findNextTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var n=this.findPrevTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstTab();this.changeFocusedTab(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastTab();this.changeFocusedTab(e,n),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue()},findNextTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?e:e.nextElementSibling;return s?D(s,"data-p-disabled")||D(s,"data-pc-section")==="activebar"?this.findNextTab(s):H(s,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?e:e.previousElementSibling;return s?D(s,"data-p-disabled")||D(s,"data-pc-section")==="activebar"?this.findPrevTab(s):H(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,n){ue(n),this.scrollInView(n)},scrollInView:function(e){var n;e==null||(n=e.scrollIntoView)===null||n===void 0||n.call(e,{block:"nearest"})}},computed:{active:function(){var e;return ae((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return k(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return te({active:this.active})}},directives:{ripple:ee}};function De(t,e,n,s,o,i){var c=ne("ripple");return t.asChild?L(t.$slots,"default",{key:1,dataP:i.dataP,class:G(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):R((r(),V(M(t.as),k({key:0,class:t.cx("root"),"data-p":i.dataP,onClick:i.onClick},i.attrs),{default:f(function(){return[L(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[c]])}ze.render=De;var Ue={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Ee=A.extend({name:"tablist",classes:Ue}),Re={name:"BaseTabList",extends:O,props:{},style:Ee,provide:function(){return{$pcTabList:this,$parentInstance:this}}},Me={name:"TabList",extends:Re,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),s=W(e)-n,o=Math.abs(e.scrollLeft),i=s*.8,c=o-i,u=Math.max(c,0);e.scrollLeft=Y(e)?-1*u:u},onNextButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),s=W(e)-n,o=Math.abs(e.scrollLeft),i=s*.8,c=o+i,u=e.scrollWidth-s,w=Math.min(c,u);e.scrollLeft=Y(e)?-1*w:w},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,n=e.content,s=e.inkbar,o=e.tabs;if(s){var i=H(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=pe(i)+"px",s.style.top=U(i).top-U(o).top+"px"):(s.style.width=me(i)+"px",s.style.left=U(i).left-U(o).left+"px")}},updateButtonState:function(){var e=this.$refs,n=e.list,s=e.content,o=s.scrollTop,i=s.scrollWidth,c=s.scrollHeight,u=s.offsetWidth,w=s.offsetHeight,C=Math.abs(s.scrollLeft),N=[W(s),be(s)],I=N[0],K=N[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=o!==0,this.isNextButtonEnabled=n.offsetHeight>=w&&parseInt(o)!==c-K):(this.isPrevButtonEnabled=C!==0,this.isNextButtonEnabled=n.offsetWidth>=u&&parseInt(C)!==i-I)},getVisibleButtonWidths:function(){var e=this.$refs,n=e.prevButton,s=e.nextButton,o=0;return this.showNavigators&&(o=((n==null?void 0:n.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),o}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return te({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:Be,ChevronRightIcon:_e},directives:{ripple:ee}},We=["data-p"],He=["aria-label","tabindex"],je=["data-p"],Ge=["aria-orientation"],Je=["aria-label","tabindex"];function qe(t,e,n,s,o,i){var c=ne("ripple");return r(),m("div",k({ref:"list",class:t.cx("root"),"data-p":i.dataP},t.ptmi("root")),[i.showNavigators&&o.isPrevButtonEnabled?R((r(),m("button",k({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":i.prevButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),V(M(i.templates.previcon||"ChevronLeftIcon"),k({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,He)),[[c]]):p("",!0),F("div",k({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)}),"data-p":i.dataP},t.ptm("content")),[F("div",k({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":i.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[L(t.$slots,"default"),F("span",k({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Ge)],16,je),i.showNavigators&&o.isNextButtonEnabled?R((r(),m("button",k({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":i.nextButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),V(M(i.templates.nexticon||"ChevronRightIcon"),k({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,Je)),[[c]]):p("",!0)],16,We)}Me.render=qe;var Qe={root:function(e){var n=e.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},Ye=A.extend({name:"tabpanel",classes:Qe}),Ze={name:"BaseTabPanel",extends:O,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Ye,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},Xe={name:"TabPanel",extends:Ze,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var e;return ae((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},attrs:function(){return k(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var e;return{id:this.id,tabindex:(e=this.$pcTabs)===null||e===void 0?void 0:e.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function et(t,e,n,s,o,i){var c,u;return i.$pcTabs?(r(),m(j,{key:1},[t.asChild?L(t.$slots,"default",{key:1,class:G(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(r(),m(j,{key:0},[!((c=i.$pcTabs)!==null&&c!==void 0&&c.lazy)||i.active?R((r(),V(M(t.as),k({key:0,class:t.cx("root")},i.attrs),{default:f(function(){return[L(t.$slots,"default")]}),_:3},16,["class"])),[[ve,(u=i.$pcTabs)!==null&&u!==void 0&&u.lazy?!0:i.active]]):p("",!0)],64))],64)):L(t.$slots,"default",{key:0})}Xe.render=et;var tt={root:"p-tabpanels"},at=A.extend({name:"tabpanels",classes:tt}),nt={name:"BaseTabPanels",extends:O,props:{},style:at,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},it={name:"TabPanels",extends:nt,inheritAttrs:!1};function st(t,e,n,s,o,i){return r(),m("div",k({class:t.cx("root"),role:"presentation"},t.ptmi("root")),[L(t.$slots,"default")],16)}it.render=st;var ot=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,lt={root:function(e){var n=e.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},dt=A.extend({name:"tabs",style:ot,classes:lt}),rt={name:"BaseTabs",extends:O,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:dt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},ct={name:"Tabs",extends:rt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function ut(t,e,n,s,o,i){return r(),m("div",k({class:t.cx("root")},t.ptmi("root")),[L(t.$slots,"default")],16)}ct.render=ut;const bt=(t,e,n)=>{if(n==null)return null;const s=Number(e);return(t[s]??[]).find(i=>i.id===n)??null},pt=(t,e)=>e==null?null:t.find(n=>n.id===e)??null,mt=async({fields:t,modelFields:e=[],formValues:n,filterItems:s})=>{for(const o of t){let i;if(o.dynamicField){i=o.dynamicField.id;let c=!1;for(const u of e)if(u.field_id===i){if(c=!0,o.dynamicField&&o.dynamicField.dataSource===_.Remote){Array.isArray(n[i])||(n[i]=[]);const w=bt(s,u.field_id,u.optionId);w!==null&&n[i].push(w)}if(o.dynamicField.dataSource===_.Local&&o.dynamicField.type==$.MultiSelect){Array.isArray(n[i])||(n[i]=[]);const w=pt(o.dynamicField.dynamicFieldOptions,u.optionId);w!==null&&n[i].push(w.id)}if(o.dynamicField.dataSource===_.Local&&o.dynamicField.type==$.Select&&(n[i]=u.optionId),o.dynamicField.type===$.String&&(n[i]=u.value),o.dynamicField.type===$.Textarea&&(n[i]=u.value),o.dynamicField.type===$.Title&&(n[i]=u.defaultValue),o.dynamicField.type===$.DateRange){console.log("DatarangDatarang");const w=u.value.split(",").map(C=>new Date(C));n[i]=w}}!c&&o.dynamicField&&o.dynamicField.type===$.String&&(n[i]=o.defaultValue),!c&&o.dynamicField&&o.dynamicField.type===$.Title&&(console.log("field.defaultValue",o.defaultValue),n[i]=o.defaultValue)}}},vt=async({api:t,fieldId:e,filterItems:n,originalItems:s})=>{const{data:o}=await ie.get(`/api/${t}`);n[e]=o.data,s[e]=o.data},ht=async({fields:t,filterItems:e,originalItems:n})=>{const s=[];for(const o of t)o.dynamicField&&o.dynamicField.dataSource===_.Remote&&s.push(vt({api:o.dynamicField.dataEndpoint,fieldId:o.dynamicField.id,filterItems:e,originalItems:n}));await Promise.all(s)};function yt(t,e,n=null){const s=E(null);return se(()=>{const o=localStorage.getItem(t);if(o){const i=JSON.parse(o);s.value=e.find(c=>c.value===i)||n||e[0]}else s.value=n||e[0]}),he(s,o=>{o&&localStorage.setItem(t,JSON.stringify(o.value))},{deep:!0}),{value:s}}const ft={class:"grid gap-5 grid-cols-12 pb-32"},gt={class:"col-span-12 -my-2 flex justify-end"},Ft={key:0},$t={key:0},wt={key:1},Tt=["for"],kt={key:2},Vt=["for"],xt={key:3},St=["for"],Bt={key:4},Pt=["for"],_t={key:5},Lt=["for"],Ct={key:6},Nt={class:"flex flex-col gap-1"},At={for:"roles"},Ot={key:7},It={class:"flex flex-col gap-1"},Kt={for:"roles"},zt={key:8},Dt={class:"flex flex-col gap-1"},Ut={for:"roles"},Et={key:9},Rt={class:"flex flex-col gap-1"},Mt={for:"roles"},Zt=ye({__name:"HealthInformation",props:{mode:{},columns:{},clinicId:{},modelValue:{},errors:{default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,s=e;n.modelValue?n.modelValue.values||s("update:modelValue",{...n.modelValue,values:{}}):s("update:modelValue",{values:{}});const o=E([]),i=async()=>{var x,S;const{data:b}=await ie.get(`/api/health-information-template-fields/${n.clinicId}/list`);o.value=b.data;const h=new Map;(S=(x=n.modelValue)==null?void 0:x.fields)==null||S.forEach(T=>{h.set(T.field_id,T.value)})},c=E({}),u=E({}),w=fe({}),C=(b,h)=>{const x=(b.query??"").toLowerCase(),S=u.value[h.name]??[];c.value[h.name]=S.filter(T=>String(T[h.labelField]??"").toLowerCase().includes(x))},N=(b,h)=>{b.value},I=(b,h)=>{var S;const x=u.value[h.dynamicField.name]??[];c.value[h.dynamicField.name]=[...x],(S=w[h.dynamicField.name])==null||S.show()},K=()=>{};se(async()=>{var b;await i(),await ht({fields:o.value,filterItems:c.value,originalItems:u.value}),await mt({fields:o.value,modelFields:(b=n.modelValue)==null?void 0:b.fields,formValues:v.value.values,filterItems:c.value})});const J=[{name:Z("All"),value:1},{name:Z("Filled"),value:2}],{value:z}=yt("health_fields_filter",J),oe=b=>{var x;if(console.log(n.modelValue),z.value.value==1||n.mode===Ae.Create)return!0;const h=(x=v.value.values)==null?void 0:x[b.dynamicField.id];return h!=null&&h!==""&&!(Array.isArray(h)&&h.length===0)},v=ge({get:()=>n.modelValue,set:b=>s("update:modelValue",b)});return(b,h)=>{const x=Fe,S=Te,T=ke,le=Ne,B=Se,de=Ve,q=Pe,re=xe,ce=Ce,Q=Le;return r(),m("div",ft,[F("div",gt,[y(x,{modelValue:l(z),"onUpdate:modelValue":h[0]||(h[0]=a=>$e(z)?z.value=a:null),options:J,optionLabel:"name"},null,8,["modelValue"])]),(r(!0),m(j,null,we(l(o),a=>(r(),m("div",{key:a.id,class:G("col-span-"+a.colSpan)},[oe(a)?(r(),m("div",Ft,[a.dynamicField&&a.dynamicField.type===l($).Title?(r(),m("div",$t,[F("label",null,g(a.defaultValue),1)])):p("",!0),a.dynamicField&&a.dynamicField.type===l($).String?(r(),m("div",wt,[y(T,{variant:"on"},{default:f(()=>[y(S,{modelValue:l(v).values[a.dynamicField.id],"onUpdate:modelValue":d=>l(v).values[a.dynamicField.id]=d,id:a.dynamicField.name,name:a.dynamicField.value,invalid:t.errors.hasOwnProperty(a.dynamicField.id),useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","id","name","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,Tt)]),_:2},1024)])):p("",!0),a.dynamicField&&a.dynamicField.type===l($).Number?(r(),m("div",kt,[y(T,{variant:"on"},{default:f(()=>[y(le,{modelValue:l(v).values[a.dynamicField.name],"onUpdate:modelValue":d=>l(v).values[a.dynamicField.name]=d,id:a.dynamicField.name,name:a.dynamicField.name,invalid:t.errors.hasOwnProperty(a.dynamicField.name),useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","id","name","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,Vt)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(r(),V(B,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField&&a.dynamicField.type===l($).Textarea?(r(),m("div",xt,[y(T,{variant:"on"},{default:f(()=>[y(de,{modelValue:l(v).values[a.dynamicField.id],"onUpdate:modelValue":d=>l(v).values[a.dynamicField.id]=d,id:a.dynamicField.name,invalid:t.errors.hasOwnProperty(a.dynamicField.id),rows:"3",fluid:""},null,8,["modelValue","onUpdate:modelValue","id","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,St)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(r(),V(B,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField&&a.dynamicField.type===l($).Date?(r(),m("div",Bt,[y(T,{variant:"on"},{default:f(()=>[y(q,{modelValue:l(v).values[a.dynamicField.name],"onUpdate:modelValue":d=>l(v).values[a.dynamicField.name]=d,name:a.dynamicField.name,id:a.dynamicField.name,invalid:t.errors.hasOwnProperty(a.dynamicField.name),dateOnly:"",fluid:"",dateFormat:"yy-mm-dd"},null,8,["modelValue","onUpdate:modelValue","name","id","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,Pt)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(r(),V(B,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField&&a.dynamicField.type===l($).DateRange?(r(),m("div",_t,[y(T,{variant:"on"},{default:f(()=>[y(q,{modelValue:l(v).values[a.dynamicField.id],"onUpdate:modelValue":d=>l(v).values[a.dynamicField.id]=d,id:a.dynamicField.name,name:a.dynamicField.name,selectionMode:"range",showButtonBar:"",dateFormat:"yy-mm-dd",hideOnRangeSelection:"",class:"w-full !rounded-none",invalid:t.errors.hasOwnProperty(a.dynamicField.id),fluid:""},null,8,["modelValue","onUpdate:modelValue","id","name","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,Lt)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(r(),V(B,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField&&a.dynamicField.type===l($).Select&&a.dynamicField.dataSource===l(_).Local?(r(),m("div",Ct,[F("div",Nt,[y(T,{variant:"on"},{default:f(()=>[y(re,{modelValue:l(v).values[a.dynamicField.id],"onUpdate:modelValue":d=>l(v).values[a.dynamicField.id]=d,options:a.dynamicField.dynamicFieldOptions,optionLabel:"label",optionValue:"id",dataKey:"id",filter:!1,invalid:t.errors.hasOwnProperty(a.dynamicField.id),fluid:""},null,8,["modelValue","onUpdate:modelValue","options","invalid"]),F("label",At,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.id)?(r(),V(B,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.id][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0),a.dynamicField&&a.dynamicField.type===l($).MultiSelect&&a.dynamicField.dataSource===l(_).Local?(r(),m("div",Ot,[F("div",It,[y(T,{variant:"on"},{default:f(()=>[y(ce,{modelValue:l(v).values[a.dynamicField.id],"onUpdate:modelValue":d=>l(v).values[a.dynamicField.id]=d,fluid:"",id:a.id,options:a.dynamicField.dynamicFieldOptions,optionLabel:"label",optionValue:"id",invalid:t.errors.hasOwnProperty(a.dynamicField.id),dataKey:"id",filter:!1,display:"chip"},null,8,["modelValue","onUpdate:modelValue","id","options","invalid"]),F("label",Kt,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.id)?(r(),V(B,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.id][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0),a.dynamicField&&a.dynamicField.type===l($).MultiSelect&&a.dynamicField.dataSource===l(_).Remote?(r(),m("div",zt,[F("div",Dt,[y(T,{variant:"on"},{default:f(()=>[y(Q,{ref_for:!0,ref:d=>l(w)[a.dynamicField.name]=d,multiple:"","force-selection":!0,"complete-on-focus":!0,"auto-option-focus":!0,fluid:"",modelValue:l(v).values[a.dynamicField.id],"onUpdate:modelValue":d=>l(v).values[a.dynamicField.id]=d,id:a.id,suggestions:l(c)[a.dynamicField.id]??[],optionValue:"id",optionLabel:"name",dataKey:"id",invalid:t.errors.hasOwnProperty(a.dynamicField.id),onComplete:d=>C(d,a),onItemSelect:d=>N(d,a),onClick:d=>I(d,a),onKeydown:X(K,["enter"])},null,8,["modelValue","onUpdate:modelValue","id","suggestions","invalid","onComplete","onItemSelect","onClick"]),F("label",Ut,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.id)?(r(),V(B,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.id][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0),a.dynamicField&&a.dynamicField.type===l($).Select&&a.dynamicField.dataSource===l(_).Remote?(r(),m("div",Et,[F("div",Rt,[y(T,{variant:"on"},{default:f(()=>[y(Q,{ref_for:!0,ref:d=>l(w)[a.dynamicField.name]=d,"force-selection":!0,"complete-on-focus":!0,"auto-option-focus":!0,fluid:"",modelValue:l(v).values[a.dynamicField.name],"onUpdate:modelValue":d=>l(v).values[a.dynamicField.name]=d,id:a.id,suggestions:l(c)[a.dynamicField.name]??[],optionLabel:a.dynamicField.labelField,optionValue:a.dynamicField.valueField,dataKey:"id",invalid:t.errors.hasOwnProperty(a.dynamicField.name),onComplete:d=>C(d,a),onItemSelect:d=>N(d,a),onClick:d=>I(d,a),onKeydown:X(K,["enter"])},null,8,["modelValue","onUpdate:modelValue","id","suggestions","optionLabel","optionValue","invalid","onComplete","onItemSelect","onClick"]),F("label",Mt,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(r(),V(B,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0)])):p("",!0)],2))),128))])}}});export{Zt as _,ze as a,it as b,Xe as c,ct as d,Me as s};
