import{V as O,X,Y as A,Z as Y,a9 as w,aD as Z,a6 as ie,a8 as W,aE as z,ab as ee,D as U,ae as L,z as k,a as d,w as v,ac as D,J as j,aF as R,aG as se,aH as oe,aI as E,a3 as le,aJ as J,c as h,p,b as F,F as H,ao as re,j as te,d as de,r as M,aK as ce,i as ue,G as be,M as pe,e as l,g as y,q as me,t as g,n as ve,L as P,y as he,v as Q,K as ye}from"./main-DWXfXhIh.js";import{a as fe,s as ge}from"./index-BuQ2x2fR.js";import{s as Fe}from"./index-BTXtCahF.js";import{s as $e}from"./index-vgwAXpRY.js";import{s as we}from"./index-B4rY00Ox.js";import{s as Te}from"./index-BN70oBkr.js";import{D as S,a as T}from"./data-source-dynamic-field-dKpXhKWR.js";var ke={root:function(e){var n=e.instance,s=e.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":s.disabled}]}},Ve=O.extend({name:"tab",classes:ke}),Be={name:"BaseTab",extends:A,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Ve,provide:function(){return{$pcTab:this,$parentInstance:this}}},xe={name:"Tab",extends:Be,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var n=this.findNextTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var n=this.findPrevTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstTab();this.changeFocusedTab(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastTab();this.changeFocusedTab(e,n),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue()},findNextTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?e:e.nextElementSibling;return s?z(s,"data-p-disabled")||z(s,"data-pc-section")==="activebar"?this.findNextTab(s):W(s,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?e:e.previousElementSibling;return s?z(s,"data-p-disabled")||z(s,"data-pc-section")==="activebar"?this.findPrevTab(s):W(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,n){ie(n),this.scrollInView(n)},scrollInView:function(e){var n;e==null||(n=e.scrollIntoView)===null||n===void 0||n.call(e,{block:"nearest"})}},computed:{active:function(){var e;return Z((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return w(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return Y({active:this.active})}},directives:{ripple:X}};function Pe(t,e,n,s,o,i){var c=ee("ripple");return t.asChild?L(t.$slots,"default",{key:1,dataP:i.dataP,class:j(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):U((d(),k(D(t.as),w({key:0,class:t.cx("root"),"data-p":i.dataP,onClick:i.onClick},i.attrs),{default:v(function(){return[L(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[c]])}xe.render=Pe;var Se={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Le=O.extend({name:"tablist",classes:Se}),Ce={name:"BaseTabList",extends:A,props:{},style:Le,provide:function(){return{$pcTabList:this,$parentInstance:this}}},_e={name:"TabList",extends:Ce,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),s=R(e)-n,o=Math.abs(e.scrollLeft),i=s*.8,c=o-i,u=Math.max(c,0);e.scrollLeft=J(e)?-1*u:u},onNextButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),s=R(e)-n,o=Math.abs(e.scrollLeft),i=s*.8,c=o+i,u=e.scrollWidth-s,$=Math.min(c,u);e.scrollLeft=J(e)?-1*$:$},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,n=e.content,s=e.inkbar,o=e.tabs;if(s){var i=W(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=oe(i)+"px",s.style.top=E(i).top-E(o).top+"px"):(s.style.width=le(i)+"px",s.style.left=E(i).left-E(o).left+"px")}},updateButtonState:function(){var e=this.$refs,n=e.list,s=e.content,o=s.scrollTop,i=s.scrollWidth,c=s.scrollHeight,u=s.offsetWidth,$=s.offsetHeight,_=Math.abs(s.scrollLeft),N=[R(s),se(s)],I=N[0],K=N[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=o!==0,this.isNextButtonEnabled=n.offsetHeight>=$&&parseInt(o)!==c-K):(this.isPrevButtonEnabled=_!==0,this.isNextButtonEnabled=n.offsetWidth>=u&&parseInt(_)!==i-I)},getVisibleButtonWidths:function(){var e=this.$refs,n=e.prevButton,s=e.nextButton,o=0;return this.showNavigators&&(o=((n==null?void 0:n.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),o}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return Y({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:fe,ChevronRightIcon:Fe},directives:{ripple:X}},Ne=["data-p"],Oe=["aria-label","tabindex"],Ae=["data-p"],Ie=["aria-orientation"],Ke=["aria-label","tabindex"];function ze(t,e,n,s,o,i){var c=ee("ripple");return d(),h("div",w({ref:"list",class:t.cx("root"),"data-p":i.dataP},t.ptmi("root")),[i.showNavigators&&o.isPrevButtonEnabled?U((d(),h("button",w({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":i.prevButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(d(),k(D(i.templates.previcon||"ChevronLeftIcon"),w({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Oe)),[[c]]):p("",!0),F("div",w({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)}),"data-p":i.dataP},t.ptm("content")),[F("div",w({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":i.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[L(t.$slots,"default"),F("span",w({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Ie)],16,Ae),i.showNavigators&&o.isNextButtonEnabled?U((d(),h("button",w({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":i.nextButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(d(),k(D(i.templates.nexticon||"ChevronRightIcon"),w({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,Ke)),[[c]]):p("",!0)],16,Ne)}_e.render=ze;var Ee={root:function(e){var n=e.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},Ue=O.extend({name:"tabpanel",classes:Ee}),De={name:"BaseTabPanel",extends:A,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Ue,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},Re={name:"TabPanel",extends:De,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var e;return Z((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},attrs:function(){return w(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var e;return{id:this.id,tabindex:(e=this.$pcTabs)===null||e===void 0?void 0:e.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Me(t,e,n,s,o,i){var c,u;return i.$pcTabs?(d(),h(H,{key:1},[t.asChild?L(t.$slots,"default",{key:1,class:j(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(d(),h(H,{key:0},[!((c=i.$pcTabs)!==null&&c!==void 0&&c.lazy)||i.active?U((d(),k(D(t.as),w({key:0,class:t.cx("root")},i.attrs),{default:v(function(){return[L(t.$slots,"default")]}),_:3},16,["class"])),[[re,(u=i.$pcTabs)!==null&&u!==void 0&&u.lazy?!0:i.active]]):p("",!0)],64))],64)):L(t.$slots,"default",{key:0})}Re.render=Me;var We={root:"p-tabpanels"},He=O.extend({name:"tabpanels",classes:We}),je={name:"BaseTabPanels",extends:A,props:{},style:He,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},Ge={name:"TabPanels",extends:je,inheritAttrs:!1};function qe(t,e,n,s,o,i){return d(),h("div",w({class:t.cx("root"),role:"presentation"},t.ptmi("root")),[L(t.$slots,"default")],16)}Ge.render=qe;var Je=`
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
`,Qe={root:function(e){var n=e.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},Xe=O.extend({name:"tabs",style:Je,classes:Qe}),Ye={name:"BaseTabs",extends:A,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Xe,provide:function(){return{$pcTabs:this,$parentInstance:this}}},Ze={name:"Tabs",extends:Ye,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function et(t,e,n,s,o,i){return d(),h("div",w({class:t.cx("root")},t.ptmi("root")),[L(t.$slots,"default")],16)}Ze.render=et;const tt=(t,e,n)=>{if(n==null)return null;const s=Number(e);return(t[s]??[]).find(i=>i.id===n)??null},at=(t,e)=>e==null?null:t.find(n=>n.id===e)??null,nt=async({fields:t,modelFields:e=[],formValues:n,filterItems:s})=>{for(const o of t){const i=o.dynamicField.id;let c=!1;for(const u of e)if(u.field_id===i){if(c=!0,o.dynamicField.dataSource===S.Remote){Array.isArray(n[i])||(n[i]=[]);const $=tt(s,u.field_id,u.optionId);$!==null&&n[i].push($)}if(o.dynamicField.dataSource===S.Local&&o.dynamicField.type==T.MultiSelect){Array.isArray(n[i])||(n[i]=[]);const $=at(o.dynamicField.dynamicFieldOptions,u.optionId);$!==null&&n[i].push($.id)}o.dynamicField.dataSource===S.Local&&o.dynamicField.type==T.Select&&(n[i]=u.optionId),o.dynamicField.type===T.String&&(n[i]=u.value)}!c&&o.dynamicField.type===T.String&&(n[i]=o.defaultValue)}},it=async({api:t,fieldId:e,filterItems:n,originalItems:s})=>{const{data:o}=await te.get(`/api/${t}`);n[e]=o.data,s[e]=o.data},st=async({fields:t,filterItems:e,originalItems:n})=>{const s=[];for(const o of t)o.dynamicField.dataSource===S.Remote&&s.push(it({api:o.dynamicField.dataEndpoint,fieldId:o.dynamicField.id,filterItems:e,originalItems:n}));await Promise.all(s)},ot={class:"grid gap-5 grid-cols-12"},lt={key:0},rt=["for"],dt={key:1},ct=["for"],ut={key:2},bt=["for"],pt={key:3},mt=["for"],vt={key:4},ht=["for"],yt={key:5},ft={class:"flex flex-col gap-1"},gt={for:"roles"},Ft={key:6},$t={class:"flex flex-col gap-1"},wt={for:"roles"},Tt={key:7},kt={class:"flex flex-col gap-1"},Vt={for:"roles"},Bt={key:8},xt={class:"flex flex-col gap-1"},Pt={for:"roles"},It=de({__name:"HealthInformation",props:{mode:{},columns:{},clinicId:{},modelValue:{},errors:{default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,s=e;n.modelValue?n.modelValue.values||s("update:modelValue",{...n.modelValue,values:{}}):s("update:modelValue",{values:{}});const o=M([]),i=async()=>{var B,f;const{data:b}=await te.get(`/api/health-information-template-fields/${n.clinicId}/list`);o.value=b.data;const V=new Map;(f=(B=n.modelValue)==null?void 0:B.fields)==null||f.forEach(C=>{V.set(C.field_id,C.value)})},c=M({}),u=M({}),$=ce({}),_=(b,V)=>{const B=(b.query??"").toLowerCase(),f=u.value[V.name]??[];c.value[V.name]=f.filter(C=>String(C[V.labelField]??"").toLowerCase().includes(B))},N=(b,V)=>{b.value},I=(b,V)=>{var f;const B=u.value[V.dynamicField.name]??[];c.value[V.dynamicField.name]=[...B],(f=$[V.dynamicField.name])==null||f.show()},K=()=>{};ue(async()=>{var b;await i(),await st({fields:o.value,filterItems:c.value,originalItems:u.value}),await nt({fields:o.value,modelFields:(b=n.modelValue)==null?void 0:b.fields,formValues:m.value.values,filterItems:c.value})});const m=be({get:()=>n.modelValue,set:b=>s("update:modelValue",b)});return(b,V)=>{const B=me,f=ve,C=Te,x=ye,G=ge,ae=he,ne=we,q=$e;return d(),h("div",ot,[(d(!0),h(H,null,pe(l(o),a=>(d(),h("div",{key:a.id,class:j("col-span-"+a.colSpan)},[a.dynamicField.type===l(T).String?(d(),h("div",lt,[y(f,{variant:"on"},{default:v(()=>[y(B,{modelValue:l(m).values[a.dynamicField.id],"onUpdate:modelValue":r=>l(m).values[a.dynamicField.id]=r,id:a.dynamicField.name,name:a.dynamicField.value,invalid:t.errors.hasOwnProperty(a.dynamicField.id),useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","id","name","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,rt)]),_:2},1024)])):p("",!0),a.dynamicField.type===l(T).Number?(d(),h("div",dt,[y(f,{variant:"on"},{default:v(()=>[y(C,{modelValue:l(m).values[a.dynamicField.name],"onUpdate:modelValue":r=>l(m).values[a.dynamicField.name]=r,id:a.dynamicField.name,name:a.dynamicField.name,invalid:t.errors.hasOwnProperty(a.dynamicField.name),useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","id","name","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,ct)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(d(),k(x,{key:0,severity:"error",variant:"simple",size:"small"},{default:v(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField.type===l(T).Text?(d(),h("div",ut,[y(f,{variant:"on"},{default:v(()=>[y(B,{modelValue:l(m).values[a.dynamicField.name],"onUpdate:modelValue":r=>l(m).values[a.dynamicField.name]=r,id:a.dynamicField.name,name:a.dynamicField.name,invalid:t.errors.hasOwnProperty(a.dynamicField.name),useGrouping:!1,fluid:""},null,8,["modelValue","onUpdate:modelValue","id","name","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,bt)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(d(),k(x,{key:0,severity:"error",variant:"simple",size:"small"},{default:v(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField.type===l(T).Date?(d(),h("div",pt,[y(f,{variant:"on"},{default:v(()=>[y(G,{modelValue:l(m).values[a.dynamicField.name],"onUpdate:modelValue":r=>l(m).values[a.dynamicField.name]=r,name:a.dynamicField.name,id:a.dynamicField.name,invalid:t.errors.hasOwnProperty(a.dynamicField.name),dateOnly:"",fluid:"",dateFormat:"yy-mm-dd"},null,8,["modelValue","onUpdate:modelValue","name","id","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,mt)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(d(),k(x,{key:0,severity:"error",variant:"simple",size:"small"},{default:v(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField.type===l(T).DateRange?(d(),h("div",vt,[y(f,{variant:"on"},{default:v(()=>[y(G,{modelValue:l(m).values[a.dynamicField.name],"onUpdate:modelValue":r=>l(m).values[a.dynamicField.name]=r,id:a.dynamicField.name,name:a.dynamicField.name,selectionMode:"range",showButtonBar:"",dateFormat:"yy-mm-dd",hideOnRangeSelection:"",class:"w-full !rounded-none",invalid:t.errors.hasOwnProperty(a.dynamicField.name),fluid:""},null,8,["modelValue","onUpdate:modelValue","id","name","invalid"]),F("label",{for:a.dynamicField.name},g(b.$t(a.dynamicField.displayName)),9,ht)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(d(),k(x,{key:0,severity:"error",variant:"simple",size:"small"},{default:v(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])):p("",!0),a.dynamicField.type===l(T).Select&&a.dynamicField.dataSource===l(S).Local?(d(),h("div",yt,[F("div",ft,[y(f,{variant:"on"},{default:v(()=>[y(ae,{modelValue:l(m).values[a.dynamicField.id],"onUpdate:modelValue":r=>l(m).values[a.dynamicField.id]=r,options:a.dynamicField.dynamicFieldOptions,optionLabel:"label",optionValue:"id",dataKey:"id",filter:!1,invalid:t.errors.hasOwnProperty(a.dynamicField.id),fluid:""},null,8,["modelValue","onUpdate:modelValue","options","invalid"]),F("label",gt,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.id)?(d(),k(x,{key:0,severity:"error",variant:"simple",size:"small"},{default:v(()=>[P(g(t.errors[a.dynamicField.id][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0),a.dynamicField.type===l(T).MultiSelect&&a.dynamicField.dataSource===l(S).Local?(d(),h("div",Ft,[F("div",$t,[y(f,{variant:"on"},{default:v(()=>[y(ne,{modelValue:l(m).values[a.dynamicField.id],"onUpdate:modelValue":r=>l(m).values[a.dynamicField.id]=r,fluid:"",id:a.id,options:a.dynamicField.dynamicFieldOptions,optionLabel:"label",optionValue:"id",invalid:t.errors.hasOwnProperty(a.dynamicField.id),dataKey:"id",filter:!1,display:"chip"},null,8,["modelValue","onUpdate:modelValue","id","options","invalid"]),F("label",wt,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.id)?(d(),k(x,{key:0,severity:"error",variant:"simple",size:"small"},{default:v(()=>[P(g(t.errors[a.dynamicField.id][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0),a.dynamicField.type===l(T).MultiSelect&&a.dynamicField.dataSource===l(S).Remote?(d(),h("div",Tt,[F("div",kt,[y(f,{variant:"on"},{default:v(()=>[y(q,{ref_for:!0,ref:r=>l($)[a.dynamicField.name]=r,multiple:"","force-selection":!0,"complete-on-focus":!0,"auto-option-focus":!0,fluid:"",modelValue:l(m).values[a.dynamicField.id],"onUpdate:modelValue":r=>l(m).values[a.dynamicField.id]=r,id:a.id,suggestions:l(c)[a.dynamicField.id]??[],optionValue:"id",optionLabel:"name",dataKey:"id",invalid:t.errors.hasOwnProperty(a.dynamicField.id),onComplete:r=>_(r,a),onItemSelect:r=>N(r,a),onClick:r=>I(r,a),onKeydown:Q(K,["enter"])},null,8,["modelValue","onUpdate:modelValue","id","suggestions","invalid","onComplete","onItemSelect","onClick"]),F("label",Vt,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.id)?(d(),k(x,{key:0,severity:"error",variant:"simple",size:"small"},{default:v(()=>[P(g(t.errors[a.dynamicField.id][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0),a.dynamicField.type===l(T).Select&&a.dynamicField.dataSource===l(S).Remote?(d(),h("div",Bt,[F("div",xt,[y(f,{variant:"on"},{default:v(()=>[y(q,{ref_for:!0,ref:r=>l($)[a.dynamicField.name]=r,"force-selection":!0,"complete-on-focus":!0,"auto-option-focus":!0,fluid:"",modelValue:l(m).values[a.dynamicField.name],"onUpdate:modelValue":r=>l(m).values[a.dynamicField.name]=r,id:a.id,suggestions:l(c)[a.dynamicField.name]??[],optionLabel:a.dynamicField.labelField,optionValue:a.dynamicField.valueField,dataKey:"id",invalid:t.errors.hasOwnProperty(a.dynamicField.name),onComplete:r=>_(r,a),onItemSelect:r=>N(r,a),onClick:r=>I(r,a),onKeydown:Q(K,["enter"])},null,8,["modelValue","onUpdate:modelValue","id","suggestions","optionLabel","optionValue","invalid","onComplete","onItemSelect","onClick"]),F("label",Pt,g(b.$t(a.dynamicField.displayName)),1)]),_:2},1024),t.errors.hasOwnProperty(a.dynamicField.name)?(d(),k(x,{key:0,severity:"error",variant:"simple",size:"small"},{default:v(()=>[P(g(t.errors[a.dynamicField.name][0]),1)]),_:2},1024)):p("",!0)])])):p("",!0)],2))),128))])}}});export{It as _,xe as a,Ge as b,Re as c,Ze as d,_e as s};
