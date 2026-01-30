class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (
      arguments.length !== 2 ||
      typeof callback !== "function" ||
      typeof time !== "string"
    ) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (time in this.alarmCollection) {
      throw new Error("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
    });
  }

  removeClock(timeToDelete) {
    this.alarmCollection = this.alarmCollection.filter(
      (item) => item.time !== timeToDelete,
    );
  }

  getCurrentFormattedTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours().toString().padStart(2, "0");
    let minute = currentTime.getMinutes().toString().padStart(2, "0");
    return `${hour}:${minute}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((call) => {
        if (
          call.time === this.getCurrentFormattedTime() &&
          call.canCall === true
        ) {
          call.canCall = false;
          call.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((call) => (call.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
