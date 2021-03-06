import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



class Calculator extends React.Component{

    constructor(){
        super();
        this.state={
            num1: '',
            num2: '',
            total: ''
        }
    }

    handlenum1 = (event) => {
        this.setState({
            num1:event.target.value
        })
    }

    handlenum2 = (event) => {
        this.setState({
            num2:event.target.value
        })
    }

    execute = (e) => {
        e.preventDefault();
        this.setState({total: parseInt(this.state.num1) + parseInt(this.state.num2)})
      }

    execute1 = (e) => {
        e.preventDefault();
        this.setState({total: parseInt(this.state.num1) - parseInt(this.state.num2)})
      }

    execute2 = (e) => {
        e.preventDefault();
        this.setState({total: parseInt(this.state.num1) * parseInt(this.state.num2)})
      }

    execute3 = (e) => {
        e.preventDefault();
        this.setState({total: parseInt(this.state.num1) / parseInt(this.state.num2)})
      }


    render(){
      return(
          <div class="container bg-dark text-light ">
            <h1 class="text-primary d-flex justify-content-center p-5 m-2">Calculation</h1>
            <div class="justify-content-center">    
            <div class="d-flex justify-content-center">
              <input type="text" placeholder="num1" value={this.state.num1} onChange={this.handlenum1}/>
            </div>
            <br></br>

            <div class="d-flex justify-content-center">
              <input type="text" placeholder="num2" value={this.state.num2} onChange={this.handlenum2}/>
            </div>
            </div>
            <br></br>
            
            <div class="d-flex justify-content-center p-3">
            <div>
               <form onSubmit={this.execute}>
               <button type="Submit" class="btn btn-warning p-2 m-1">Addition</button>
               </form>
               <br></br>
            </div>

            <div>
               <form onSubmit={this.execute1}>
               <button type="Submit" class="btn btn-primary p-2 m-1">Substraction</button>
               </form>
               <br></br>
            </div>

            <div>
               <form onSubmit={this.execute2}>
               <button type="Submit" class="btn btn-success p-2 m-1">Multiplication</button>
               </form>
               <br></br>
            </div>

            <div>
               <form onSubmit={this.execute3}>
               <button type="Submit" class="btn btn-danger p-2 m-1">Division</button>
               </form>
               <br></br>
            </div> 
            </div>  
           <div class="d-flex justify-content-center p-3 m-5"> 
           {this.state.total}
           </div>
          </div>
      );
    }
}

export default Calculator;