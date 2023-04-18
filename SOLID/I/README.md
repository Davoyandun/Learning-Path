# The Interface Segregation Principle (ISP)
 Is one of the SOLID principles in object-oriented programming. It states that a client should not be forced to depend on methods it does not use. 
 In other words, classes should not have to implement interfaces or inherit methods they don't need.

This principle encourages developers to create smaller, more focused interfaces rather than large, monolithic ones. By doing so, clients can choose to implement only the methods they need, which reduces code bloat and makes the codebase easier to maintain over time. Additionally, this principle helps to reduce coupling between classes, which can improve the flexibility and reusability of the codebase.

One way to avoid violating this principle in Python is by applying duck typing. This concept means that the methods and properties of an object determine its semantic validity, rather than its class hierarchy or the implementation of a specific interface.