---
  title: React
  tags:
    - Technical
--- 

## Simply 
A Javascript library for creating **responsive UI's.**

## Components
It's based on reusable Components *function Component()...*

Key notes:
1. Components names have to start with **a capital letter**.
2. Returns have to be enclosed in (); if they are multiple-line.
3. Import a ***named*** component from a different file: **import {Component} from "pathToFile"**
4. Import a ***default*** component from a diffrent file: **import Component from "pathToFile"**

## Importing Javascript variables into components
We do it by using curly braces for instance, say we have:\
const String address = "..."
then we would use it in a function ShowImage like so:
`<img src={address}>`
