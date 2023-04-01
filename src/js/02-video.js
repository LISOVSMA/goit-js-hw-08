import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_TIME = 'videoplayer-current-time';

const savedTime = localStorage.getItem(STORAGE_TIME);

const getCurrentTime = function (e) {
  const seconds = e.seconds;
  localStorage.setItem(STORAGE_TIME, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(savedTime) || 0);
