// Patrón de diseño: Factory Method

abstract class Animal {
    protected name: string;
    protected sound: string;
  
    constructor(name: string, sound: string) {
      this.name = name;
      this.sound = sound;
    }
  
    public abstract makeSound(): void; 
  }

  /*
Una interfaz solo puede definir la forma (forma o estructura) de un objeto, 
mientras que una clase abstracta puede definir tanto la forma como el comportamiento (métodos) del objeto.

Las interfaces no pueden contener implementaciones de métodos o propiedades, 
solo pueden declarar su existencia y tipo, mientras que las clases abstractas pueden 
contener métodos con implementaciones parciales y propiedades con valores predeterminados.

Las clases abstractas pueden ser heredadas por otras clases, 
mientras que las interfaces solo pueden ser implementadas por las clases.

  */

  
  class Dog extends Animal {
    constructor(name: string) {
      super(name, 'bark');
    }
  
    public makeSound(): void {
      console.log(`${this.name} says ${this.sound}!`);
    }
  }
  
  class Cat extends Animal {
    constructor(name: string) {
      super(name, 'leia');
    }
  
    public makeSound(): void {
      console.log(`${this.name} says ${this.sound}!`);
    }
  }
  
  class AnimalFactory {
    public static createAnimal(type: string, name: string): Animal {
      switch (type) {
        case 'dog':
          return new Dog(name);
        case 'cat':
          return new Cat(name);
        default:
          throw new Error('Animal type not recognized.');
      }
    }
    public type = 'animal';
  }

  const dog =  AnimalFactory.createAnimal('dog', 'Fido');
  const cat = AnimalFactory.createAnimal('cat', 'Whiskers');
  
  dog.makeSound();
  cat.makeSound();
  