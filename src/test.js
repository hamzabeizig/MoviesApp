import React, { Component } from 'react';
import { movies$ } from './movies';
import Cart from './cart'
import Button from './button';
import LikeDislike from './like-dislike';
import MoviesContainer from './movies-container';
import Categories from './categories';
import PerPage from './per-page-selector'
class Test extends Component{
  constructor(props){
    super(props)
    this.state ={
      data: "",
     categories: "",
     filter: 'Tous',
     amountOfItemsPerPage: 4,

    }
  }
  handleDelete = (event)=>{
    let father = event.target.parentNode
    let movieName = father.firstChild.innerText;
    let newMoviesArray = this.state.data.filter(element=>element.title !== movieName)
    const categories = this.categoriesMaker(newMoviesArray);
    this.setState({
        ...this.state,
         data: newMoviesArray,
        categories
        })
  }
  categoriesMaker = (data)=>{
    const categories = data.map(element => element.category);
    const filteredCategories = categories.filter((val, index, arr) => {
      if (arr.indexOf(val) === index) {
        return val
      }
    })
    return filteredCategories;
  }
  async componentDidMount(){
   const data = await movies$;
   this.setState({
     ...this.state,
     data
   })
   const filteredCategories = this.categoriesMaker(this.state.data)

    this.setState({
      categories: filteredCategories
    })

  }

  handleChangeCategory = event=>{
    this.setState({
      ...this.state,
      filter: event.target.value
    })
  }
  handleElementsAmount = event=>{
    this.setState({
      ...this.state,
      amountOfItemsPerPage: parseInt(event.target.value)
    })
  }
  render(){
    return(
      <div id="movies-app">
          <h1> This Movies App is Developed by </h1>
          <br/>
          <h2>BEIZIG HAMZA</h2>
          <Categories
          onChange={this.handleChangeCategory}
          categories={this.state.categories} />
        <MoviesContainer
        pagesAmount={Math.ceil(this.state.data.length / this.state.amountOfItemsPerPage)}
        elementsPerPage={this.state.amountOfItemsPerPage}
        elementsQuantity={this.state.data.length}>

        {
        this.state.data.length > 0 ?
        this.state.filter==='Tous'?
          this.state.data.map((element, index)=>(
           <Cart
            key={index}
            title={element.title}
            category={element.category}
            likes={element.likes}
            dislikes={element.dislikes}>
             <Button
              className='delete-button'
              name='Delete'
              onClick={this.handleDelete}/>
           <LikeDislike/>
          </Cart>
        )):
        this.state.data.map((element,index)=>{
          if(element.category === this.state.filter){
           return(
             <Cart
              key={index}
              title={element.title}
              category={element.category}
              likes={element.likes}
              dislikes={element.dislikes}>
              <Button
              className='delete-button'
              name='Delete'
              onClick={this.handleDelete} />
               <LikeDislike />
             </Cart>
             )
           }

        })

        :
        <h1>Nothing Found</h1>
        }
       </MoviesContainer>
        <PerPage
        max={this.state.data.length}
        onChange={this.handleElementsAmount}
        value={this.state.amountOfItemsPerPage}/>
          <span class="myfooter">
              This application is developed by BEIZIG HAMZA to validate the test for PARTICEEP
          </span>
        </div>
    );
  }
}


export default Test;
