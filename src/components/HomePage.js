import React, {Component} from 'react';
import AdminView from './AdminView'

class HomePage extends Component {

    state = {
        itemCurrentlyOnSale: 'A Hammer',
        editSaleItem: false,
        productList: [
            {
                productName: 'Hammer',
                description: 'Itsa hammer',
                price: 12.3,
            },
            {
                productName: 'Nail',
                description: 'Itsa nail',
                price: 0.12,
            }
        ]
    }

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem});
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value
        this.setState({itemCurrentlyOnSale})
    }

    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                    <span>
                <button onClick={this.toggleEditSaleItem}>
                  {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                </button>
              </span>

                    {this.state.editSaleItem ? <div>
                        <input
                            value={this.state.itemCurrentlyOnSale}
                            type="text"
                            onChange={this.handleItemCurrentlyOnSaleChange}/>
                    </div> : null}


                    <AdminView productList={this.state.productList}/>
                </div>
            </div>
        );
    }
}

export default HomePage;