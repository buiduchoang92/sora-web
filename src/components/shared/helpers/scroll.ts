function scrollTo(x: number, y: number) {
  window.scrollTo({ top: y, left: x, behavior: 'smooth' })
}

export function scrollToTop() {
  scrollTo(0, 0)
}

export function scrollToY(y: number, delay = 0) {
  setTimeout(() => {
    scrollTo(0, y)
  }, delay)
}

function getScrollY(element: HTMLElement) {
  const yOffset = document.querySelector('header')?.clientHeight
  if (yOffset) {
    return element.getBoundingClientRect().top + window.pageYOffset - yOffset
  }
}

export function scrollToElement(element: HTMLElement, delay = 0) {
  setTimeout(() => {
    const y = getScrollY(element)
    if (typeof y == 'number') {
      scrollTo(0, y)
    }
  }, delay)
}
