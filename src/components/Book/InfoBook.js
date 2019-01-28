import React, { Component } from 'react';
import logoArray from "./WereBuyBook"
// let name = "Tylko jedno spojrzenie"
// let ISBN = 9788376867243;
// let logoArray = []
class Info extends Component {

    // componentDidlMount() {
    //     axios.get(`https://widget.getbuybox.com/v3/4542/buybox.json?name=${name}&number[0]=${ISBN}&skip_jQuery=1&fbclid=IwAR1ldKGKRykasxFRPkqJBAmiH6kq22-QVz02uQJ2E7SgJ26_RNIwKp8G5dU`)
    //         .then(response => {

    //             for (var i in response.data.data) {
    //                 // console.log(response.data.data[i])
    //                 logoArray.push(response.data.data[i].name)

    //             }
    //             console.log(logoArray)
    //             console.log(logoArray[1])

    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
    render() {
        console.log(this.props.logoArray)
        return <div className="popup p-3 my-4 text-left pt-5">
            <div className="popup_inner">
                <div className="info-header">
                    <h5>Gdzie Kupić?</h5>
                    <div onClick={this.props.click}><i className="fas fa-times iconStyle"></i></div>
                </div>
                <div className="info-body container">
                    {this.props.logoArray.map(elem => (
                        <div className="row" >
                            <div className=" col-6 ">
                                <img className="logo" src={elem.icon}></img>
                                <div className="-company-name">{elem.name}</div>

                            </div>
                            <div className="col-6 ">
                                <div className="book-price">{elem.price} </div>zł
                               <button className="go-shop">Idz do sklepu</button>
                            </div>
                        </div>


                    ))}

                </div>

                <div className="info-footer">
                    <button >ksiażki</button>
                    <button>Ebook</button>
                </div>
            </div>
        </div>

    }


}
export default Info