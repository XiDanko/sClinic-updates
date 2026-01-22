import{V as s,c as a,a as r,p as d,b as n,a9 as e,ae as o,Y as i}from"./main-DWXfXhIh.js";var l=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,p={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},c=s.extend({name:"card",style:l,classes:p}),u={name:"BaseCard",extends:i,style:c,provide:function(){return{$pcCard:this,$parentInstance:this}}},b={name:"Card",extends:u,inheritAttrs:!1};function f(t,$,v,h,m,g){return r(),a("div",e({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(r(),a("div",e({key:0,class:t.cx("header")},t.ptm("header")),[o(t.$slots,"header")],16)):d("",!0),n("div",e({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(r(),a("div",e({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(r(),a("div",e({key:0,class:t.cx("title")},t.ptm("title")),[o(t.$slots,"title")],16)):d("",!0),t.$slots.subtitle?(r(),a("div",e({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[o(t.$slots,"subtitle")],16)):d("",!0)],16)):d("",!0),n("div",e({class:t.cx("content")},t.ptm("content")),[o(t.$slots,"content")],16),t.$slots.footer?(r(),a("div",e({key:1,class:t.cx("footer")},t.ptm("footer")),[o(t.$slots,"footer")],16)):d("",!0)],16)],16)}b.render=f;var y=(t=>(t.View="Visitation.view",t.Index="Visitation.index",t.List="Visitation.list",t.Create="Visitation.create",t.Update="Visitation.update",t.Print="Visitation.print",t.Export="Visitation.export",t.ViewVisitationsOtherClinics="Visitation.viewVisitationsOtherClinics",t))(y||{});export{y as V,b as s};
