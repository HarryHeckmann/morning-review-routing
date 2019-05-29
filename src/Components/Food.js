import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css'

class Food extends Component{
    constructor(props){
        super(props)
        this.state = {
            food: {}
        }
    }

    componentDidMount(){
        axios 
            .get(`/api/food/${this.props.match.params.id}`)
            .then(response => {
                this.setState({food: response.data})
            })
    }

    render(){
        console.log(this.props)
        return(
            <div>
                {this.state.food.name
                    ?
                        <div id='foodDiv'>
                            <h1>{this.state.food.name}</h1>
                            <img style={{width: '300px'}} alt='food' src={this.state.food.image}/>
                            <Link className='link' to={`/${this.state.food.category}`}>Go Back</Link>
                        </div>
                    :
                        null
                }
            </div>
        )
    }
}

export default Food