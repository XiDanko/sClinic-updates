import{W as A,ac as W,a as f,c as w,b as a,af as C,aa as p,t as h,x as _,D as j,H as R,z as P,ad as U,g as u,w as m,ap as Z,ae as G,Y as H,Z as J,$ as Y,d as L,az as q,G as Q,s as V,at as X,e as $,aB as x,r as T,N as K,bZ as ee,ca as N,i as te,j as ne,P as oe,p as le,I as se,J as D,v as re,n as ie}from"./main-BdeACgAM.js";import{a as ae}from"./index-CviGcNM4.js";import{s as de}from"./index-CXw2KW-N.js";import{s as ce}from"./index-B7wqcdIc.js";var pe=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        color: dt('fieldset.legend.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-fieldset-content-wrapper {
        min-height: 0;
    }

    .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,ue={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",contentWrapper:"p-fieldset-content-wrapper",content:"p-fieldset-content"},ge=A.extend({name:"fieldset",style:pe,classes:ue}),fe={name:"BaseFieldset",extends:J,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:ge,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},z={name:"Fieldset",extends:fe,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return Y({toggleable:this.toggleable})}},directives:{ripple:H},components:{PlusIcon:de,MinusIcon:ae}};function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(e)}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,l)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?M(Object(n),!0).forEach(function(l){me(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function me(e,t,n){return(t=be(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e){var t=ye(e,"string");return v(t)=="symbol"?t:t+""}function ye(e,t){if(v(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(v(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var he=["data-p"],ve=["data-p"],ke=["id"],we=["id","aria-controls","aria-expanded","aria-label"],Pe=["id","aria-labelledby"];function _e(e,t,n,l,i,s){var b=W("ripple");return f(),w("fieldset",p({class:e.cx("root"),"data-p":s.dataP},e.ptmi("root")),[a("legend",p({class:e.cx("legend"),"data-p":s.dataP},e.ptm("legend")),[C(e.$slots,"legend",{toggleCallback:s.toggle},function(){return[e.toggleable?_("",!0):(f(),w("span",p({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),h(e.legend),17,ke)),e.toggleable?j((f(),w("button",p({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!i.d_collapsed,"aria-label":s.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return s.toggle&&s.toggle.apply(s,arguments)}),onKeydown:t[1]||(t[1]=function(){return s.onKeyDown&&s.onKeyDown.apply(s,arguments)})},I(I({},e.toggleButtonProps),e.ptm("toggleButton"))),[C(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:i.d_collapsed,class:R(e.cx("toggleIcon"))},function(){return[(f(),P(U(i.d_collapsed?"PlusIcon":"MinusIcon"),p({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),a("span",p({class:e.cx("legendLabel")},e.ptm("legendLabel")),h(e.legend),17)],16,we)),[[b]]):_("",!0)]})],16,ve),u(G,p({name:"p-collapsible"},e.ptm("transition")),{default:m(function(){return[j(a("div",p({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[a("div",p({class:e.cx("contentWrapper")},e.ptm("contentWrapper")),[a("div",p({class:e.cx("content")},e.ptm("content")),[C(e.$slots,"default")],16)],16)],16,Pe),[[Z,!i.d_collapsed]])]}),_:3},16)],16,he)}z.render=_e;const $e={class:"mb-3 flex items-center gap-3"},Se=L({__name:"PermissionsTree",props:x({permissions:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,n=q(e,"modelValue"),l=T({}),i=K(()=>{const o=[],r=ee.groupBy(t.permissions,"model");for(const d in r)o.push({key:d,label:N(d),children:r[d].map(c=>({key:c.name,label:N(c.action)}))});return o}),s=()=>{n.value=Object.keys(l.value).filter(o=>o.includes("."))},b=()=>{const o=t.permissions.map(r=>r.name);k(o),g(o),s()},y=()=>{l.value=[],s()};Q(()=>n.value,o=>{o?(k(o),setTimeout(()=>{g(o)},250)):y()});const k=o=>{for(const r of o)l.value[r]={checked:!0}},g=o=>{for(const r of i.value){const d=r.children.every(c=>o.includes(c.key));l.value[r.key]={checked:d,partialChecked:!d&&r.children.some(c=>o.includes(c.key))}}};return(o,r)=>{const d=V,c=ce;return f(),w("div",null,[a("div",$e,[u(d,{label:o.$t("Select All"),size:"small",class:"!px-2 !py-1",onClick:b},null,8,["label"]),u(d,{label:o.$t("Clear"),size:"small",class:"!px-2 !py-1",severity:"secondary",onClick:y},null,8,["label"])]),u(c,{class:"!p-0",value:$(i),filter:!0,filterMode:"lenient",filterPlaceholder:o.$t("Search..."),"selection-keys":$(l),"onUpdate:selectionKeys":[r[0]||(r[0]=S=>X(l)?l.value=S:null),s],selectionMode:"checkbox"},null,8,["value","filterPlaceholder","selection-keys"])])}}}),Be={class:"mt-2 grid grid-cols-1 gap-4"},Ce={for:"name"},Oe={class:"mt-5 flex justify-end gap-2"},Ie=L({__name:"RoleForm",props:{role:{},mode:{},errors:{},loading:{type:Boolean}},emits:["submit","close"],setup(e,{emit:t}){const n=e,l=t,i=T([]);te(()=>{s()});const s=async()=>{const{data:g}=await ne.get("/api/permissions/list");i.value=g.data},b=K(()=>document.title),y=()=>{l("submit")},k=()=>{l("close")};return(g,o)=>{const r=le,d=ie,c=se,S=Se,E=z,O=V,F=oe;return f(),P(F,{visible:"",modal:"",closable:!1,header:$(b),class:"w-[45rem]"},{default:m(()=>[a("form",{autocomplete:"off",onSubmit:re(y,["stop","prevent"])},[a("div",Be,[a("div",null,[u(d,{variant:"on"},{default:m(()=>[u(r,{id:"name",fluid:"",modelValue:n.role.name,"onUpdate:modelValue":o[0]||(o[0]=B=>n.role.name=B),invalid:n.errors.hasOwnProperty("name")},null,8,["modelValue","invalid"]),a("label",Ce,h(g.$t("Name")),1)]),_:1}),n.errors.hasOwnProperty("name")?(f(),P(c,{key:0,severity:"error",variant:"simple",size:"small"},{default:m(()=>[D(h(n.errors.name[0]),1)]),_:1})):_("",!0)]),a("div",null,[u(E,{legend:g.$t("Permissions")},{default:m(()=>[u(S,{permissions:$(i),modelValue:n.role.permissionNames,"onUpdate:modelValue":o[1]||(o[1]=B=>n.role.permissionNames=B)},null,8,["permissions","modelValue"])]),_:1},8,["legend"]),n.errors.hasOwnProperty("permissionNames")?(f(),P(c,{key:0,severity:"error",variant:"simple",size:"small"},{default:m(()=>[D(h(n.errors.permissionNames[0]),1)]),_:1})):_("",!0)])]),a("div",Oe,[u(O,{type:"button",label:g.$t("Cancel"),severity:"secondary",onClick:k},null,8,["label"]),u(O,{type:"submit",label:g.$t("Save"),onClick:y,loading:n.loading},null,8,["label","loading"])])],32)]),_:1},8,["header"])}}});export{Ie as _};
