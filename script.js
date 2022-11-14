

const zeroFill = n => {
    return ('0' + n).slice(-2)
}

setInterval(() => {
    let now = new Date()
    let hours = zeroFill(now.getHours())
    let minutes = zeroFill(now.getMinutes())
    let secs = zeroFill(now.getSeconds())
    let wk = now.getDay()
    let wd = undefined
    let mon = parseInt(now.getUTCMonth()) + 1
    let month = zeroFill(mon)
    
    let dat = month + "/" + zeroFill(now.getDate()) + "/" + "20" + zeroFill(now.getFullYear())

    let ampm = hours < 12 ? 'am' : 'pm'

    switch (wk) {
        case 0:
            wd = 'sun'
            break;
        case 1:
            wd = 'mon'
            break;
        case 2:
            wd = 'tue'
            break;
        case 3:
            wd = 'wed'
            break;
        case 4:
            wd = 'thu'
            break;
        case 5:
            wd = 'fri'
            break;
        case 6:
            wd = 'sat'
            break;
        default:
            alert("WEEKDAY ERROR!")
    }


    document.getElementById('hour').innerText = `${hours}:${minutes}`

    document.getElementById('seconds').innerText = secs

    document.getElementById('week-day').innerText = wd

    document.getElementById('am-pm').innerText = ampm

    document.getElementById('date').innerText = dat

}, 500)

