# implementacion sin usar el principio de  responsabilidad unica

class Duck:
    
    def __init__(self, name):
        self.name = name
   
    def fly(self):
        print(f"{self.name} is flying not very high")

    def swim(self):
        print(f"{self.name} swims in the lake and quacks")

    def do_sound(self) -> str:
        return "Quack"
 # aqui se rompe el principio de responsabilidad unica, ya que la clase Duck tiene dos responsabilidades
 # la de volar y la de comunicarse

    def greet(self, duck2):
        print(f"{self.name}: {self.do_sound()}, hello {duck2.name}")


class Duck:
   
    def __init__(self, name):
        self.name = name
   
    def fly(self):
        print(f"{self.name} is flying not very high")

    def swim(self):
        print(f"{self.name} swims in the lake and quacks")

    def do_sound(self) -> str:
        return "Quack" 

class Communicator:

    def __init__(self, channel ):
        self.channel = channel
    def communicate(self, duck1 : Duck, duck2: Duck):
        sentence1 = f"{duck1.name}: {duck1.do_sound()}, hello {duck2.name}"
        sentence2 = f"{duck2.name}: {duck2.do_sound()}, hello {duck1.name}"
        conversation = [sentence1, sentence2]
        print(*conversation,
              f"(via {self.channel})",
              sep = '\n')

Communicator("Radio").communicate(Duck("Donald"), Duck("Daisy"))