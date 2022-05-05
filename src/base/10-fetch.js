const apiKey = 'uPzvOBlc2WBmiGHpt419ySXA669jrudA';
const uri = 'https://api.giphy.com/v1/gifs/random';
const peticion = fetch(`${uri}?api_key=${apiKey}`);

peticion
.then(resp => resp.json())
.then(({data})=>{
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url
    document.body.append(img);
})