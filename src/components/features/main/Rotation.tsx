import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import useGetChampionRotation from "../../../queries/useGetChampionRotation";
import { championAtom } from "../../../atoms/atom";
import { findRotation } from "../../../utils/findChampions";
import WeeksRotation from "./WeeksRotation";
import { rotationHeaderText } from "../../../constant/constant";
import { SwiperType } from "../../../types/types";
import cursorHover from "@/assets/CursorHover.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Rotation() {
  const { isLoading, isSuccess, data } = useGetChampionRotation();
  const champions = useRecoilValue(championAtom);
  const [headerState, setHeaderState] = useState(rotationHeaderText[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    setHeaderState(rotationHeaderText[swiper.activeIndex]);
  };

  if (isLoading) return <S_Loading />;

  if (isSuccess) {
    const freeChamps = findRotation(champions[0], data.freeChampionIds);
    const freeChampsForNew = findRotation(
      champions[0],
      data.freeChampionIdsForNewPlayers
    );

    return (
      <S_Nav>
        <header>
          <strong>{headerState}</strong>
        </header>
        <S_Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation, Pagination]}
          onSlideChange={swiper => handleSlideChange(swiper)}
        >
          <SwiperSlide>
            <WeeksRotation champions={freeChamps} />
          </SwiperSlide>
          <SwiperSlide>
            <WeeksRotation champions={freeChampsForNew} />
          </SwiperSlide>
        </S_Swiper>
      </S_Nav>
    );
  }
}
export default Rotation;

const S_Nav = styled.nav`
  width: 1300px;
  min-width: 1080px;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);

  header {
    font-size: 20px;
    color: var(--color-dark);
  }
`;

const S_Swiper = styled(Swiper)`
  max-width: 100%;
  display: flex;
  flex-direction: column;

  .swiper-button-prev,
  .swiper-button-next {
    width: 80px;
    height: 206px;
    top: 50%;
    transform: translateY(-35%);
    color: var(--color-bg);
    position: absolute;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    color: var(--color-bg2);
    cursor: url(${cursorHover}) 0 0, auto;
  }

  .swiper-button-disabled {
    color: var(--color-dark);
  }
`;

const S_Loading = styled.nav`
  width: 1300px;
  height: 295.2px;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
`;
