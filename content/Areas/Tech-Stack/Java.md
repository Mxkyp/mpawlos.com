---
title: Java 
tags:
  - Technical 
---

# What is Java?

## Basics
Java is a - strongly typed - compiled programming language. 
Its compiled into bytecode which is interpreted by the JVM which makes java programs very portable when comparing it with for example: C/C++.
Every reference type in Java is a class that inherits from the **Object**.
Everything in Java is **passed by value** even object references, meaning:
This means that when passing an object to a value you are passing a **copy** of the object reference.
So even if you change that reference within the method, the original object is not changed.

`Dog d = new Dog("Max");
Foo(d);
System.out.println(d.getName()); // will still print Max (in C++(where you can pass by reference) it would print Brian)
(...)
.
public void Foo(Dog dog) {
  dog = new Dog("Brian");
}`

## Abstractions
We can implement Abstractions using both **Interfaces** and **Abstract classes**.

### Interfaces
Interfaces are certain structures that allow you to declare certain **responsibilities** that classes implementing the interface have to define.

***NOTE*** 
Good class design says that objects should define what responsibilities they want supplied, not how they want them to be satisfied. That is where interfaces come in.

***Example***
Say we are using a ledger class that stores records. Each ledger needs something to provide searching through them.
So we provide a Finder class via constructor.

`public Ledger(Finder finder){
...
}`

Now if we for instance find a better implementation of the finder ex. Finder2 we have to manually replace each Finder occurrence. 
A better way to do it is to use an interface **IFinder** and use it like so:

`public Ledger(IFinder finder){
...
}`

## Java Database connectivity
A set of abstractions provided by the JDK to allow connections to databases.

