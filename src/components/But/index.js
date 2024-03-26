const But=(props)=>{
    const {details,a}=props
    const {label,id}=details

    const y=()=>{
        a(id)
    }
    return(
        <div>
            <button type="button" onClick={y}>{label}</button>
        </div>
    )
}

export default But