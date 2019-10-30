
      // Функция ymaps.ready() будет вызвана, когда
      // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
      ymaps.ready(init);
      function init(){
          // Создание карты.
          var myMap = new ymaps.Map("map", {
              // Координаты центра карты.
              // Порядок по умолчанию: «широта, долгота».
              // Чтобы не определять координаты центра карты вручную,
              // воспользуйтесь инструментом Определение координат.
              center: [59.9394, 30.32951],
              // Уровень масштабирования. Допустимые значения:
              // от 0 (весь мир) до 19.
              zoom: 16 
            },
              {
                searchControlPointer: "yandex#search"
              });
            var myPlacemark = new ymaps.Placemark([59.9394, 30.32951], {}, {
              cursor: "arrow",
              iconLayout: 'default#image',
              iconImageHref: 'img/Pin.png',
              iconImageSize: [218, 142],
              iconImageOffset: [-334, -76]
          });
          myMap.geoObjects.add(myPlacemark);
        };



   
      var linkSlider1 = document.querySelector(".slider-switch1");
      var linkSlider2 = document.querySelector(".slider-switch2");
      var linkSlider3 = document.querySelector(".slider-switch3");
      var bestDealList = document.querySelector(".best-deal-list");
      var bckg = document.querySelector("body");

      linkSlider1.addEventListener("click", function (evt) { 
        evt.preventDefault(); 
        bestDealList.classList.add("background1");
        bestDealList.classList.remove("background2");
        bestDealList.classList.remove("background3");
        bckg.classList.add("bckg1");
        bckg.classList.remove("bckg2");
        bckg.classList.remove("bckg3");
      });
      linkSlider2.addEventListener("click", function (evt) { 
        evt.preventDefault(); 
        bestDealList.classList.add("background2");
        bestDealList.classList.remove("background1");
        bestDealList.classList.remove("background3");
        linkSlider1.classList.remove("slider-default");
        bckg.classList.add("bckg2");
        bckg.classList.remove("bckg1");
        bckg.classList.remove("bckg3");
      });
      linkSlider3.addEventListener("click", function (evt) { 
        evt.preventDefault(); 
        bestDealList.classList.add("background3");
        bestDealList.classList.remove("background1");
        bestDealList.classList.remove("background2");
        linkSlider1.classList.remove("slider-default");
        bckg.classList.add("bckg3");
        bckg.classList.remove("bckg1");
        bckg.classList.remove("bckg2");
      });
    


    
      var link = document.querySelector(".modal-open");
      var popup = document.querySelector(".modal");
      var overlay = document.querySelector(".without-overlay");
      var close = popup.querySelector(".modal-close");
      var form = popup.querySelector(".modal-form");
      var login = popup.querySelector("[name=name]");
      var email = popup.querySelector("[name=email]");
      
      //Если браузер не имеет поддержку localStorage, или он отключен
      var isStorageSupport = true;
      var storage = "";
      try {
        storage = localStorage.getItem("login");
        } catch (err) {
          isStorageSupport = false;
          }

      //Ловим событие клика по кнопке открытия.
      link.addEventListener("click", function (evt) { 
        //Отменим стандартное действие ссылки при нажатии на неё.
        evt.preventDefault(); 
        //Добавляем этот класс к модальному окну по клику на ссылку.
        popup.classList.add("modal-show");
        overlay.classList.add("overlay");
        //Если значение существует, записываем логин в поле ввода при открытии.
        if (storage) {
          login.value = storage;
          email.focus();
          } else {
            login.focus();
            }
        });
      overlay.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("overlay");
        popup.classList.remove("modal-error");
        });
      //Обработчик клика по кнопке закрытия модального окна. 
      //Отменяем стандартное действие и удаляем класс, 
      //который отвечает за показ модального окна.
      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("overlay");
        popup.classList.remove("modal-error");
        });
      //Отловим событие отправки формы и отменим его стандартное действие.
      form.addEventListener("submit", function (evt) {
        //Отменим отправку формы, если какое-то из полей незаполнено.
        if (!login.value || !email.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");

          }
          //В случае правильно заполненной формы запишем логин в локал.хранилище.
          else {
            if (isStorageSupport) {
              localStorage.setItem("login", login.value);
            }
          }
        });
      //Обработчик события, при нажатии ESC в, если модалка открыта, закрывает её.
      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            overlay.classList.remove("overlay");
            popup.classList.remove("modal-error");
            }
          }
        });
    