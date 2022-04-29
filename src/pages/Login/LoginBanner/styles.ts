import styled from 'styled-components';

import BACKGROUND_IMG from '../../../assets/atividades-para-ensinar-matematica.jpg';

export const FullWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const BannerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url(${BACKGROUND_IMG}) no-repeat center center;
  background-size: cover;

  .wrapper {
    margin-left: 60px;
  }

  .welcome-wrapper {
    margin-top: 100px;
  }
`;

export const WelcomeWrapper = styled.div`
  .title,
  .subtitle {
    color: #fff;
  }
  .title {
    font-weight: bold;
  }
`;

export const LogoWrapper = styled.div`
  margin-top: auto;
`;
