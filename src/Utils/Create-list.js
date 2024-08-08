export function Create_List(selectedIconClass,selectedColorClass) {
    var Card_List = document.querySelector('.Card-List');

    var input_List = document.querySelector('.input_List').value;
    var List_Task = []

    if (Card_List.classList.contains('Card-List-show')) {
        if (input_List.trim() == "") {
            Card_List.classList.remove('Card-List-show')
        }
        else {
            const div = document.createElement('div')
            div.className = "w-full h-[5.5vh] flex justify-center items-center px-4 rounded-lg cursor-pointer List-card"
            div.innerHTML =
                `
            <div class = "w-[90%] h-full flex items-center gap-2">
                <i class='${selectedIconClass} w-auto text-lg'></i>
                <div class ="${selectedColorClass}"></div>
                <h1 class='text-lg'>${input_List}</h1>
            </div>
            <div class="w-[10%] h-full flex justify-center items-center List-card-number">
                <h1 class="px-2 rounded-full bg-gray-200">${List_Task.length}</h1>
            </div>
        `

            document.querySelector('.List-cards').appendChild(div);

            document.querySelector('.input_List').value = ""
            Card_List.classList.remove('Card-List-show')
        }
    } else {
        Card_List.classList.add('Card-List-show')
    }
}

// Button-Items
export function Button_Items(e) {
    const button_items = document.querySelectorAll('.button-items');
    button_items.forEach(buttons => {
        buttons.style.backgroundColor = '#e5e7eb'
        buttons.style.color = 'black'
    });

    e.style.backgroundColor = 'black';
    e.style.color = 'white';
}

// Scrolle-Items
var currentIndex1 = 0
export function Scrolle_items(direction) {
    const slides = document.querySelectorAll('.card-slides');
    const totalSlides = slides.length;
    currentIndex1 = moveSlide(direction, currentIndex1, totalSlides);
    document.querySelector('.cards').style.transform = `translateX(${currentIndex1 * -100}%)`;
}
export function moveSlide(direction, currentIndex, totalSlides) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    return currentIndex;
}