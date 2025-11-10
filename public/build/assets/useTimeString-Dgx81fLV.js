function s(i){if(!i)return new Date(0,0,0,0,0);const[n,t]=i.split(" ");let[e,r]=n.split(":").map(Number);return t==="PM"&&e<12&&(e+=12),t==="AM"&&e===12&&(e=0),new Date(0,0,0,e,r)}export{s as p};
