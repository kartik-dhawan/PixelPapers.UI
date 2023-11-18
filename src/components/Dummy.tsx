"use client"

import { RootType } from "@/redux/store"
import { useSelector } from "react-redux"

const Dummy = () => {
  const { count } = useSelector((state: RootType) => state.countSlice)

  console.log(count)
  return <div>Hello world</div>
}

export default Dummy
