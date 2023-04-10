import styled from 'styled-components'
import React from 'react'
import 'animate.css'
import useWindowTop from '@/hooks/topDistance'
import CommunityLinkGroup from '../../components/CommunityLinkGroup'
import MetaMaskCard from '@/components/connectorCards/MetaMaskCard'

const HomeRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  align-items: center;
  height: auto;
  width: 100%;
  color: #ffffff;
  background: linear-gradient(
      113.54deg,
      rgba(103, 58, 194, 0.5) 10.91%,
      rgba(122, 74, 221, 0.398) 25.92%,
      rgba(209, 103, 255, 0.03) 55.76%
    ),
    linear-gradient(160.75deg, #7a4add 41.37%, #d57bff 98.29%);
  .first_text {
    padding: 0 15px 40px 15px;
    font-size: 22px;
    min-height: 100%;
    height: 100vh;

    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    line-height: 28px;
  }
  .second_text {
    background-color: #000;
    width: 100%;
    height: auto;
    padding: 30px 15px;
  }
  .second_text_titleBox {
    padding: 10px 20px;
    width: 100%;
    height: auto;
    background: #990dd0;
    h4 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
      line-height: 30px;
    }
    img {
      margin-top: 30px;
    }
  }
  .third_text {
    margin-top: 30px;
    width: 100%;
    height: auto;
    padding: 20px 15px;
    border: 3px solid #990dd0;
  }
  .third_text_titleBox {
    h4 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
      line-height: 30px;
    }
    img {
      margin-top: 28px;
    }
  }
  .title {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    font-size: 24px;
    font-weight: 600;
  }
  .img_box {
    margin-top: 40px;
  }
  .footer_box {
    width: 100%;
    height: auto;
    padding: 40px 20px;
    font-size: 16px;
    line-height: 10px;
    background: linear-gradient(
        113.54deg,
        rgba(103, 58, 194, 0.3) 4.91%,
        rgba(122, 74, 221, 0.398) 10.92%,
        rgba(209, 103, 255, 0.03) 50.76%
      ),
      linear-gradient(160.75deg, #7a4add 1.37%, #d57bff 98.29%);
    p {
      margin-top: 10px;
    }
    .small_title {
      font-size: 14px;
    }
    .link_box {
      margin-top: 20px;
      align-items: center;
      justify-content: center;
    }
  }
`
export default function Home() {
  const H = useWindowTop().height

  return (
    <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
      <MetaMaskCard />
      {/* <NetworkCard /> */}
      {/* <WalletConnectV2Card />
        <WalletConnectCard />
        <CoinbaseWalletCard />
        <GnosisSafeCard /> */}
    </div>
    // <HomeRoot>
    //   <div className="first_text">
    //     <h4 className={H === 0 ? 'animate__animated  animate__fadeInUp' : ''}>
    //       <p>A DECENTRALIZED PLATFORM</p>
    //       <p>FOR INTELLIGENT AVATARS MADE FROM OUR IDEA</p>
    //     </h4>
    //   </div>

    //   <div className="second_text">
    //     <div className="second_text_titleBox">
    //       <h4 className={H > 80 ? 'animate__animated  animate__fadeInUp' : ''}>This is TEST</h4>
    //       <p className={H > 150 ? 'animate__animated  animate__fadeInUp' : ''}>
    //         In the world of WEB3, AIGIRL will generate 3D intelligent avatars according to your ideas, create for you,
    //         draw for you, chat with you, play games with you and can perform activities on your behalf.
    //       </p>
    //       <img
    //         className={H > 300 ? 'animate__animated  animate__fadeInUp' : ''}
    //         src="https://www.aigirl.shop/assets/images/bck6.png"
    //         alt=""
    //       />
    //     </div>

    //     <div className="img_box">
    //       <img
    //         className={H > 644 ? 'animate__animated  animate__fadeInUp' : ''}
    //         src="https://www.aigirl.shop/assets/images/bck1.png"
    //         alt=""
    //       />
    //     </div>
    //     <div className="third_text">
    //       <div className="third_text_titleBox">
    //         <h4 className={H > 941 ? 'animate__animated  animate__fadeInUp' : ''}>This is TEST</h4>
    //         <p className={H > 1024 ? 'animate__animated  animate__fadeInUp' : ''}>
    //           In the world of WEB3, AIGIRL will generate 3D intelligent avatars according to your ideas, create for you,
    //           draw for you, chat with you, play games with you and can perform activities on your behalf.
    //         </p>
    //         <img
    //           className={H > 1185 ? 'animate__animated  animate__fadeInUp' : ''}
    //           src="https://www.aigirl.shop/assets/images/bck6.png"
    //           alt=""
    //         />
    //       </div>
    //     </div>

    //     <div className="title">
    //       <div className={H > 1560 ? 'animate__animated  animate__fadeInUp' : ''}>TEST TITLE</div>
    //     </div>
    //     <div className="third_text">
    //       <div className="third_text_titleBox">
    //         <h4 className={H > 1680 ? 'animate__animated  animate__fadeInUp' : ''}>This is TEST</h4>
    //         <p className={H > 1740 ? 'animate__animated  animate__fadeInUp' : ''}>
    //           As owners of our own AIGIRL, we can manage it anywhere online. A blockchain protocol built for AIGIRL
    //           creates a decentralized platform where AIGIRL are stored, and interacts with decentralized applications
    //           meant for AIGIRL-centric uses in everyday life.
    //         </p>
    //         <img
    //           className={H > 1933 ? 'animate__animated  animate__fadeInUp' : ''}
    //           src="https://www.aigirl.shop/assets/images/bck6.png"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="footer_box">
    //     <img
    //       className={H > 2324 ? 'animate__animated  animate__fadeInUp' : ''}
    //       src="https://www.aigirl.shop/assets/images/big-logo.png"
    //       alt=""
    //     />
    //     <p className={H > 2430 ? 'animate__animated  animate__fadeInUp' : ''}>
    //       Let your creation have infinite possibilities
    //     </p>
    //     <br />
    //     <p className={H > 2430 ? 'small_title animate__animated  animate__fadeInUp' : 'small_title'}>
    //       © 2022 AIGIRL. Design & Developed
    //     </p>
    //     <div className={H > 2430 ? 'link_box animate__animated  animate__fadeInUp' : 'link_box'}>
    //       <CommunityLinkGroup />
    //     </div>
    //   </div>
    // </HomeRoot>
  )
}
