import React, { Component } from 'react';

import './App.css';
import TextImageComponent from "./components/textImageComponent"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSeconPage: false,
      isFirstPage: true,
      isFirdPage: false,
      isFourthPage: false,
      number: "",
      showOn: true,
      showComponent: false,
      disabled: true,
    };

    this.enableShowSeconPage = this.enableShowSeconPage.bind(this);
    this.enableShowFirdPage = this.enableShowFirdPage.bind(this);
    this.enableShowFourthPage = this.enableShowFourthPage.bind(this);
    this.returnToOnePage = this.returnToOnePage.bind(this);
  }


  enableShowSeconPage() {
    this.setState({
      isSeconPage: true,
      isFirstPage: false
    });
  }
  enableShowFirdPage() {
    this.setState({
      isSeconPage: false,
      isFirstPage: false,
      isFirdPage: true,
    });
  }
  enableShowFourthPage() {
    this.setState({
      isSeconPage: false,
      isFirstPage: false,
      isFirdPage: false,
      isFourthPage: true,

    });
  }
  returnToOnePage() {
    this.setState({
      isSeconPage: false,
      isFirstPage: true,
      isFirdPage: false,
      isFourthPage: false,
      disabled: true,
      number: ""

    });
  }

  //pobieranie wartosci z input 
  changeContentHandler = (e) => {
    let Newnumber = e.target.value
    this.setState({
      number: Newnumber
    })
    console.log(this.state.number)
  }
  //funkcja zmieniająca slowko ksiązka 
  changeWordHandler = (inputnumber, singularNumber, pluralNumber, pluralNumber_genitive) => {
    inputnumber = Math.abs(this.state.number);
    if (inputnumber === 1)
      return singularNumber;
    var rest10 = inputnumber % 10;
    var rest100 = inputnumber % 100;
    if (rest10 > 4 || rest10 < 2 || (rest100 < 15 && rest100 > 11))
      return pluralNumber_genitive;
    return pluralNumber;
  }
  //czwarta strona 
  fourthPagerender() {

    return (
      <form className="containerApp p-3 my-4 text-center pt-5">
        <button className=" btn btn-lg btn-light " >zamknij</button>
        <div>
          To nie ten przycisk!
          Tym się rezygnuje, a przecież
          tak świetnie Ci idzie! No dobra,
          zgadzamy się na tydzień przerwy,
          a potem wracaj do wyzwania!
          Jesteśmy z Tobą, więc naciśnij anuluj i nie rezygnuj.
        </div>
        <button className=" btn btn-lg btn-light " onClick={this.returnToOnePage}>Poddaj się</button>
      </form>
    );
  };
  //trzecia strona 
  firdPagerender() {

    return (
      <form className="containerApp p-3 my-4 text-center pt-5 ">
        <button className=" btn btn-lg btn-light " >edycja/zamknij</button>
        <div>
          {/* <i class="far fa-edit" font-size="55px"></i> */}
          <TextImageComponent />

          <div>Przeczytam</div>
          <input type="number" onChange={this.changeContentHandler} value={this.state.number} required></input>
          <span>{this.changeWordHandler(this.state.number, " książkę", " książki", " książek")}</span>

          <span> w 2019 roku!</span>
          {/* <div>{changeContent}</div> */}
          <br />
          <div>
            <button className=" btn btn-lg btn-light ">zmień</button>
            <div>lub</div>
            <a href="#" onClick={this.enableShowFourthPage}> Zrezygnuj></a>
          </div>
        </div>
      </form >
    );
  };
  //druga strona 
  seondPagerender() {

    return (
      <form className="containerApp p-3 my-4 text-center pt-5">
        <button className=" btn btn-lg btn-light " onClick={this.enableShowFirdPage}>edycja</button>
        <div>
          <TextImageComponent />
          <div> Przeczytałeś <span>0 </span> z <span>cc</span> książek w tym roku. </div>
          <div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">25</div>

            </div>
            <span>100%</span>
          </div>
        </div>
      </form>
    );
  };
  // pierwsza strona wyzwanie 
  firstPagerender() {

    let changeContent = null;
    let disabled = this.state.disabled;

    if (this.state.showOn && this.state.number >= 1 && this.state.number <= 4) {
      changeContent = "Naprawdę? To chyba cel tygodniowy, a nie roczny 😂";
      disabled = !this.state.disabled;

    }
    if (this.state.showOn && this.state.number >= 5 && this.state.number <= 9) {
      changeContent = "To chyba będą baaaardzo grube 📚 książki 😀";
      disabled = !this.state.disabled;
    }
    if (this.state.showOn && this.state.number >= 10 && this.state.number <= 19) {
      changeContent = "1-2 książki miesięcznie to dobry cel. 👍 Trzymamy kciuki.";
      disabled = !this.state.disabled;
    }
    if (this.state.showOn && this.state.number >= 20 && this.state.number <= 29) {
      changeContent = "To będzie dobry rok z ksiązką w tle. Powodzenia! 👍";
      disabled = !this.state.disabled;
    }
    if (this.state.showOn && this.state.number >= 30 && this.state.number <= 39) {
      changeContent = "Hej, świetny wybór. Na pewno Ci się uda! 📚 👍";
      disabled = !this.state.disabled;
    }
    if (this.state.showOn && this.state.number >= 40 && this.state.number <= 59) {
      changeContent = "Challenge Accepted. Powodzenia! 😎";
      disabled = !this.state.disabled;
    }
    if (this.state.showOn && this.state.number >= 60 && this.state.number <= 79) {
      changeContent = "No, no, no. Ktoś tu idzie na rekord! 😉";
      disabled = !this.state.disabled;
    }
    if (this.state.showOn && this.state.number >= 80 && this.state.number <= 99) {
      changeContent = "Jesteś czytelniczym szybkim Billem! Brawo! 👏";
      disabled = !this.state.disabled;
    }
    if (this.state.showOn && this.state.number >= 100) {
      changeContent = "Wynik marzenie! W sporcie to już waga ciężka. 🏋️ Trzymamy kciuki! ";
      disabled = !this.state.disabled;
    }

    return (
      <form className="containerApp p-3  text-center pt-5 ">
        <div>
          <TextImageComponent />
          <span>Przeczytam </span>
          <input type="number" onChange={this.changeContentHandler} value={this.state.number} required></input>
          <span>{this.changeWordHandler(this.state.number, " książkę", " książki", " książek")}</span>

          <span> w 2019 roku!</span>
          <div>{changeContent}</div>
          <br />
          <div>
            <button className=" btn btn-lg btn-light " onClick={this.enableShowSeconPage} disabled={disabled} >Biorę udział</button>
          </div>
        </div>
      </form>
    );

  }

  render() {

    return (
      <div>
        {this.state.isFirstPage ? this.firstPagerender() : null}
        {this.state.isSeconPage ? this.seondPagerender() : null}
        {this.state.isFirdPage ? this.firdPagerender() : null}
        {this.state.isFourthPage ? this.fourthPagerender() : null}
        {/* {this.state.isFirstPage ? this.firstPagerender() : null} */}
      </div>
    );
  }

}



export default App;
