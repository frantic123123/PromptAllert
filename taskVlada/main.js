function enterDate() {
    let birnDate = prompt('Your year of birth?');
    if (birnDate === null) {
        return alert("it's a pity that you did not want to enter your age");
    }
    if (!(+birnDate[0] >= 0) || birnDate === '') {
        alert('please enter a number');
        return enterDate();
    }
    alert(`Your age in this year is ${2023 - birnDate}`)
}
enterDate();

function enterCity() {
    let cityLive = prompt('Where do you live?');
    if (cityLive === null) {
        return alert("it's a pity that you did not want to enter your city");
    }
    if (cityLive === '') {
        alert('please enter city');
        return enterCity();
    }

    const youLiveInCapital = 'You live in the capital of'
    switch (cityLive.toLocaleLowerCase()) {
        case 'kyiv':
            alert(`${youLiveInCapital} Ukraine`);
            break
        case 'london':
            alert(`${youLiveInCapital} Great Britain`);
            break
        case 'washington':
            alert(`${youLiveInCapital} USA`);
            break
        default:
            alert(`You live in ${cityLive}`);
    }
}
enterCity()

function enterFavoriteSport() {
    let favoriteSport = prompt('What is your favorite sport?');
    if (favoriteSport === null) {
        return alert("it's a pity that you did not want to enter your favorite sport");
    }
    if (favoriteSport === '') {
        alert('please enter your favorite sport');
        return enterFavoriteSport();
    }

    const coolMessage = 'Cool, do you want to be like';
    switch (favoriteSport.toLocaleLowerCase()) {
        case 'football':
            alert(`${coolMessage} Messi?)`);
            break
        case 'basketball':
            alert(`${coolMessage} Jordan?)`);
            break
        case 'chess':
            alert(`${coolMessage} Kasparov?)`);
            break
        default:
            alert('I hope you get great results!!!')
    }
}
const sport = enterFavoriteSport();


