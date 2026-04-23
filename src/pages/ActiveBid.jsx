import React from 'react'
import useProductStore from "../stores/product.store.js"
import useBidStore from "../stores/bid.store.js"
import DisplayProduct from "../components/ActiveBid/DisplayProduct.jsx"

function ActiveBid() {
  const {getProductById}=useProductStore()
  const {}=useBidStore
  return (
    <>
      <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-10">
        <DisplayProduct/>
      </div>
    </>
  )
}

export default ActiveBid