"use client"

import PrimaryError from "@/components/common/PrimaryError"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Redirection404 = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/not-found")
  }, [])

  return (
    <PrimaryError
      error={{
        name: "NOT FOUND",
        message: "The page you're looking for does not exist.",
      }}
    />
  )
}

export default Redirection404
