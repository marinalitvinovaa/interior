const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
//****/
const showMore = document.querySelector('.portfolio__btn')
let item = 6
const imagesLengths = document.querySelectorAll('.portfolio__img').length
console.log(imagesLengths)
/**** */

const portfolioList = document.querySelector('.portfolio__tabs')
const portfolioItems = document.querySelectorAll('.portfolio__img')
const listItems = document.querySelectorAll('.portfolio__item')
const cards = document.querySelectorAll('.review__card')
const btn = document.querySelector('.review__btn')
const reviewsHidden = document.querySelectorAll('.review__card.hide')
const steps = document.querySelectorAll('.steps__item')
const checkbox = document.querySelector('.checkbox__input')
const scrollController = {
  disabledScroll() {
    document.body.style.cssText = `
      overflow: hidden;
    `
  },
  enabledScroll() {
    document.body.style.cssText = ``
  },
}
//Функция для открытия/скрытия части отзыва
cards.forEach((review) => {
  const button = review.querySelector('.review__show-more')

  button.addEventListener('click', (e) => {
    e.preventDefault()
    const paragraph = review.querySelector('.paragraph__hide')
    paragraph.classList.toggle('hide')
    const text = paragraph.classList.contains('hide')
      ? 'Читать весь отзыв'
      : 'Скрыть'
    button.textContent = text
  })
})

//Функция скрыть/показать все отзывы
btn.addEventListener('click', (e) => {
  e.preventDefault()
  reviewsHidden.forEach((item) => {
    item.classList.toggle('hide')
    const text = item.classList.contains('hide')
      ? 'Показать еще'
      : 'Показать меньше'
    btn.textContent = text
  })
})

//Аккордеон для faq
document.querySelectorAll('.faq__item').forEach((el) => {
  el.addEventListener('click', () => {
    document
      .querySelectorAll('.faq__item')
      .forEach((el) => el.classList.remove('faq__item--open'))
    el.classList.toggle('faq__item--open')
  })
})

//Меню в адаптивах
burger.addEventListener('click', () => {
  menu.classList.toggle('menu--active')
  burger.classList.toggle('burger--active')

  menu.classList.contains('menu--active')
    ? scrollController.disabledScroll()
    : scrollController.enabledScroll()
})

//показать/скрыть этапы работы
steps.forEach((i) => {
  i.addEventListener('mousemove', (e) => {
    const target = e.currentTarget
    steps.forEach((i) => i.classList.remove('steps__item--active'))
    target.classList.add('steps__item--active')
  })
})

/******** РАБОТА С МАСКОЙ ******************/

// Считываем поле ввода
let phoneInput = document.querySelector('.phone__input')
// Считываем кнопку
let btnForm = document.querySelector('.contacts__btn')
// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: '+{7}(000)000-00-00',
})
// Обработчик события для инпута
phoneInput.addEventListener('input', phoneInputHandler)

checkbox.addEventListener('click', phoneInputHandler)

function phoneInputHandler() {
  if (phoneMask.masked.isComplete && checkbox.checked) {
    btnForm.classList.add('btn--active')
  } else {
    btnForm.classList.remove('btn--active')
  }
}
// Обработчик события для кнопки
// btnForm.addEventListener("click", btnHandler);
// Если ввели правлильно - кнопка активна
// Отправляем номер телефона
// async function btnHandler(e) {
//   e.preventDefault();
//   return await fetch("send_msg.php", {
//     method: "POST",
//     body: phoneMask.unmaskedValue,
//   });
// }

/******** РАБОТА С МАСКОЙ *********************/

//****************************** ТУТ РАБОТА С ГАЛЕРЕЕЙ */

// function getItems(className){
//   portfolioItems.forEach(item => {
//   if (item.classList.contains(className)) {
//     item.classList.remove('hide')
//   } else {
//     item.classList.add('hide')
//   }
// })
// }

// function filter() {
//   portfolioList.addEventListener('click', (e) => {
//     const targetId = e.target.dataset.id
//     const target = e.target

//     //переключает вид табов
//     if (target.classList.contains('portfolio__item')) {
//       listItems.forEach((el) => el.classList.remove('portfolio__item--active'))
//       target.classList.add('portfolio__item--active')
//     }

//     //это первый шаг -- тут ошибка
//     // const collectionCards = Array.from(
//     //   document.querySelectorAll(`.${targetId}`),
//     // )

//     // const array = Array.from(collectionCards)
//     // array.forEach((el) => el.classList.add('hide'))
//     // const visibleCards = array.slice(0, 6)
//     // visibleCards.forEach((el) => el.classList.add('is-visible'))

//     // switch (targetId) {
//     //   case 'all':
//     //     collectionCards.forEach((item) => {
//     //       item.classList.remove('hide')
//     //     })
//     //     //getItems('portfolio__img')
//     //     break
//     //   case 'living':
//     //     collectionCards.forEach((item) => {
//     //       item.classList.remove('hide')
//     //     })
//     //     // getItems(targetId)
//     //     break
//     //   case 'kitchen':
//     //     collectionCards.forEach((item) => {
//     //       item.classList.remove('hide')
//     //     })
//     //     //getItems(targetId)
//     //     break
//     //   case 'bedroom':
//     //     collectionCards.forEach((item) => {
//     //       item.classList.remove('hide')
//     //     })
//     //     //getItems(targetId)
//     //     break
//     //   case 'bathroom':
//     //     collectionCards.forEach((item) => {
//     //       item.classList.remove('hide')
//     //     })
//     //     //getItems(targetId)
//     //     break
//     // }
//   })
// }
// filter()

// showMore.addEventListener('click', () => {
//   items += 3

//   const array = Array.from(
//     document.querySelectorAll('.portfolio__img:not(.hide)'),
//   )

//   //находим те элементы, которые нужно видеть:
//   const visItems = array.slice(0, items)

//   visItems.forEach((el) => el.classList.add('is-visible'))

//   if (visItems.length === array.length) {
//     showMore.classList.add('hide')
//   } else {
//     showMore.classList.remove('hide')
//   }
// })

/*************************************************** */
portfolioList.addEventListener('click', (e) => {
    const target = e.target

    if (target.classList.contains('portfolio__item')) {
      listItems.forEach((el) => el.classList.remove('portfolio__item--active'))
      target.classList.add('portfolio__item--active')
    }
  })


const tabsGallery = document.querySelectorAll('.portfolio__item')
const imagesAll = document.querySelectorAll('.portfolio__img')
tabsGallery.forEach(el => {
  let item = 6;

  
  
  el.addEventListener('click', (e) => {
    const classId = e.target.dataset.id; //имя data-id
    let allImagesInGroup;
    
    classId === 'all' ? allImagesInGroup = document.querySelectorAll('.portfolio__img') : allImagesInGroup = document.querySelectorAll(`.${classId}`); //node-list с элементами группы


    imagesAll.forEach(img => img.style.display = 'none') //скрываем вообще все карточки
    item = 6;
    let viewImages = Array.from(allImagesInGroup).slice(0, item);
    viewImages.forEach(el => el.style.display = 'block');
  
   document.querySelector('.portfolio__btn').addEventListener('click', () => {
      item += 3;
      imagesAll.forEach(img => img.style.display = 'none')
      let viewImages = Array.from(allImagesInGroup).slice(0, item);
      viewImages.forEach(el => el.style.display = 'block');
    })

  })
  })
   showMore.addEventListener('click', () => {
      item += 3;
      imagesAll.forEach(img => img.style.display = 'none')
      let viewImages = Array.from(imagesAll).slice(0, item);
      viewImages.forEach(el => el.style.display = 'block');
      
    })