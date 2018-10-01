function resistencia(p1,p2){
    num=p1*p2;
    deno=p1+p2;
    console.log(num/deno);
}

function resistencia1(p1,p2){
    return ((p1*p2)/(p1+p2));
}

function factura (uni){
    if(uni>0 && uni<50){
        return uni*0.5*1.2;
    }
    if(uni>50 && uni<100){
        return uni*0.75*1.20;
    }
    if(uni>100 && uni<150){
        return uni*1.25*1.20;
    }
    else{
        return uni*1.50*1.20;
    }
}

function separando(num){
    a=Math.trunc(num);
    b=(num%10);
    console.log(Math.trunc(num/10) + " " + b);
}

function collatz (num){
    console.log(num);
    while(num!=1){
        if(num%2==0){
            num = num/2;
            console.log(num);
        }
        else{
            num = (num*3)+1;
            console.log(num);
        }
    }
    
}

function interes(s,n,inte){
    for(let i=1; i<=n;i++){
        console.log(s*((1+(inte/100))**i));
    }
}

function ecuacioncuadratica(a,b,c){
    d=((b**2)-4*a*c);
    if(d==0){
        console.log("Tiene dos iguales");
    }
    if(d>0){
        console.log("tiene dos sol dif");
    }
    else{
        console.log("no hay solucion real");
    }
}