document.querySelectorAll('.tt-link').forEach(link=>{link.addEventListener('mouseover',function(){const hrefValue=this.getAttribute('href');if(hrefValue){document.documentElement.style.setProperty('--link-url',`url('${hrefValue}')`);}});link.addEventListener('mouseout',function(){document.documentElement.style.removeProperty('--link-url');});});