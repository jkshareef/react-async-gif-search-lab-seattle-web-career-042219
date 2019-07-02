import React from 'react'

const GifList = props => {



        const listItems = props.gifs.map((gif, index) => 
            <li key={index}><img alt = "" src={gif}/></li>
        )

        return (
                <ul>
                    {listItems}
                </ul>
        )


}

export default GifList