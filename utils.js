module.exports = {
    // Функция возвращающая рандомное ЦЕЛОЧИСЛЕНННОЕ число от min до max
    getRandomIntInterval : (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    // Функция возвращающая рандомное ВЕЩЕСТВЕННОЕ число от min до max
    getRandomFloatInterval : (min, max) => {
        return Math.random() * (max - min) + min;
    },
    createArr : (count) => {
        const arr = []
        for(let i = 0; i < count; i++){
            arr.push(getRng(0, 100))
        }
        return arr
    }
}


