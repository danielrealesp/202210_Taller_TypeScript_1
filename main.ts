import {series} from './data.js';
import { Serie } from './serie.js';


//Render series in the DOM

//We need to create a function that will render the series in the DOM

let renderer: (serie:Serie) => string = function (serie: Serie): string
{
    //Create the HTML element with the id, name, channel and seasons
    let HTML: string = `<tr>
                <th scope="row"> ${serie.id} </th>
                <td class="nombre">
                    <a href="${serie.url}" target="blank">${serie.nombre}</a>
                </td>
                <td>${serie.canal}</td>
                <td>${serie.temporada}</td>
               </tr> `;
    return HTML;
}

let renderSeries: () => void = function(): void
{
    //Get the HTML element
    let table: HTMLElement | null = document.getElementById("table-body");
    //Insert the elements into the table
    if(table)
    {
        table.innerHTML = series.map(renderer).reduce((a,b) => a + b, "");
    }
}

let renderAverageSeason:() => void = function(): void
{
    let average: number = series.reduce((a,b) => a + b.temporada, 0) / series.length;
    let averageSeason: HTMLElement | null = document.getElementById("average-season");
    if(averageSeason)
    {
        averageSeason.innerHTML =  "Seasons average: " + average.toString();
    }
}

renderSeries();
renderAverageSeason();