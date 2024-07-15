import React from 'react';
import BunnyImg from '../../assets/img/bunny.jpg';

console.log(BunnyImg)

class Item extends React.Component {

    render() {
        console.log(this.props)
        return (
            <li className="item">
                <div className="item__header">
                    <div className="item__header-image">
                    <img src={BunnyImg} alt="Character" />
                    {/* <picture>
                        <source srcSet={'../../' + this.props.image + '.webp'} type="image/webp" />
                        <source srcSet={'../../' + this.props.image + '.jpg'} type="image/jpg" />
                        <img src={BunnyImg} />
                    </picture> */}
                    </div>
                    <h2 className="item__header-title">{this.props.name}</h2>
                </div>
                <ul className="item__component-list">
                    {this.props.recipe.map((val, key) => {
                        return (
                            <li className="item__component-item" key={key}>
                                <table className="item__table">
                                    <tr>
                                        <th className="item__table-item item__table-header_long" colSpan={6}>{val}</th>
                                    </tr>
                                    <tr>
                                        <th className="item__table-item item__table-header">ID</th>
                                        <th className="item__table-item item__table-header">Drop chance</th>
                                        <th className="item__table-item item__table-header">Location</th>
                                        <th className="item__table-item item__table-header">Sublocation</th>
                                        <th className="item__table-item item__table-header">Mission</th>
                                        <th className="item__table-item item__table-header">Reactor</th>
                                    </tr>
                                    {this.props.data[val].map((relicValue, relicKey) => {
                                        return (
                                            <tr key={relicKey}>
                                                <td className="item__table-item">{relicValue.id}</td>
                                                <td className="item__table-item">{relicValue.chance}</td>
                                                <td className="item__table-item">{relicValue.location}</td>
                                                <td className="item__table-item">{relicValue.sublocation}</td>
                                                <td className="item__table-item">{relicValue.mission}</td>
                                                <td className="item__table-item">{relicValue.reactor}</td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </li>
                        )
                    })}
                </ul>
            </li>
        )
    }
}

export default Item;