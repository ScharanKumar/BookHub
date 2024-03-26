import {Link} from "react-router-dom"
import "./index.css"

const ReadItem=(props)=>{
    const {details}=props
    const {author_name,title,cover_pic,id,read_status,rating }=details
    return(
        <Link className="vv" to={`/details/${id}`}>
        <div className="cRI">
            <img className="imgRI" src={cover_pic} alt={id}/>
            <div>
            <h1 className="Rhead">{title}</h1>
            <p className="Rpara">{author_name}</p>
            <p className="Rpara">Rating: {rating}</p>
            <p className="Rpara">Status: <span className="Rs">{read_status}</span></p>
            </div>
        </div>
        </Link>
    )
}

export default ReadItem