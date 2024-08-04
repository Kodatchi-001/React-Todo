import { Note_information } from "./Note-info";

export function Create_Note() {

    var Card_Create = document.querySelector('.Card-Create');
    var input = document.querySelector('.input_task').value;
    var selectElement = document.querySelector('.select_task');
    var input_textarea = document.querySelector('textarea').value;

    if (selectElement.querySelector('i') != null) {
        var selectIcon = selectElement.querySelector('i').className;
    }

    if (Card_Create.classList.contains('Card-Create-Show')) {
        if (input.trim() === '') {
            Card_Create.classList.remove('Card-Create-Show');
            return;
        } else {
            const div = document.createElement('div');
            div.addEventListener('click', Note_information);
            div.className = "w-full h-[7vh] pl-3 pr-2 py-2 flex items-center flex-wrap rounded-lg gap-5 overflow-hidden cursor-pointer bg-white";
            div.innerHTML =
                `
                <div class="w-full h-full flex items-center gap-3">
                    <div class="p-2 rounded-md border cursor-pointer border-gray-400">
                    </div>
                    <h1 class="text-lg">
                        ${input}
                    </h1>
                    <div class="w-[20%] h-full flex justify-end items-center ml-auto gap-3">
                        <i class ="${selectIcon} text-2xl mr-0"></i>
                        <i class='bx bx-dots-vertical text-2xl cursor-pointer rounded-md bg-gray-200'></i>
                    </div>
                </div>
                <div class="w-full h-full flex pl-8">
                    <p class="text-sm">
                        ${input_textarea}
                    </p>
                </div>
            `;
            document.querySelector('.Tasks').appendChild(div);
            document.querySelector('.input_task').value = "";
            document.querySelector('textarea').value = "";
            Card_Create.classList.remove('Card-Create-Show');
        }
    } else {
        Card_Create.classList.add('Card-Create-Show');
    }
}
