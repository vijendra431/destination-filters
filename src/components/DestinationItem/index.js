// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destionationDetails} = props
  const {id, name, imgUrl} = destionationDetails
  return (
    <li className="list-container">
      <img src={imgUrl} className="images" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
