let consoleFromStorage = localStorage.getItem("clicked")
let counter = consoleFromStorage ?? 0 ;

export function increase(){
    counter ++
    console.log('INCREASED.', counter)

    localStorage.setItem('clicked', counter);
}