
/*
Enunciado:
Se necesita llevar el registro de un vacunatorio.
 Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la china
b- Nombre y vacuna del hombre con más joven
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna mas inoculada
 */
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let contadorVacunaRusa=0;
	let contadorVacunaChina=0;
	let contadorVacunaAmericana=0;
	let acumuladorEdadVacunaChina=0;
	let promedioVacunadosConLaChina;
	let falgVacunadoMasJoven=true;
	let nombreVacunadoMasJoven;
	let edadVacunadoMasJoven;
	let vacunaDelMasJoven;
	let contadorMenoresDeEdadDosisAmericana;
	let porcentajeMenoresDeEdadDosisAmericana;
	let contadorPrimeraDosis=0;
	let contadorSegundaDosis=0;
	let totalPrimeraYSegundaDosis;
	let porcentajePrimeraDosis;


	do
	{
		nombre=prompt("Ingrese Nombre").toLowerCase();
		while (!(nombre.length >= 3 && nombre.length <= 10))
		{
			nombre=prompt("Error, vuelva a intentarlo");
		}

		edad=parseInt(prompt("Ingrese edad"));
		while(isNaN(edad) || edad<12 )
		{
			edad=parseInt(prompt("Error, ingrese una edad válida"));
		}

		vacuna=prompt("Ingrese la procedencia de la vacuna. Advertencia: si el paciente tiene entre 12 y 17 años, sólo puede recibir la vacuna de procedencia americana.").toLowerCase();
		while(vacuna!="rusa" && vacuna!="china"&& vacuna!="americana")
		{
			vacuna=prompt("Error, por favor vuelva a intentarlo").toLowerCase();
		}

		dosis=prompt("Ingrese p para primera dosis o s para sengunda").toLowerCase();
		while(dosis!="p" && dosis!="s")
		{
			dosis=prompt("Error, por favor ingrese un valor permitido").toLowerCase();
		}

		sexo=prompt("Ingrese sexo del paciente: f o m").toLowerCase();
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Error, por favor vuelva a intentarlo").toLowerCase();
		}

		switch (vacuna) {
			case "rusa":
				contadorVacunaRusa++;
				break;
		
			case "china":
				acumuladorEdadVacunaChina=acumuladorEdadVacunaChina+edad;
				contadorVacunaChina++;
				break;
			case "americana":
				contadorVacunaAmericana++;
				if(edad<=17)
				{
					contadorMenoresDeEdadDosisAmericana++;
				}
				break;
		}

		if(falgVacunadoMasJoven=true && sexo=="m")
		{
			nombreVacunadoMasJoven=nombre;
			edadVacunadoMasJoven=edad;
			vacunaDelMasJoven=vacuna;
			falgVacunadoMasJoven=false;

		}
		else if(edad<edadVacunadoMasJoven && sexo=="m")
		{
			nombreVacunadoMasJoven=nombre;
			edadVacunadoMasJoven=edad;
			vacunaDelMasJoven=vacuna;
		}

		if(dosis=="p")
		{
			contadorPrimeraDosis++;
		}
		else
		{
			contadorSegundaDosis++;
		}

	}while(confirm("Desea continuar?"));

	if(falgVacunadoMasJoven==false)
	{
		document.write("El nombre del vacunado más joven es "+nombreVacunadoMasJoven+ "con la dosis "+vacunaDelMasJoven+"<br>");
	}

	if(contadorVacunaChina!=0)
	{
		promedioVacunadosConLaChina=acumuladorEdadVacunaChina/contadorVacunaChina;
		document.write("El promedio de edad de los vacunados con la vacuna china es: "+promedioVacunadosConLaChina+"<br>");
	}
	else
	{
		document.write("No hubo vacunados con la dosis china"+"<br>");
	}

	document.write("El nombre del vacunado más joven es "+ nombreVacunadoMasJoven + " y la dosis aplicada es de procedencia "+vacunaDelMasJoven+"<br>");

	if(contadorMenoresDeEdadDosisAmericana!=0)
	{
		porcentajeMenoresDeEdadDosisAmericana=(contadorMenoresDeEdadDosisAmericana/contadorVacunaAmericana)*100;
		document.write("El porcentaje de menores de edad con la dosis americana es: "+porcentajeMenoresDeEdadDosisAmericana+" %"+"<br>");
	}
	else
	{
		document.write("No hay menores de edad que hayan sido inoculados con la dosis americana"+"<br>");
	}

	if(contadorPrimeraDosis!=0)
	{
		totalPrimeraYSegundaDosis=contadorPrimeraDosis+contadorSegundaDosis;
		porcentajePrimeraDosis=contadorPrimeraDosis/totalPrimeraYSegundaDosis*100;
		document.write("El porcentaje de gente inoculada con la primera dosis es: " + porcentajePrimeraDosis + " %"+"<br>");
	}
	else
	{
		document.write("No se inocularon pacientes con la primer dosis"+"<br>");
	}

	if(contadorVacunaRusa>contadorVacunaChina)
	{
		document.write("La vacuna más aplicada es la de origen ruso"+"<br>");
	}
	else
	{
		if(contadorVacunaChina>contadorVacunaAmericana)
		{
			document.write("La vacuna más aplicada es de origen chino"+"<br>");
		}
		else
		{
			document.write("La vacuna mas aplicada es la de origen americano"+"<br>");
		}
	}
}
