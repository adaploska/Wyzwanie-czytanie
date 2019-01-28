import React from "react"

class TextImageComponent extends React.Component {
    constructor(props) {
        super(props)
        console.log('konstruktor')
    }
    componentWillMount() {
        console.log('componentwillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentWillReceiveProps() { console.log('componentWillReceiveProps') }
    shouldComponentUpdate() { console.log('shouldComponentUpdate' + true) }
    componentWillUpdate() { console.log('componentWillUpdate') }

    componentDidUpdate() { console.log('componentDidUpdate') }
    render() {
        console.log('render')
        return (
            <div className="p-3 my-4 text-center pt-5 ">
                <h1>Wyzwanie - Czytanie!</h1>
                <img alt="book" src="/ksiazka.svg" width="150"></img>
            </div>


        )
    }
}
export default TextImageComponent;