import { useState } from "react";
import ProjectList from "./ProjectList"
import Toolbar from "./Toolbar";

const Portfolio = ({files}) => {
    const [selected, select] = useState('All');
    const filterFile = files.filter(file => {
        if (selected === "All") return true;
        return file.category === selected
    })
    return (
        <>
        <Toolbar 
        filters={["All", "Websites", "Flayers", "Business Cards"]} 
        selected={selected} 
        onSelectFilter={(filter) => {select(filter);}}/>

        <ProjectList projects={filterFile}/>
        </>
    )
}


export default Portfolio