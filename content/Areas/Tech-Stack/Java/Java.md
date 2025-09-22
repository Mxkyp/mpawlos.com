---
title: Java 
tags:
  - Technical 
draft: true
---

# Simply
A programming platform, composed of a language, [runtime-environment(Java-JVM)](./Java_jvm.md) and ecosystem(libraries and frameworks).

## Java language
[Static typed](./Types.md), object-oriented language with a built-in garbage collector.

### Packages
Are used to represent namespaces, and avoid type collision.

### Class member types 
Are constructors, methods and fields.

### try-with-resources is preferred over try-catch-finally

### Assertions get a bad rep but can be useful.

### Method modifiers (abstract, default, final, native, static, synchronized)
1. Abstract classes cannot have instances as they are incomplete
2. Default can only be used in interfaces, such method will be used if not overiden.
3. Native is used to symbolize that the method is written in some other language and provided from the outside.
4. Strict means belonging to type not specific instance.
5. synchronized - marks a method as thread-safe by allowing only 1 thread to execute it at a time.

## Questions
1. Explain the Java compilation process.
2. What does it mean that a language is statically typed? What does it mean that its dynamically typed? - In a statically typed language the types are checked and validated at compile time, in dynamically typed languages types are checked at runtime.
3. What is a type in terms of programming? - A type defines a set of possible values(that's it for primitive types) and allowed operations(only for objects).


