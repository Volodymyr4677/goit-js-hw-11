import{i as l,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="46752777-bc6a55b3d7926eaa971e03cc7",u="https://pixabay.com/api/";async function m(o){const t=await fetch(`${u}?key=${f}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits}const p=o=>{const t=document.querySelector(".gallery");if(t.innerHTML="",o.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=o.map(e=>`
            <div class="photo-card">
                <a href="${e.largeImageURL}">
                    <img src="${e.webformatURL}" alt="${e.tags}" />
                </a>
                <div class="info">
                    <i class="info-item">
                        <b>Likes</b> ${e.likes}
                    </i>
                    <p class="info-item">
                        <b>Views</b> ${e.views}
                    </p>
                    <p class="info-item">
                        <b>Comments</b> ${e.comments}
                    </p>
                    <p class="info-item">
                        <b>Downloads</b> ${e.downloads}
                    </p>
                </div>
            </div>
        `).join("");t.insertAdjacentHTML("beforeend",s),new d(".gallery a").refresh()},a=document.querySelector("#search-form"),c=document.querySelector(".loader");a.addEventListener("submit",async o=>{o.preventDefault();const t=a.elements.query,s=t.value.trim();if(s===""){iziToast.error({title:"Error",message:"Please enter a search term.",position:"topRight"});return}t.value="",c.classList.remove("hidden"),m(s).then(i=>{p(i)}).catch(i=>{console.error(i),iziToast.error({title:"Error",message:"Failed to fetch images.",position:"topRight"})}).finally(()=>{c.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
