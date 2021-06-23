//const canvas = require('libraries/html2canvas.min');
//console.log(canvas);

let website_links = [
  {title: 'FDN', link: 'https://www.fdn.fr/services/acces-internet/'},
  {title: 'Sci-Hub', link: 'https://sci-hub.now.sh'},
  {title: 'Z Lib', link: 'https://z-lib.org/'},
  {title: 'LibGen', link: 'http://libgen.is/'},
  {title: 'Un monde meilleur', link:'https://abw.blue/index.php'}
];


function switchiframe(element) {
  document.getElementById('main').src = element.name;
}


function generateTable(table, data_array) {
  data_array.forEach(data => {
    // C
    let row = table.insertRow();
    let txt_cell = row.insertCell();
    let btn_cell = row.insertCell();
    // Create tags
    let txt_title = ['txt', data['title'].replace(/\s/g, '')].join('_');
    let btn_title = ['btn', data['title'].replace(/\s/g, '')].join('_');
    let title = document.createTextNode(data['title']);
    let input = document.createElement('input');
    // Set tags parameters
    btn_cell.id = btn_title;
    txt_cell.id = txt_title;
    input.type = 'button';
    input.name = data['link'];
    input.value = data['title'];
    input.addEventListener('click', function(){
      switchiframe(this);
    });
    // Populate cells
    txt_cell.appendChild(title);
    btn_cell.appendChild(input);
    // Set the background image as the corresponding preview png file for each site
    document.getElementById(txt_title).style.backgroundImage = eval("[\"url('\", \"previews/preview_\", data['title'].replace(/\\s/g, ''), \".png\", \"')\"].join('')");
  })
}

let table = document.querySelector("table");
generateTable(table, website_links);
