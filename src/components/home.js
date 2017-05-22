import React, { Component } from 'react';
import trade from '../data/trade';
import '../home.css';

let Home = React.createClass({
    updateIndex: null,
    tempDetails: {},
    allTrades: null,
    getInitialState: function () {
        return {
            tradeList: trade,
            tradeDate: '',
            commodity: '',
            side: 'buy',
            quantity: 0,
            price: 0,
            counterParty: '',
            location: '',
            editTrade: {
                tradeDate: '',
                commodity: '',
                side: '',
                quantity: 0,
                price: 0,
                counterParty: '',
                location: ''
            },
            searchTrade: {
                searchToDate: '',
                searchFromDate: '',
                searchCommodity: '',
                searchSide: '',
                searchCounterParty: '',
                searchLocation: ''
            }
        }
    },
    updateTradeDate: function (e) {
        this.setState({ tradeDate: e.target.value })
        console.log(this.state.tradeDate)
    },
    updateCommodity: function (e) {
        this.setState({ commodity: e.target.value })
        console.log(this.state.commodity);
    },
    updateSide: function (e) {
        this.setState({ side: e.target.value });
        console.log(this.state.side);
    },
    updateQuantity: function (e) {
        this.setState({ quantity: e.target.value });
        console.log(this.state.quantity);
    },
    updatePrice: function (e) {
        this.setState({ price: e.target.value });
        console.log(this.state.price);
    },
    updateCounterParty: function (e) {
        this.setState({ counterParty: e.target.value });
        console.log(this.state.counterParty);
    },
    updateLocation: function (e) {
        this.setState({ location: e.target.value });
        console.log(this.state.location);
    },
    addTrade: function () {
        if (this.state.tradeDate == '' || this.state.commodity == '' || this.state.side == '' || this.state.quantity == null || this.state.price == null || this.state.counterParty == '' || this.state.location == '')
            alert("Please enter all the fields");
        else {
            let tempTrades = this.state.tradeList;
            tempTrades.push({ tradeDate: this.state.tradeDate, commodity: this.state.commodity, side: this.state.side, quantity: this.state.quantity, price: this.state.price, counterParty: this.state.counterParty, location: this.state.location });
            this.setState({ tradeList: tempTrades });
            this.allTrades = tempTrades;
            this.setState({ tradeDate: '' });
            this.setState({ commodity: '' });
            this.setState({ side: '' });
            this.setState({ quantity: null });
            this.setState({ price: '' });
            this.setState({ counterParty: '' });
            this.setState({ location: '' });
        }
    },
    updateEditTradeDate: function (e) {
        this.setState({ editTrade: { tradeDate: e.target.value } });
    },
    updateEditCommodity: function (e) {
        let tempState = this.state.editTrade;
        this.setState({ tempState: { commodity: e.target.value } }, () => {
            this.state.editTrade.commodity = this.state.tempState.commodity;
        });
    },
    updateEditSide: function (e) {
        let tempState = this.state.editTrade;
        this.setState({ tempState: { side: e.target.value } }, () => {
            this.state.editTrade.side = this.state.tempState.side;
        });

    },
    updateEditQuantity: function (e) {
        let tempState = this.state.editTrade;
        this.setState({ tempState: { quantity: e.target.value } }, () => {
            this.state.editTrade.quantity = this.state.tempState.quantity;
        });
    },
    updateEditPrice: function (e) {
        let tempState = this.state.editTrade;
        this.setState({ tempState: { price: e.target.value } }, () => {
            this.state.editTrade.price = this.state.tempState.price;
        });
    },
    updateEditCounterParty: function (e) {
        let tempState = this.state.editTrade;
        this.setState({ tempState: { counterParty: e.target.value } }, () => {
            this.state.editTrade.counterParty = this.state.tempState.counterParty;
        });
    },
    updateEditLocation: function (e) {
        let tempState = this.state.editTrade;
        this.setState({ tempState: { location: e.target.value } }, () => {
            this.state.editTrade.location = this.state.tempState.location;
        });
    },
    editTrade: function (trade, index) {

        this.updateIndex = index;
        this.setState({ editTrade: trade });
        this.tempDetails = trade;
    },
    updateTradeDetails: function (trade) {
        console.log(trade);
        let tempTrades = this.state.tradeList;
        tempTrades[this.updateIndex] = trade;
        this.setState({ tradeList: tempTrades });
        this.allTrades = tempTrades;

    },
    removeTradeDetails: function (index) {
        let tempTrades = this.state.tradeList;
        tempTrades.splice(index, 1);
        this.setState({ tradeList: tempTrades });
        this.allTrades = tempTrades;

    },
    updateSearchToDate: function (e) {
        let tempState = this.state.searchTrade;
        this.setState({ tempState: { searchToDate: e.target.value } }, () => {
            this.state.searchTrade.searchToDate = this.state.tempState.searchToDate;
        });

    },
    updateSearchFromDate: function (e) {
        let tempState = this.state.searchTrade;
        this.setState({ tempState: { searchFromDate: e.target.value } }, () => {
            this.state.searchTrade.searchFromDate = this.state.tempState.searchFromDate;
        });

    },
    updateSearchCommodity: function (e) {
        let tempState = this.state.searchTrade;
        this.setState({ tempState: { searchCommodity: e.target.value } }, () => {
            this.state.searchTrade.searchCommodity = this.state.tempState.searchCommodity;
        });

    },
    updateSearchSide: function (e) {
        let tempState = this.state.searchTrade;
        this.setState({ tempState: { searchSide: e.target.value } }, () => {
            this.state.searchTrade.searchSide = this.state.tempState.searchSide;
        });

    },
    updateSearchCounterParty: function (e) {
        let tempState = this.state.searchTrade;
        this.setState({ tempState: { searchCounterParty: e.target.value } }, () => {
            this.state.searchTrade.searchCounterParty = this.state.tempState.searchCounterParty;
        });

    },
    updateSearchLocation: function (e) {
        let tempState = this.state.searchTrade;
        this.setState({ tempState: { searchLocation: e.target.value } }, () => {
            this.state.searchTrade.searchLocation = this.state.tempState.searchLocation;
        });

    },
    searchTrade: function () {
        let tradeSearch = this.state.searchTrade;
        console.log(tradeSearch);
        if (this.allTrades == null)
            this.allTrades = this.state.tradeList;
        console.log(this.allTrades);
        let tempTrades = this.allTrades;
        let searchedTrades = [];
        for (let i = 0; i < tempTrades.length; i++) {
            let stdDate=new Date(tradeSearch.searchToDate);
            let endDate=new Date(tradeSearch.searchFromDate);
            let trdDate=new Date((tempTrades[i].tradeDate.split("/").reverse().join("-")));
            let matches = ((tradeSearch.searchCommodity ? ((tempTrades[i].commodity.toUpperCase()).indexOf(tradeSearch.searchCommodity.toUpperCase())) : -1 >= 0)
                || (tradeSearch.searchSide ? ((tempTrades[i].side.toUpperCase()).indexOf(tradeSearch.searchSide.toUpperCase())) : -1 >= 0)
                || (tradeSearch.searchCounterParty ? ((tempTrades[i].counterParty.toUpperCase()).indexOf(tradeSearch.searchCounterParty.toUpperCase())) : -1 >= 0)
                || (tradeSearch.searchLocation ? ((tempTrades[i].location.toUpperCase()).indexOf(tradeSearch.searchLocation.toUpperCase())) : -1 >= 0)
                || ((tradeSearch.searchToDate && tradeSearch.searchFromDate) ? (((tempTrades[i].tradeDate.split("/").reverse().join("-")).indexOf(tradeSearch.searchToDate))
                && ((tempTrades[i].tradeDate.split("/").reverse().join("-")).indexOf(tradeSearch.searchFromDate))
                && (stdDate>=trdDate || endDate<=trdDate)) : -1 >= 0)) ? false : true;

            if (matches) { 
                //  console.log(tempTrades[i]);
                searchedTrades.push(tempTrades[i]);
            }

        }
        console.log(searchedTrades);
        this.setState({ tradeList: searchedTrades });
    },
    searchClear:function(){

    },
    render() {
        return (
            <div>
                <div style={{ paddingTop: '2%', paddingLeft: '2%' }} className="row">
                    <h3>Trade Search</h3><hr />
                    <div className="col-md-12">
                        <div>
                            <div className="col-md-2" >
                                <label>Trade Date:</label><br />
                                <input type="date" className="form-control" value={this.state.searchToDate} onChange={this.updateSearchToDate} />
                                to
                                <input type="date" className="form-control" value={this.state.searchFromDate} onChange={this.updateSearchFromDate} />
                            </div>
                            <div className="col-md-2" >
                                <label>Commodity:</label><br />
                                <select name="commodity" className="form-control" onChange={this.updateSearchCommodity} value={this.state.searchCommodity}>
                                    <option value="">-Select-</option>
                                    <option value="AL">AL</option>
                                    <option value="Cu">Cu</option>
                                    <option value="Zn">Zn</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label>Side:</label>
                                <input type="radio" name="side" value="buy" onChange={this.updateSearchSide} />Buy
                                <input type="radio" name="side" value="sell" onChange={this.updateSearchSide} />Sell
                            </div>
                            <div className="col-md-2">
                                <label>Counterparty:</label>
                                <select name="counterParty" className="form-control" value={this.state.searchCounterParty} onChange={this.updateSearchCounterParty}>
                                    <option value="">-Select-</option>
                                    <option value="Tata">Tata</option>
                                    <option value="Birla">Birla</option>
                                    <option value="Ambani">Ambani</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label>Location:</label>
                                <select name="location" className="form-control" value={this.state.searchLocation} onChange={this.updateSearchLocation}>
                                    <option value="">-Select-</option>
                                    <option value="JSR">JSR</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Pune">Pune</option>
                                </select>
                            </div>
                            <button className="btn" onClick={this.searchTrade} >Search<span className="glyphicon glyphicon-search"></span></button>
                            &nbsp;<button className="btn" onClick={this.searchClear} >Clear<span>&times;</span></button>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row col-md-12">
                    <form>
                        <div className="col-md-4 formDiv">
                            <h3>Add Trade</h3><hr />
                            <div>
                                <div className="form-group">
                                    <label>Trade Date:</label>
                                    <input type="date" className="form-control" min="21/05/2017" required value={this.state.tradeDate} onChange={this.updateTradeDate} />
                                </div>
                                <div className="form-group">
                                    <label >Commodity:</label>
                                    <select name="commodity" className="form-control" onChange={this.updateCommodity} value={this.state.commodity}>
                                        <option value="">-Select-</option>
                                        <option value="AL">AL</option>
                                        <option value="Cu">Cu</option>
                                        <option value="Zn">Zn</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Side:</label>
                                    <input type="radio" name="side" value="buy" onChange={this.updateSide} />Buy
                                    <input type="radio" name="side" value="sell" onChange={this.updateSide} />Sell
                                </div>
                                <div>
                                    <label>Quantity(MT):</label>
                                    <input type="number" className="form-control" required value={this.state.quantity} onChange={this.updateQuantity} />
                                </div>
                                <div>
                                    <label>Price:</label>
                                    <input type="number" className="form-control" required value={this.state.price} onChange={this.updatePrice} />
                                </div>
                                <div>
                                    <label>Counterparty:</label>
                                    <select name="counterParty" className="form-control" value={this.state.counterParty} onChange={this.updateCounterParty}>
                                        <option value="">-Select-</option>
                                        <option value="Tata">Tata</option>
                                        <option value="Birla">Birla</option>
                                        <option value="Ambani">Ambani</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Location:</label>
                                    <select name="location" className="form-control" value={this.state.location} onChange={this.updateLocation}>
                                        <option value="">-Select-</option>
                                        <option value="JSR">JSR</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Pune">Pune</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <button className="btn btn-primary" onClick={this.addTrade}>
                                Add Trade
                        </button>
                        </div>
                    </form>
                    <div style={{ paddingLeft: '2%' }} className="col-md-6" >
                        <h3>Trade Details</h3>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Trade Date</th>
                                    <th>Commodity</th>
                                    <th>Side</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>CounterParty</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.tradeList.map((trade, i) =>
                                    <tr key={i}>
                                        <td>{trade.tradeDate}</td>
                                        <td>{trade.commodity}</td>
                                        <td>{trade.side}</td>
                                        <td>{trade.quantity}</td>
                                        <td>${trade.price}</td>
                                        <td>{trade.counterParty}</td>
                                        <td>{trade.location}</td>
                                        <td><button type="button" onClick={() => this.editTrade(trade, i)} className="btn btn-info" data-toggle="modal" data-target="#myModal">Edit</button></td>
                                        <td><button className="btn btn-danger" onClick={() => this.removeTradeDetails(i)}>Remove</button></td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">


                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Edit Trade</h4>
                            </div>
                            <div className="modal-body">
                                <label>Trade Date:</label>
                                <input type="date" className="form-control" required value={this.state.editTrade.tradeDate} onChange={this.updateEditTradeDate} />
                                <label >Commodity:</label>
                                <select name="commodity" className="form-control" value={this.state.editTrade.commodity} onChange={this.updateEditCommodity}>
                                    <option value="AL">AL</option>
                                    <option value="Cu">Cu</option>
                                    <option value="Zn">Zn</option>
                                </select>
                                <label>Side:</label>
                                <input type="radio" name="side" value={this.state.editTrade.side} checked={this.state.editTrade.side === 'Buy'} onChange={this.updateEditSide} />Buy
                                <input type="radio" name="side" value={this.state.editTrade.side} checked={this.state.editTrade.side === 'Sell'} onChange={this.updateEditSide} />Sell<br />
                                <label>Quantity(MT):</label>
                                <input type="number" className="form-control" required value={this.state.editTrade.quantity} onChange={this.updateEditQuantity} />
                                <label>Price:</label>
                                <input type="number" className="form-control" required value={this.state.editTrade.price} onChange={this.updateEditPrice} />
                                <label>Counterparty:</label>
                                <select name="counterParty" className="form-control" value={this.state.editTrade.counterParty} onChange={this.updateEditCounterParty}>
                                    <option value="">-Select-</option>
                                    <option value="Tata">Tata</option>
                                    <option value="Birla">Birla</option>
                                    <option value="Ambani">Ambani</option>
                                </select>
                                <label>Location:</label>
                                <select name="location" className="form-control" value={this.state.editTrade.location} onChange={this.updateEditLocation}>
                                    <option value="">-Select-</option>
                                    <option value="JSR">JSR</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Pune">Pune</option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={() => this.updateTradeDetails(this.state.editTrade)} className="btn btn-success" data-dismiss="modal">Save</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
})

export default Home;
