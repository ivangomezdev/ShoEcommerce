import React from 'react'
import Headers from "../../components/layouts/Header"
import SearchUi from '../../components/SearchUi'
import { inputData } from '../../utils/searchUiData'
const page = () => {
  return (
    <div>
      <Headers/>
      
      <SearchUi sideChecks={inputData}/>
    </div>
  )
}

export default page
