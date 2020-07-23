import React, { Component } from "react"
import ImageSearch from "./imageSearch/imageSearch"
import ImageList from "./imageList/imageList"


// API Key after signing up on the website
const API_KEY = "16342539-ca49ef7be1d1f1f98afbdd27c"

//const API_TOKEN = process.env.API_TOKEN

// app being render in the browser
class App extends Component {

    //state object with property
    state = {
        images: [],
        error: null
    }
    //fetching json data from website
    //async creates a promise and address the promise // await is only used with the async
    handleGetRequest = async (e) => {
        //default behavior is it refresh
        e.preventDefault()
        const searchTerm = e.target.elements.searchValue.value

        // API URl from website in back ticks
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo `

        const request = await fetch(url)
        const response = await request.json()

        if (!searchTerm) {
            this.setState({ error: "Please Provide a value." })
        } else {
            //update value of state
            this.setState({ images: response.hits, error: null })
        }
        
    }

    // show up once when the component first load onto the web browser
    /*componentDidMount() {
        // the this refer to the app component ..reason for arrow function for handleGetRequest
        this.handleGetRequest()
    }*/

    render() {
        return (
            
            <div>
                
                <ImageSearch handleGetRequest={this.handleGetRequest} />

                {
                    this.state.error !== null ?
                        <div style={{ color: "#fff", textAlign: "center" }}>{this.state.error}</div> :

                        <ImageList images={this.state.images} />
                }
                
             </div>
            )
    }
}

export default App