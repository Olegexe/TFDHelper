import "./assets/scss/index.scss";

const relicsJSON = require('./relics.json');


const root = document.getElementById('sublist');

root.innerHTML = '<ul class="item-info-list item-info-list_header"><li class="item-info-list__item item-info-list__item_header">Relic</li><li class="item-info-list__item item-info-list__item_header">Chance</li><li class="item-info-list__item item-info-list__item_header">Location</li><li class="item-info-list__item item-info-list__item_header">Sublocation</li><li class="item-info-list__item item-info-list__item_header">Mission</li></ul>';

function buildItem(name) {
    relicsJSON.Relics.forEach(item => {
        item.contains.forEach(subItem => {
            if(subItem.name.toLowerCase().includes(name.toLowerCase())) {
                root.innerHTML += `
                    <ul class="item-info-list">
                        <li class="item-info-list__item">${item.key}</li>
                        <li class="item-info-list__item">${subItem.chance}</li>
                        <li class="item-info-list__item">${item.location}</li>
                        <li class="item-info-list__item">${item.sublocation}</li>
                        <li class="item-info-list__item">${item.mission}</li></ul>`
            }
        })    
    })
}

buildItem('Код Супер-Банни')
