import { E as g } from "./index-DI9T3iLd.js";
import { A as b } from "./RichTextEditor-KP2Rgcqe.js";
function y(e, n) {
  var i;
  const t = document.createElement("iframe");
  t.setAttribute(
    "style",
    "position: absolute; width: 0; height: 0; top: 0; left: 0;"
  ), document.body.appendChild(t);
  const o = t.contentDocument || ((i = t.contentWindow) == null ? void 0 : i.document);
  if (!o) return;
  const {
    paperSize: s,
    title: c = "Echo Editor",
    margins: {
      top: p,
      right: l,
      bottom: m,
      left: h
    }
  } = n, f = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>${c}</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @media print {
          @page {
            size: ${s};
            margin: ${p} ${l} ${m} ${h}; /* top, right, bottom, left */
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
  `;
  o.open(), o.write(f), o.close(), t.addEventListener("load", () => {
    setTimeout(() => {
      var r, d;
      try {
        (r = t.contentWindow) == null || r.focus(), (d = t.contentWindow) == null || d.print();
      } catch (u) {
        console.error("Print failed", u);
      }
      setTimeout(() => {
        document.body.removeChild(t);
      }, 100);
    }, 50);
  });
}
function a(e, n) {
  const t = e.getHTML();
  return t ? (y(t, n), !0) : !1;
}
const x = /* @__PURE__ */ g.create({
  name: "exportPdf",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      paperSize: "Letter",
      title: "Echo Editor",
      margins: {
        top: "0.4in",
        right: "0.4in",
        bottom: "0.4in",
        left: "0.4in"
      },
      button: ({ editor: n, extension: t, t: o }) => ({
        component: b,
        componentProps: {
          action: () => {
            a(n, t.options);
          },
          icon: "ExportPdf",
          tooltip: o("editor.exportPdf.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  },
  addCommands() {
    return {
      exportToPdf: () => ({ editor: e }) => a(e, this.options)
    };
  }
});
export {
  x as ExportPdf
};
