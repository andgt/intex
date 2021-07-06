var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [44.95525450, 34.11508951], // Москва
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  });

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [44.95525450, 34.11508951] // координаты точки
    }
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);

  myMap.behaviors.disable("scrollZoom");
}
