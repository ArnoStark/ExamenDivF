/*Enunciado:
Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Oriente”, “Occidente”, “Secreto”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El promedio por vuelo de vacunas llegadas de Occidente
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%,
 Si se recibieron entre 5 y 10 millones el descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento
 */
function mostrar()
{
	let origen;
	let cantidad;
	let costo;
	let contadorOriente=0;
	let contadorOccidente=0;
	let contadorSecreto=0;
	let acumuladorOriente=0;
	let acumuladorOccidente=0;
	let acumuladorSecreto=0;
	let acumuladorCostoOriente=0;
	let acumuladorCostoOccidente=0;
	let acumuladorCostoSecreto=0;
	let promedioVacunasOccidente;
	let costoTotal;
	let cantidadTotal;
	let descuento;
	let costoConDescuento;

	do
	{
		origen=prompt("Ingrese origen del vuelo").toLowerCase();
		while(origen!="oriente"&&origen!="occidente"&&origen!="secreto")
		{
			origen=prompt("Error, reingrese origen").toLowerCase();
		}

		cantidad=parseInt(prompt("Ingrese cantidad de vacunas recibidas"));
		while(isNaN(cantidad)|| cantidad<500000 || cantidad>2500000)
		{
			cantidad=parseInt(prompt("Error, reingrese la cantidad"));
		}

		costo=parseInt(prompt("Ingrese el costo del vuelo"));
		while(isNaN(costo)|| costo<1000000 || costo>5000000)
		{
			costo=parseInt(prompt("Error, vuelva a ingresar"));
		}

		switch (origen) {
			case "oriente":
				acumuladorOriente=acumuladorOriente+cantidad;
				acumuladorCostoOriente=acumuladorCostoOriente+costo;
				contadorOriente++;
				
				break;
		
			case "occidente":
				acumuladorOccidente=acumuladorOccidente+cantidad;
				acumuladorCostoOccidente=acumuladorCostoOccidente+costo;
				contadorOccidente++;
				break;
			case "secreto":
				acumuladorSecreto=acumuladorSecreto+cantidad;
				acumuladorCostoSecreto=acumuladorCostoSecreto+costo;
				contadorSecreto++;
				break;
		}

	}while(confirm("Desea continuar?"))

	costoTotal=acumuladorCostoSecreto+acumuladorOriente+acumuladorCostoOccidente;
	cantidadTotal=acumuladorSecreto+acumuladorOccidente+acumuladorOriente;
	document.write("El costo total es de: "+costoTotal+"<br>");

	if(cantidadTotal>=10000000)
	{
		descuento=costoTotal*25/100;
		costoConDescuento=costoTotal-descuento;
		document.write("El costo total con descuento es "+costoConDescuento+" con un descuento del 25% equivalente a "+ descuento+"<br>");
	}
	else
	{
		if(cantidadTotal>5000000 || cantidadTotal<10000000)
		{
			descuento=costoTotal*15/100;
			costoConDescuento=costoTotal-descuento;
			document.write("El costo total con descuento es "+costoConDescuento+" con un descuento del 15% equivalente a "+ descuento+"<br>");
		}
		else
		{
			document.write("No tiene ningún descuento"+"<br>");
		}
	}



	if(acumuladorOriente<acumuladorOccidente)
	{
		document.write("El lugar de origen que envió menos vacunas es oriente"+"br>");
	}
	else
	{
		if(acumuladorOccidente<acumuladorSecreto)
		{
			document.write("El lugar de origen que envió menos vacunas es occidente"+"<br>");
		}
		else
		{
			document.write("El lugar de origen que envió menos vacunas es secreto"+"<br>");
		}
	}

	if(contadorOccidente!=0)
	{
		promedioVacunasOccidente=acumuladorOccidente/contadorOccidente;
		document.write("El promedio de vacunas por vuelo desde occidente es: "+ promedioVacunasOccidente+"<br>");
	}
	else
	{
		document.write("No llegaron vacunas desde occidente"+"<br>");
	}
}
