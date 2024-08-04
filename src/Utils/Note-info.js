export function Note_information(event) {
    const Note = event.currentTarget

    const Note_div_1 = Note.querySelector(':first-child');
    const Note_div_2 = Note.querySelector(':last-child');

    Note.style.transition = '0.8s'
    Note.style.gap = '0'
    Note_div_1.style.transition = '0.8s'
    Note_div_2.style.transition = '0.8s'
    
    const Note_heigth = '15vh'
    const size = '50%'
    
    if (Note.style.height === Note_heigth) {
        Note.style.height = '';
        Note_div_1.style.height = '';
        Note_div_2.style.height = '';

        Note.style.gap = ''
    }else{
        Note.style.height = Note_heigth;
        Note_div_1.style.height = size;
        Note_div_2.style.height = size;
    }
}
