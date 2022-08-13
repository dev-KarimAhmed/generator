
let button = document.body.getElementsByTagName('button')
let note = document.createElement('h4')
note.textContent="Note : To format the text click 'Alt+shift+f' in vs code"
for(i= 1 ; i < 10 ; i++){
 document.write(`<button>${i}</button>`)
}
let hrT =    document.createElement('hr')
document.body.appendChild(hrT)
for (let k = 0; k <= button.length; k++) {
    const el = button[k];
    if(el){
        el.addEventListener('click',function(){
         
            document.getElementById('content').textContent = `
            
            <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="assignment [${this.innerHTML}].css" />
        <title>Assignment[${this.innerHTML}]</title>
    </head>
    <body>
        <script src="assignment [${this.innerHTML}].js"></script>
    </body>
    </html>
            
            `
      
            document.getElementById('html').innerHTML = `assignment [${this.innerHTML}].html`
            document.getElementById('css').innerHTML = `assignment [${this.innerHTML}].css`
            document.getElementById('js').innerHTML = `assignment [${this.innerHTML}].js`
             document.body.appendChild(note)
             
            })
        }
        
    }
