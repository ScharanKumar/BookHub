import {Link} from "react-router-dom"
import "./index.css"
const HomeItem=(props)=>{
    const {details}=props
    const {author_name,title,cover_pic,id }=details
    return(
        <Link className="nn"  to={`/details/${id}`}>
            
        <div className="homeI">
            <img className="imgH" src={cover_pic} alt={id}/>
            <h1 className="headH">{title}</h1>
            <p className="paraH">{author_name}</p>
        </div>
        
        </Link>
    )
}

export default HomeItem