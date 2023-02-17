// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails} = props
  const {id, suggestion} = suggestionDetails
  const onChoose=()=>{
      
  }
  return (
    <li className="list-item">
      <p className="para">{suggestion}</p>
      <button className="button" type="button" onClick={onChoose}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
