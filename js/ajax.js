
window.onload = function()
{
	var msg = document.getElementById("msg");
	var usuario = document.getElementById('usr');
	msg.addEventListener("keydown", function(e) {
	    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
	        envia(msg.innerHTML, usuario.innerHTML);
			msg.value = "";
	    }
	});
};

function envia(str) {
	var str = document.getElementById('msg').value;
	var usuario = document.getElementById('usr').value;
    if (typeof str == 'string' && str.trim() == ''){
        //document.getElementById("chat").innerHTML = "";
        return;
    } else {
			if (str == undefined) str = '';
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
							var chat = document.getElementById("chat");
              chat.innerHTML = this.responseText;
										var arrChat = JSON.parse(this.responseText);
										var parrafo;
										var usuarios = new Array();
										var arrUsu = new Array();
										for (var i = 0; i < arrChat.length; i++) {
											var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
												parrafo = parrafo + "<p><span style='background-color:"+randomColor+"'>"+arrChat[i][0]+": </span>"+arrChat[i][1]+"</p>";
												usuarios[arrChat[i][0]] = true;
											}
											for(var key in usuarios){
												arrUsu.push(key);
												//usuarios = usuarios + "<p style='text-align: center;'>" + key + "</p>";
											}
											arrUsu.sort();

											for(var i = 0; i < arrUsu.length; i++){
												// if(Date.now() - arrChat[i][2] <= 300){
												//
												// }
												usuarios = usuarios + "<p style='text-align: center;'>" + arrUsu[i] + "</p>";
											}

											document.getElementById("chat").innerHTML = parrafo;
											document.getElementById("usuarios").innerHTML = usuarios;

											chat.scrollTop = chat.scrollHeight;
											usuarios.scrollTop = usuarios.scrollHeight;
											//setTimeout(envia,5000);
										}
            }
        };
        xmlhttp.open("GET", "http://10.192.4.1/zubiri/ajax_backend.php?q=" + str + "&u=" + usuario,true);
        xmlhttp.send();
    };

function aparece(){
	document.getElementById("emojis").style.visibility = 'visible';
}

function elige(img){
	document.getElementById('msg').value += img.outerHTML;
}
