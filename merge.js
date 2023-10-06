const pdfmerger = require('pdf-merger-js')
let merger = new pdfmerger()


const mergePDFs = async (p1, p2) => {
    await merger.add(p1)
    await merger.add(p2)
    let d = new Date().getTime()
    await merger.save(`public/merged${d}.pdf`)
    return d
}
module.exports = { mergePDFs }