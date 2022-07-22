import React from "react"

const Catg = () => {
  const data = [
    {
      cateName: "Apple",
    },
    {
      cateName: "Samsung",
    },
    {
      cateName: "Nokia",
    },
    {
      cateName: "Xiaomi",
    },

    {
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
