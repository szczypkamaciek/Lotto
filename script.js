let trafienia = 0; // zmienna wykorzystywana później przy porównywaniu wyników
let tab2 = []; // tab2 uzupełniona zostanie liczbami wpisanymi przez użytkowanika
let tab1 = [];


const dane = $.getJSON('https://jsonp.afeld.me/?url=http%3A%2F%2Fserwis.mobilotto.pl%2Fmapi_v6%2Findex.php%3Fjson%3DgetGames', function(data){
	console.log(data);
	tab1 = data.Lotto.numerki.split(',');
});

var przycisk = document.getElementById("przycisk");
przycisk.onclick = wywolanie;
function wywolanie() {
tab2 = document.getElementById("liczby");
tab2 = tab2.value.split(",");
  	if(tab2.length === 6) {
    	console.log(tab2);
    	porownanie(tab1, tab2);
  	} else {
    	document.getElementById("komunikat").innerHTML = "Zestaw musi składać się z 6 liczb.";
  	}
}
console.log(tab2);

// sprawdzenie wyników na podstawie porównania tab1 i tab2
function porownanie (tab1, tab2) {
  	if (tab1.length === tab2.length) {
    	for (var i = 0; i < tab1.length; i++) {
     		for (var j = 0; j < tab2.length; j++) {
        		if (tab1[i] === tab2[j]) {
        			trafienia = trafienia + 1;			
        		}
      		}
    	}
  }
  if (trafienia === 6) {
	  document.getElementById("komunikat").innerHTML = "Gratulacje, trafiłeś SZÓSTKĘ!!!";
	  
	  
  } else if (trafienia === 5) {
	  document.getElementById("komunikat").innerHTML = "Gratulacje, trafiłeś piątkę!!!";
	  
  } else if (trafienia === 4) {
	  document.getElementById("komunikat").innerHTML = "Gratulacje, trafiłeś czwórkę!!!";
	 
  } else if (trafienia === 3) {
	  document.getElementById("komunikat").innerHTML = "Gratulacje, trafiłeś trójkę!!!";
	 
  } else if (trafienia === 2) {
	  document.getElementById("komunikat").innerHTML = "Trafiłeś tylko dwie liczby.";
	 
  } else if (trafienia === 1) {
	  document.getElementById("komunikat").innerHTML = "Trafiłeś tylko jedną liczbę.";
	  
  } else if (trafienia === 0) {
	  document.getElementById("komunikat").innerHTML = "Niestety, nie trafiłeś żadnej liczby.";
  }
}


let podpowiedzTresc = document.getElementById('podpowiedz-tresc');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
	podpowiedzTresc.style.display = "";
    podpowiedzTresc.style.top = (y + 20) + 'px';
    podpowiedzTresc.style.left = (x + 20) + 'px';
};
