import React, { FC, useEffect } from 'react';
import { getNaverMain } from '../../api/main';
import Main from '../../component/main';

const MainContainer: FC = () => {
  const getNaver = async () => {
    const naver = await getNaverMain();
    console.log(naver);
  };
  useEffect(() => {
    getNaver();
  }, []);
  return <Main />;
  // 여기서 state관련 함수를 만들어서 component로 내려준다.
  // 서버통신도 container에서 진행하는 경우가 많음.
};

export default MainContainer;
