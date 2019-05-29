import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class German extends Component{
    constructor(){
        super()
        this.state ={
            foods: []
        }
    }
    componentDidMount(){
        axios
            .get(`/api/${'German'}`)
            .then(response => {
                this.setState({foods: response.data})
            })
    }
    render(){
        const style = {
            width: '200px'
        }
        return(
            <div>
                <h1>German Foods</h1>
                {this.state.foods.length
                    ?
                        this.state.foods.map((e,i) => {
                            return(
                                <div key={i}>
                                    <h3>{e.name}</h3>
                                    <Link to={`/food/${e.id}`}>
                                        <img src={e.image} style={style}/>
                                    </Link>                                
                                </div>
                            )
                        })
                    :
                        null
                }

            </div>
        )
    }
    
}

export default German