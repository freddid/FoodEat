$(() => {
  let data = [
    {
      URL: "book-1",
      "URL-2": "book-1-aside",
      price: "300",
      name: "Мы - плотники незримого собора",
      author: "Рэй Бредбери",
      description: `
          Каждая новая книга Брэдбери, великого мастера, классика американской литературы, - величайшее событие, тем более если речь идет о произведениях, до сих пор не издававшихся на русском языке.
          Человеколюбие, пылкая фантазия, своеобразие стиля, тематическая разноплановость - все, за что мы любим Брэдбери, можно найти в этом сборнике. С первых шагов он был универсальнее и глубже тех жанровых границ, куда его загоняли. Певец детства, романтик-гуманист, борец за свободу, знаток традиции, создатель незабываемых сюжетов, Брэдбери с самого начала показал свою оригинальность и глубину. И ранние рассказы, собранные под этой обложкой, - яркое тому доказательство.
          `,
      rate: "⭐⭐⭐⭐⭐",
      review: [
        {
          name: "Демиденко Алина",
          rate: "5",
          txt: `Книга, рассказы которой Бредбери писал в очень молодом возрасте. Он только начинал свой путь, искал свою уникальную идею, жанровое наполнение, уже имея врожденное чувство слога и неповторимую манеру плетения слов. Заметно, какое неизгладимое впечатление произвела на него война, в которой он принимал участие только в тылу - почти все рассказы, вошедшие в книгу датированы 41-43-45 годами. `
        },
        {
          name: "Филиппов Александр",
          rate: "4",
          txt: `Ойёй -тежеловато читается. Есть очень хорошие рассказы, есть никакие, есть СОВСЕМ никакие.
            В общем, я бы не сказал, что это лучший сборник рассказов Брэдбери.
            Ах да! У меня часть страниц была не прошита, а просто вложена в книгу!`
        }
      ],
      characteristics: [
        "Эксмо, 2017 г.",
        "Интеллектуальный бестселлер",
        "410 г",
        "978-5-699-92654-1 г"
      ]
    },
    {
      URL: "book-2",
      price: "700",
      name: "Изучаем Java, 2-ое издание",
      author: "Сьерра К., Бейтс Б.",
      description: `
          "Изучаем Java" — это не просто книга. Она не только научит вас теории языка Java и объектно-ориентированного программирования, она сделает вас программистом. В ее основу положен уникальный метод обучения на практике. В отличие от классических учебников информация дается не в текстовом, а в визуальном представлении. Вы освоите в деле все самое нужное: синтаксис и концепции языка, работу с потоками, работа в сети, распределенное программирование. Вся теория закрепляется интереснейшими примерами и тестами.`,
      rate: "⭐⭐⭐⭐",
      review: [
        {
          name: "Сергей",
          rate: "5",
          txt: `Не важно, что книга была давно выпущена (это вообще не имеет никакого значения). ГЛАВНАЯ ЦЕННОСТЬ этой книги в том, что авторы учат языку в объектно-ориентированном контексте, так как Java - полностью объектно-ориентированный язык и изучать его нужно именно в этом контексте.`
        },
        {
          name: "Лирот Хазарти",
          rate: "4",
          txt: `Книга очень динамическая. Не заставляет читателя скучать. Нестандартная методика обучения - занудам лучше воздержаться от чтения. Книга интригующая. Читается очень легко, на одном дыхании. В книге встречается юмор.
            Подойдёт всем тем, кто ничего не слышал про программирование, включая ООП.`
        }
      ],
      characteristics: [
        "Эксмо, 2017 г.",
        "Интеллектуальный бестселлер",
        "410 г",
        "978-5-699-92654-1 г"
      ]
    },
    {
      URL: "book-3",
      price: "279",
      name: "Гений",
      author: "Драйзер Теодор",
      description: `
          Герой романа "Гений", талантливый художник Юджин Витла, во многом сродни своему создателю - американскому писателю Теодору Драйзеру. Их сближают не только биографические совпадения, но и эстетические взгляды.
          Тернист путь Юджина к цели. Он обретает материальное благополучие и респектабельное положение в обществе ценой невосполнимых потерь. Но Юджин - сильная личность, он сумел не сломаться, пережив творческий и душевный кризис. Творческая личность, он находится в постоянном поиске и открывает для себя новую сферу - "великое искусство снов"...
          `,
      rate: "⭐⭐⭐⭐",
      review: [
        {
          name: "эвелина",
          rate: "5",
          txt: `Достоинства
           Великое произведение Великого Автора.очень понравилось.Издание шикарное.в общем,получила массу удовольствия и приятных эмоций. 
           Недостатки
           нет 
           Комментарий
           Обязательно к прочтению всем любителям качественной зарубежной классики. `
        },
        {
          name: "роман",
          rate: "4",
          txt: `Книга очень динамическая. Не заставляет читателя скучать. Нестандартная методика обучения - занудам лучше воздержаться от чтения. Книга интригующая. Читается очень легко, на одном дыхании. В книге встречается юмор.
            Подойдёт всем тем, кто ничего не слышал про программирование, включая ООП.`
        }
      ],
      characteristics: [
        "Эксмо, 2097 г.",
        "Зарубежная классика",
        "555 г",
        "978-5-699-38500-3"
      ]
    }
  ];
  let users = ["Daud", "1234", ["book-1"]];

  if (localStorage.getItem("data")) {
    data = JSON.parse(localStorage.getItem("data"));
  } else {
    localStorage.setItem("data", JSON.stringify(data));
  }

  if (localStorage.getItem("user")) {
    users = JSON.parse(localStorage.getItem("user"));
  } else {
    localStorage.setItem("user", JSON.stringify(users));
  }

  if (JSON.parse(localStorage.getItem("isLogin"))) {
    $("body").addClass("user-active");
    $(".menu__aside").addClass("active-user");
    $(".user__books").text("");
    users[2].forEach((el) => {
      let infoBook = data.find((el2) => el2.URL == el);

      $(".user__books").append(`
            <div class="user__book">
            <div data-id="${infoBook.URL}" class="user__book-del">✕</div>
            <img src="/imgs-preview/${infoBook.URL}.jpg" alt="" />
            <div class="user__book-info">
              <div class="book_name">${infoBook.name}</div>
              <div class="book_author">${infoBook.author}</div>
              <div class="book-rate">Рейтинг: ${infoBook.rate}</div>
            </div>
          </div>
            `);
    });
  }

  data.forEach((el, i) => {
    $(".scene")[0].innerHTML += `
        <a-nft
        smooth="true"
        type="nft"
        url="./img/${el.URL}"
        emitevents="true"
      ></a-nft>
        `;
  });

  let activeBook = "";

  data.forEach((el, i) => {
    $("a-nft")[i].addEventListener("markerFound", (event) => {
      if ($(".menu").hasClass("active")) return;
      $(".book-card").removeClass("act-1 act-2 act-3");
      $(".book-card").addClass("act-1");
      $(".description-2 .comms-block").text("");
      $(".description-1").text("");
      $(".description-3").text("");

      activeBook = i;

      $(".description-3")[0].innerHTML = `
            <div class="book-card__characteristics">
            <div class="book-card__characteristic">
              <div class="book-card__characteristic-name">Издательство</div>
              <div class="book-card__characteristic-value">${data[i].characteristics[0]}</div>
            </div>
            <div class="book-card__characteristic">
              <div class="book-card__characteristic-name">Серия</div>
              <div class="book-card__characteristic-value"> ${data[i].characteristics[1]}
              </div>
            </div>
            <div class="book-card__characteristic">
              <div class="book-card__characteristic-name">Масса</div>
              <div class="book-card__characteristic-value">${data[i].characteristics[2]}</div>
            </div>
            <div class="book-card__characteristic">
              <div class="book-card__characteristic-name">ISBN</div>
              <div class="book-card__characteristic-value"> ${data[i].characteristics[3]}</div>
            </div>
            </div>`;
      data[i].review.forEach((el) => {
        $(".description-2 .comms-block").append(`
              <div class="book-card__comment">
              <div class="book-card__comment-header">
                <div class="book-card__comment-user">
                  <div class="">
                    <img src="./img-icon/empty-ava.png" alt="" />
                  </div>
                  <div class="book-card__comment-name">${el.name}</div>
                </div>
                <div class="book-card__comment-rate">${el.rate}/5 ⭐</div>
              </div>
              <div class="book-card__comment-descriptions">${el.txt}</div>
            </div>
              `);
      });

      $(".description-1").append(`
            <div class="book-card__container">
            <div class="book-card__img">
              <img src="./imgs-preview/${data[i].URL}.jpg" alt="" />
              </div>
              <div class="book-card__info">
                  <div class="book-card__name">${data[i].name}</div>
                  <div class="book-card__author">${data[i].author}</div>
                  <div class="book-card__rate">Рейтинг:  ${data[i].rate}</div>
                  <div class="book-card__price">Цена:  ${
                    data[i].price
                  } руб </div>
                  <div data-id="${data[i].URL}" class="book-card__mark">${
        users[2].includes(data[i].URL)
          ? "Уже в закладках 📑"
          : "Добавить в закладки 📑"
      }</div>
                </div>
              </div>
              <div class="book-card__description">${data[i].description}</div>
            `);

      $(".book-card").addClass("active act-1");
    });
  });

  $(".close").on("click", () => {
    $(".book-card").removeClass("active");
  });

  $(".btn").each(function (el, i) {
    this.addEventListener("click", () => {
      $(".book-card").removeClass("act-1 act-2 act-3");
      $(".book-card").addClass(`act-${el + 1}`);
    });
  });

  $(".menu__burger").on("click", () => {
    $(".book-card").removeClass("active");
    $(".menu").toggleClass("active");
  });

  $(".send-form").on("click", () => {
    let regInfo = [
      $($(".login input")[0]).val(),
      $($(".login input")[1]).val()
    ];

    if (regInfo[0] == users[0] && regInfo[1] == users[1]) {
      localStorage.setItem("isLogin", 1);
      $("body").addClass("user-active");
      $(".menu__aside").addClass("active-user");
      $(".user__books").text("");
      users[2].forEach((el) => {
        let infoBook = data.find((el2) => el2.URL == el);

        $(".user__books").append(`
               <div class="user__book">
               <div data-id="${infoBook.URL}" class="user__book-del">✕</div>
               <img src="./imgs-preview/${infoBook.URL}.jpg" alt="" />
               <div class="user__book-info">
                 <div class="book_name">${infoBook.name}</div>
                 <div class="book_author">${infoBook.author}</div>
                 <div class="book-rate">Рейтинг: ${infoBook.rate}</div>
               </div>
             </div>
               `);
      });
    } else {
      alert("Неправильный логин и пароль");
    }
  });

  $(".description-1").on("click", ".book-card__mark", function () {
    let url = $(this).attr("data-id");
    if (users[2].includes(url)) return;

    users[2].push(url);

    let infoBook = data.find((el2) => el2.URL == url);

    $(".user__books").append(`
               <div class="user__book">
               <div data-id="${infoBook.URL}" class="user__book-del">✕</div>
               <img src="./imgs-preview/${infoBook.URL}.jpg" alt="" />
               <div class="user__book-info">
                 <div class="book_name">${infoBook.name}</div>
                 <div class="book_author">${infoBook.author}</div>
                 <div class="book-rate">Рейтинг: ${infoBook.rate}</div>
               </div>
             </div>
               `);
    $(this).text("Уже в закладках 📑");
    localStorage.setItem("user", JSON.stringify(users));
  });

  $(".user__books").on("click", ".user__book-del", function () {
    let url = $(this).attr("data-id");

    users[2].splice(users[2].indexOf(url), 1);

    localStorage.setItem("user", JSON.stringify(users));
    $(".user__books").text("");
    users[2].forEach((el) => {
      let infoBook = data.find((el2) => el2.URL == el);

      $(".user__books").append(`
             <div class="user__book">
             <div data-id="${infoBook.URL}" class="user__book-del">✕</div>
             <img src="./imgs-preview/${infoBook.URL}.jpg" alt="" />
             <div class="user__book-info">
               <div class="book_name">${infoBook.name}</div>
               <div class="book_author">${infoBook.author}</div>
               <div class="book-rate">Рейтинг: ${infoBook.rate}</div>
             </div>
           </div>
             `);
    });
  });

  $(".user__logout").on("click", () => {
    localStorage.setItem("isLogin", 0);
    $("body").removeClass("user-active");
    $(".menu__aside").removeClass("active-user");
  });

  $(".add-commit button").on("click", () => {
    data[activeBook].review.push({
      name: users[0],
      rate: 5,
      txt: $(".add-commit input").val()
    });
    localStorage.setItem("data", JSON.stringify(data));
    $(".add-commit input").val("");
    $(".description-2 .comms-block").text("");
    data[activeBook].review.forEach((el) => {
      $(".description-2 .comms-block").append(`
              <div class="book-card__comment">
              <div class="book-card__comment-header">
                <div class="book-card__comment-user">
                  <div class="">
                    <img src="./img-icon/empty-ava.png" alt="" />
                  </div>
                  <div class="book-card__comment-name">${el.name}</div>
                </div>
                <div class="book-card__comment-rate">${el.rate}/5 ⭐</div>
              </div>
              <div class="book-card__comment-descriptions">${el.txt}</div>
            </div>
              `);
    });
  });
});
