
var data = ''
fetch("http://www.filltext.com/?rows=5&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
.then((response)=>response.json())
.then((d)=>{data = d;
    for (let i = 0; i < data.length; i++) {
                // console.log(data[i].id);
                // console.log("Here");
                let c = document.createElement('tr')
                c.className = 'data-row'
                c.innerHTML = `
                <td class="column1">${data[i].id}</td>
                <td class="column2">${data[i].firstName}</td>
                <td class="column3">${data[i].lastName}</td>
                <td class="column4">${data[i].email}</td>
                <td class="column5">${data[i].phone}</td>
                `
                tab.append(c)
            }
            for (let i = 0; i < x.length; i++) {
                x[i].addEventListener('click',()=>{
                    // console.log("clicked");
                    if (curact==-1){
                        x[i].classList.add('active')
                        curact=i;
                        let da = document.createElement('div')
                        da.id = 'info-content'
                        da.innerHTML=`<div><b>User selected:</b>${data[i].firstName} ${data[i].lastName}</div>
                        <div>
                            <b>Description: </b>
                            <textarea cols="50" rows="5" readonly>
                            ${data[i].description}
                            </textarea>
                        </div>
                        <div><b>Address:</b> ${data[i].address.streetAddress}</div>
                        <div><b>City:</b> ${data[i].address.city}</div>
                        <div><b>State:</b> ${data[i].address.state}</div>
                        <div><b>Zip:</b> ${data[i].address.zip}</div>`
                        infotab.appendChild(da)
                    }
                    else{
                        x[curact].classList.remove('active')
                        curact=-1
                        document.getElementById("info-content").remove();
                    }
                })

            }

        })

var tab = document.getElementById('maintable')

var infotab = document.getElementById("info-wrapper")



var x = document.getElementsByClassName("data-row")
var curact = -1



// var se = document.getElementById('search-box')
// se.addEventListener('onchange',(e)=>{
//     console.log(e);
// })

const searchFunc = () =>{
    // console.log("here")
    let filter = document.getElementById("search-box").value.toUpperCase()
    let list = document.getElementsByClassName('data-row')
    for (let i = 0; i < data.length; i++) {
        let tn = (data[i].firstName+" " + data[i].lastName).toUpperCase()
        if(tn.includes(filter)){
            // console.log(data[i].firstName)
            list[i].style.display=""
        }
        else{
            // console.log(data[i].firstName)
            list[i].style.display="none"
        }
    }
}