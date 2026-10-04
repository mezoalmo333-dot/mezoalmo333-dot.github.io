const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));

document.title = CONFIG.brandName;
$("brandName").textContent = CONFIG.brandName;
$("brandSubtitle").textContent = CONFIG.brandSubtitle;
$("footerName").textContent = CONFIG.brandName;
$("footerText").textContent = CONFIG.footerText;
$("navLink").href = CONFIG.telegram;
$("heroCta").href = CONFIG.telegram;
$("heroCta").innerHTML = `${esc(CONFIG.heroCta)} <span>←</span>`;
$("heroTitle").innerHTML = CONFIG.heroTitle.split("|").map((x,i)=>i ? `<span>${esc(x)}</span>` : esc(x)).join("<br>");
$("heroText").textContent = CONFIG.heroText;
$("footerTelegram").href = CONFIG.telegram;

CONFIG.stats.forEach((s,i)=>{ $(`stat${i+1}`).textContent=s[0]; document.querySelectorAll(".stat span")[i].textContent=s[1]; });

$("plansGrid").innerHTML = CONFIG.plans.map(p => `
  <article class="plan ${p.best ? "best":""}">
    ${p.best ? '<div class="tag">الأفضل</div>' : ""}
    <h3>${esc(p.label)}</h3>
    <div class="price">${esc(p.price)} <small>جنيه</small></div>
    <div class="return">القيمة/النتيجة المعلنة <b>${esc(p.result)} جنيه</b></div>
    <div class="buy"><a class="btn primary" href="${esc(CONFIG.telegram)}" target="_blank" rel="noopener">اختيار الباقة</a></div>
  </article>
`).join("");

$("courseTitle").textContent=CONFIG.course.title;
$("courseText").textContent=CONFIG.course.text;
$("coursePrice").textContent=CONFIG.course.price;
$("courseCta").textContent=CONFIG.course.cta;
$("courseCta").href=CONFIG.telegram;
$("weeks").innerHTML=CONFIG.course.weeks.map(w=>`
  <article class="week"><span>${esc(w[0])}</span><h3>${esc(w[1])}</h3><p>${esc(w[2])}</p></article>
`).join("");

$("featuresGrid").innerHTML=CONFIG.features.map(f=>`
  <article class="feature"><div class="feature-icon">${esc(f[0])}</div><h3>${esc(f[1])}</h3><p>${esc(f[2])}</p></article>
`).join("");

$("copyright").textContent=`© ${new Date().getFullYear()} ${CONFIG.brandName}. جميع الحقوق محفوظة.`;
