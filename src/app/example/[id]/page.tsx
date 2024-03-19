'use client'
import MainContainer from "@/components/main-container/main-container"
import { useParams } from "next/navigation"

export default function ExampleDynamic() {

  const params = useParams()

  const id = params.id

  return (
    <MainContainer>

      <div>Example {id}</div>
    </MainContainer>
  )
}