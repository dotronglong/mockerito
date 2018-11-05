exports = module.exports = {
    arguments: function () {
        let args = {}
        process.argv.forEach((val, index) => {
            if (index < 2) return false
            const pattern = new RegExp('--(\\w+)=(.*)', 'g')
            const found = pattern.exec(val)
            if (found !== null) {
                args[found[1]] = found[2]
            }
        })
        return args
    }
};