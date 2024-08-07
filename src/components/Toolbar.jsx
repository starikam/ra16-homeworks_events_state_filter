
  const Toolbar = ({filters, selected, onSelectFilter}) => {

    return (
        filters.map(filter => <button className={filter === selected ? 'filter__button active' : 'filter__button'} type="button" key={filter} onClick={(event) =>onSelectFilter(event.target.textContent)}>{filter}</button>)
    )

  }

  export default Toolbar