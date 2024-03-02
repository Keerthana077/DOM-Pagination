
var res1
let url = "./data.json"
async function getUserData(){
    let data = await fetch(url)
    let res = await data.json()
    console.log(res)
    return res
}
res1 = getUserData()

// div container
let container = document.createElement('div')
container.setAttribute('class','container')
document.body.append(container)
// heading
let h1 = document.createElement('h1')
h1.setAttribute('class','text-center text-primary')
h1.classList.add('m-3')
h1.innerHTML="Pagination Using DOM"
container.append(h1) 

//table
let tablediv = document.createElement('div')
tablediv.classList.add('container')
tablediv.classList.add('m-5')

let table = document.createElement('table')
table.classList.add('table')
table.classList.add('mt-5')
table.classList.add('table-striped')
table.classList.add('table-primary')

let thead = document.createElement('thead')

let trwo = document.createElement('tr')
// trwo.classList.add('text-center')

let tr1 = document.createElement('th')
tr1.setAttribute('scope','col')
tr1.innerHTML='id'

let tr2 = document.createElement('th')
tr2.setAttribute('scope','col')
tr2.innerHTML='Name'

let tr3 = document.createElement('th')
tr3.setAttribute('scope','col')
tr3.innerHTML='Email Id'

let tbody  = document.createElement('tbody')
tbody.classList.add('tbd')
tbody.setAttribute('id','ele')


trwo.append(tr1,tr2,tr3)
thead.appendChild(trwo)
table.appendChild(thead)
table.appendChild(tbody)
tablediv.append(table)
container.append(tablediv)

//pagination
// gap-2 d-flex justify-content-center
let pagewrap = document.createElement('div')
pagewrap.classList.add('pageWrapper')
pagewrap.classList.add('mb-3')
pagewrap.classList.add('d-flex')
pagewrap.classList.add('justify-content-center')

let ul = document.createElement('ul')
ul.classList.add('pagination')

let l_prev = document.createElement('li')
l_prev.classList.add('page-item')
l_prev.setAttribute('id','prev')
l_prev.classList.add('disabled')

let a_prev = document.createElement('a')
a_prev.setAttribute('href','#')
a_prev.classList.add('page-link')
a_prev.innerText = "Previous"
l_prev.appendChild(a_prev)

let l_1 = document.createElement('li')
l_1.classList.add('page-item')
l_1.classList.add('pages')
l_1.classList.add('active')

let a_1 = document.createElement('a')
a_1.setAttribute('href','#')
a_1.classList.add('page-link')
a_1.innerText = "1"
l_1.appendChild(a_1)

let l_2 = document.createElement('li')
l_2.classList.add('page-item')
l_2.classList.add('pages')

let a_2 = document.createElement('a')
a_2.setAttribute('href','#')
a_2.classList.add('page-link')
a_2.innerText = "2"
l_2.appendChild(a_2)

let l_3 = document.createElement('li')
l_3.classList.add('page-item')
l_3.classList.add('pages')

let a_3 = document.createElement('a')
a_3.setAttribute('href','#')
a_3.classList.add('page-link')
a_3.innerText = "3"
l_3.appendChild(a_3)

let l_4 = document.createElement('li')
l_4.classList.add('page-item')
l_4.classList.add('pages')

let a_4 = document.createElement('a')
a_4.setAttribute('href','#')
a_4.classList.add('page-link')
a_4.innerText = "4"
l_4.appendChild(a_4)

let l_5 = document.createElement('li')
l_5.classList.add('page-item')
l_5.classList.add('pages')

let a_5 = document.createElement('a')
a_5.setAttribute('href','#')
a_5.classList.add('page-link')
a_5.innerText = "5"
l_5.appendChild(a_5)

let l_6 = document.createElement('li')
l_6.classList.add('page-item')
l_6.classList.add('pages') 

let a_6 = document.createElement('a')
a_6.setAttribute('href','#')
a_6.classList.add('page-link')
a_6.innerText = "6"
l_6.appendChild(a_6)

let l_7 = document.createElement('li')
l_7.classList.add('page-item')
l_7.classList.add('pages') 

let a_7 = document.createElement('a')
a_7.setAttribute('href','#')
a_7.classList.add('page-link')
a_7.innerText = "7"
l_7.appendChild(a_7)

let l_8 = document.createElement('li')
l_8.classList.add('page-item')
l_8.classList.add('pages') 

let a_8 = document.createElement('a')
a_8.setAttribute('href','#')
a_8.classList.add('page-link')
a_8.innerText = "8"
l_8.appendChild(a_8)

let l_9 = document.createElement('li')
l_9.classList.add('page-item')
l_9.classList.add('pages') 

let a_9 = document.createElement('a')
a_9.setAttribute('href','#')
a_9.classList.add('page-link')
a_9.innerText = "9"
l_9.appendChild(a_9)

let l_10 = document.createElement('li')
l_10.classList.add('page-item')
l_10.classList.add('pages') 

let a_10 = document.createElement('a')
a_10.setAttribute('href','#')
a_10.classList.add('page-link')
a_10.innerText = "10"
l_10.appendChild(a_10)

let l_next = document.createElement('li')
l_next.classList.add('page-item')
l_next.setAttribute('id','next')

let a_next = document.createElement('a')
a_next.setAttribute('href','#')
a_next.classList.add('page-link')
a_next.innerText = "Next"
l_next.appendChild(a_next)

ul.append(l_prev,l_1,l_2,l_3,l_4,l_5,l_6,l_7,l_8,l_9,l_10,l_next)
pagewrap.append(ul)
container.append(pagewrap)

// --------------------------------

let pageNo = 1
let ele = document.getElementById('ele')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let pages = document.getElementsByClassName('pages')
console.log(pages)
console.log(next)
for(page of pages){
    page.onclick = function(){
        for(p1 of pages){
            p1.classList.remove('active')
        }
        this.classList.add('active')
        pageNo = +this.innerText
        console.log(pageNo)
        showData()
        if(pageNo ==10)
            next.classList.add('disabled')
        else 
            next.classList.remove('disabled')
        
        if(pageNo ==1)
            prev.classList.add('disabled')
        else
            prev.classList.remove('disabled')
    
        }
}

next.onclick = function(){
    if(pageNo<10){
        pageNo += 1
        console.log(pageNo)
        showData()
        updateActivePage()
        if(pageNo ==10)
            this.classList.add('disabled')
        if(pageNo>1)
            prev.classList.remove('disabled')
    }
}

prev.onclick = function(){
    if(pageNo>1){
        pageNo -=1
        showData()
        updateActivePage()
        if(pageNo ==1)
            this.classList.add('disabled')
        if(pageNo<10)
            next.classList.remove('disabled')

    }
       
}
showData()
function showData(){
    ele.innerText = " "
    let start = (pageNo-1)*10
    console.log(`start - ${start}`)
    let end = start+10
    let row
    res1.then(r =>{
        console.log(r)
        for(let i=start;i<end;i++){
            row = `<td>${r[i].id}</td>
            <td>${r[i].name}</td>
            <td>${r[i].email}</td>`
            let rowdata = document.createElement('tr')
            rowdata.innerHTML=row
            tbody.appendChild(rowdata)
        }
        
    })
    
}

function updateActivePage(){
    for(page of pages){
        if(page.innerText == pageNo){
            page.classList.add('active')
        } else {
            page.classList.remove('active')
        }
    }
}
