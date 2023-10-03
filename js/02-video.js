import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);
let initialTimeSet = false;

// Обработчик события "play"
player.on("play", function () {
  if (!initialTimeSet) {
    let seconds_moment = localStorage.getItem("videoplayer-current-time");

    // Устанавливаем текущее время плеера только после начала воспроизведения видео
    player
      .setCurrentTime(seconds_moment)
      .then(function () {
        console.log("Текущее время установлено успешно.");
      })
      .catch(function (error) {
        switch (error.name) {
          case "RangeError":
            console.error("Время было меньше 0 или больше длительности видео.");
            break;

          default:
            console.error("Произошла ошибка при установке текущего времени.");
            break;
        }
      });
    initialTimeSet = true;
  }
});

player.on(
  "pause",
  _.throttle(function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
  }, 1000)
); // 1000 мілісекунд (1 секунда)
