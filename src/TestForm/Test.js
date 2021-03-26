import React from 'react'

class Test extends React.Component {

    
        state={
            name: "Seble",
            email: "sfeleke2000@yahoo.com",
            password:"*****",
            myaddresse:"1131 University Blvd.",
            city:"Silver spring",
            gender:"F",
        }
        updateStatement=(event)=>{
            this.setState({name: event.target.value
            })
        }
        updateEmail=(e)=>{
            this.setState({email: e.target.value
            })
        }
        updatePassword=(event)=>{
            this.setState({password: event.target.value
            })
        }

        updateMyaddresse=(event)=>{
            this.setState({myaddresse: event.target.value
            })
        }
        updateMycity=(event)=>{
            this.setState({city: event.target.value
                })
        }
        updateGender=(event)=>{
            this.setState({gender: event.target.value
                })
        }
    
        getData=() => {
            console.log(this.state)
            localStorage.setItem("FrindData",JSON.stringify(this.state))
            }
    
           render(){
            return (
                <div>
                   
                    <lebel>UserName</lebel><input type="text" onChange={this.updateStatement}/>
                    <lebel>Email</lebel><input type="text" onChange={this.updateEmail}/>
                    <lebel>Password</lebel><input type="text" onChange={this.updatePassword}/>
                    <lebel>Myaddresse</lebel><input type="text" onChange={this.updateMyaddresse}/>
                    <lebel>City</lebel><input type="text" onChange={this.updateMycity}/>
                    <lebel>Gender</lebel><input type="text" onChange={this.updateGender}/>
                    <button onClick={this.getData}> GetData</button>
                </div>
            )
            }     
    }
    export default Test