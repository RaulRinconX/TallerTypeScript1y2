import { series } from './data.js';
var averageSeasonsElm = document.getElementById("average-seasons");
var seriesTbody = document.getElementById('series');
var seriesCbody = document.getElementById('cards');
renderSeriesInTable(series);
averageSeasonsElm.innerHTML = "Seasons average: ".concat(getAverageSeasons(series));
function renderSeriesInTable(series) {
    console.log('mostrando tabla de series...');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td class=\"text-primary\">").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener("click", function () { mostrarCard(series, serie.id); });
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var averageseasons = 0;
    series.forEach(function (serie) { return averageseasons = averageseasons + serie.seasons; });
    averageseasons = (averageseasons / series.length);
    var averageseasons2 = averageseasons.toFixed(1);
    return averageseasons2;
}
function mostrarCard(series, id) {
    console.log('mostrando cartas...');
    switch (id) {
        case 1: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[0].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[0].name, "</li>\n                             <li>").concat(series[0].description, "</li>\n                             <li><a href=\"").concat(series[0].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 2: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[1].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[1].name, "</li>\n                             <li>").concat(series[1].description, "</li>\n                             <li><a href=\"").concat(series[1].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 3: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[2].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[2].name, "</li>\n                             <li>").concat(series[2].description, "</li>\n                             <li><a href=\"").concat(series[2].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 4: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[3].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[3].name, "</li>\n                             <li>").concat(series[3].description, "</li>\n                             <li><a href=\"").concat(series[3].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 5: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[4].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[4].name, "</li>\n                             <li>").concat(series[4].description, "</li>\n                             <li><a href=\"").concat(series[4].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 6: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[5].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[5].name, "</li>\n                             <li>").concat(series[5].description, "</li>\n                             <li><a href=\"").concat(series[5].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
            break;
        }
    }
    ;
}
function clearCard() {
    while (seriesCbody.hasChildNodes()) {
        if (seriesCbody.firstChild != null) {
            seriesCbody.removeChild(seriesCbody.firstChild);
        }
    }
}
