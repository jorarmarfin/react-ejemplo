const getImagen = async ()=>{
    const apiKey = 'uPzvOBlc2WBmiGHpt419ySXA669jrudA';
    const uri = 'https://api.giphy.com/v1/gifs/random';
    const peticion = await fetch(`${uri}?api_key=${apiKey}`);
    const data = await peticion.json();
    return data.data;
}

getImagen().then((resp)=>{
    const {url} = resp.images.original;
    const img = document.createElement('img');
    img.src = url
    document.body.append(img);

});