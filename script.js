//Pobranie aktualnych wyników ze strony mobilotto w formacie JSON oraz pozyskanie konkretnych 6 liczb.
    var req = new XMLHttpRequest();
    req.open('GET', 'http://serwis.mobilotto.pl/mapi_v6/index.php?json=getGames', false);
    req.onload  = function () {
       var jsonResponse = req.response;
       toParse = JSON.parse(jsonResponse);
       numbers = toParse.Lotto.numerki;
    };
    req.send();
// tab1 zawiera liczby ze strony
    var tab1 = numbers.split(",");
      tab1 = tab1.sort(function (a, b) {return a - b});
      console.log(tab1);

    var trafienia = 0; // zmienna wykorzystywana później przy porównywaniu wyników

    var tab2 = []; // tab2 uzupełniona zostanie liczbami wpisanymi przez użytkowanika

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
        document.getElementById("komunikat").innerHTML = "Gratulacje trafiłeś SZÓSTKĘ!!!";
      } else if (trafienia === 5) {
        document.getElementById("komunikat").innerHTML = "Gratulacje trafiłeś piątkę!!!";
      } else if (trafienia === 4) {
        document.getElementById("komunikat").innerHTML = "Gratulacje trafiłeś czwórkę!!!";
      } else if (trafienia === 3) {
        document.getElementById("komunikat").innerHTML = "Gratulacje trafiłeś trójkę!!!";
      } else if (trafienia === 2) {
        document.getElementById("komunikat").innerHTML = "Niestety, trafiłeś tylko dwójkę.";
      } else if (trafienia === 1) {
        document.getElementById("komunikat").innerHTML = "Niestety, trafiłeś tylko jedną liczbę.";
      } else if (trafienia === 0) {
        document.getElementById("komunikat").innerHTML = "Niestety, nie trafiłeś żadnej liczby.";
      }
    }

    console.log(trafienia);
