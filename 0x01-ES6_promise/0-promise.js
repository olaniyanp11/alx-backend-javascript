export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        resolve(() => {
            console.log('true');
        })
    })
}
