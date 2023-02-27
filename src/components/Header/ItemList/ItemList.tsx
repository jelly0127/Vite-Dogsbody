import React from 'react'
import styled from 'styled-components'
import HOME from '../images/home.png'
import RIGHT from '../images/right.png'
import IDO from '../images/iDo.png'
import { useNavigate } from 'react-router-dom'
interface ItemListProps {
  setValue: (value: any) => void
  value: boolean
}
const IListBox = styled.div`
  margin-top: 48px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const IListBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  p,
  a {
    color: #ffffff;
  }

  .left_box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    .left_img {
      margin-right: 10px;
      height: 20px;
      width: 20px;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .right_img {
    height: 14px;
    width: 14px;
    img {
      height: 100%;
      width: 100%;
    }
  }
`
const ItemList: React.FC<ItemListProps> = ({ setValue, value }) => {
  const navigate = useNavigate()
  const goPage = (name: string) => {
    setValue(false)
    return navigate(name)
  }
  return (
    <IListBox>
      <IListBoxRow onClick={() => goPage('/')}>
        <div className="left_box">
          <img src={HOME} alt="" className="left_img" />
          <p>HOME</p>
        </div>
        <img src={RIGHT} alt="" className="right_img" />
      </IListBoxRow>

      <IListBoxRow onClick={() => goPage('/ido')}>
        <div className="left_box">
          <img src={IDO} alt="" className="left_img" />
          <p>IDO</p>
        </div>
        <img src={RIGHT} alt="" className="right_img" />
      </IListBoxRow>
    </IListBox>
  )
}

export default ItemList
