function FilterButtons({ filter, setFilter }) {
  return (
    <div className="btn-group mb-3">
      <button className={`btn btn-${filter === 'all' ? 'primary' : 'outline-primary'}`} onClick={() => setFilter('all')}>All</button>
      <button className={`btn btn-${filter === 'active' ? 'primary' : 'outline-primary'}`} onClick={() => setFilter('active')}>Active</button>
      <button className={`btn btn-${filter === 'completed' ? 'primary' : 'outline-primary'}`} onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
}

export default FilterButtons;
