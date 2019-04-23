<!doctype html>
<html lang='pl'>
  <head>
    <meta charset='utf-8'>
    <title></title>
      <link rel="stylesheet" href="css.css">
      <link href="https://fonts.googleapis.com/css?family=Patrick+Hand" rel="stylesheet">

  </head>
  <body>
  <?php
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_URL, 'http://serwis.mobilotto.pl/mapi_v6/index.php?json=getGames&fbclid=IwAR2nAx0aMaXt5sNPEUa2xV9pKcWG6X_f4beUEMG6CPRdYoBBmnlxL8K11mQ');
  $result = curl_exec($ch);
  curl_close($ch);
  ?>
    <div id="hide">
        <?php echo $result ?>
    </div>

 
    <div class="first-section">
      <p> Sprawdź swoją liczbę w Lotto! </p>
    </div>
    <form>
        <label for="liczby">Wpisz tutaj swoje liczby: </label>
        <input type="string" name="liczby" id="liczby"/> 
       
        <p id="podpowiedz"> <img src="question%20.png"><span id="podpowiedz-tresc">Liczby powinny być zapisane po przecinkach i bez spacji.</span></p>
        <input type="button" id="przycisk" value="Sprawdź!">
     
    </form>
    <div class="third-section">
      <p id="komunikat"> Powodzenia !!!</p>
    </div>
    <div id="informacje" class="third-section">

    </div>
  <script type="text/javascript">var dane = <?php echo $result ?>;</script>
  <script src="script.js"></script>
  </body>
</html>
