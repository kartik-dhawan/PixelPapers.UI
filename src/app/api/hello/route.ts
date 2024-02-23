import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(
    { name: "hello" },
    // {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
    //     "Access-Control-Allow-Headers":
    //       "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    //     "Access-Control-Allow-Credentials": "true",
    //   },
    // },
  )
}
