import React, {Component} from 'react'

class GifSearch extends Component {
    
    state = {
        query: ""
    }


    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onHandleSubmit(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    GifSearch:
                <input type='text' value={this.state.value} onChange={this.handleChange}/>
                </label>
            </form>
        )
    }
}

export default GifSearch