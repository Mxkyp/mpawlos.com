# What are the scopes of a spring object?
In *default* Spring objects managed by the context[**(beans)**](./Spring_bean.md), have two scopes of existence, singleton (the default) and prototype. With [Spring Web](./Spring_web.md) we increase that to five scopes (singleton,  prototype, session, app, request).

# Singleton scope
**Do not mistake for the singleton pattern!** 
Singleton scope means that only one instance of a bean is created per Spring container. However Spring allows having many singleton beans of the same class, if each has a different beanID.

# Prototype scope
Each time a bean is called, a new instance is created.


## Additional Spring Web scopes

### session
New instance of a bean is created for each session and persist through that session.

### app
A bean instance is created when the app is ran initially, persists across sessions.

### request
A new instance of a bean is created for each http request. Exists only for that specific http request.