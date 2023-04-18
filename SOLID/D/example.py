from abc import ABC, abstractmethod
import smtplib

class EmailSender(ABC):
    @abstractmethod
    def send_email(self, to, subject, body):
        pass

class HttpClient(ABC):
    @abstractmethod
    def get(self, url):
        pass
    @abstractmethod
    def post(self):
        pass
   
class  AuthenticationHandler(HttpClient):
    def get():
        return {
            "user_name": "admin",
            "password": "admin"
        }
    def post(user):
         authenticion_case.add_user(user)
         

class GmailEmailSender(EmailSender):
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.smtp_server = 'smtp.gmail.com'
        self.smtp_port = 587

    def send_email(self, to, subject, body):
        with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
            server.starttls()
            server.login(self.username, self.password)
            message = f"Subject: {subject}\n\n{body}"
            server.sendmail(self.username, to, message)

class OutlookEmailSender(EmailSender):
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.smtp_server = 'smtp.office365.com'
        self.smtp_port = 587

    def send_email(self, to, subject, body):
        with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
            server.starttls()
            server.login(self.username, self.password)
            message = f"Subject: {subject}\n\n{body}"
            server.sendmail(self.username, to, message)

