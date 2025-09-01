import{R as oe,U as re,V as U,W as V,a8 as le,c as y,a as c,b,g as v,ab as T,p as w,D as _,a6 as f,t as I,I as C,z as g,a9 as x,w as S,aD as Ce,aa as we,aY as ie,bs as xe,bu as Ke,bt as Te,q as ae,b0 as Ie,a_ as Pe,bX as Oe,b6 as Ne,ax as L,a5 as W,a4 as Y,f as k,F as O,x as se,K as R,Q as de,d as ce,aH as Me,aI as je,r as ue,G as fe,bL as Ae,bY as Q,H as Ee,s as pe,e as E,aF as De,i as Fe,j as Le,L as Be,n as Ve,J as _e}from"./main-zIG-jSbN.js";import{a as ge,s as Re}from"./index-CIlvUC-O.js";import{s as ze}from"./index-wwYoY8xI.js";import{s as $e}from"./index-APhONe-T.js";var Ue=`
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
`,He={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},We=oe.extend({name:"fieldset",style:Ue,classes:He}),Ye={name:"BaseFieldset",extends:U,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:We,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},he={name:"Fieldset",extends:Ye,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return V({toggleable:this.toggleable})}},directives:{ripple:re},components:{PlusIcon:ze,MinusIcon:ge}};function N(e){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(e)}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(o){Qe(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Qe(e,t,n){return(t=qe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qe(e){var t=Ge(e,"string");return N(t)=="symbol"?t:t+""}function Ge(e,t){if(N(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(N(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Je=["data-p"],Xe=["data-p"],Ze=["id"],et=["id","aria-controls","aria-expanded","aria-label"],tt=["id","aria-labelledby"];function nt(e,t,n,o,l,r){var i=le("ripple");return c(),y("fieldset",f({class:e.cx("root"),"data-p":r.dataP},e.ptmi("root")),[b("legend",f({class:e.cx("legend"),"data-p":r.dataP},e.ptm("legend")),[T(e.$slots,"legend",{toggleCallback:r.toggle},function(){return[e.toggleable?w("",!0):(c(),y("span",f({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),I(e.legend),17,Ze)),e.toggleable?_((c(),y("button",f({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!l.d_collapsed,"aria-label":r.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return r.toggle&&r.toggle.apply(r,arguments)}),onKeydown:t[1]||(t[1]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)})},G(G({},e.toggleButtonProps),e.ptm("toggleButton"))),[T(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:l.d_collapsed,class:C(e.cx("toggleIcon"))},function(){return[(c(),g(x(l.d_collapsed?"PlusIcon":"MinusIcon"),f({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),b("span",f({class:e.cx("legendLabel")},e.ptm("legendLabel")),I(e.legend),17)],16,et)),[[i]]):w("",!0)]})],16,Xe),v(we,f({name:"p-toggleable-content"},e.ptm("transition")),{default:S(function(){return[_(b("div",f({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[b("div",f({class:e.cx("content")},e.ptm("content")),[T(e.$slots,"default")],16)],16,tt),[[Ce,!l.d_collapsed]])]}),_:3},16)],16,Je)}he.render=nt;var ot=`
    .p-tree {
        display: block;
        background: dt('tree.background');
        color: dt('tree.color');
        padding: dt('tree.padding');
    }

    .p-tree-root-children,
    .p-tree-node-children {
        display: flex;
        list-style-type: none;
        flex-direction: column;
        margin: 0;
        gap: dt('tree.gap');
    }

    .p-tree-root-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
    }

    .p-tree-node-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
        padding-inline-start: dt('tree.indent');
    }

    .p-tree-node {
        padding: 0;
        outline: 0 none;
    }

    .p-tree-node-content {
        border-radius: dt('tree.node.border.radius');
        padding: dt('tree.node.padding');
        display: flex;
        align-items: center;
        outline-color: transparent;
        color: dt('tree.node.color');
        gap: dt('tree.node.gap');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
    }

    .p-tree-node:focus-visible > .p-tree-node-content {
        box-shadow: dt('tree.node.focus.ring.shadow');
        outline: dt('tree.node.focus.ring.width') dt('tree.node.focus.ring.style') dt('tree.node.focus.ring.color');
        outline-offset: dt('tree.node.focus.ring.offset');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {
        background: dt('tree.node.hover.background');
        color: dt('tree.node.hover.color');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {
        color: dt('tree.node.icon.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected {
        background: dt('tree.node.selected.background');
        color: dt('tree.node.selected.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button {
        color: inherit;
    }

    .p-tree-node-toggle-button {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
        width: dt('tree.node.toggle.button.size');
        height: dt('tree.node.toggle.button.size');
        color: dt('tree.node.toggle.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('tree.node.toggle.button.border.radius');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            border-color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
        outline-color: transparent;
        padding: 0;
    }

    .p-tree-node-toggle-button:enabled:hover {
        background: dt('tree.node.toggle.button.hover.background');
        color: dt('tree.node.toggle.button.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {
        background: dt('tree.node.toggle.button.selected.hover.background');
        color: dt('tree.node.toggle.button.selected.hover.color');
    }

    .p-tree-root {
        overflow: auto;
    }

    .p-tree-node-selectable {
        cursor: pointer;
        user-select: none;
    }

    .p-tree-node-leaf > .p-tree-node-content .p-tree-node-toggle-button {
        visibility: hidden;
    }

    .p-tree-node-icon {
        color: dt('tree.node.icon.color');
        transition: color dt('tree.transition.duration');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-icon {
        color: dt('tree.node.icon.selected.color');
    }

    .p-tree-filter {
        margin: dt('tree.filter.margin');
    }

    .p-tree-filter-input {
        width: 100%;
    }

    .p-tree-loading {
        position: relative;
        height: 100%;
    }

    .p-tree-loading-icon {
        font-size: dt('tree.loading.icon.size');
        width: dt('tree.loading.icon.size');
        height: dt('tree.loading.icon.size');
    }

    .p-tree .p-tree-mask {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tree-flex-scrollable {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
    }

    .p-tree-flex-scrollable .p-tree-root {
        flex: 1;
    }
`,rt={root:function(t){var n=t.props;return["p-tree p-component",{"p-tree-selectable":n.selectionMode!=null,"p-tree-loading":n.loading,"p-tree-flex-scrollable":n.scrollHeight==="flex"}]},mask:"p-tree-mask p-overlay-mask",loadingIcon:"p-tree-loading-icon",pcFilterContainer:"p-tree-filter",pcFilterInput:"p-tree-filter-input",wrapper:"p-tree-root",rootChildren:"p-tree-root-children",node:function(t){var n=t.instance;return["p-tree-node",{"p-tree-node-leaf":n.leaf}]},nodeContent:function(t){var n=t.instance;return["p-tree-node-content",n.node.styleClass,{"p-tree-node-selectable":n.selectable,"p-tree-node-selected":n.checkboxMode&&n.$parentInstance.highlightOnSelect?n.checked:n.selected}]},nodeToggleButton:"p-tree-node-toggle-button",nodeToggleIcon:"p-tree-node-toggle-icon",nodeCheckbox:"p-tree-node-checkbox",nodeIcon:"p-tree-node-icon",nodeLabel:"p-tree-node-label",nodeChildren:"p-tree-node-children"},lt=oe.extend({name:"tree",style:ot,classes:rt}),it={name:"BaseTree",extends:U,props:{value:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},metaKeySelection:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},loadingMode:{type:String,default:"mask"},filter:{type:Boolean,default:!1},filterBy:{type:[String,Function],default:"label"},filterMode:{type:String,default:"lenient"},filterPlaceholder:{type:String,default:null},filterLocale:{type:String,default:void 0},highlightOnSelect:{type:Boolean,default:!1},scrollHeight:{type:String,default:null},level:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:lt,provide:function(){return{$pcTree:this,$parentInstance:this}}};function M(e){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function J(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ye(e))||t){n&&(e=n);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(s){throw s},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var s=n.next();return i=s.done,s},e:function(s){u=!0,r=s},f:function(){try{i||n.return==null||n.return()}finally{if(u)throw r}}}}function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?X(Object(n),!0).forEach(function(o){at(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function at(e,t,n){return(t=st(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function st(e){var t=dt(e,"string");return M(t)=="symbol"?t:t+""}function dt(e,t){if(M(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(M(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function P(e){return ft(e)||ut(e)||ye(e)||ct()}function ct(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ye(e,t){if(e){if(typeof e=="string")return z(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function ut(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ft(e){if(Array.isArray(e))return z(e)}function z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var be={name:"TreeNode",hostName:"Tree",extends:U,emits:["node-toggle","node-click","checkbox-change"],props:{node:{type:null,default:null},expandedKeys:{type:null,default:null},loadingMode:{type:String,default:"mask"},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},templates:{type:null,default:null},level:{type:Number,default:null},index:null},nodeTouched:!1,toggleClicked:!1,mounted:function(){this.setAllNodesTabIndexes()},methods:{toggle:function(){this.$emit("node-toggle",this.node),this.toggleClicked=!0},label:function(t){return typeof t.label=="function"?t.label():t.label},onChildNodeToggle:function(t){this.$emit("node-toggle",t)},getPTOptions:function(t){return this.ptm(t,{context:{node:this.node,index:this.index,expanded:this.expanded,selected:this.selected,checked:this.checked,partialChecked:this.partialChecked,leaf:this.leaf}})},onClick:function(t){if(this.toggleClicked||L(t.target,'[data-pc-section="nodetogglebutton"]')||L(t.target.parentElement,'[data-pc-section="nodetogglebutton"]')){this.toggleClicked=!1;return}this.isCheckboxSelectionMode()?this.node.selectable!=!1&&this.toggleCheckbox():this.$emit("node-click",{originalEvent:t,nodeTouched:this.nodeTouched,node:this.node}),this.nodeTouched=!1},onChildNodeClick:function(t){this.$emit("node-click",t)},onTouchEnd:function(){this.nodeTouched=!0},onKeyDown:function(t){if(this.isSameNode(t))switch(t.code){case"Tab":this.onTabKey(t);break;case"ArrowDown":this.onArrowDown(t);break;case"ArrowUp":this.onArrowUp(t);break;case"ArrowRight":this.onArrowRight(t);break;case"ArrowLeft":this.onArrowLeft(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowDown:function(t){var n=t.target.getAttribute("data-pc-section")==="nodetogglebutton"?t.target.closest('[role="treeitem"]'):t.target,o=n.children[1];if(o)this.focusRowChange(n,o.children[0]);else if(n.nextElementSibling)this.focusRowChange(n,n.nextElementSibling);else{var l=this.findNextSiblingOfAncestor(n);l&&this.focusRowChange(n,l)}t.preventDefault()},onArrowUp:function(t){var n=t.target;if(n.previousElementSibling)this.focusRowChange(n,n.previousElementSibling,this.findLastVisibleDescendant(n.previousElementSibling));else{var o=this.getParentNodeElement(n);o&&this.focusRowChange(n,o)}t.preventDefault()},onArrowRight:function(t){var n=this;this.leaf||this.expanded||(t.currentTarget.tabIndex=-1,this.$emit("node-toggle",this.node),this.$nextTick(function(){n.onArrowDown(t)}))},onArrowLeft:function(t){var n=W(t.currentTarget,'[data-pc-section="nodetogglebutton"]');if(this.level===0&&!this.expanded)return!1;if(this.expanded&&!this.leaf)return n.click(),!1;var o=this.findBeforeClickableNode(t.currentTarget);o&&this.focusRowChange(t.currentTarget,o)},onEnterKey:function(t){this.setTabIndexForSelectionMode(t,this.nodeTouched),this.onClick(t),t.preventDefault()},onTabKey:function(){this.setAllNodesTabIndexes()},setAllNodesTabIndexes:function(){var t=Y(this.$refs.currentNode.closest('[data-pc-section="rootchildren"]'),'[role="treeitem"]'),n=P(t).some(function(l){return l.getAttribute("aria-selected")==="true"||l.getAttribute("aria-checked")==="true"});if(P(t).forEach(function(l){l.tabIndex=-1}),n){var o=P(t).filter(function(l){return l.getAttribute("aria-selected")==="true"||l.getAttribute("aria-checked")==="true"});o[0].tabIndex=0;return}P(t)[0].tabIndex=0},setTabIndexForSelectionMode:function(t,n){if(this.selectionMode!==null){var o=P(Y(this.$refs.currentNode.parentElement,'[role="treeitem"]'));t.currentTarget.tabIndex=n===!1?-1:0,o.every(function(l){return l.tabIndex===-1})&&(o[0].tabIndex=0)}},focusRowChange:function(t,n,o){t.tabIndex="-1",n.tabIndex="0",this.focusNode(o||n)},findBeforeClickableNode:function(t){var n=t.closest("ul").closest("li");if(n){var o=W(n,"button");return o&&o.style.visibility!=="hidden"?n:this.findBeforeClickableNode(t.previousElementSibling)}return null},toggleCheckbox:function(){var t=this.selectionKeys?Z({},this.selectionKeys):{},n=!this.checked;this.propagateDown(this.node,n,t),this.$emit("checkbox-change",{node:this.node,check:n,selectionKeys:t})},propagateDown:function(t,n,o){if(n&&t.selectable!=!1?o[t.key]={checked:!0,partialChecked:!1}:delete o[t.key],t.children&&t.children.length){var l=J(t.children),r;try{for(l.s();!(r=l.n()).done;){var i=r.value;this.propagateDown(i,n,o)}}catch(u){l.e(u)}finally{l.f()}}},propagateUp:function(t){var n=t.check,o=Z({},t.selectionKeys),l=0,r=!1,i=J(this.node.children),u;try{for(i.s();!(u=i.n()).done;){var a=u.value;o[a.key]&&o[a.key].checked?l++:o[a.key]&&o[a.key].partialChecked&&(r=!0)}}catch(s){i.e(s)}finally{i.f()}n&&l===this.node.children.length?o[this.node.key]={checked:!0,partialChecked:!1}:(n||delete o[this.node.key],r||l>0&&l!==this.node.children.length?o[this.node.key]={checked:!1,partialChecked:!0}:delete o[this.node.key]),this.$emit("checkbox-change",{node:t.node,check:t.check,selectionKeys:o})},onChildCheckboxChange:function(t){this.$emit("checkbox-change",t)},findNextSiblingOfAncestor:function(t){var n=this.getParentNodeElement(t);return n?n.nextElementSibling?n.nextElementSibling:this.findNextSiblingOfAncestor(n):null},findLastVisibleDescendant:function(t){var n=t.children[1];if(n){var o=n.children[n.children.length-1];return this.findLastVisibleDescendant(o)}else return t},getParentNodeElement:function(t){var n=t.parentElement.parentElement;return L(n,"role")==="treeitem"?n:null},focusNode:function(t){t.focus()},isCheckboxSelectionMode:function(){return this.selectionMode==="checkbox"},isSameNode:function(t){return t.currentTarget&&(t.currentTarget.isSameNode(t.target)||t.currentTarget.isSameNode(t.target.closest('[role="treeitem"]')))}},computed:{hasChildren:function(){return this.node.children&&this.node.children.length>0},expanded:function(){return this.expandedKeys&&this.expandedKeys[this.node.key]===!0},leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},selectable:function(){return this.node.selectable===!1?!1:this.selectionMode!=null},selected:function(){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.node.key]===!0:!1},checkboxMode:function(){return this.selectionMode==="checkbox"&&this.node.selectable!==!1},checked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].checked:!1},partialChecked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].partialChecked:!1},ariaChecked:function(){return this.selectionMode==="single"||this.selectionMode==="multiple"?this.selected:void 0},ariaSelected:function(){return this.checkboxMode?this.checked:void 0}},components:{Checkbox:Re,ChevronDownIcon:Pe,ChevronRightIcon:$e,CheckIcon:Ie,MinusIcon:ge,SpinnerIcon:ie},directives:{ripple:re}},pt=["aria-label","aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-level","aria-checked","tabindex"],gt=["data-p-selected","data-p-selectable"],ht=["data-p-leaf"];function yt(e,t,n,o,l,r){var i=k("SpinnerIcon"),u=k("Checkbox"),a=k("TreeNode",!0),s=le("ripple");return c(),y("li",f({ref:"currentNode",class:e.cx("node"),role:"treeitem","aria-label":r.label(n.node),"aria-selected":r.ariaSelected,"aria-expanded":r.expanded,"aria-setsize":n.node.children?n.node.children.length:0,"aria-posinset":n.index+1,"aria-level":n.level,"aria-checked":r.ariaChecked,tabindex:n.index===0?0:-1,onKeydown:t[4]||(t[4]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)})},r.getPTOptions("node")),[b("div",f({class:e.cx("nodeContent"),onClick:t[2]||(t[2]=function(){return r.onClick&&r.onClick.apply(r,arguments)}),onTouchend:t[3]||(t[3]=function(){return r.onTouchEnd&&r.onTouchEnd.apply(r,arguments)}),style:n.node.style},r.getPTOptions("nodeContent"),{"data-p-selected":r.checkboxMode?r.checked:r.selected,"data-p-selectable":r.selectable}),[_((c(),y("button",f({type:"button",class:e.cx("nodeToggleButton"),onClick:t[0]||(t[0]=function(){return r.toggle&&r.toggle.apply(r,arguments)}),tabindex:"-1","data-p-leaf":r.leaf},r.getPTOptions("nodeToggleButton")),[n.node.loading&&n.loadingMode==="icon"?(c(),y(O,{key:0},[n.templates.nodetoggleicon||n.templates.nodetogglericon?(c(),g(x(n.templates.nodetoggleicon||n.templates.nodetogglericon),{key:0,node:n.node,expanded:r.expanded,class:C(e.cx("nodeToggleIcon"))},null,8,["node","expanded","class"])):(c(),g(i,f({key:1,spin:"",class:e.cx("nodeToggleIcon")},r.getPTOptions("nodeToggleIcon")),null,16,["class"]))],64)):(c(),y(O,{key:1},[n.templates.nodetoggleicon||n.templates.togglericon?(c(),g(x(n.templates.nodetoggleicon||n.templates.togglericon),{key:0,node:n.node,expanded:r.expanded,class:C(e.cx("nodeToggleIcon"))},null,8,["node","expanded","class"])):r.expanded?(c(),g(x(n.node.expandedIcon?"span":"ChevronDownIcon"),f({key:1,class:e.cx("nodeToggleIcon")},r.getPTOptions("nodeToggleIcon")),null,16,["class"])):(c(),g(x(n.node.collapsedIcon?"span":"ChevronRightIcon"),f({key:2,class:e.cx("nodeToggleIcon")},r.getPTOptions("nodeToggleIcon")),null,16,["class"]))],64))],16,ht)),[[s]]),r.checkboxMode?(c(),g(u,{key:0,defaultValue:r.checked,binary:!0,indeterminate:r.partialChecked,class:C(e.cx("nodeCheckbox")),tabindex:-1,unstyled:e.unstyled,pt:r.getPTOptions("pcNodeCheckbox"),"data-p-partialchecked":r.partialChecked},{icon:S(function(d){return[n.templates.checkboxicon?(c(),g(x(n.templates.checkboxicon),{key:0,checked:d.checked,partialChecked:r.partialChecked,class:C(d.class)},null,8,["checked","partialChecked","class"])):w("",!0)]}),_:1},8,["defaultValue","indeterminate","class","unstyled","pt","data-p-partialchecked"])):w("",!0),n.templates.nodeicon?(c(),g(x(n.templates.nodeicon),f({key:1,node:n.node,class:[e.cx("nodeIcon")]},r.getPTOptions("nodeIcon")),null,16,["node","class"])):(c(),y("span",f({key:2,class:[e.cx("nodeIcon"),n.node.icon]},r.getPTOptions("nodeIcon")),null,16)),b("span",f({class:e.cx("nodeLabel")},r.getPTOptions("nodeLabel"),{onKeydown:t[1]||(t[1]=se(function(){},["stop"]))}),[n.templates[n.node.type]||n.templates.default?(c(),g(x(n.templates[n.node.type]||n.templates.default),{key:0,node:n.node,expanded:r.expanded,selected:r.checkboxMode?r.checked:r.selected},null,8,["node","expanded","selected"])):(c(),y(O,{key:1},[R(I(r.label(n.node)),1)],64))],16)],16,gt),r.hasChildren&&r.expanded?(c(),y("ul",f({key:0,class:e.cx("nodeChildren"),role:"group"},e.ptm("nodeChildren")),[(c(!0),y(O,null,de(n.node.children,function(d,p){return c(),g(a,{key:d.key,node:d,templates:n.templates,level:n.level+1,index:p,loadingMode:n.loadingMode,expandedKeys:n.expandedKeys,onNodeToggle:r.onChildNodeToggle,onNodeClick:r.onChildNodeClick,selectionMode:n.selectionMode,selectionKeys:n.selectionKeys,onCheckboxChange:r.propagateUp,unstyled:e.unstyled,pt:e.pt},null,8,["node","templates","level","index","loadingMode","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","unstyled","pt"])}),128))],16)):w("",!0)],16,pt)}be.render=yt;function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(e)}function B(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=me(e))||t){n&&(e=n);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(s){throw s},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var s=n.next();return i=s.done,s},e:function(s){u=!0,r=s},f:function(){try{i||n.return==null||n.return()}finally{if(u)throw r}}}}function bt(e){return kt(e)||vt(e)||me(e)||mt()}function mt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(e,t){if(e){if(typeof e=="string")return $(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}function vt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kt(e){if(Array.isArray(e))return $(e)}function $(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ee(Object(n),!0).forEach(function(o){St(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function St(e,t,n){return(t=Ct(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ct(e){var t=wt(e,"string");return j(t)=="symbol"?t:t+""}function wt(e,t){if(j(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(j(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ve={name:"Tree",extends:it,inheritAttrs:!1,emits:["node-expand","node-collapse","update:expandedKeys","update:selectionKeys","node-select","node-unselect","filter"],data:function(){return{d_expandedKeys:this.expandedKeys||{},filterValue:null}},watch:{expandedKeys:function(t){this.d_expandedKeys=t}},methods:{onNodeToggle:function(t){var n=t.key;this.d_expandedKeys[n]?(delete this.d_expandedKeys[n],this.$emit("node-collapse",t)):(this.d_expandedKeys[n]=!0,this.$emit("node-expand",t)),this.d_expandedKeys=K({},this.d_expandedKeys),this.$emit("update:expandedKeys",this.d_expandedKeys)},onNodeClick:function(t){if(this.selectionMode!=null&&t.node.selectable!==!1){var n=t.nodeTouched?!1:this.metaKeySelection,o=n?this.handleSelectionWithMetaKey(t):this.handleSelectionWithoutMetaKey(t);this.$emit("update:selectionKeys",o)}},onCheckboxChange:function(t){this.$emit("update:selectionKeys",t.selectionKeys),t.check?this.$emit("node-select",t.node):this.$emit("node-unselect",t.node)},handleSelectionWithMetaKey:function(t){var n=t.originalEvent,o=t.node,l=n.metaKey||n.ctrlKey,r=this.isNodeSelected(o),i;return r&&l?(this.isSingleSelectionMode()?i={}:(i=K({},this.selectionKeys),delete i[o.key]),this.$emit("node-unselect",o)):(this.isSingleSelectionMode()?i={}:this.isMultipleSelectionMode()&&(i=l?this.selectionKeys?K({},this.selectionKeys):{}:{}),i[o.key]=!0,this.$emit("node-select",o)),i},handleSelectionWithoutMetaKey:function(t){var n=t.node,o=this.isNodeSelected(n),l;return this.isSingleSelectionMode()?o?(l={},this.$emit("node-unselect",n)):(l={},l[n.key]=!0,this.$emit("node-select",n)):o?(l=K({},this.selectionKeys),delete l[n.key],this.$emit("node-unselect",n)):(l=this.selectionKeys?K({},this.selectionKeys):{},l[n.key]=!0,this.$emit("node-select",n)),l},isSingleSelectionMode:function(){return this.selectionMode==="single"},isMultipleSelectionMode:function(){return this.selectionMode==="multiple"},isNodeSelected:function(t){return this.selectionMode&&this.selectionKeys?this.selectionKeys[t.key]===!0:!1},isChecked:function(t){return this.selectionKeys?this.selectionKeys[t.key]&&this.selectionKeys[t.key].checked:!1},isNodeLeaf:function(t){return t.leaf===!1?!1:!(t.children&&t.children.length)},onFilterKeyup:function(t){(t.code==="Enter"||t.code==="NumpadEnter")&&t.preventDefault(),this.$emit("filter",{originalEvent:t,value:t.target.value})},findFilteredNodes:function(t,n){if(t){var o=!1;if(t.children){var l=bt(t.children);t.children=[];var r=B(l),i;try{for(r.s();!(i=r.n()).done;){var u=i.value,a=K({},u);this.isFilterMatched(a,n)&&(o=!0,t.children.push(a))}}catch(s){r.e(s)}finally{r.f()}}if(o)return!0}},isFilterMatched:function(t,n){var o=n.searchFields,l=n.filterText,r=n.strict,i=!1,u=B(o),a;try{for(u.s();!(a=u.n()).done;){var s=a.value,d=String(Ne(t,s)).toLocaleLowerCase(this.filterLocale);d.indexOf(l)>-1&&(i=!0)}}catch(p){u.e(p)}finally{u.f()}return(!i||r&&!this.isNodeLeaf(t))&&(i=this.findFilteredNodes(t,{searchFields:o,filterText:l,strict:r})||i),i}},computed:{filteredValue:function(){var t=[],n=Oe(this.filterBy)?[this.filterBy]:this.filterBy.split(","),o=this.filterValue.trim().toLocaleLowerCase(this.filterLocale),l=this.filterMode==="strict",r=B(this.value),i;try{for(r.s();!(i=r.n()).done;){var u=i.value,a=K({},u),s={searchFields:n,filterText:o,strict:l};(l&&(this.findFilteredNodes(a,s)||this.isFilterMatched(a,s))||!l&&(this.isFilterMatched(a,s)||this.findFilteredNodes(a,s)))&&t.push(a)}}catch(d){r.e(d)}finally{r.f()}return t},valueToRender:function(){return this.filterValue&&this.filterValue.trim().length>0?this.filteredValue:this.value},containerDataP:function(){return V({loading:this.loading,scrollable:this.scrollHeight==="flex"})},wrapperDataP:function(){return V({scrollable:this.scrollHeight==="flex"})}},components:{TreeNode:be,InputText:ae,InputIcon:Te,IconField:Ke,SearchIcon:xe,SpinnerIcon:ie}};function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?te(Object(n),!0).forEach(function(o){xt(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function xt(e,t,n){return(t=Kt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kt(e){var t=Tt(e,"string");return A(t)=="symbol"?t:t+""}function Tt(e,t){if(A(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(A(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var It=["data-p"],Pt=["data-p"],Ot=["aria-labelledby","aria-label"];function Nt(e,t,n,o,l,r){var i=k("SpinnerIcon"),u=k("InputText"),a=k("SearchIcon"),s=k("InputIcon"),d=k("IconField"),p=k("TreeNode");return c(),y("div",f({class:e.cx("root"),"data-p":r.containerDataP},e.ptmi("root")),[e.loading&&e.loadingMode==="mask"?(c(),y("div",f({key:0,class:e.cx("mask")},e.ptm("mask")),[T(e.$slots,"loadingicon",{class:C(e.cx("loadingIcon"))},function(){return[e.loadingIcon?(c(),y("i",f({key:0,class:[e.cx("loadingIcon"),"pi-spin",e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(c(),g(i,f({key:1,spin:"",class:e.cx("loadingIcon")},e.ptm("loadingIcon")),null,16,["class"]))]})],16)):w("",!0),e.filter?(c(),g(d,{key:1,unstyled:e.unstyled,pt:ne(ne({},e.ptm("pcFilter")),e.ptm("pcFilterContainer")),class:C(e.cx("pcFilterContainer"))},{default:S(function(){return[v(u,{modelValue:l.filterValue,"onUpdate:modelValue":t[0]||(t[0]=function(h){return l.filterValue=h}),autocomplete:"off",class:C(e.cx("pcFilterInput")),placeholder:e.filterPlaceholder,unstyled:e.unstyled,onKeyup:r.onFilterKeyup,pt:e.ptm("pcFilterInput")},null,8,["modelValue","class","placeholder","unstyled","onKeyup","pt"]),v(s,{unstyled:e.unstyled,pt:e.ptm("pcFilterIconContainer")},{default:S(function(){return[T(e.$slots,e.$slots.filtericon?"filtericon":"searchicon",{class:C(e.cx("filterIcon"))},function(){return[v(a,f({class:e.cx("filterIcon")},e.ptm("filterIcon")),null,16,["class"])]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["unstyled","pt","class"])):w("",!0),b("div",f({class:e.cx("wrapper"),style:{maxHeight:e.scrollHeight},"data-p":r.wrapperDataP},e.ptm("wrapper")),[T(e.$slots,"header",{value:e.value,expandedKeys:e.expandedKeys,selectionKeys:e.selectionKeys}),b("ul",f({class:e.cx("rootChildren"),role:"tree","aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptm("rootChildren")),[(c(!0),y(O,null,de(r.valueToRender,function(h,m){return c(),g(p,{key:h.key,node:h,templates:e.$slots,level:e.level+1,index:m,expandedKeys:l.d_expandedKeys,onNodeToggle:r.onNodeToggle,onNodeClick:r.onNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onCheckboxChange:r.onCheckboxChange,loadingMode:e.loadingMode,unstyled:e.unstyled,pt:e.pt},null,8,["node","templates","level","index","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","loadingMode","unstyled","pt"])}),128))],16,Ot),T(e.$slots,"footer",{value:e.value,expandedKeys:e.expandedKeys,selectionKeys:e.selectionKeys})],16,Pt)],16,It)}ve.render=Nt;const Mt={class:"mb-3 flex items-center gap-3"},jt=ce({__name:"PermissionsTree",props:Me({permissions:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,n=je(e,"modelValue"),o=ue({}),l=fe(()=>{const d=[],p=Ae.groupBy(t.permissions,"model");for(const h in p)d.push({key:h,label:Q(h),children:p[h].map(m=>({key:m.name,label:Q(m.action)}))});return d}),r=()=>{n.value=Object.keys(o.value).filter(d=>d.includes("."))},i=()=>{const d=t.permissions.map(p=>p.name);a(d),s(d),r()},u=()=>{o.value=[],r()};Ee(()=>n.value,d=>{d?(a(d),setTimeout(()=>{s(d)},250)):u()});const a=d=>{for(const p of d)o.value[p]={checked:!0}},s=d=>{for(const p of l.value){const h=p.children.every(m=>d.includes(m.key));o.value[p.key]={checked:h,partialChecked:!h&&p.children.some(m=>d.includes(m.key))}}};return(d,p)=>{const h=pe,m=ve;return c(),y("div",null,[b("div",Mt,[v(h,{label:d.$t("Select All"),size:"small",class:"!px-2 !py-1",onClick:i},null,8,["label"]),v(h,{label:d.$t("Clear"),size:"small",class:"!px-2 !py-1",severity:"secondary",onClick:u},null,8,["label"])]),v(m,{class:"!p-0",value:E(l),filter:!0,filterMode:"lenient",filterPlaceholder:d.$t("Search..."),"selection-keys":E(o),"onUpdate:selectionKeys":[p[0]||(p[0]=D=>De(o)?o.value=D:null),r],selectionMode:"checkbox"},null,8,["value","filterPlaceholder","selection-keys"])])}}}),At={class:"mt-2 grid grid-cols-1 gap-4"},Et={for:"name"},Dt={class:"mt-5 flex justify-end gap-2"},_t=ce({__name:"RoleForm",props:{role:{},mode:{},errors:{},loading:{type:Boolean}},emits:["submit","close"],setup(e,{emit:t}){const n=e,o=t,l=ue([]);Fe(()=>{r()});const r=async()=>{const{data:s}=await Le.get("/api/permissions/list");l.value=s.data},i=fe(()=>document.title),u=()=>{o("submit")},a=()=>{o("close")};return(s,d)=>{const p=ae,h=Ve,m=_e,D=jt,ke=he,H=pe,Se=Be;return c(),g(Se,{visible:"",modal:"",closable:!1,header:E(i),class:"w-[45rem]"},{default:S(()=>[b("form",{autocomplete:"off",onSubmit:se(u,["stop","prevent"])},[b("div",At,[b("div",null,[v(h,{variant:"on"},{default:S(()=>[v(p,{id:"name",fluid:"",modelValue:n.role.name,"onUpdate:modelValue":d[0]||(d[0]=F=>n.role.name=F),invalid:n.errors.hasOwnProperty("name")},null,8,["modelValue","invalid"]),b("label",Et,I(s.$t("Name")),1)]),_:1}),n.errors.hasOwnProperty("name")?(c(),g(m,{key:0,severity:"error",variant:"simple",size:"small"},{default:S(()=>[R(I(n.errors.name[0]),1)]),_:1})):w("",!0)]),b("div",null,[v(ke,{legend:s.$t("Permissions")},{default:S(()=>[v(D,{permissions:E(l),modelValue:n.role.permissionNames,"onUpdate:modelValue":d[1]||(d[1]=F=>n.role.permissionNames=F)},null,8,["permissions","modelValue"])]),_:1},8,["legend"]),n.errors.hasOwnProperty("permissionNames")?(c(),g(m,{key:0,severity:"error",variant:"simple",size:"small"},{default:S(()=>[R(I(n.errors.permissionNames[0]),1)]),_:1})):w("",!0)])]),b("div",Dt,[v(H,{type:"button",label:s.$t("Cancel"),severity:"secondary",onClick:a},null,8,["label"]),v(H,{type:"submit",label:s.$t("Save"),onClick:u,loading:n.loading},null,8,["label","loading"])])],32)]),_:1},8,["header"])}}});export{_t as _};
