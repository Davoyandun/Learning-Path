import math
def operaciones1(num, tipo):
    if tipo == 'cuadrado':
        return num**2
    elif tipo == 'cubo':
        return num**3
    elif tipo == 'raiz':
        return num**0.5
    else:
        return None

class Operacion:
    def realizar(self, num):
        pass

class Cuadrado(Operacion):
    def realizar(self, num):
        return num**2

class Cubo(Operacion):
    def realizar(self, num):
        return num**3

class Raiz(Operacion):
    def realizar(self, num):
        return num**0.5

def operaciones2(num, operacion):
    return operacion.realizar(num)



print(operaciones2(2, Cuadrado()))
