class Vehicle(object):
    def __init__(self, name):
        self._name = name
        self._persistence = MySQLdb.connect()
        self._engine = Engine()

    def getName():
        return self._name()

    def getEngineRPM():
        return self._engine.getRPM()

    def getMaxSpeed():
        return self._speed
    
    def print():
        return  print(f"Vehicle: {self._name} - Engine RPM: {self._engine.getRPM()} - Max Speed: {self._speed}") 


class Vehicle(object):
    def __init__(self, name, engine):
        self._name = name
        self._engine = engine

    def getName(self):
        return self._name()

    def getEngineRPM(self):
        return self._engine.getRPM()

    def getMaxSpeed(self):
        return self._speed

class VehicleRepository(object):
    def __init__(self, vehicle, db):
        self._persistence = db
        self._vehicle = vehicle

class VehiclePrinter(object):
    def __init__(self, vehicle, db):
        self._persistence = db
        self._vehicle = vehicle

    def print(self):
        return print (
            f"Vehicle: {self._vehicle.getName()} - Engine RPM: {self._vehicle.getEngineRPM()} - Max Speed: {self._vehicle.getMaxSpeed()}"
        )
