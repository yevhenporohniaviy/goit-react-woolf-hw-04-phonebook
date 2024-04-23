const Filter = ({ filter, onTypeFilter}) => {
  return (
    <>
      <input type="text" value={filter} onInput={(e) => onTypeFilter(e.target.value)} />
    </>
  );
}
 
export default Filter;