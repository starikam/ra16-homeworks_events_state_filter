import { useState  } from "react"
import { ProjectList } from "../ProjectList"
import { Toolbar } from "../Toolbar"
import './Portfolio.css'
import { data } from '../data/dataPortfolio' 

export const Portfolio = () => {
  const filters = ["All", "Websites", "Flayers", "Business Cards"]

  const [selected, setSelected] = useState("All");

  const onSelectFilter = (filter) => {
    setSelected(filter)
  }

  const getProjectList = 
    selected === 'All' ? data : data.filter(({category}) => category === selected)
  
  return (
    <>
    <div className="container">
    <Toolbar 
      filters={filters}
      selected={selected}
      onSelectFilter={onSelectFilter}
    />
    <ProjectList item={getProjectList}/>
    </div>
    </>
  )
}
