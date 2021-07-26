import searchIcon from '../../media/searchIcon.svg'

const SearchInput = () => {
  return (
    <div className='searchInput'>
      <img src={searchIcon} alt="" />
      <input type="text" placeholder='Search'/>
    </div>
  )
}

export default SearchInput