import{V as z,X as R,Y as U,Z as q,ab as G,c as P,a as f,b as c,g as p,ae as B,p as _,D as j,a9 as g,t as h,J,z as w,ac as X,w as m,al as Y,ad as Z,d as V,aA as H,aB as Q,r as I,G as K,bR as W,b$ as N,I as x,s as T,e as $,au as ee,i as te,j as ne,O as oe,q as le,n as se,K as re,L as D,x as ie}from"./main-BzYpuU-M.js";import{a as ae}from"./index-Dc9xyjOY.js";import{s as de}from"./index-CLvCgL6s.js";import{s as ce}from"./index-BhsECHE3.js";var pe=`
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

    .p-fieldset .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,ue={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},ge=z.extend({name:"fieldset",style:pe,classes:ue}),fe={name:"BaseFieldset",extends:U,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:ge,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},A={name:"Fieldset",extends:fe,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return q({toggleable:this.toggleable})}},directives:{ripple:R},components:{PlusIcon:de,MinusIcon:ae}};function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(e)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,l)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(l){me(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function me(e,t,n){return(t=be(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e){var t=ye(e,"string");return v(t)=="symbol"?t:t+""}function ye(e,t){if(v(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(v(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var he=["data-p"],ve=["data-p"],ke=["id"],Pe=["id","aria-controls","aria-expanded","aria-label"],we=["id","aria-labelledby"];function _e(e,t,n,l,i,s){var b=G("ripple");return f(),P("fieldset",g({class:e.cx("root"),"data-p":s.dataP},e.ptmi("root")),[c("legend",g({class:e.cx("legend"),"data-p":s.dataP},e.ptm("legend")),[B(e.$slots,"legend",{toggleCallback:s.toggle},function(){return[e.toggleable?_("",!0):(f(),P("span",g({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),h(e.legend),17,ke)),e.toggleable?j((f(),P("button",g({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!i.d_collapsed,"aria-label":s.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return s.toggle&&s.toggle.apply(s,arguments)}),onKeydown:t[1]||(t[1]=function(){return s.onKeyDown&&s.onKeyDown.apply(s,arguments)})},M(M({},e.toggleButtonProps),e.ptm("toggleButton"))),[B(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:i.d_collapsed,class:J(e.cx("toggleIcon"))},function(){return[(f(),w(X(i.d_collapsed?"PlusIcon":"MinusIcon"),g({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),c("span",g({class:e.cx("legendLabel")},e.ptm("legendLabel")),h(e.legend),17)],16,Pe)),[[b]]):_("",!0)]})],16,ve),p(Z,g({name:"p-toggleable-content"},e.ptm("transition")),{default:m(function(){return[j(c("div",g({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[c("div",g({class:e.cx("content")},e.ptm("content")),[B(e.$slots,"default")],16)],16,we),[[Y,!i.d_collapsed]])]}),_:3},16)],16,he)}A.render=_e;const $e={class:"mb-3 flex items-center gap-3"},Se=V({__name:"PermissionsTree",props:H({permissions:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,n=Q(e,"modelValue"),l=I({}),i=K(()=>{const o=[],r=W.groupBy(t.permissions,"model");for(const a in r)o.push({key:a,label:N(a),children:r[a].map(d=>({key:d.name,label:N(d.action)}))});return o}),s=()=>{n.value=Object.keys(l.value).filter(o=>o.includes("."))},b=()=>{const o=t.permissions.map(r=>r.name);k(o),u(o),s()},y=()=>{l.value=[],s()};x(()=>n.value,o=>{o?(k(o),setTimeout(()=>{u(o)},250)):y()});const k=o=>{for(const r of o)l.value[r]={checked:!0}},u=o=>{for(const r of i.value){const a=r.children.every(d=>o.includes(d.key));l.value[r.key]={checked:a,partialChecked:!a&&r.children.some(d=>o.includes(d.key))}}};return(o,r)=>{const a=T,d=ce;return f(),P("div",null,[c("div",$e,[p(a,{label:o.$t("Select All"),size:"small",class:"!px-2 !py-1",onClick:b},null,8,["label"]),p(a,{label:o.$t("Clear"),size:"small",class:"!px-2 !py-1",severity:"secondary",onClick:y},null,8,["label"])]),p(d,{class:"!p-0",value:$(i),filter:!0,filterMode:"lenient",filterPlaceholder:o.$t("Search..."),"selection-keys":$(l),"onUpdate:selectionKeys":[r[0]||(r[0]=S=>ee(l)?l.value=S:null),s],selectionMode:"checkbox"},null,8,["value","filterPlaceholder","selection-keys"])])}}}),Oe={class:"mt-2 grid grid-cols-1 gap-4"},Be={for:"name"},Ce={class:"mt-5 flex justify-end gap-2"},Me=V({__name:"RoleForm",props:{role:{},mode:{},errors:{},loading:{type:Boolean}},emits:["submit","close"],setup(e,{emit:t}){const n=e,l=t,i=I([]);te(()=>{s()});const s=async()=>{const{data:u}=await ne.get("/api/permissions/list");i.value=u.data},b=K(()=>document.title),y=()=>{l("submit")},k=()=>{l("close")};return(u,o)=>{const r=le,a=se,d=re,S=Se,E=A,C=T,F=oe;return f(),w(F,{visible:"",modal:"",closable:!1,header:$(b),class:"w-[45rem]"},{default:m(()=>[c("form",{autocomplete:"off",onSubmit:ie(y,["stop","prevent"])},[c("div",Oe,[c("div",null,[p(a,{variant:"on"},{default:m(()=>[p(r,{id:"name",fluid:"",modelValue:n.role.name,"onUpdate:modelValue":o[0]||(o[0]=O=>n.role.name=O),invalid:n.errors.hasOwnProperty("name")},null,8,["modelValue","invalid"]),c("label",Be,h(u.$t("Name")),1)]),_:1}),n.errors.hasOwnProperty("name")?(f(),w(d,{key:0,severity:"error",variant:"simple",size:"small"},{default:m(()=>[D(h(n.errors.name[0]),1)]),_:1})):_("",!0)]),c("div",null,[p(E,{legend:u.$t("Permissions")},{default:m(()=>[p(S,{permissions:$(i),modelValue:n.role.permissionNames,"onUpdate:modelValue":o[1]||(o[1]=O=>n.role.permissionNames=O)},null,8,["permissions","modelValue"])]),_:1},8,["legend"]),n.errors.hasOwnProperty("permissionNames")?(f(),w(d,{key:0,severity:"error",variant:"simple",size:"small"},{default:m(()=>[D(h(n.errors.permissionNames[0]),1)]),_:1})):_("",!0)])]),c("div",Ce,[p(C,{type:"button",label:u.$t("Cancel"),severity:"secondary",onClick:k},null,8,["label"]),p(C,{type:"submit",label:u.$t("Save"),onClick:y,loading:n.loading},null,8,["label","loading"])])],32)]),_:1},8,["header"])}}});export{Me as _};
