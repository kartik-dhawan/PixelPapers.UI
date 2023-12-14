"use client"

import PrimaryError from "@/components/common/PrimaryError"
import { ErrorPage } from "@/utils/interfaces"

const IndexError = ({ error, reset }: ErrorPage) => {
  return <PrimaryError error={error} reset={reset} />
}

export default IndexError
