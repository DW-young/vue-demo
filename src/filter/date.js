export default function (timer) {
    var date = new Date(timer);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
};