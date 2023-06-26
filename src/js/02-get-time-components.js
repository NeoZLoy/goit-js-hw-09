export default function getTimeComponents(time) {
  const days = time > 0 ? Math.floor(time / 1000 / 60 / 60 / 24) : 0;
  const hours = time > 0 ? Math.floor(time / 1000 / 60 / 60) % 24 : 0;
  const minutes = time > 0 ? Math.floor(time / 1000 / 60) % 60 : 0;
  const seconds = time > 0 ? Math.floor(time / 1000) % 60 : 0;

  return { days, hours, minutes, seconds };
}
