"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const g=require("./index-ByRfqzMr.cjs"),b=require("./RichTextEditor-DWlLqTl9.cjs");function y(e,o){var i;const t=document.createElement("iframe");t.setAttribute("style","position: absolute; width: 0; height: 0; top: 0; left: 0;"),document.body.appendChild(t);const n=t.contentDocument||((i=t.contentWindow)==null?void 0:i.document);if(!n)return;const{paperSize:a,title:c="Echo Editor",margins:{top:l,right:p,bottom:m,left:h}}=o,u=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>${c}</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @media print {
          @page {
            size: ${a};
            margin: ${l} ${p} ${m} ${h}; /* top, right, bottom, left */
          }

          body {
            background: none;
            margin: 0;
            padding: 0;
          }

          .print-container {
            width: 100%;
            box-sizing: border-box;
          }

          .no-print {
            display: none;
          }
        }
      </style>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reactjs-tiptap-editor@latest/lib/style.css">
    </head>
    <body>
      <div class="print-container">
        ${e}
      </div>
    </body>
    </html>
  `;n.open(),n.write(u),n.close(),t.addEventListener("load",()=>{setTimeout(()=>{var r,d;try{(r=t.contentWindow)==null||r.focus(),(d=t.contentWindow)==null||d.print()}catch(f){console.error("Print failed",f)}setTimeout(()=>{document.body.removeChild(t)},100)},50)})}function s(e,o){const t=e.getHTML();return t?(y(t,o),!0):!1}const E=g.Extension.create({name:"exportPdf",addOptions(){var e;return{...(e=this.parent)==null?void 0:e.call(this),paperSize:"Letter",title:"Echo Editor",margins:{top:"0.4in",right:"0.4in",bottom:"0.4in",left:"0.4in"},button:({editor:o,extension:t,t:n})=>({component:b.ActionButton,componentProps:{action:()=>{s(o,t.options)},icon:"ExportPdf",tooltip:n("editor.exportPdf.tooltip"),isActive:()=>!1,disabled:!1}})}},addCommands(){return{exportToPdf:()=>({editor:e})=>s(e,this.options)}}});exports.ExportPdf=E;
