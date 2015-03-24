function grableftnav(response)
  { document.getElementById('leftnav').innerHTML = response; }

function grabnavigation(response)
  { document.getElementById('navigation').innerHTML = response; }

function grabcontent(response)
  { document.getElementById('content').innerHTML = response; }

AjaxGet('api/leftnav.php',grableftnav);

AjaxGet('api/navigation.php',grabnavigation);

AjaxGet('api/content.txt',grabcontent);
