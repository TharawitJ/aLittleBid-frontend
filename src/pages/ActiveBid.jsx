import React from 'react'
import DisplayProduct from "../components/ActiveBid/DisplayProduct.jsx"

function ActiveBid() {

  return (
    <>
      <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-10">
        <DisplayProduct/>
      </div>
    </>
  )
}

export default ActiveBid