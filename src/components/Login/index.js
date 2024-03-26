import { Component } from "react";
import Cookies from "js-cookie"
import "./index.css"

class Login extends Component{
    state={userName:"",passWord:"", showSubmitError:false, errorMsg:"" }

    user=(event)=>{
       this.setState({userName:event.target.value})
    }

    pass=(event)=>{
        this.setState({passWord:event.target.value})
     }

     onSubmitSuccess = jwtToken => {
        const {history} = this.props
        const {userName}=this.state
        console.log(userName)
    
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        Cookies.set('name', userName, {expires: 30})
        this.setState({showSubmitError: false, errorMsg:""})
        history.replace('/')
      }
    
      onSubmitFailure = errorMsg => {
        console.log(errorMsg)
        this.setState({showSubmitError: true, errorMsg})
      }

    login=async()=>{
        const {userName,passWord}=this.state
        if (userName!=="" && passWord!=="" ){
            const data = {
                username:userName,
                password:passWord,
            }
            const options = {
                method:"POST",
                
                  body: JSON.stringify(data)
            }
            const response=await fetch("https://apis.ccbp.in/login",options)
            console.log(response)
           
            if (response.ok === true) {
                const resdata = await response.json()
                console.log(resdata.jwt_token)
                this.onSubmitSuccess(resdata.jwt_token)
              } else {
                const resdata1 = await response.json()
                console.log(resdata1)
                this.onSubmitFailure(resdata1.error_msg)
              }
        }
    } 

    render(){
        const {userName,passWord,showSubmitError,errorMsg}=this.state
        return(
            <div className="container0L">
                <div className="container11L">
                    <img src="https://res.cloudinary.com/dgbetanap/image/upload/v1711169643/Rectangle_1467bookhublogin_lgsp6h.png" alt="LoginImg" className="imgL" />
                </div>
                <div className="container1L">
                    <div className="container2L">
                        <img src="https://res.cloudinary.com/dgbetanap/image/upload/v1711169700/Group_7731bookhubimg_nugzjy.png" className="img1L" alt="bookHubi"/>
                        <div>
                        <label  for="username">USERNAME*</label>
                        <br/>
                         <input className="inpute"  onChange={this.user} type="text" id="username" value={userName} />
                        </div>
                        <div>
                        <label  for="password">PASSWORD*</label>
                        <br/>
                         <input className="inpute" onChange={this.pass} type="password" id="password" value={passWord} />
                         {showSubmitError && <p className="error-message">{errorMsg}</p>}
                        </div>
                         
                         
                         <button className="butL" type="button" onClick={this.login}>Login</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Login