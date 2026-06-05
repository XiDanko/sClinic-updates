import{W as I,Y as ee,Z as N,$ as te,aa as T,aE as ae,a7 as ue,aF as D,a9 as U,ac as ne,D as M,a as r,z as B,w as f,af as O,ad as W,H as G,aG as H,aH as be,aI as pe,aJ as E,a4 as ve,aK as Y,c as v,x as p,b as F,F as j,ao as me,j as ie,i as se,G as he,r as R,d as ye,k as Z,N as fe,g as y,av as ge,as as Fe,e as d,K as $e,t as g,p as we,n as ke,J as P,M as Te,y as Be,q as X,aL as Ve,I as xe}from"./main-DrkuvDRc.js";import{a as Se,s as Pe}from"./index-DaUfQnCg.js";import{s as _e}from"./index-BQqP_Uie.js";import{s as Oe}from"./index-VUSTvXcO.js";import{s as Le}from"./index-mEP7K7Gs.js";import{s as Ce}from"./index-C0rarFX-.js";import{F as Ie}from"./form-mode-C9Uh-S2W.js";import{D as _,a as $}from"./data-source-dynamic-field-NFjE1Vbj.js";var Ne={root:function(e){var n=e.instance,s=e.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":s.disabled}]}},Ae=I.extend({name:"tab",classes:Ne}),Ke={name:"BaseTab",extends:N,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Ae,provide:function(){return{$pcTab:this,$parentInstance:this}}},ze={name:"Tab",extends:Ke,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var n=this.findNextTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var n=this.findPrevTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstTab();this.changeFocusedTab(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastTab();this.changeFocusedTab(e,n),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue()},findNextTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?e:e.nextElementSibling;return s?D(s,"data-p-disabled")||D(s,"data-pc-section")==="activebar"?this.findNextTab(s):U(s,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?e:e.previousElementSibling;return s?D(s,"data-p-disabled")||D(s,"data-pc-section")==="activebar"?this.findPrevTab(s):U(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,n){ue(n),this.scrollInView(n)},scrollInView:function(e){var n;e==null||(n=e.scrollIntoView)===null||n===void 0||n.call(e,{block:"nearest"})}},computed:{active:function(){var e;return ae((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return T(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return te({active:this.active})}},directives:{ripple:ee}};function De(t,e,n,s,o,i){var c=ne("ripple");return t.asChild?O(t.$slots,"default",{key:1,dataP:i.dataP,class:G(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):M((r(),B(W(t.as),T({key:0,class:t.cx("root"),"data-p":i.dataP,onClick:i.onClick},i.attrs),{default:f(function(){return[O(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[c]])}ze.render=De;var Ee={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Re=I.extend({name:"tablist",classes:Ee}),Ue={name:"BaseTabList",extends:N,props:{},style:Re,provide:function(){return{$pcTabList:this,$parentInstance:this}}},Me={name:"TabList",extends:Ue,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,inkBarObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar(),this.bindInkBarObserver()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar(),e.bindInkBarObserver()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver(),this.unbindInkBarObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),s=H(e)-n,o=Math.abs(e.scrollLeft),i=s*.8,c=o-i,u=Math.max(c,0);e.scrollLeft=Y(e)?-1*u:u},onNextButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),s=H(e)-n,o=Math.abs(e.scrollLeft),i=s*.8,c=o+i,u=e.scrollWidth-s,w=Math.min(c,u);e.scrollLeft=Y(e)?-1*w:w},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},bindInkBarObserver:function(){var e=this;this.unbindInkBarObserver();var n=this.$refs.content,s=U(n,'[data-pc-name="tab"][data-p-active="true"]');s&&(this.inkBarObserver=new ResizeObserver(function(){return e.updateInkBar()}),this.inkBarObserver.observe(s))},unbindInkBarObserver:function(){var e;(e=this.inkBarObserver)===null||e===void 0||e.disconnect(),this.inkBarObserver=void 0},updateInkBar:function(){var e=this.$refs,n=e.content,s=e.inkbar,o=e.tabs;if(s){var i=U(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=pe(i)+"px",s.style.top=E(i).top-E(o).top+"px"):(s.style.width=ve(i)+"px",s.style.left=E(i).left-E(o).left+"px")}},updateButtonState:function(){var e=this.$refs,n=e.list,s=e.content,o=s.scrollTop,i=s.scrollWidth,c=s.scrollHeight,u=s.offsetWidth,w=s.offsetHeight,L=Math.abs(s.scrollLeft),C=[H(s),be(s)],A=C[0],K=C[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=o!==0,this.isNextButtonEnabled=n.offsetHeight>=w&&parseInt(o)!==c-K):(this.isPrevButtonEnabled=L!==0,this.isNextButtonEnabled=n.offsetWidth>=u&&parseInt(L)!==i-A)},getVisibleButtonWidths:function(){var e=this.$refs,n=e.prevButton,s=e.nextButton,o=0;return this.showNavigators&&(o=((n==null?void 0:n.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),o}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return te({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:Se,ChevronRightIcon:_e},directives:{ripple:ee}},We=["data-p"],He=["aria-label","tabindex"],je=["data-p"],Ge=["aria-orientation"],Je=["aria-label","tabindex"];function qe(t,e,n,s,o,i){var c=ne("ripple");return r(),v("div",T({ref:"list",class:t.cx("root"),"data-p":i.dataP},t.ptmi("root")),[i.showNavigators&&o.isPrevButtonEnabled?M((r(),v("button",T({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":i.prevButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),B(W(i.templates.previcon||"ChevronLeftIcon"),T({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,He)),[[c]]):p("",!0),F("div",T({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)}),"data-p":i.dataP},t.ptm("content")),[F("div",T({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":i.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[O(t.$slots,"default"),F("span",T({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Ge)],16,je),i.showNavigators&&o.isNextButtonEnabled?M((r(),v("button",T({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":i.nextButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),B(W(i.templates.nexticon||"ChevronRightIcon"),T({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,Je)),[[c]]):p("",!0)],16,We)}Me.render=qe;var Qe={root:function(e){var n=e.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},Ye=I.extend({name:"tabpanel",classes:Qe}),Ze={name:"BaseTabPanel",extends:N,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Ye,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},Xe={name:"TabPanel",extends:Ze,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var e;return ae((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},attrs:function(){return T(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var e;return{id:this.id,tabindex:(e=this.$pcTabs)===null||e===void 0?void 0:e.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function et(t,e,n,s,o,i){var c,u;return i.$pcTabs?(r(),v(j,{key:1},[t.asChild?O(t.$slots,"default",{key:1,class:G(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(r(),v(j,{key:0},[!((c=i.$pcTabs)!==null&&c!==void 0&&c.lazy)||i.active?M((r(),B(W(t.as),T({key:0,class:t.cx("root")},i.attrs),{default:f(function(){return[O(t.$slots,"default")]}),_:3},16,["class"])),[[me,(u=i.$pcTabs)!==null&&u!==void 0&&u.lazy?!0:i.active]]):p("",!0)],64))],64)):O(t.$slots,"default",{key:0})}Xe.render=et;var tt={root:"p-tabpanels"},at=I.extend({name:"tabpanels",classes:tt}),nt={name:"BaseTabPanels",extends:N,props:{},style:at,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},it={name:"TabPanels",extends:nt,inheritAttrs:!1};function st(t,e,n,s,o,i){return r(),v("div",T({class:t.cx("root"),role:"presentation"},t.ptmi("root")),[O(t.$slots,"default")],16)}it.render=st;var ot=`
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
`,dt={root:function(e){var n=e.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},lt=I.extend({name:"tabs",style:ot,classes:dt}),rt={name:"BaseTabs",extends:N,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:lt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},ct={name:"Tabs",extends:rt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function ut(t,e,n,s,o,i){return r(),v("div",T({class:t.cx("root")},t.ptmi("root")),[O(t.$slots,"default")],16)}ct.render=ut;const bt=(t,e,n)=>{if(n==null)return null;const s=Number(e);return(t[s]??[]).find(i=>i.id===n)??null},pt=(t,e)=>e==null?null:t.find(n=>n.id===e)??null,vt=async({fields:t,modelFields:e=[],formValues:n,filterItems:s})=>{for(const o of t){let i;if(o.dynamicField){i=o.dynamicField.id;let c=!1;for(const u of e)if(u.field_id===i){if(c=!0,o.dynamicField&&o.dynamicField.dataSource===_.Remote){Array.isArray(n[i])||(n[i]=[]);const w=bt(s,u.field_id,u.optionId);w!==null&&n[i].push(w)}if(o.dynamicField.dataSource===_.Local&&o.dynamicField.type==$.MultiSelect){Array.isArray(n[i])||(n[i]=[]);const w=pt(o.dynamicField.dynamicFieldOptions,u.optionId);w!==null&&n[i].push(w.id)}if(o.dynamicField.dataSource===_.Local&&o.dynamicField.type==$.Select&&(n[i]=u.optionId),o.dynamicField.type===$.String&&(n[i]=u.value),o.dynamicField.type===$.Textarea&&(n[i]=u.value),o.dynamicField.type===$.Title&&(n[i]=u.defaultValue),o.dynamicField.type===$.DateRange){console.log("DatarangDatarang");const w=u.value.split(",").map(L=>new Date(L));n[i]=w}}!c&&o.dynamicField&&o.dynamicField.type===$.String&&(n[i]=o.defaultValue),!c&&o.dynamicField&&o.dynamicField.type===$.Title&&(console.log("field.defaultValue",o.defaultValue),n[i]=o.defaultValue)}}},mt=async({api:t,fieldId:e,filterItems:n,originalItems:s})=>{const{data:o}=await ie.get(`/api/${t}`);n[e]=o.data,s[e]=o.data},ht=async({fields:t,filterItems:e,originalItems:n})=>{const s=[];for(const o of t)o.dynamicField&&o.dynamicField.dataSource===_.Remote&&s.push(mt({api:o.dynamicField.dataEndpoint,fieldId:o.dynamicField.id,filterItems:e,originalItems:n}));await Promise.all(s)};function yt(t,e,n=null){const s=R(null);return se(()=>{const o=localStorage.getItem(t);if(o){const i=JSON.parse(o);s.value=e.find(c=>c.value===i)||n||e[0]}else s.value=n||e[0]}),he(s,o=>{o&&localStorage.setItem(t,JSON.stringify(o.value))},{deep:!0}),{value:s}}const ft={class:"grid gap-5 grid-cols-12 pb-32"},gt={class:"col-span-12 -my-2 flex justify-end"},Ft={key:0},$t={key:0},wt={key:1},kt=["for"],Tt={key:2},Bt=["for"],Vt={key:3},xt=["for"],St={key:4},Pt=["for"],_t={key:5},Ot=["for"],Lt={key:6},Ct={class:"flex flex-col gap-1"},It={for:"roles"},Nt={key:7},At={class:"flex flex-col gap-1"},Kt={for:"roles"},zt={key:8},Dt={class:"flex flex-col gap-1"},Et={for:"roles"},Rt={key:9},Ut={class:"flex flex-col gap-1"},Mt={for:"roles"},Zt=ye({__name:"HealthInformation",props:{mode:{},columns:{},clinicId:{},modelValue:{},errors:{default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,s=e;n.modelValue?n.modelValue.values||s("update:modelValue",{...n.modelValue,values:{}}):s("update:modelValue",{values:{}});const o=R([]),i=async()=>{var V,x;const{data:b}=await ie.get(`/api/health-information-template-fields/${n.clinicId}/list`);o.value=b.data;const h=new Map;(x=(V=n.modelValue)==null?void 0:V.fields)==null||x.forEach(k=>{h.set(k.field_id,k.value)})},c=R({}),u=R({}),w=Ve({}),L=(b,h)=>{const V=(b.query??"").toLowerCase(),x=u.value[h.name]??[];c.value[h.name]=x.filter(k=>String(k[h.labelField]??"").toLowerCase().includes(V))},C=(b,h)=>{b.value},A=(b,h)=>{var x;const V=u.value[h.dynamicField.name]??[];c.value[h.dynamicField.name]=[...V],(x=w[h.dynamicField.name])==null||x.show()},K=()=>{};se(async()=>{var b;await i(),await ht({fields:o.value,filterItems:c.value,originalItems:u.value}),await vt({fields:o.value,modelFields:(b=n.modelValue)==null?void 0:b.fields,formValues:m.value.values,filterItems:c.value})});const J=[{name:Z("All"),value:1},{name:Z("Filled"),value:2}],{value:z}=yt("health_fields_filter",J),oe=b=>{var V;if(console.log(n.modelValue),z.value.value==1||n.mode===Ie.Create)return!0;const h=(V=m.value.values)==null?void 0:V[b.dynamicField.id];return h!=null&&h!==""&&!(Array.isArray(h)&&h.length===0)},m=fe({get:()=>n.modelValue,set:b=>s("update:modelValue",b)});return(b,h)=>{const V=ge,x=we,k=ke,de=Ce,S=xe,le=Te,q=Pe,re=Be,ce=Le,Q=Oe;return r(),v("div",ft,[F("div",gt,[y(V,{modelValue:d(z),"onUpdate:modelValue":h[0]||(h[0]=a=>Fe(z)?z.value=a:null),options:J,optionLabel:"name"},null,8,["modelValue"])]),(r(!0),v(j,null,$e(d(o),a=>(r(),v("div",{key:a.id,class:G("col-span-"+a.colSpan)},[oe(a)?(r(),v("div",Ft,[a.dynamicField&&a.dynamicField.type===d($).Title?(r(),v("div",$t,[F("label",null,g(a.defaultValue),1)])):p("",!0),a.dynamicField&&a.dynamicField.type===d($).String?(r(),v("div",wt,[y(k,{variant:"on"},{default:f(()=>[y(x,{modelValue:d(m).values[a.dynamicField.id],"onUpdate:modelValue":l=>d(m).values[a.dynamicField.id]=l,id:a.dynamicField.name,name:a.dynamicField.value,invalid:t.errors.hasOwnProperty(a.dynamicField.id),useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","id","name","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,kt)]),_:2},1024)])):p("",!0),a.dynamicField&&a.dynamicField.type===d($).Number?(r(),v("div",Tt,[y(k,{variant:"on"},{default:f(()=>[y(de,{modelValue:d(m).values[a.dynamicField.name],"onUpdate:modelValue":l=>d(m).values[a.dynamicField.name]=l,id:a.dynamicField.name,name:a.dynamicField.name,invalid:t.errors.hasOwnProperty(a.dynamicField.name),useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","id","name","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,Bt)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(r(),B(S,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField&&a.dynamicField.type===d($).Textarea?(r(),v("div",Vt,[y(k,{variant:"on"},{default:f(()=>[y(le,{modelValue:d(m).values[a.dynamicField.id],"onUpdate:modelValue":l=>d(m).values[a.dynamicField.id]=l,id:a.dynamicField.name,invalid:t.errors.hasOwnProperty(a.dynamicField.id),rows:"3",fluid:""},null,8,["modelValue","onUpdate:modelValue","id","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,xt)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(r(),B(S,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField&&a.dynamicField.type===d($).Date?(r(),v("div",St,[y(k,{variant:"on"},{default:f(()=>[y(q,{modelValue:d(m).values[a.dynamicField.name],"onUpdate:modelValue":l=>d(m).values[a.dynamicField.name]=l,name:a.dynamicField.name,id:a.dynamicField.name,invalid:t.errors.hasOwnProperty(a.dynamicField.name),dateOnly:"",fluid:"",dateFormat:"yy-mm-dd"},null,8,["modelValue","onUpdate:modelValue","name","id","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,Pt)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(r(),B(S,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField&&a.dynamicField.type===d($).DateRange?(r(),v("div",_t,[y(k,{variant:"on"},{default:f(()=>[y(q,{modelValue:d(m).values[a.dynamicField.id],"onUpdate:modelValue":l=>d(m).values[a.dynamicField.id]=l,id:a.dynamicField.name,name:a.dynamicField.name,selectionMode:"range",showButtonBar:"",dateFormat:"yy-mm-dd",hideOnRangeSelection:"",class:"w-full !rounded-none",invalid:t.errors.hasOwnProperty(a.dynamicField.id),fluid:""},null,8,["modelValue","onUpdate:modelValue","id","name","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,Ot)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(r(),B(S,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField&&a.dynamicField.type===d($).Select&&a.dynamicField.dataSource===d(_).Local?(r(),v("div",Lt,[F("div",Ct,[y(k,{variant:"on"},{default:f(()=>[y(re,{modelValue:d(m).values[a.dynamicField.id],"onUpdate:modelValue":l=>d(m).values[a.dynamicField.id]=l,options:a.dynamicField.dynamicFieldOptions,optionLabel:"label",optionValue:"id",dataKey:"id",filter:!1,invalid:t.errors.hasOwnProperty(a.dynamicField.id),fluid:""},null,8,["modelValue","onUpdate:modelValue","options","invalid"]),F("label",It,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.id)?(r(),B(S,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.id][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0),a.dynamicField&&a.dynamicField.type===d($).MultiSelect&&a.dynamicField.dataSource===d(_).Local?(r(),v("div",Nt,[F("div",At,[y(k,{variant:"on"},{default:f(()=>[y(ce,{modelValue:d(m).values[a.dynamicField.id],"onUpdate:modelValue":l=>d(m).values[a.dynamicField.id]=l,fluid:"",id:a.id,options:a.dynamicField.dynamicFieldOptions,optionLabel:"label",optionValue:"id",invalid:t.errors.hasOwnProperty(a.dynamicField.id),dataKey:"id",filter:!1,display:"chip"},null,8,["modelValue","onUpdate:modelValue","id","options","invalid"]),F("label",Kt,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.id)?(r(),B(S,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.id][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0),a.dynamicField&&a.dynamicField.type===d($).MultiSelect&&a.dynamicField.dataSource===d(_).Remote?(r(),v("div",zt,[F("div",Dt,[y(k,{variant:"on"},{default:f(()=>[y(Q,{ref_for:!0,ref:l=>d(w)[a.dynamicField.name]=l,multiple:"","force-selection":!0,"complete-on-focus":!0,"auto-option-focus":!0,fluid:"",modelValue:d(m).values[a.dynamicField.id],"onUpdate:modelValue":l=>d(m).values[a.dynamicField.id]=l,id:a.id,suggestions:d(c)[a.dynamicField.id]??[],optionValue:"id",optionLabel:"name",dataKey:"id",invalid:t.errors.hasOwnProperty(a.dynamicField.id),onComplete:l=>L(l,a),onItemSelect:l=>C(l,a),onClick:l=>A(l,a),onKeydown:X(K,["enter"])},null,8,["modelValue","onUpdate:modelValue","id","suggestions","invalid","onComplete","onItemSelect","onClick"]),F("label",Et,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.id)?(r(),B(S,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.id][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0),a.dynamicField&&a.dynamicField.type===d($).Select&&a.dynamicField.dataSource===d(_).Remote?(r(),v("div",Rt,[F("div",Ut,[y(k,{variant:"on"},{default:f(()=>[y(Q,{ref_for:!0,ref:l=>d(w)[a.dynamicField.name]=l,"force-selection":!0,"complete-on-focus":!0,"auto-option-focus":!0,fluid:"",modelValue:d(m).values[a.dynamicField.name],"onUpdate:modelValue":l=>d(m).values[a.dynamicField.name]=l,id:a.id,suggestions:d(c)[a.dynamicField.name]??[],optionLabel:a.dynamicField.labelField,optionValue:a.dynamicField.valueField,dataKey:"id",invalid:t.errors.hasOwnProperty(a.dynamicField.name),onComplete:l=>L(l,a),onItemSelect:l=>C(l,a),onClick:l=>A(l,a),onKeydown:X(K,["enter"])},null,8,["modelValue","onUpdate:modelValue","id","suggestions","optionLabel","optionValue","invalid","onComplete","onItemSelect","onClick"]),F("label",Mt,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(r(),B(S,{key:0,severity:"error",variant:"simple",size:"small"},{default:f(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0)])):p("",!0)],2))),128))])}}});export{Zt as _,ze as a,it as b,Xe as c,ct as d,Me as s};
