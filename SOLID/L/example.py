class Document:
    def __init__(self, content):
        self.content = content

    def format(self):
        pass


class PdfDocument(Document):
    def __init__(self, content):
        super().__init__(content)

    def format(self):
        return "The PDF document has been formatted."

class WordDocument(Document):
    def __init__(self, content):
        super().__init__(content)

    def format(self):
        return "The Word document has been formatted."


class ReadOnlyDocument(Document):
    def __init__(self, content):
        super().__init__(content)

    def format(self):
        raise NotImplementedError("Cannot format a read-only document.")
    
class TxtDocument(Document):
    def __init__(self, content):
        super().__init__(content)

    def format(self, message):
        return ("The Txt document has been formatted." + message)


def format_documents(documents):
    for document in documents:
        print(document.format())




if __name__ == "__main__":
    documents = [PdfDocument("This is a PDF document."), WordDocument("This is a Word document."), ReadOnlyDocument("This is a read-only document."), TxtDocument("This is a Txt document.")]
    format_documents(documents)



# apply the SOLID principles 


class Document:
    def __init__(self, content):
        self.content = content

    def format(self)->str:
        pass

class PdfDocument(Document):
    def __init__(self, content):
        super().__init__(content)



class WordDocument(Document):
    def __init__(self, content):
        super().__init__(content)

    def format(self):
        return "The Word document has been formatted."

class ReadOnlyDocument(Document):
    def __init__(self, content):
        super().__init__(content)

    def format(self):
        raise NotImplementedError("Cannot format a read-only document.")
    
class TxtDocument(Document):
    def __init__(self, content):
        super().__init__(content)

    def format(self,):
        return ("The Txt document has been formatted." )


def format_documents(documents):
    for document in documents:
        print(document.format())


if __name__ == "__main__":
    documents = [PdfDocument("This is a PDF document."), WordDocument("This is a Word document."), ReadOnlyDocument("This is a read-only document."), TxtDocument("This is a Txt document.")]
    format_documents(documents)

