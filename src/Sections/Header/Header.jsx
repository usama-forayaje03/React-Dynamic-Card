import Button from "../../Component/Button"
import Search from "./Search"

function Header({onAscending, onDescending, onSearch}) {

  

  return (
    <div className="flex justify-between items-center">
          <div className="flex">
            <Button onClick={() => onAscending()}  className="btn-accent mr-3">Ascending</Button>
            <Button onClick={() => onDescending()}  className="btn-accent ">Descending</Button>
    </div>

            <Search onSearch={(test) => onSearch(test) } />
          
        </div>
  )
}

export default Header