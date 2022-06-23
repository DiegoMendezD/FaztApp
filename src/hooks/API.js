import React, { Component } from 'react'

export default class API extends Component {

    state = {
        posts:[]
    }
    async componentDidMount(){
        // const id=[1,2]
        // const url =`https://rickandmortyapi.com/api/character/${id}`;
        const url =`https://raw.githubusercontent.com/jselenem/API/main/pdp.json`;
        const res = await fetch(url)
        // console.log(res)
        const data = await res.json()
        console.log(data)
        this.setState({posts:data})
    }

  render() {
    return (
      <div>API
        {
            this.state.posts.map((post) =>{
                // if (post.id===1) {
                // return <div key={post.id}>
                //         <h1>{post.name}</h1>
                //         <p>{post.status}</p>
                //         <img src={post.image} alt=''/>
                //     </div>
                //     }
                const id= parseInt(post.item_id)
                console.log(id)
                if (id===186942) {
                    return <div key={id}>
                            <h1>{post.name}</h1>
                            <p>{post.price}</p>
                            <img src={post.image_url} alt=''/>
                        </div>
                        }
            })
        }
      </div>
    )
  }
}
