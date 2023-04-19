import {ListItem, ItemImage, ItemButton} from './styledComponents'

const RockPaperScissorItems = props => {
  const {eachObject, clickedGameItem} = props
  const {id, imageUrl} = eachObject

  const clickOnItem = () => {
    clickedGameItem(imageUrl, id)
  }

  let altText
  if (id === 'ROCK') {
    altText = 'rockButton'
  } else if (id === 'SCISSORS') {
    altText = 'scissorsButton'
  } else {
    altText = 'paperButton'
  }

  return (
    <ListItem>
      <ItemButton type="button" onClick={clickOnItem} data-testid={altText}>
        <ItemImage src={imageUrl} alt={id} />
      </ItemButton>
    </ListItem>
  )
}

export default RockPaperScissorItems
