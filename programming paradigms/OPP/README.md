# Programación Orientada a Objetos
***
La programación orientada a objetos (OOP, por sus siglas en inglés) es un paradigma de programación que se enfoca en el uso de "objetos", que son instancias de clases, para representar y manipular datos y comportamientos en un programa. 

En TypeScript, se pueden utilizar las características de la OOP para crear clases y objetos con tipos de datos específicos, y utilizar herencia y polimorfismo para construir programas más organizados y escalables.

### contructor

El constructor es un método especial que se ejecuta automáticamente cuando se crea una nueva instancia de la clase.

## Herencia
La herencia es una característica importante de la OOP, que permite crear una clase a partir de otra existente, y heredar sus propiedades y métodos.
En TypeScript, se utiliza la palabra clave "extends" para indicar que una clase es hija de otra.

## Polimorfismo

Otra característica importante de la OOP es el polimorfismo, que permite tratar a objetos de diferentes clases como si fueran de la misma clase base. En TypeScript, se pueden utilizar tipos genéricos para crear funciones y variables que acepten objetos de cualquier clase que extienda o implemente una determinada clase o interface. 

* revisar concetos y ejemplos endiferentes clases 

## Niveles de accesso

Los modificadores de acceso son palabras clave utilizadas en la programación orientada a objetos para controlar el nivel de acceso que se tiene a las propiedades y métodos de una clase. Los modificadores de acceso más comunes son:

* "public": Las propiedades y métodos marcados como "public" pueden ser accedidos desde cualquier parte del programa, tanto desde dentro como desde fuera de la clase. Esto es el nivel de acceso predeterminado si no se especifica ningún modificador.

* "private": Las propiedades y métodos marcados como "private" solo pueden ser accedidos desde dentro de la clase en la que fueron declarados. No pueden ser accedidos desde fuera de la clase, ni desde clases hijas.

* "protected": Las propiedades y métodos marcados como "protected" solo pueden ser accedidos desde dentro de la clase en la que fueron declarados y desde clases hijas. No pueden ser accedidos desde fuera de la clase o desde clases que no son hijas.

* "readonly": Las propiedades marcadas como "readonly" solo pueden ser leídas, no pueden ser modificadas una vez que han sido asignadas.

La utilización de los modificadores de acceso ayuda a proteger la integridad de los datos y comportamientos de una clase, ya que se asegura que solo las partes del programa autorizadas pueden acceder a ellos. También ayuda a mejorar la legibilidad y la mantenibilidad del código, al permitir identificar fácilmente qué partes de una clase son públicas y cuáles son privadas.
## Principios básicos de la programación orientada a objetos (POO)
La programación orientada a objetos (POO) es un paradigma de programación que se enfoca en el uso de objetos para representar y manipular datos y comportamientos en un programa. Los principios básicos de la POO son:

* Abstracción: Permite representar la realidad de manera simplificada y resaltar los aspectos relevantes para el problema que se está resolviendo.

* Encapsulamiento: Consiste en ocultar la complejidad interna de los objetos y proporcionar una interfaz pública para interactuar con ellos.

* Herencia: Permite crear nuevas clases a partir de clases existentes, reutilizando su comportamiento y propiedades.

* Polimorfismo: Permite tratar a objetos de diferentes clases de manera similar, utilizando una interfaz común.

* Clase: Es un modelo o plantilla para crear objetos con características y comportamientos similares.

* Objeto: Es una instancia de una clase, con valores específicos para sus propiedades y comportamientos.

* Mensaje: Es la forma de comunicación entre objetos, mediante la ejecución de métodos o la acceso a propiedades.

