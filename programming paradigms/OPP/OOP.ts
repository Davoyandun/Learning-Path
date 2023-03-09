/*
Para crear una clase en TypeScript, se utiliza la palabra clave "class",
 seguida del nombre de la clase. Dentro de la clase, 
 se pueden definir propiedades  y métodos. 
*/

class Employee {
  // propiedades
  name: string;
  salary: number;
  age: number;
  // constructor
  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  // metodos
  saludar() {
    console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
  }

  pagarSalario() {
    console.log(
      `${this.name}, se han depositado ${this.salary} en tu cuenta bancaria`
    );
  }
  pagarBono(bono: number) {
    console.log(`Se ha pagado ${this.salary + bono} `);
  }
}

/*
            Creación de una nueva instancia de la clase Employee
*/

let persona1 = new Employee("Juan", 30, 500);
persona1.saludar(); // imprime "Hola, mi nombre es Juan y tengo 30 años."
persona1.pagarSalario(); // imprime "Juan, se ha depositado 500 en tu cuenta"
persona1.pagarBono(200); // imprime "Se ha pagado 700"

/* 
            Herencia
*/

class Admin extends Employee {
  role: string;

  constructor(name: string, age: number, salary: number, role: string) {
    super(name, age, salary); // llama al constructor de la clase padre
    this.role = role;
  }
// aqui aplicamos polimorfirmo ya que estamos sobreescribiendo el metodo saludar
// de la clase padre, para que se adapte a la necesidad de la clase hija
// y asi poder usar el metodo saludar de la clase padre.
// esto se conoce como polimorfismo ya que estamos modificando el metodo sin afectar la clase padre. 
  saludar() {
    console.log(`Hola, mi nombre es ${this.name} y trabajo como ${this.role}`);
  }
}

let Astrid = new Admin("Maria", 20, 1000, "Gerente");
Astrid.saludar(); // método modificado a la necesidad
Astrid.pagarBono(500); // método usado de la clase padre.

/*
            polimorfismo
*/

function saludarTodos(personas: Array<Employee>) {
  personas.forEach((persona) => persona.saludar());
}

let employeeJuan = new Employee("Juan", 30, 700);
let employeeAndres = new Employee("Andres", 25, 750);
let adminMaria = new Admin("Maria", 20, 1000, "SEO");
let personas = [employeeJuan, employeeAndres];
saludarTodos(personas);

/*
Mensaje: comunicación entre objetos.

*/

class Assistant extends Employee {
  ayudar(person: Employee) {
    console.log(`${this.name} ayudara a ${person.age} este momento`);
  }
}
const assistantMari = new Assistant("Mari", 2800, 100);
assistantMari.ayudar(employeeJuan); // "Mari ayudara a Juan este momento"

class Guest {
  saludar = () => {
    const employee = new Employee("juan", 35, 100);
    console.log(` Y vo a ayudar a ${employee.name}`);
  };
}

const guestAdri = new Guest();
guestAdri.saludar();



/*


*/