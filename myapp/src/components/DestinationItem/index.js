
import './index.css'

const DestinationItem = props => {
  const {Destinationdetails} = props

  const {name, imgUrl} = Destinationdetails

  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
