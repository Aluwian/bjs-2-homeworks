"use strict";
//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  return (...args) => {
    const hash = md5(args);

    const currentCache = cache.find((item) => item.hash === hash);

    if (currentCache) {
      return `Из кеша: ${currentCache.value}`;
    }

    const value = func(...args);
    const currentHash = {
      hash,
      value,
    };

    if (cache.length >= 5) {
      cache.shift();
    }

    cache.push(currentHash);

    return `Вычисляем: ${value}`;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let firstCall = true;

  function wrapper(...args) {
    wrapper.allCount++;

    if (firstCall) {
      firstCall = false;
      func(...args);
      wrapper.count++;
      return;
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
      timeoutId = null;
    }, delay);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
