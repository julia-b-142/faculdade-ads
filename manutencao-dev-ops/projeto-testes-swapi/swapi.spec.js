it ('1+1 deve ser igual a 2', ()=>{
    const resultadoEsperado = 2;
    expect(1+1).toBe(resultadoEsperado);
})


const request = require('supertest')

test ('', async ()=>{
    const resposta = await request('https://swapi.dev/api').get('/people/1');
    console.log(`Status: ${resposta.status}`)
    console.log(resposta.body)
});

