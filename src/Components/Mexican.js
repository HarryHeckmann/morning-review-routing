import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Mexican extends Component{
    constructor(){
        super()
        this.state ={
            foods: []
        }
    }
    componentDidMount(){
        axios
            .get(`/api/${'Mexican'}`)
            .then(response => {
                this.setState({foods: response.data})
            })
    }
    render(){
        return(
            <div>
                <h1>Mexican Foods</h1>
                {this.state.foods.length
                    ?
                        this.state.foods.map((e,i) => {
                            return(
                                <div key={i}>
                                    <h3>{e.name}</h3>
                                    <Link to={`/food/${e.id}`}>
                                        <img src={e.image} style={{width: "200px"}}/>
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

export default Mexican