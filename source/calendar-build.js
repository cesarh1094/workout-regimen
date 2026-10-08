const fs = require('fs');
// Oct 2026: Oct 1 is a Thursday (index 4, Sun=0). Day 1 = Tue Oct 6.
const plan = {
  6:  {t:'kb',  wk:1, d:'Complex A × 3 · DONE ✓', r:'Push-ups 2×8 · Lat raises 2×15'},
  8:  {t:'kb2', d:'Complex C × 2 · DONE ✓', r:'Push-ups 3×8 · Lat raises 2×15'},
  11: {t:'walk',d:'60 min'},
  13: {t:'kb',  wk:2, d:'Complex A × 3 rounds', r:'Push-ups · Lat raises'},
  15: {t:'kb2', d:'Complex C × 3 rounds', r:'Push-ups · Lat raises'},
  18: {t:'walk',d:'60 min'},
  20: {t:'kb',  wk:3, d:'Complex A × 4 rounds', r:'Push-ups · Lat raises'},
  22: {t:'kb2', d:'Complex C × 4 rounds', r:'Push-ups · Lat raises'},
  25: {t:'walk',d:'60 min'},
  27: {t:'kb',  wk:4, d:'Complex A × 4 rounds', r:'Push-ups · Lat raises'},
  29: {t:'kb2', d:'Complex C × 4 rounds', r:'Push-ups · Lat raises'},
};
const title = {kb:'Kettlebell A', kb2:'Kettlebell C', walk:'Long Walk'};
const cells = [];
for (const d of [27,28,29,30]) cells.push(`<div class="cell out"><div class="num">Sep ${d}</div></div>`);
for (let d = 1; d <= 31; d++) {
  const day = d - 5;
  const p = plan[d];
  let cls = 'cell', body = '';
  const TODAY = 8;
  if (d < TODAY && !plan[d]) cls += ' past';
  if (d === TODAY) cls += ' today';
  if (day >= 1) {
    if (p) {
      cls += ' ' + p.t;
      body = `<div class="w">${title[p.t]}</div>` +
        (p.wk ? `<div class="wk">Week ${p.wk} starts</div>` : '') +
        `<div class="det">${p.d}</div>` + (p.r ? `<div class="det">${p.r}</div>` : '');
    } else body = `<div class="rest">Rest</div>`;
    body += `<div class="steps">10k steps</div>`;
    if (d === TODAY) body = `<div class="tag">TODAY</div>` + body;
  }
  const dn = day >= 1 ? `<span class="day">Day ${day}</span>` : '';
  cells.push(`<div class="${cls}"><div class="num">${d}${dn}</div>${body}</div>`);
}
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box} body{margin:0;padding:28px 32px;font-family:'Inter','Segoe UI',Roboto,Arial,sans-serif;background:#f6f5f2;color:#1f2328;width:1400px}
h1{margin:0;font-size:30px} .sub{color:#57606a;margin:4px 0 18px;font-size:15px}
.grid{display:grid;grid-template-columns:repeat(7,1fr);gap:6px}
.hd{font-weight:700;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#57606a;padding:4px 8px}
.cell{background:#fff;border:1px solid #e1e0dc;border-radius:10px;min-height:150px;padding:9px 10px;display:flex;flex-direction:column;gap:4px}
.num{font-weight:700;font-size:18px;display:flex;justify-content:space-between;align-items:center}
.day{font-size:11px;font-weight:700;background:#1f2328;color:#fff;border-radius:999px;padding:2px 8px}
.out{background:transparent;border:1px dashed #d6d4ce;color:#9a9a96}
.past{background:#efeee9;color:#9a9a96}
.today{border:2px solid #1f2328}
.tag{font-size:11px;font-weight:800;letter-spacing:.08em}
.w{font-weight:700;font-size:14px} .wk{font-size:11px;font-weight:700;color:#9a3412;text-transform:uppercase;letter-spacing:.04em}
.det{font-size:12.5px;color:#3d434a;line-height:1.3}
.rest{font-size:13px;color:#8a8f96}
.steps{margin-top:auto;font-size:11.5px;color:#6e7781}
.kb{background:#fff3e8;border-color:#f3c79c} .kb .w{color:#9a3412}
.run{background:#eaf2ff;border-color:#a9c6f5} .run .w{color:#1d4ed8}
.kb2{background:#f3eefe;border-color:#c9b6f2} .kb2 .w{color:#6d28d9}
.walk{background:#e9f7ee;border-color:#9fd6b2} .walk .w{color:#15803d}
.legend{margin-top:18px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px;font-size:13.5px;line-height:1.45}
.legend div{background:#fff;border:1px solid #e1e0dc;border-radius:10px;padding:12px 14px}
.legend b{display:block;margin-bottom:3px}
</style></head><body>
<h1>October 2026 · Phase 1 (Weeks 1–4)</h1>
<div class="sub">Day 1 = Tuesday, Oct 6 · 3 workouts per week · 10,000 steps minimum every day</div>
<div class="grid">${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>`<div class="hd">${d}</div>`).join('')}${cells.join('')}</div>
<div class="legend">
<div><b style="color:#9a3412">Kettlebell A (Tuesdays)</b>5-min warm-up. Each round: 5 deadlifts → 5 goblet squats → 5 rows/side → 5 overhead presses/side. Rest 90–120s. Then knee push-ups 3 sets and lateral raises.</div>
<div><b style="color:#6d28d9">Kettlebell C (Thursdays)</b>5-min warm-up. Each round: 5 suitcase deadlifts/side → 5 reverse lunges/side → 5 halos each way → 5 paused rows/side → 30s suitcase march in place/side. Then push-ups and lateral raises.</div>
<div><b style="color:#15803d">Long Walk (Sundays)</b>60 minutes. Use hills or trails if possible. Rest days = 10k steps only. No jump rope until Phase 2: Week 5 starts Tue Nov 3 (Day 29).</div></body></html>`;
fs.writeFileSync('october-2026.html', html);
