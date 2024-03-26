import { Component } from "react";
import "./index.css"
import Cookies from "js-cookie"
import HomeItem from "../HomeItem"
import Header from "../Header"

class Home extends Component{
    state={list1:[]}

    componentDidMount(){
        this.after()
    }

    logout=()=>{
        const {history} = this.props
    history.replace('/login')
        Cookies.remove("jwt_token")
    }
    
    after=async()=>{
        const jwtToken = Cookies.get('jwt_token')
        const options1 = {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:`bearer ${jwtToken}`
              },
            
        }
         const response1 = await fetch("https://apis.ccbp.in/book-hub/top-rated-books/",options1)
         console.log(response1)
         const a =await response1.json()
         
         this.setState({list1:a.books})
    }

    render(){
        const {list1}=this.state
        console.log(list1)
        return(
            <div className="xx">
            {/* <div className="navbar1">
                <h1>HOME Page</h1>
                <div className="navbarI">
                    <h1>Home</h1>
                    <h1>Book Shelves</h1>
                    <button onClick={this.logout}>Logout</button>
                </div>

            </div> */}
            <Header/>
            <ul className="homeE">
                {list1.map((every=>
                (<HomeItem details={every} key={every.id}/>)
                ))}
            </ul>
            </div>

        )
    }
}

export default Home