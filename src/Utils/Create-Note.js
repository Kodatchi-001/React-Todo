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
        if (input.trim() == '' || !selectElement.querySelector('i') || input_textarea.trim() == '') {
            alert('Create your Task');
            Card_Create.classList.remove('Card-Create-Show');
        } else {
        const div = document.createElement('div');
        div.className = "w-full h-[7vh] pl-3 pr-2 py-2 flex items-center flex-wrap rounded-lg gap-5 overflow-hidden cursor-pointer bg-white";
        div.innerHTML =
            `
                    <div class="w-full h-full flex items-center gap-3">
                        <div class='w-[20%] h-full flex items-center gap-2'>
                            <div class="p-2 rounded-md border cursor-pointer border-gray-400"></div>
                            <h1 class="text-lg">${input}</h1>
                            <i class="${selectIcon} text-lg mr-0"></i>
                        </div>
                        <div class='w-[60%] h-full Note_information'></div>
                       <div class="w-[20%] h-full flex justify-end z-10">
                            <div class="w-[15%] h-full ml-auto overflow-hidden rounded-md Action bg-gray-200 z-20">
                                <i class='bx bxs-edit-alt text-2xl text-green-500'></i>
                                <i class='bx bx-x text-3xl text-red-500'></i>
                                <i class='bx bx-dots-vertical text-2xl cursor-pointer Button-Action'></i>
                            </div>
                       </div>
                    </div>
                    <div class="w-full h-full flex pl-8"><p class="text-md">${input_textarea}</p></div>
                `;

        document.querySelector('.Tasks').appendChild(div);
        document.querySelector('.input_task').value = "";
        document.querySelector('textarea').value = "";

        //Funtion Show information Note
        const information = div.querySelector('.Note_information');
        information.addEventListener('click', e => Note_information(e));

        //Funtion Show Buttons Note
        const Button_Action = div.querySelector('.Button-Action');
        const Action = div.querySelector('.Action');
        Button_Action.addEventListener('click', () => Action.classList.toggle('Action-show'))

        //Funtion Suprimme Task
        const Suprimmer = div.querySelector('.text-red-500');
        Suprimmer.addEventListener('click', () => div.remove())

        // Function Modify Task
        const Modifier = div.querySelector('.text-green-500');
        Modifier.addEventListener('click', () => {
            document.querySelector('.input_task').value = div.querySelector('h1').textContent;
            document.querySelector('textarea').value = div.querySelector('p').textContent;
            document.querySelector('.Button-name').textContent = 'Modifier';
            Card_Create.classList.add('Card-Create-Show');

            document.querySelector('.Create-Note').removeEventListener('click', Create_Note);
            document.querySelector('.Create-Note').addEventListener('click', Update);

            function Update() {
                // Update the existing card with new information
                div.querySelector('h1').textContent = document.querySelector('.input_task').value;
                div.querySelector('p').textContent = document.querySelector('textarea').value;

                // Reset button to original state
                document.querySelector('.Button-name').textContent = 'Create new task';

                document.querySelector('.Create-Note').removeEventListener('click',Update);

                Card_Create.classList.remove('Card-Create-Show');
                document.querySelector('.input_task').value = "";
                document.querySelector('textarea').value = "";

            }
        });

        Card_Create.classList.remove('Card-Create-Show');
        }
    } else {
        Card_Create.classList.add('Card-Create-Show');
    }
}
