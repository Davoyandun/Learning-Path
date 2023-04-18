class Vehiculo:
    def __init__(self, velocidad):
        self.velocidad = velocidad
    
    def desplazarse(self):
        pass

class Automovil(Vehiculo):
    def desplazarse(self):
        print("El automóvil se desplaza a {} km/h".format(self.velocidad))

class Bicicleta(Vehiculo):
    def desplazarse(self):
        print("La bicicleta se desplaza a {} km/h".format(self.velocidad))


def main():
    vehiculos = [Automovil(120), Bicicleta(25)]
    for vehiculo in vehiculos:
        vehiculo.desplazarse()

if __name__ == "__main__":
    main()
