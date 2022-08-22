import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.scss'

type SearchProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ value, setValue }: SearchProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search or start new chat"
        className={"search"}
        value={value}
        onChange={handleChange}
      />
      {/* <FontAwesomeIcon icon={faSearch} style={{fontWeight: 'lighter'}}/> */}
      <div className='search-icon'>
        <i className="fa fa-search"></i>
      </div>
    </div>
  );
};

export default Search;