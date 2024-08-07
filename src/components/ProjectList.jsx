
const ProjectList = ({projects}) => {
   
    return (
        <div className="projects" >
           {projects.map((el, i) => { return (
                <div className="card" key={el.img + i}><img  src={el.img} alt={el.category}></img> </div>
                 )   
            })
            }
        </div>
    )
}

export default ProjectList