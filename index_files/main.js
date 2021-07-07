
if (window.location.href.indexOf('mobile') !== -1) {
  if (window.innerWidth > 750) {
    window.location.href="./index.html"
  }
} else {
  if (window.innerWidth < 750) {
    window.location.href="./mobile.html"
  }
}