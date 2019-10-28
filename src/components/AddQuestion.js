import React , { Component } from 'react'

class AddQuestion extends Component{
    state = {
        optionA: '',
        optionB: '' 
    }
    render(){
        return(
            <div className='text-center'>
                <br/><br/>
                <form onSubmit={this.handleSubmit}>
                    <h3>Would You Rather .. </h3>
                    <br/><br/><br/>
                    <label>1. </label>
                    <input type='text' placeholder='Your first option' /><br/><br/>
                    <b>OR</b><br/><br/>
                    <label>2. </label>
                    <input type='text' placeholder='Your second option' /><br/><br/>
                    <button className='btn btn-success' type='submit'>Submit</button>

                </form>
            </div>
        )
    }
}

export default AddQuestion