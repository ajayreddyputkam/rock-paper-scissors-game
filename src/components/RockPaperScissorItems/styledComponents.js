import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  width: 40%;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const ItemButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  min-width: 120px;
  width: 100%;
  max-width: 330px;
`
export const ItemImage = styled.img`
  width: 100%;
`
