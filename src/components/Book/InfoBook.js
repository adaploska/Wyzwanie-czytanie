import React, { Component } from 'react';


class Info extends Component {
    goToShopHendler = () => {
        console.log('ide do sklepu')

        window.open(
            'https://www.wp.pl',
            '_blank')
        // {
        //     this.props.dataArray.map(elem => (
        //         window.location.href = { elem }

        //     ))

        // }



    }

    render() {
        return <div className="popup p-3 my-4 text-left pt-5">
            <div className="popup_inner">
                <div className="info-header">
                    <h5>Gdzie Kupić?</h5>
                    <div onClick={this.props.click}><i className="fas fa-times iconStyle"></i></div>
                </div>
                <div className="info-body container">
                    {this.props.dataArray.map(elem => (
                        <div className="row" >
                            <div className=" col-6 ">
                                <img className="logo" src={elem.icon} alt="logo"></img>
                                <div className="-company-name">{elem.name}</div>

                            </div>
                            <div className="col-6 ">
                                <div className="book-price">{elem.price} </div>zł
                               <button
                                    onClick={this.goToShopHendler}
                                    className="go-shop btn-outline"
                                    target="_blank"
                                >
                                    Idz do sklep
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="info-footer">
                    <button className="btn-ebook-book btn-outline" >ksiażki</button>
                    <button className="btn-ebook-book btn-outline">Ebook</button>
                </div>
            </div>
        </div>

    }


}
export default Info