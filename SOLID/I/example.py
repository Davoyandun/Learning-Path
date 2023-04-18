class Vehicle:
    def roll(self):
        print("rolling...")

    def sail(self):
        print("sailing...")

    def fly(self):
        print("Flying...")

    def upload(self):
        print("Making a upload...")
    
    def download(self):
        print("Making a download...")

class TerrestrialClient:
    def __init__(self, vehicle: Vehicle):
        self.vehicle = vehicle

    def roll(self):
        self.vehicle.roll()

    def upload(self):
        self.vehicle.upload()
    
    def download(self):
        self.vehicle.download()

class AquaticClient:
    def __init__(self, vehicle: Vehicle):
        self.vehicle = vehicle

    def sail(self):
        self.vehicle.sail()

    def upload(self):
        self.vehicle.upload()

    def download(self):
        self.vehicle.download()

class FlyingClient:
    def __init__(self, vehicle: Vehicle):
        self.vehicle = vehicle

    def fly(self):
        self.vehicle.fly()

    def upload(self):
        self.vehicle.upload()
    
    def download(self):
        self.vehicle.download()



# apply the SOLID principles

class IRolling:
    def roll(self):
        pass

class ISailing:
    def sail(self):
        pass

class IFlying:
    def fly(self):
        pass

class IUploading:
    def upload(self):
        pass

class IDownloading:
    def download(self):
        pass


class Truck(IRolling, IUploading, IDownloading):
    def roll(self):
        print("Truck rolling...")

    def upload(self):
        print("Truck uploading...")

    def download(self):
        print("Truck downloading...")

class Ship(ISailing, IUploading, IDownloading):
    def sail(self):
        print("Ship sailing...")

    def upload(self):
        print("Ship uploading...")

    def download(self):
        print("Ship downloading...")

class Plane(IFlying, IUploading, IDownloading):
    def fly(self):
        print("Plane flying...")

    def upload(self):
        print("Plane uploading...")

    def download(self):
        print("Plane downloading...")
   