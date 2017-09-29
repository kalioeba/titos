//Text to Speech Integration Code 
function getTextT2S(startingPoint) {
var text = "";
function gt(start) {
  if (start.nodeType === 3)
    text += start.nodeValue;
  else if (start.nodeType === 1)
    if (start.tagName != "SCRIPT" && start.tagName != "STYLE")
      for (var i = 0; i < start.childNodes.length; ++i)
        gt(start.childNodes[i]);
}
gt(startingPoint);
text = text.replace(/\s{2,}/g,' ');
text = text.replace(/<\/?[^>]+(>|$)/g, "");
return text;
}

document.addEventListener('DOMContentLoaded', function(){ 
	var buttonT2S = document.createElement("Button");
	buttonT2S.innerHTML = "<img src='tombol.png'>";
	buttonT2S.setAttribute("id", "btnT2S");
	buttonT2S.style = "background:transparent;border:0;bottom:0;right:0;position:fixed;z-index:9999;"	
	document.body.appendChild(buttonT2S);
	document.getElementById("btnT2S").onclick = function() { 
  		var allTextT2S = getTextT2S(document.body);
  		responsiveVoice.speak(allTextT2S,"Indonesian Female"); 
	};		            
});