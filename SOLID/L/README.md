### Principio de Sustitución de Liskov
El principio de sustitución de Liskov es un principio de diseño orientado a objetos que establece que las clases derivadas deben poder usarse de manera intercambiable con objetos de la clase base sin alterar el comportamiento correcto del programa.

En otras palabras, una clase derivada debe ser una extensión de la clase base, no una modificación. Esto significa que un objeto de la clase derivada debe poder tomar el lugar de un objeto de la clase base sin causar errores o comportamientos inesperados.

### El principio de sustitución de Liskov se puede resumir en la siguiente frase:

"Si S es un subtipo de T, entonces los objetos de tipo T en un programa pueden ser reemplazados por objetos de tipo S sin alterar ninguna de las propiedades deseables del programa."

Este principio es esencial para la modularidad y la reutilización del código, ya que nos permite escribir código que es fácil de mantener, extender y cambiar sin tener que modificar constantemente otras partes del programa.

Ejemplo de uso
Un ejemplo común de cómo aplicar el principio de sustitución de Liskov es a través de la creación de una jerarquía de clases. Por ejemplo, si tuviéramos una clase base Shape y dos clases derivadas Rectangle y Square, podríamos aplicar el principio de sustitución de Liskov asegurándonos de que un objeto de la clase Square pudiera usarse de manera intercambiable con un objeto de la clase Rectangle, sin causar comportamientos inesperados.

``` python

class Shape:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        pass


class Rectangle(Shape):
    def __init__(self, width, height):
        super().__init__(width, height)

    def area(self):
        return self.width * self.height


class Square(Shape):
    def __init__(self, side_length):
        super().__init__(side_length, side_length)

    def area(self):
        return self.width * self.height


def calculate_areas(shapes):
    for shape in shapes:
        print(f"The area of the shape is {shape.area()}.")


if __name__ == "__main__":
    shapes = [Rectangle(5, 10), Square(5)]
    calculate_areas(shapes)
```

En este ejemplo, hemos aplicado el principio de sustitución de Liskov asegurándonos de que un objeto de la clase Square pueda usarse de manera intercambiable con un objeto de la clase Rectangle sin causar comportamientos inesperados.