import React from 'react';

const PerPage =props=>(
    <select  class="custom-select"
             type='number'
             name="select"
             max={props.max}
             value={props.value}
             onChange={props.onChange}>

        <option>4</option>
        {

            props.children ?
                props.children.map((element,index)=>(
                    <option key={index}>{element}</option>
                ))
                :
                null
        }

        <option>8</option>
        {

            props.children ?
                props.children.map((element,index)=>(
                    <option key={index}>{element}</option>
                ))
                :
                null
        }

        <option>12</option>
        {

            props.children ?
                props.children.map((element,index)=>(
                    <option key={index}>{element}</option>
                ))
                :
                null
        }
    </select>
);

export default PerPage;
