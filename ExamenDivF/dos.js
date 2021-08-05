/*Enunciado:
El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa menos encontrada
d- Edad del menor argentino contagiado
e- Cantidad de personas extranjeras contagiadas con la delta
 */
function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let contadorDelta=0;
    let contadorAlfa=0;
    let contadorBeta=0;
    let contadorPositivos=0;
    let contadorNegativos=0;
    let totalPositivosYNegativos;
    let porcentajePositivos;
    let porcentajeNegativos;
    let flagEdadMenorArgentinoContagiado=true;
    let edadMenorArgentinoContagiado;
    let contadorExtranjerosConDelta=0;


    for(let i=0;i<8;i++)
    {
        nacionalidad=prompt("Ingrese nacionalidad").toLowerCase();
        while(nacionalidad!="argentina"&&nacionalidad!="extranjero")
        {
            nacionalidad=prompt("Error, por favor ingrese nuevamente");
        }

        resultado=prompt("Ingrese resultado del hisopado").toLowerCase();
        while(resultado!="postivo"&&resultado!="negativo")
        {
            resultado=prompt("Error, intente nuevamente").toLowerCase();
        }

        edad=parseInt(prompt("Por favor ingrese edad"));
        while(isNaN(edad)|| edad<18 || edad >65)
        {
            edad=parseInt(prompt("Error, ingrese nuevamente"));
        } 

        cepa=prompt("Ingrese la cepa en caso de ser positivo o ninguna en caso de ser negativo: delta, alfa, beta, ninguna").toLowerCase();
        while(cepa!="delta"&&cepa!="alfa"&&cepa!="beta"&&cepa!="ninguna")
        {
            cepa=prompt("Error, vuelva a inentarlo").toLowerCase();
        }

        switch (cepa) {
            case "delta":
                contadorDelta++;
                if(nacionalidad=="extranjero")
                {
                    contadorExtranjerosConDelta++;
                }
                break;
        
            case "alfa":
                contadorAlfa++;
                break;
            case "beta":
                contadorBeta++;
                break;
        }

        if(resultado=="postivo")
        {
            contadorPositivos++;
        }
        else
        {
            contadorNegativos++;
        }

        if(flagEdadMenorArgentinoContagiado==true && nacionalidad=="argentina"&&resultado=="postivo")
        {
            edadMenorArgentinoContagiado=edad;
            flagEdadMenorArgentinoContagiado=false;
        }
        else if (edad<edadMenorArgentinoContagiado && nacionalidad=="argentina" && resultado=="postivo")
        {
            edadMenorArgentinoContagiado=edad;
        }


    }

    if(contadorPositivos!=0)
    {
        totalPositivosYNegativos=contadorPositivos+contadorNegativos;
        porcentajePositivos=contadorPositivos/totalPositivosYNegativos*100;
        porcentajeNegativos=contadorNegativos/totalPositivosYNegativos*100;
        document.write("Porcentaje de pasajeros con resultado posisitvo es: " + porcentajePositivos +" %. Porcentaje de negativos es  "+ porcentajeNegativos+"<br>");
    }
    else
    {
        document.write("El 100% de los pasajeros son negativos"+"<br>");
    }

    if(contadorDelta<contadorAlfa)
    {
        document.write("La variante menos encontrada es la delta");

    }
    else
    {
        if(contadorAlfa<contadorBeta)
        {
            document.write("La variante menos encontrada es la alfa"+"<br>");
        }
        else
        {
            document.write("La variante menos encontrada es la beta"+"<br>");
            
        }
    }

    if(flagEdadMenorArgentinoContagiado==false)
    {
        document.write("La edad del pasajero más joven argentino con resultado positivo es "+ edadMenorArgentinoContagiado+"<br>");
    }
    else
    {
        document.write("No se registran argentinos jovenes positivos"+"<br>");
    }

    if(contadorExtranjerosConDelta!=0)
    {
        document.write("La cantidad de extranjeros contagiados con la variante delta es "+ contadorExtranjerosConDelta+"<br>");
    }
}
