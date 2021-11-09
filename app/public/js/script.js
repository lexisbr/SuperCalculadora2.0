const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

const input1 = document.querySelector('#input-1');
const input2 = document.querySelector('#input-2');

const result = document.querySelector('#result');
//const listadoHistorial = document.querySelector('#historico');
const historial = [];
const api = `http://localhost:8080/api/operation`;

async function sendSum(e){
    const value1 = input1.value;
    const value2 = input2.value;
    if(value1 && value2){
        
        try {
            const data = {op1: value1, op2:value2 }; 
            const res = await fetch(`${api}/suma`, {method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json'}  });
            const val = await res.json();
            console.log(val);
            historial.push(`${value1} + ${value2} = ${val.resultado}`);
            document.getElementById("result").innerHTML = `<h1>Resultado: ${val.resultado}</h1>`;
            document.getElementById("results").innerHTML = ``;
            for(i = 0; i<historial.length;i++){
                document.getElementById("results").innerHTML += `<h1>${historial[i]}<br></h1>`;
                console.log(historial[i]);
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}
async function sendSubstraction(e){
    const value1 = input1.value;
    const value2 = input2.value;
    if(value1 && value2){
        
        try {
            const data = {op1: value1, op2:value2 }; 
            const res = await fetch(`${api}/resta`, {method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json'}  });
            const val = await res.json();
            console.log(val);
            historial.push(`${value1} - ${value2} = ${val.resultado}`);
            document.getElementById("result").innerHTML = `<h1>Resultado: ${val.resultado}</h1>`;
            document.getElementById("results").innerHTML = ``;
            for(i = 0; i<historial.length;i++){
                document.getElementById("results").innerHTML += `<h1>${historial[i]}<br></h1>`;
                console.log(historial[i]);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
async function sendMultiplication(e){
    const value1 = input1.value;
    const value2 = input2.value;
    if(value1 && value2){
        
        try {
            const data = {op1: value1, op2:value2 }; 
            const res = await fetch(`${api}/multiplicacion`, {method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json'}  });
            const val = await res.json();
            console.log(val);
            historial.push(`${value1} * ${value2} = ${val.resultado}`);
            document.getElementById("result").innerHTML = `<h1>Resultado: ${val.resultado}</h1>`;
            document.getElementById("results").innerHTML = ``;
            for(i = 0; i<historial.length;i++){
                document.getElementById("results").innerHTML += `<h1>${historial[i]}<br></h1>`;
                console.log(historial[i]);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
async function sendDivision(e){
    const value1 = input1.value;
    const value2 = input2.value;
    if(value1 && value2){
        
        try {
            const data = {op1: value1, op2:value2 }; 
            const res = await fetch(`${api}/division`, {method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json'}  });
            const val = await res.json();
            console.log(val);
            historial.push(`${value1} / ${value2} = ${val.resultado}`);
            document.getElementById("result").innerHTML = `<h1>Resultado: ${val.resultado}</h1>`;
            document.getElementById("results").innerHTML = ``;
            for(i = 0; i<historial.length;i++){
                document.getElementById("results").innerHTML += `<h1>${historial[i]}<br></h1>`;
                console.log(historial[i]);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
plusButton.addEventListener('click',sendSum);
minusButton.addEventListener('click',sendSubstraction);
multiplyButton.addEventListener('click',sendMultiplication);
divideButton.addEventListener('click',sendDivision);