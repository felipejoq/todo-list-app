(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function f(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const o=JSON.parse(localStorage.getItem("tasks"))||[],l=document.getElementById("newTaskInput"),c=document.getElementById("taskList"),k=document.getElementById("addButton"),r=document.querySelector(".empty-tasks-text");k.addEventListener("click",e=>{m()});l.addEventListener("keydown",e=>{e.key==="Enter"&&m()});c.addEventListener("click",e=>{if(e.target.classList.contains("delete-button")||e.target.classList.contains("fa-solid")){const s=e.target.id||e.target.getAttribute("data-index");y(s)}});c.addEventListener("change",e=>{if(e.target.classList.contains("task-checkbox")){const s=e.target.closest(".task-item").querySelector(".delete-button").getAttribute("data-index");L(s)}});const m=()=>{const e=l.value.trim();e!==""&&(o.push({text:e,completed:!1}),u(),i(),l.value="")},y=e=>{o.splice(e,1),u(),i(),p()&&g()},u=()=>{localStorage.setItem("tasks",JSON.stringify(o))},i=()=>{c.innerHTML="",p()?g():(h(),o.forEach((e,s)=>{const a=document.createElement("li");a.classList.add("task-item"),a.id=`task-${s}`,a.innerHTML=`
                  <input type="checkbox" class="task-checkbox" ${e.completed?"checked":""}>
                  <span class="task-text">
                    ${e.text}
                  </span>
                  <button id="${s}" class="delete-button" data-index="${s}">
                    <i class="fa-solid fa-trash-can fa-lg" data-index="${s}"></i>
                  </button>
              `,c.appendChild(a)}))},L=e=>{o[e].completed=!o[e].completed,u(),i()},p=()=>o.length===0,g=()=>{r.classList.replace("d-none","d-block"),r.innerText="There are no scheduled tasks yet..."},h=()=>{r.classList.replace("d-block","d-none"),r.classList.add("d-none")};i();
