// const Get =(props)=>{
//     const {details}=props
//     const {}=details

//     const z=()=>{
//         const {activeFilter,search_input}=this.state
//         console.log(activeFilter)
       
        
//         const booksApi = `https://apis.ccbp.in/book-hub/books?shelf=${activeFilter}&search=${search_input}`

//     const jwtToken = Cookies.get('jwt_token')
//     const options = {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${jwtToken}`,
//       },
//     }
//     const response3 = await fetch(booksApi, options)
         
//          console.log(response3)
//          const a =await response3.json()
//          console.log(a.books)
//     }
// }

// export default Get

import { Component } from "react";
import ReadItem from "../ReadItem";
import Cookies from "js-cookie"

class Get extends Component{
    state={list2:[]}
    componentDidMount(){
        this.after()
    }

    after=async()=>{
            const {detail1,detail2}=this.props
            
           
            
            const booksApi = `https://apis.ccbp.in/book-hub/books?shelf=${detail2}&search=${detail1}`
    
        const jwtToken = Cookies.get('jwt_token')
        const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
        const response3 = await fetch(booksApi, options)
             
             console.log(response3)
             console.log(detail1)
             const a =await response3.json()
             console.log(a.books)
             console.log(detail1)
             
             this.setState({list2:a.books})
        }

    render(){
        
        const {list2}=this.state
        return(
            <div>
                  <ul>
                {list2.map((every=>
                (<ReadItem details={every} key={every.id}/>)
                ))}
            </ul>
            </div>
        )
    }

}

export default Get