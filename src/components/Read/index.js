import { Component } from "react";
import "./index.css"
import Cookies from "js-cookie"
import ReadItem from "../ReadItem"
import Header from "../Header";
import But from "../But"
// import Get from "../Get";

const bookshelvesList = [
    {
      id: '22526c8e-680e-4419-a041-b05cc239ece4',
      value: 'ALL',
      label: 'All',
    },
    {
      id: '37e09397-fab2-46f4-9b9a-66b2324b2e22',
      value: 'READ',
      label: 'Read',
    },
    {
      id: '2ab42512-3d05-4fba-8191-5122175b154e',
      value: 'CURRENTLY_READING',
      label: 'Currently Reading',
    },
    {
      id: '361d5fd4-9ea1-4e0c-bd47-da2682a5b7c8',
      value: 'WANT_TO_READ',
      label: 'Want to Read',
    },
  ]
  

class Read extends Component{
    state={list2:[],activeFilter: bookshelvesList[0].value,search_input:""}

    componentDidMount(){
      const {activeFilter,search_input}=this.state
        this.after(activeFilter,search_input)
    }

    z=(event)=>{
      const {activeFilter}=this.state
      this.setState({search_input:event.target.value})
      console.log("charan")
      console.log(event.target.value)
      this.after(activeFilter,event.target.value)
    }

    a=(id)=>{
        console.log(id)
        const {search_input}=this.state
        const x = bookshelvesList.filter(every=> every.id===id)
        console.log(x)
        this.setState({activeFilter:x[0].value})
        this.after(x[0].value,search_input)
    }

    
    
    after=async(b,c)=>{
        
        console.log(b)
       
        
        const booksApi = `https://apis.ccbp.in/book-hub/books?shelf=${b}&search=${c}`

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response3 = await fetch(booksApi, options)
         
         console.log(response3)
         const a =await response3.json()
         console.log(a.books)
         
         this.setState({list2:a.books})
    }

    render(){
        // this.after()
        const {list2,search_input}=this.state
        // console.log(activeFilter)
        // console.log(list2)
        return(
            <div>
                <Header/>
            {/* <div className="navbar1">
                <h1>HOME Page</h1>
                <div className="navbarI">
                    <h1>Home</h1>
                    <h1>Book Shelves</h1>
                    <button>Logout</button>
                </div>

            </div> */}
            <div className="cont1R">
            <ul className="cont2R">
                {bookshelvesList.map(eachItem => (<But key={eachItem.id} details={eachItem} a={this.a}/>))}
              </ul>
              {/* <Get detail1={search_input} detail2={activeFilter} /> */}
            <ul className="cont3R">
              <ul className="cc">
                <h1>Books</h1>
                <input className="RIn" type="text" onChange={this.z} value={search_input}/>
              </ul>
              <ul className="Rc">
                {list2.map((every=>
                (<ReadItem details={every} key={every.id}/>)
                ))}
                </ul>
            </ul>
            </div>
            </div>

        )
    }
}

export default Read