const searchParams = new URLSearchParams(window.location.search);
const credits = searchParams.get('credits');

document.getElementById('totalCredit').innerHTML = credits;