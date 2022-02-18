// import FileSaver from 'file-saver';


 document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    $('#loading').css('display','none');
  }
}
/*

var obj = {
  "timestamp": "2021-01-10T03:12:30.281Z",
  "itemCount": 6397,
  "municipalities": [
    {
      "hezkyNazev": "Borohrádek",
      "eDeskyID": "549",
      "zkratka": "BOROHRADEK",
      "ICO": "00274739",
      "nazev": "MĚSTO BOROHRÁDEK",
      "datovaSchrankaID": "poibfef",
      "adresaUradu": {
        "ulice": "Husova",
        "cisloDomovni": "240",
        "cisloOrientacni": null,
        "obec": "Borohrádek",
        "obecKod": "576131",
        "PSC": "51724",
        "castObce": "Borohrádek",
        "kraj": "Královéhradecký",
        "adresniBod": "21511888"
      },
    },
    {
      "hezkyNazev": "Nepomuk",
      "eDeskyID": "549",
      "zkratka": "BOROHRADEK",
      "ICO": "00274739",
      "nazev": "MĚSTO BOROHRÁDEK",
      "datovaSchrankaID": "jfygfef",
      "adresaUradu": {
        "ulice": "Husova",
        "cisloDomovni": "240",
        "cisloOrientacni": null,
        "obec": "Borohrádek",
        "obecKod": "576131",
        "PSC": "51724",
        "castObce": "Borohrádek",
        "kraj": "Plzeňský",
        "adresniBod": "21511888"
      },
     },
      {
      "hezkyNazev": "Blovice",
      "eDeskyID": "549",
      "zkratka": "BOROHRADEK",
      "ICO": "00274739",
      "nazev": "MĚSTO BOROHRÁDEK",
      "datovaSchrankaID": "qwmgfef",
      "adresaUradu": {
        "ulice": "Husova",
        "cisloDomovni": "240",
        "cisloOrientacni": null,
        "obec": "Borohrádek",
        "obecKod": "576131",
        "PSC": "51724",
        "castObce": "Borohrádek",
        "kraj": "Plzeňský",
        "adresniBod": "21511888"
      },
     },
   ],
  };

*/
   $.getJSON("https://data.cesko.digital/obce/1/obce.json",
           function (data) {
    var obj = data;

    var listOfCities = " ";
    $.each(obj.municipalities, function( key, value ) {
      if (value.adresaUradu.kraj == "Plzeňský") {
                            listOfCities += '<tr>';
                            listOfCities += '<td>' +
                                value.hezkyNazev + '</td>';
                            listOfCities += '<td>' +
                                value.datovaSchrankaID + '</td>';
                            listOfCities += '</tr>';
                            };
                         });

    $('#list').append(listOfCities);

});

/*    saveListToFile();
    console.log(file);
    */

/*
 function saveListToFile() {
            var file = listOfCities;
                { type: "text/plain;charset=utf-8" };
            saveAs(file, "Mesta.txt");
        };
*/