
export function setIsElementActive(element, isActive) {
    if (isActive) {
        element.classList.remove('d-none');
    }
    else {
        element.classList.add('d-none');
    }
}