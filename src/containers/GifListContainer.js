import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    handleSubmit = (query) => {
        this.setState({
            gifs: []
        })
        this.fetchGif(query)
    }

    fetchGif = (query) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({
                    gifs: data.map(gif => gif.images.original.url)
                })
            })
           
    }

    


    render() {
        return (
            <div>
                <GifSearch onHandleSubmit = {this.handleSubmit}/>
                <GifList gifs={this.state.gifs} />
            </div>
           
        )
    }
}

export default GifListContainer