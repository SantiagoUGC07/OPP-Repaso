class Animalito
{
    constructor(nombre, edad, especie, revisado)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.enfermo = false;
        this.revisado = revisado;
    }
    saludar()
    {
        return console.log(`Hola mi nombre es: ${this.nombre} `);
    }
}

class Veterinario
{
    constructor()
    {
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }
    agregarPaciente(paciente)
    {
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        let mensaje = (`paciente agregado <br>`);
        return document.write(mensaje);
    }
    modificarPacientesRevisados()
    {
        this.pacientesRevisados++;
    }
    revisarPaciente(paciente)
    {
        if(paciente.revisado === false)
        {
            paciente.revisado = true;
            this.modificarPacientesRevisados();
            //this.pacientesRevisados++;
            document.write(`El paciente ha sido revisado:
            `);
        }
        else{
            document.write("Este paciente ya fue revisado");
        }
    }
    mostrarLista()
    {
        for(let i = 0; i< this.listaPacientes.length; i++)
        {
            document.write(" " + this.listaPacientes[i].nombre);
        }
        document.write(`<br> cantidad de pacientes : ${this.cantidadPacientes} <br> pacientes revisados: ${this.pacientesRevisados}<br>`)
    }
}
//se crea el objeto de veterinario
const VeterinariaPanchito = new Veterinario();

//se crean los objetos de animalito
const Animalito1 = new Animalito("Manchas", 5, "Perro", false);
console.log(Animalito1);
const Animalito2 = new Animalito("Galleta", 2, "Gato", true);
console.log(Animalito1);
console.log(Animalito2);

//se agrega el objeto animalito 1 a la veterinaria panchito
VeterinariaPanchito.agregarPaciente(Animalito1);
VeterinariaPanchito.agregarPaciente(Animalito2);

console.log(VeterinariaPanchito.listaPacientes);

VeterinariaPanchito.mostrarLista();
VeterinariaPanchito.revisarPaciente(Animalito1);
VeterinariaPanchito.mostrarLista();

//Operador de revisado
VeterinariaPanchito.revisarPaciente(Animalito1);


