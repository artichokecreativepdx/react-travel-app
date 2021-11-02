import axios from "axios";
import React, { component } from "react";


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
      this.setState({
        post: response.data
      })
      console.log(response.data)
    })
  }
  
  render() {
    const {post} = this.state
    return (
      <div>
        <h1>Listicles</h1>
        {post.map(posts => <div key={post.id}>{post.titile}</div>)}
      </div>
    )
  }
}
export default stateList;