import React, { Component } from 'react';
import "./book.css"

import Info from "./InfoBook"
import axios from "axios"
let name = "Tylko jedno spojrzenie"
let ISBN = 9788376867243;
let dataArray = []
class WereBuyBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
        this.ToogoleWereBuyClickHendler = this.ToogoleWereBuyClickHendler.bind(this)
    }
    componentDidMount() {
        axios.get(`https://widget.getbuybox.com/v3/4542/buybox.json?name=${name}&number[0]=${ISBN}&skip_jQuery=1&fbclid=IwAR1ldKGKRykasxFRPkqJBAmiH6kq22-QVz02uQJ2E7SgJ26_RNIwKp8G5dU`)
            .then(response => {
                for (var i in response.data.data) {
                    dataArray.push(response.data.data[i])
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    ToogoleWereBuyClickHendler = () => {
        const doesShow = this.state.show;
        this.setState({
            show: !doesShow,
        });

    }
    render() {
        console.log(dataArray)
        let buyBook = null;
        if (this.state.show) {
            buyBook =
                <Info click={this.ToogoleWereBuyClickHendler} dataArray={dataArray} />;
        }
        return <div className="my-4 text-left pt-5">
            <div onClick={this.ToogoleWereBuyClickHendler} className="p-3 my-4 mainContainerWereBuy">
                <h3>Gdzie kupic?</h3>
                <img src="./cart-dba15449c1b3c71c5c38aa66b156faee.svg" alt="shop-icon" className='shopIcon' />
                <div style={{ color: '#FFD300' }}>od 55,45zl</div>
                < div>dostepna w 38 sklepach</div>
            </div >
            {buyBook}

        </div>

    }
}
export default WereBuyBook
