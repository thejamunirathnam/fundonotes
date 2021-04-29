import React, { Component } from 'react'

class Formvalue extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         firstname:'',
         mail:''
      }
    }
    handleusername = (event) =>{
      this.setState({
        username:event.target.value
      })
    }
    handlefname=(event)=>{
        this.setState({
            firstname:event.target.value
          })
    }
    handlemail=(event)=>{
        this.setState({
            mail:event.target.value
          })
    }
  render() {
    return (
      <div>
          <form>
              <div>
                  <label>username</label>
                  <input type="text" value={this.state.username} onChange={this.handleusername}/>
              </div>
              <div>
              <label>firstname</label>
                  <input type="text" value={this.state.firstname} onChange={this.handlefname}/>
              </div>
              <div>
              <label>email</label>
                  <input type="text" value={this.state.mail} onChange={this.handlemail}/>
              </div>
          </form>
        
      </div>
    )
  }
}

export default Formvalue
