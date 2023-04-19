import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import styled from 'styled-components'

import RockPaperScissorItems from '../RockPaperScissorItems'
import {
  MainBgContainer,
  GameMainContainer,
  NavbarContainer,
  NavBarItemsContainer,
  NavBarItemText,
  ScoreNavContainer,
  ScoreNavText,
  ScoreNavbar,
  GameItemsMainContainer,
  TriggerButton,
  PopupMainContainer,
  RulesSetImage,
  GameResultsViewMainContainer,
  GameResultsWhomContainer,
  SelectedItemsContainer,
  WhomText,
  WhomImage,
  GameResultsViewResultContainer,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const StyledIcon = styled(RiCloseLine)`
  width: 25px;
  height: 25px;
  align-self: flex-end;
  cursor: pointer;
`

class RockScissorPaperGame extends Component {
  state = {
    isItemClick: false,
    clickedItem: '',
    opponentItem: '',
    gameResult: '',
    score: 0,
  }

  clickedGameItem = (imageUrl, id) => {
    const {score} = this.state
    const randomSelect = Math.floor(Math.random() * 3)
    const {choicesList} = this.props
    const opponentChoice = choicesList[randomSelect]
    let userClickedItem
    let opponentClickedItem
    let matchResult
    let matchScore
    if (id === 'ROCK' && opponentChoice.id === 'SCISSORS') {
      userClickedItem = id
      opponentClickedItem = opponentChoice.id
      matchResult = 'WON'
      matchScore = score + 1
    } else if (id === 'SCISSORS' && opponentChoice.id === 'PAPER') {
      userClickedItem = id
      opponentClickedItem = opponentChoice.id
      matchResult = 'WON'
      matchScore = score + 1
    } else if (id === 'PAPER' && opponentChoice.id === 'ROCK') {
      userClickedItem = id
      opponentClickedItem = opponentChoice.id
      matchResult = 'WON'
      matchScore = score + 1
    } else if (id === 'ROCK' && opponentChoice.id === 'PAPER') {
      userClickedItem = id
      opponentClickedItem = opponentChoice.id
      matchResult = 'LOSE'
      matchScore = score - 1
    } else if (id === 'SCISSORS' && opponentChoice.id === 'ROCK') {
      userClickedItem = id
      opponentClickedItem = opponentChoice.id
      matchResult = 'LOSE'
      matchScore = score - 1
    } else if (id === 'PAPER' && opponentChoice.id === 'SCISSORS') {
      userClickedItem = id
      opponentClickedItem = opponentChoice.id
      matchResult = 'LOSE'
      matchScore = score - 1
    } else {
      userClickedItem = id
      opponentClickedItem = opponentChoice.id
      matchResult = 'DRAW'
      matchScore = score + 0
    }
    this.setState({
      isItemClick: true,
      clickedItem: userClickedItem,
      opponentItem: opponentClickedItem,
      gameResult: matchResult,
      score: matchScore,
    })
  }

  RestartTheGame = () => {
    this.setState({
      isItemClick: false,
      clickedItem: '',
      opponentItem: '',
      gameResult: '',
    })
  }

  renderGameResultView = () => {
    const {choicesList} = this.props
    const {clickedItem, opponentItem, gameResult} = this.state
    const opponentObject = choicesList.find(
      eachObject => eachObject.id === opponentItem,
    )
    const opponentImage = opponentObject.imageUrl

    const userObject = choicesList.find(
      eachObject => eachObject.id === clickedItem,
    )
    const userImage = userObject.imageUrl

    let resultText
    if (gameResult === 'WON') {
      resultText = 'YOU WON'
    } else if (gameResult === 'LOSE') {
      resultText = 'YOU LOSE'
    } else {
      resultText = 'IT IS DRAW'
    }

    return (
      <GameResultsViewMainContainer>
        <GameResultsWhomContainer>
          <SelectedItemsContainer>
            <WhomText>YOU</WhomText>
            <WhomImage src={userImage} alt="your choice" />
          </SelectedItemsContainer>
          <SelectedItemsContainer>
            <WhomText>OPPONENT</WhomText>
            <WhomImage src={opponentImage} alt="opponent choice" />
          </SelectedItemsContainer>
        </GameResultsWhomContainer>
        <GameResultsViewResultContainer>
          <ResultText>{resultText}</ResultText>
          <PlayAgainButton type="button" onClick={this.RestartTheGame}>
            Play Again
          </PlayAgainButton>
        </GameResultsViewResultContainer>
      </GameResultsViewMainContainer>
    )
  }

  renderGameView = () => {
    const {choicesList} = this.props

    return (
      <GameItemsMainContainer>
        {choicesList.map(eachObject => (
          <RockPaperScissorItems
            eachObject={eachObject}
            key={eachObject.id}
            clickedGameItem={this.clickedGameItem}
          />
        ))}
      </GameItemsMainContainer>
    )
  }

  render() {
    const {isItemClick, score} = this.state

    return (
      <MainBgContainer>
        <GameMainContainer>
          <NavbarContainer>
            <NavBarItemsContainer>
              <NavBarItemText>
                ROCK <br />
                PAPER <br />
                SCISSORS
              </NavBarItemText>
            </NavBarItemsContainer>
            <ScoreNavContainer>
              <ScoreNavText>Score</ScoreNavText>
              <ScoreNavbar>{score}</ScoreNavbar>
            </ScoreNavContainer>
          </NavbarContainer>
          {isItemClick ? this.renderGameResultView() : this.renderGameView()}
          <Popup
            trigger={<TriggerButton type="button">RULES</TriggerButton>}
            modal="true"
          >
            {close => (
              <PopupMainContainer>
                <StyledIcon onClick={() => close()} />
                <RulesSetImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupMainContainer>
            )}
          </Popup>
        </GameMainContainer>
      </MainBgContainer>
    )
  }
}

export default RockScissorPaperGame
