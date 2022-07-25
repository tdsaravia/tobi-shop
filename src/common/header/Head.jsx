import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +54 351 123 1234</label>
            <i className='fa fa-envelope'></i>
            <label> support@tobishop.com</label>
          </div>
          <div className='right row RText'>
            <label>FAQ</label>
            <label>Need Help?</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
