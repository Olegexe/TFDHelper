import React from 'react';
import Item from '../Item/Item';

const itemsJSON = require('../../items.json')
const relicsJSON = require('../../relics.json')

class ItemBrowser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chanceEnum: ['3%', '6%', '15%', '38%', '38%'],
            goldChanceEnum: ['6%', '10%', '20%', '32%', '32%']
        }
    }

    componentDidMount() {

    }

    render() {
        
        return (
            <div className="item-browser">
                <ul className="item-browser__list">
                    {
                        itemsJSON.Characters.map((item, key) => {   
                            let data = [];                         
                            item.recipe.forEach(recipeItem => {
                                data[recipeItem] = []
                                console.log(data)
                                relicsJSON.Relics.forEach(relic => {
                                    let index = relic.contains.indexOf(recipeItem)
                                    if(index != -1) {
                                        data[recipeItem].push({
                                            id: relic.key,
                                            chance: +relic.key >= 54 ? this.state.goldChanceEnum[index] : this.state.chanceEnum[index],
                                            location: relic.location,
                                            sublocation: relic.sublocation,
                                            mission: relic.mission,
                                            reactor: ''
                                        })
                                    }
                                })
                            })
                            return <Item name={item.name} image={item.img} recipe={item.recipe} data={data} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ItemBrowser;