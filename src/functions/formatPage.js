function formatPage(page) {
    const summary = []
    page.summary.forEach((e, i) => {
        summary.push(`-\n`
            + `*Step ${i + 1}.*\n`
            + `${e}\n`)
    });
    return `*${page.title}*\n`
        + summary.join('')
}

module.exports = formatPage
