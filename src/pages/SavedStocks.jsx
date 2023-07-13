import ListStocks from '../components/ListStocks';

function SavedStocks() {
  return (
    <div className= "grid gap-2.5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
      <ListStocks/>
    </div>
  )
}

export default SavedStocks