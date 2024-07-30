import React from 'react'

const Dropdown = ({title,options,changeCategory}) => {

  return (
    <div className='select mobile:w-[25%] mobile:h-[75%]'>
          <select onChange={changeCategory} className='mobile:w-full' defaultValue={title} name="format" id="format">
            <option className='w-full' disabled value="">{title.toUpperCase()}</option>
            {options.map((elem,index) => (
                <option key={index} value={elem}>{elem.toUpperCase()}</option>
            ))}
          </select>
    </div>
  )
}

export default Dropdown