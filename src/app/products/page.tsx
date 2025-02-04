import React from 'react'
import Headers from "../../components/layouts/Header"
import SearchUi from '../../components/SearchUi'
import { inputData } from '../../utils/searchUiData'
const Page = () => {
  return (
    <div>
      <Headers/>
      
      <SearchUi sideChecks={inputData}/>
    </div>
  )
}

export default Page
