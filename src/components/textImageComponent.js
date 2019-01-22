import React from "react"

class TextImageComponent extends React.Component {
    render() {
        return (
            <div className="p-3 my-4 text-center pt-5 ">
                <h1>Wyzwanie - Czytanie!</h1>
                <img alt="book" src="/ksiazka.svg" width="150"></img>
            </div>


        )
    }
}
export default TextImageComponent;