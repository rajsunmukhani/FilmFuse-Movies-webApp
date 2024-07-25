import React from 'react'

const Dropdown = ({title,options,changeCategory}) => {

  return (
    <div className='select'>
          <select onChange={changeCategory} defaultValue={title} name="format" id="format">
            <option disabled value="">{title.toUpperCase()}</option>
            {options.map((elem,index) => (
                <option key={index} value={elem}>{elem.toUpperCase()}</option>
            ))}
          </select>
    </div>
  )
}

export default Dropdown