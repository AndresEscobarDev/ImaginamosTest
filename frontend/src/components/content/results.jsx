import star from '../../media/star.svg'
import categories from '../../jsons/categories.json'

const Results = ({ results, car, carContent }) => {

  const addToCar = (result) => {
    carContent([...car, result])
  }

  return (
    <div className='resultsContainer'>
      {results.map(result => (
        <div className='result' key={result.id} onClick={() => addToCar(result)}>
          <div className='resultImg'>
            <img src={result.image} alt={result.name} />
            <div className='resultTime'>
              <p className='resultTimeNumber'>{result.time.substring(0, 5)}</p>
              <p className='resultTimeMin'>{result.time.substring(5, 8)}</p>
            </div>
          </div>
          <div className='resultDescription'>
            <h4>{result.name}</h4>
            <div className='resultSubDescription'>
              <img src={star} alt="" />
              <p className='resultQualification'>{result.qualification}</p>
              {result.categories.map((c, i) => (
                c !== 1 ? <p key={`${c} - ${i}`}>{categories[c - 1].name}</p> : ''
              ))}
              <p>${result.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Results
