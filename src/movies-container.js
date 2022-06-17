import React, { Component } from 'react';
import Pagination from './pagination';
import Button from './button';

class MoviesContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      pageNumber: 1,
      startIndex : 1,
      endIndex : this.props.elementsPerPage ,

    }
  }
  numberOfButtons=()=>{
    let result =[];
    for(let i = 0; i< this.props.pagesAmount; i++){
      result.push(0);
    }
    return result;
  }
  handlePageChange=(event)=>{
   this.setState({
      ...this.state,
      pageNumber: parseInt(event.target.innerText),
      endIndex: parseInt(event.target.innerText) * (this.props.elementsPerPage),
     startIndex: parseInt(event.target.innerText) * (this.props.elementsPerPage) - (this.props.elementsPerPage-1),
    })
  }

  render(){
    console.log(this.state)
   return(
       <div id="movies-list">
       <div id="movies-container">
        {
         this.props.children.length > 0 ?
         this.props.children.filter((item, index, arr)=>{
           if(index >= this.state.startIndex-1 &&
             index <= this.state.endIndex-1){
             return item
           }
         })
         :
         null

         }
         </div>
        <Pagination>
        {
          this.numberOfButtons().map((element, index)=>{
            return <Button
            key={index}
            onClick={this.handlePageChange}
            name={index +1}/>
          })

         }
        </Pagination>



       </div>)
       }
}

export default MoviesContainer;
