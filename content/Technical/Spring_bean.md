---
title: Spring_bean
---

## What a spring bean?

It is an object managed by the [spring context](./Spring_context.md).  
An object should be made a bean, only if we need it managed by the spring context, and augment it with spring capabilities. 

We can make an object managed by spring context like so:

1. in **Project Configuration**

`@Configuration  
public class MyConfig {  
  @Bean  
  public MyBean myBean() {  
    MyBean myBean = new MyBean();  
    return myBean;  
  }  
}  
`

2. At class definition using stereotype annotations like **@Component, @Controller**
`@Component
public class MyBean {
 //some code
}
`

Note that if we are not using **Spring Boot** we have to also specify
`
@ComponentScan(basePackages="packageNameWhereComponentLies")
@Configuration
public class MyConfig {
....
`

3. Programically (Spring 5 or later)
`
context.registerBean(beanName, beanClass, Supplier);
`
---

## Connecting (Wiring) Beans

We can establish a connection between beans like so:

1. in **Project Configuration**

**IMPORTANT!** this will not create two instances of myBean, if already created, spring will just give the reference to existing instance.

`@Configuration
public class MyConfig {
  @Bean
  public MyBean myBean() {
    MyBean myBean = new MyBean();
    return myBean;
  }
  @Bean
  public  myBean2 myBean2(){
    MyBean2 myBean2 = new MyBean2(myBean()); 
    return myBean2;
  }
}
`

2. Through method parameters (Nicest one)

We can refer to other beans by using their types as parameters in bean methods
`
@Bean
public MyBean2 myBean2(MyBean myBean) {
  return new myBean2(myBean);
}
`

3. Using @Autowired

  - We can refer to other beans by using @Autowired over the field of other Bean class.
  `
  @Component
  public class MyBean{
    //some code
  }
  @Component
  public class myBean2 {
    @Autowired
    private MyBean myBean;
  }
  `

  - We can refer to other beans by using @Autowired over the ctor with other bean class as parameter.
`
@Component
public class MyBean{
  //some code
}
@Component
public class MyBean2 {
  @Autowired
  public MyBean2(MyBean myBean) {
    this.myBean = myBean;
  }
}`

  - We can refer to other beans by using @Autowired over the setter with other bean class as parameter. (**HIGHLY DISCOURAGED so no example**)

---

## Selecting from multiple beans

1. select using the bean method name

`@Configuration
public class MyConfig {
  @Bean
  public MyBean myBean() {
    MyBean myBean = new MyBean();
    return myBean;
  }
  @Bean
  public MyBean myBean11() {
    MyBean myBean = new MyBean("ban");
    return myBean;
  }
  @Bean
  public  myBean2 myBean2(MyBean myBean11){ // uses myBean11()
    MyBean2 myBean2 = new MyBean2(myBean11); 
    return myBean2;
  }
}
`

2. select using the @Qualifier annotation

`@Configuration
public class MyConfig {
  @Bean
  public MyBean myBean() {
    MyBean myBean = new MyBean();
    return myBean;
  }
  @Bean
  public MyBean myBean11() {
    MyBean myBean = new MyBean("ban");
    return myBean;
  }
  @Bean
  public  myBean2 myBean2(@Qualifier("myBean11") MyBean myBean){ // uses myBean11()
    MyBean2 myBean2 = new MyBean2(myBean11); 
    return myBean2;
  }
}
`

3. using the bean method name in component

`@Configuration
public class MyConfig {
  @Bean
  public MyBean myBean() {
    MyBean myBean = new MyBean();
    return myBean;
  }
  @Bean
  public MyBean myBean11() {
    MyBean myBean = new MyBean("ban");
    return myBean;
  }
}
//in class file
  @Component
  public class MyBean2 {
    @Autowired
    public myBean2(myBean myBean11) {
      this.myBean = myBean11;
    }
  }
`

4. using the @Qualifier in component

`@Configuration
public class MyConfig {
  @Bean
  public MyBean myBean() {
    MyBean myBean = new MyBean();
    return myBean;
  }
  @Bean
  public MyBean myBean11() {
    MyBean myBean = new MyBean("ban");
    return myBean;
  }
}
//in class file
  @Component
  public class MyBean2 {
    @Autowired
    public myBean2(@Qualifier("MyBean11") myBean myBean) {
      this.myBean = myBean;
    }
  }
`
[](Spring.md)

