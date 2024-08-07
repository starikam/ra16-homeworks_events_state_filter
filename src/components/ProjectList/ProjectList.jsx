import './ProjectList.css'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

export const ProjectList = ({ item }) => {
  return (
    <div className='projectList'>
        {item.map(({ img, category }) => (
        <img key={uuidv4()} src={img} alt={category} />
        ))}
    </div>
  )
}

ProjectList.propTypes = {
  item: PropTypes.array
}
