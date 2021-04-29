import React, { Component } from 'react'

  const UpdatedComponent = (Originalcomponent,number) =>{
       class NewComponent extends Component{

        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
     
          incrementcount = () =>{
             this.setState(prevState => {
                 return{
                     count: prevState.count+number
                 }
             })
          }
          
           render(){
               return <Originalcomponent {...this.props} count={this.state.count} incrementcount = {this.incrementcount}/>
           }
       }
       return NewComponent;
  }

  export default UpdatedComponent;