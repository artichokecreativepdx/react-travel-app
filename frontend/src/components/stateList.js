import axios from "axios";
import React, { component, useState } from "react";


class stateList extends component{
  constructor (props){
    super(props)

    this.state = {
      post: []
    }
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000')
    .then(response =>{
      return response JSON();
      console.log(response.data)
    })
  }
  
  render() {
    const [region, setRegion] = useState([]);
    
    return (
      <div>
        <h1>Listicles</h1>
        
      </div>
    )
  }
}
export default stateList;