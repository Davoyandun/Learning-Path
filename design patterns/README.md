# Patrones de Diseño

Los patrones de diseño son soluciones probadas y documentadas para problemas comunes que se presentan en el diseño de software. Estas soluciones están diseñadas para mejorar la calidad del software, aumentar la eficiencia y reducir el tiempo y los costos de desarrollo.

Los patrones de diseño se clasifican en tres categorías principales: patrones de creación, patrones de estructuración y patrones de comportamiento.

## Patrones de Creación
Los patrones de creación se utilizan para crear objetos y clases en el software. Estos patrones permiten la creación de objetos en una forma estructurada y controlada. Los patrones de creación incluyen:

#### 1. Singleton
El patrón Singleton asegura que una clase solo tenga una instancia y proporciona un punto de acceso global a esa instancia.

#### 2. Factory Method
El patrón Factory Method se utiliza para crear objetos sin especificar la clase concreta de objeto que se creará. En su lugar, se utiliza una clase abstracta o una interfaz que define el método de creación.

#### 3. Abstract Factory
El patrón Abstract Factory proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar su clase concreta.

#### 4. Builder
El patrón Builder se utiliza para crear objetos complejos paso a paso. Permite la creación de diferentes representaciones del mismo objeto.

#### 5. Prototype
El patrón Prototype se utiliza para crear nuevos objetos duplicándolos a partir de un objeto existente. Este patrón se utiliza para evitar la creación repetitiva de objetos que tienen una estructura similar.

## Patrones de Estructuración
Los patrones de estructuración se utilizan para organizar las clases y objetos en el software. Estos patrones ayudan a garantizar que las clases y objetos estén organizados de manera coherente. Los patrones de estructuración incluyen:

#### 1. Adapter
El patrón Adapter se utiliza para convertir la interfaz de una clase en otra interfaz que el cliente espera. Este patrón se utiliza para hacer que clases incompatibles trabajen juntas.

#### 2. Bridge
El patrón Bridge se utiliza para separar la abstracción de su implementación, permitiendo que ambas evolucionen de manera independiente.

#### 3. Composite
El patrón Composite se utiliza para crear objetos complejos a partir de objetos más simples, utilizando una estructura de árbol.

#### 4. Decorator
El patrón Decorator se utiliza para agregar nuevas funcionalidades a una clase existente sin cambiar su estructura.

#### 5. Facade
El patrón Facade se utiliza para proporcionar una interfaz unificada a un conjunto de interfaces en un subsistema. Se utiliza para simplificar la interfaz de un conjunto de clases.

#### 6. Flyweight
El patrón Flyweight se utiliza para minimizar la cantidad de objetos creados en el sistema, reduciendo así el uso de memoria y mejorando el rendimiento.

#### 7. Proxy
El patrón Proxy se utiliza para proporcionar una representación o sustitución de un objeto complejo.

## Patrones de Comportamiento
Los patrones de comportamiento se utilizan para controlar el comportamiento entre objetos y clases en el software. Estos patrones definen las formas en que los objetos interactúan y cómo responden a las solicitudes. Los patrones de comportamiento incluyen:
#### 1. Chain of Responsibility
El patrón Chain of Responsibility se utiliza para crear una cadena de objetos que manejan solicitudes consecutivamente. El objeto que recibe la solicitud decide si la maneja o la pasa al siguiente objeto en la cadena.

#### 2. Command
El patrón Command se utiliza para encapsular una solicitud como un objeto, lo que permite la parametrización y la ejecución de solicitudes sin conocer los detalles de la solicitud o del receptor.

#### 3. Interpreter
El patrón Interpreter se utiliza para definir una gramática para un lenguaje y para proporcionar un intérprete que interpreta el lenguaje.

#### 4. Iterator
El patrón Iterator se utiliza para proporcionar una forma de acceder a los elementos de un objeto de colección de manera secuencial sin exponer su estructura interna.

#### 5. Mediator
El patrón Mediator se utiliza para definir un objeto que encapsula cómo un conjunto de objetos interactúan. Esto reduce la cantidad de acoplamiento directo entre los objetos y permite que los objetos trabajen juntos de manera más flexible.

#### 6. Memento
El patrón Memento se utiliza para capturar y almacenar el estado interno de un objeto sin violar su encapsulamiento, de modo que el objeto pueda ser restaurado a ese estado más tarde.

#### 7. Observer
El patrón Observer se utiliza para definir una dependencia uno a muchos entre objetos para que cuando un objeto cambie de estado, todos sus dependientes sean notificados y actualizados automáticamente.

#### 8. State
El patrón State se utiliza para permitir que un objeto altere su comportamiento cuando su estado interno cambia.

#### 9. Strategy
El patrón Strategy se utiliza para definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos intercambiables. Esto permite que el algoritmo varíe independientemente de los clientes que lo utilizan.

#### 10. Template Method
El patrón Template Method se utiliza para definir la estructura general de un algoritmo y permitir que las subclases proporcionen ciertas implementaciones de los pasos del algoritmo.

#### 11. Visitor
El patrón Visitor se utiliza para separar un algoritmo de la estructura de un objeto en el que opera. Esto permite que el algoritmo varíe independientemente de la estructura del objeto.

------------


En resumen, los patrones de diseño son soluciones probadas para problemas comunes en el diseño de software. Cada patrón se clasifica en una de las tres categorías principales de patrones de creación, patrones de estructuración y patrones de comportamiento. Cada patrón tiene una descripción, ejemplos y consecuencias. Estos patrones han sido ampliamente utilizados en la industria y se han convertido en una parte importante del conocimiento de diseño de software.