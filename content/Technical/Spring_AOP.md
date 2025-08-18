---
title: Spring_AOP
---

# Essential terminology connected with Spring aspect oriented programming

1. aspect - a block of code called as a result of calling a particular method.
2. advice - when(before, after method call) and because of what a certain aspect gets called.
3. pointcut - the methods that trigger the aspect.

# Many aspects connected to one pointcut.
If aspect execution matter we use `@Order(nr)` annotation next to `@Aspect`. The lower the nr the earlier the method aspect gets called.

## Important!
To use aspects you need to have `@EnableAspectsAutoJProxy` near config or starter class
`@Aspect AND @Component!! above aspect class `

[](Spring.md) 
