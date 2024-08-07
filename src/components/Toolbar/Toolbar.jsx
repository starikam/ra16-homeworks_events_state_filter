import './Toolbar.css'
import PropTypes from 'prop-types'

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
      <div className="toolbar">
        <div className="toolbar_list">
          {filters.map((filter, index) => {
            return <button className={filter === selected ? 'toolbar_btn active' : 'toolbar_btn'}
              onClick={() => onSelectFilter(filter)}
              key={index}>{filter}
              </button>
          })}
        </div>
      </div>
    )
  }

  Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func
  }
  