import styled from 'styled-components'

export const MainBgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameMainContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 85%;
  }
`
export const NavbarContainer = styled.nav`
  border: 2px solid #ffffff;
  background-color: transparent;
  padding: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 90px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 15px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const NavBarItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3px;
`

export const NavBarItemText = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 2px;
  margin-top: 5px;

  @media screen {
    font-size: 26px;
  }
`

export const ScoreNavContainer = styled.div`
  background-color: #ffffff;
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
`

export const ScoreNavText = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 7px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const ScoreNavbar = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 800;
  margin-top: 5px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

export const GameItemsMainContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 98%;
  margin-top: 25px;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const TriggerButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  background-color: #ffffff;
  border-radius: 7px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
  margin-bottom: 20px;
`

export const PopupMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 90%;
  background-color: #ffffff;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-left: 10px;
`
export const RulesSetImage = styled.img`
  width: 90%;
  margin-top: 15px;
`

export const GameResultsViewMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const GameResultsWhomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
`

export const SelectedItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`

export const WhomText = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const WhomImage = styled.img`
  min-width: 180px;
  width: 90%;
  max-width: 360px;
`

export const GameResultsViewResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ResultText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

export const PlayAgainButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  background-color: #ffffff;
  border-radius: 10px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;
`
