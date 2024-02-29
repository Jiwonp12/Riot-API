export const calculateDays = (time: number): string => {
  const playTime = Math.floor((new Date().getTime() - time) / (1000 * 60));
  const minutes = playTime % 60;

  if (playTime > 60) {
    const hours = Math.floor(playTime / 60);
    if (hours > 24) {
      const days = Math.floor(hours / 24);
      return `${days}일 전`;
    } else {
      return `${hours}시간 전`;
    }
  } else {
    return `${minutes}분 전`;
  }
};

export const calculateMinutes = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes}분 ${seconds}초`;
};
