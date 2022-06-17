import React from 'react';
const Categories = props=>(

  <select name="select"
          class="custom-select"
    onChange={props.onChange}>
    <option>Tous</option>
  {

    props.categories ?
    props.categories.map((element,index)=>(
      <option key={index}>{element}</option>
    ))
    :
    null
  }

  </select>
);

export default Categories;
