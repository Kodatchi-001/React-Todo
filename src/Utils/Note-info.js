export function Note_information(event) {
    const button = event.currentTarget;
    const Note = button.parentNode.parentNode;

    const buttons = document.querySelectorAll('.Note_information'); 

    buttons.forEach(element => {
        element.addEventListener('click', function () {
            const Note_div_1 = Note.querySelector(':first-child');
            const Note_div_2 = Note.querySelector(':last-child');

            Note.style.transition = '0.8s';
            Note.style.gap = '0';
            Note_div_1.style.transition = '0.8s';
            Note_div_2.style.transition = '0.8s';
            
            const Note_height = '12vh';
            const size = '50%';
            
            if (Note.style.height === Note_height) {
                Note.style.height = '';
                Note_div_1.style.height = '';
                Note_div_2.style.height = '';
                Note.style.gap = '';
            } else {
                Note.style.height = Note_height;
                Note_div_1.style.height = size;
                Note_div_2.style.height = size;
            }
        });
    });
}
