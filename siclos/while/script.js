let variables ={v2: 0, intento: 1}

while (variables.intento<4){
    variables.v2=variables.v2+1
    document.write(variables.v2+'<br>')
    if (variables.v2==50){
            variables.v2=0
            document.write('<br>')
            variables.intento=variables.intento+1
    }
}