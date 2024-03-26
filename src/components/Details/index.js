import {Component} from 'react'
import Cookies from "js-cookie"
import "./index.css"
import Header from "../Header"

class Details extends Component{
    state={detail:[],isLoading:false}

    componentDidMount() {
        this.getBlogItemData()
      }
    
      getBlogItemData = async () => {
        const { match } = this.props
        const { params } = match
        const { id } = params
    
        const jwtToken = Cookies.get('jwt_token')
        const options2 = {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:`bearer ${jwtToken}`
              },
            
        }
         const response2 = await fetch(`https://apis.ccbp.in/book-hub/books/${id}`,options2)
        const data=await response2.json()
        console.log(data.book_details)
        this.setState({ detail: data.book_details, isLoading: true })
      }
    
      renderBlogItemDetails = () => {
        // return(
        //     <div>
        //         <h1>Hello</h1>
        //     </div>
        // )
        const { detail } = this.state
        const { title, author_name,rating,about_author, about_book,cover_pic,read_status } = detail
    
        return (
          <div>
            <Header/>
          <div className='detailsCss' >
            
            
            <div className='detailrow'>
              <img className='imgD' src={cover_pic} alt={author_name} />
              <div className='detailI'>
              <h1 className='headD'>{title}</h1>
              <p className='paraD'>Avg rating: {rating}</p>
              <p className='paraD' >Status: <span className='mm'>{read_status}</span></p>
              </div>
              
              </div>
              
            <div className='detailr'>
              <hr/>
            <h1 className='headD'>About author</h1>
            <p className='paraD'>{about_author}</p>
            <h1 className='headD'>About book</h1>
            <p className='paraD'>{about_book}</p>
            </div>
            
          </div>
          </div>
        )
      }

   render(){
    const {isLoading}=this.state
    return (
        <div>
           {isLoading && this.renderBlogItemDetails()}
        </div>
        
    )
   }
}

export default Details