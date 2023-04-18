class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f'Personas(name={self.name})'


class PersonStorage:
    def save_to_database(self, person):
        print(f'Save the {person} to database')

    def save_to_json(self, person):
        print(f'Save the {person} to a JSON file')

   # def save_to_csv(self, person):
     #   print(f'Save the {person} to a CSV file')


if __name__ == '__main__':
    person = Person('John Doe')
    storage = PersonStorage()
    storage.save_to_database(person)


# example apply the open-closed principle
from abc import ABC, abstractmethod


class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f'Person(name={self.name})'


class PersonStorage(ABC):
    @abstractmethod
    def save(self, person):
        pass
    @abstractmethod
    def delete(self, person):
        pass
    


class PersonDB(PersonStorage):
    def save(self, person):
        print(f'Save the {person} to database')

class PersonJSON(PersonStorage):
    def save(self, person):
        print(f'Save the {person} to a JSON file')


class PersonCSV(PersonStorage):
    def save(self, person):
        print(f'Save the {person} to a CSV file')


if __name__ == '__main__':
    person = Person('John Doe')
    storage = PersonCSV()
    storage.save(person)
