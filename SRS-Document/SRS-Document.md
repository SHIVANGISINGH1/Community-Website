# Software Requirements Specification
## For DeCodeCafe Community Website

Version 0.1  
Prepared by: 
Vyom Yadav  
DeCodeCafe Community 
15/07/2022

Table of Contents
=================
- [Software Requirements Specification](#software-requirements-specification)
  - [For DeCodeCafe Community Website](#for-decodecafe-community-website)
- [Table of Contents](#table-of-contents)
  - [Revision History](#revision-history)
  - [1. Introduction](#1-introduction)
    - [1.1 Document Purpose](#11-document-purpose)
    - [1.2 Product Scope](#12-product-scope)
    - [1.3 Definitions, Acronyms and Abbreviations](#13-definitions-acronyms-and-abbreviations)
    - [1.4 References](#14-references)
  - [2. Product Overview](#2-product-overview)
    - [2.1 Product Perspective](#21-product-perspective)
    - [2.2 Product Functions](#22-product-functions)
    - [2.3 Product Constraints](#23-product-constraints)
    - [2.4 User Characteristics](#24-user-characteristics)
    - [2.5 Assumptions and Dependencies](#25-assumptions-and-dependencies)
  - [3. Requirements](#3-requirements)
    - [3.1 External Interfaces](#31-external-interfaces)
      - [3.1.1 User interfaces](#311-user-interfaces)
      - [3.1.2 Hardware interfaces](#312-hardware-interfaces)
    - [3.2 Tech Stack](#32-tech-stack)
    - [3.3 Security](#33-security)

## Revision History
| **Name**                      	| **Date**   	| **Reason For Change**         	| **Version** 	|
|-------------------------------	|------------	|-------------------------------	|-------------	|
| Initial Document was prepared 	| 15/07/2022 	| Initial Document was prepared 	| 0.1         	|

## 1. Introduction
Encouraging Learning in Public.

DeCodeCafe is a student community of like-minded people who believe in Kaizen (Continuous Improvement). We are here to encourage learning in public culture and help the student community with their life in/after college. We are currently a Rising Community and engaging students with our Workshops, Webinar, Learning Resources, and Opportunities in Tech.

### 1.1 Document Purpose
This document is being prepared to be used as reference for building the DeCodeCafe Community Website.

### 1.2 Product Scope

Product is aimed to be used as a long term open source project. The product is intended to be used as an introductory project to open source for beginners. The product will also act as the official website of the DeCodeCafe Community. 

### 1.3 Definitions, Acronyms and Abbreviations

### 1.4 References

Initial Resources that can be used to build the website-

- https://github.com/opensourcediversity/opensourcediversity.org
- https://github.com/kubesimplify/website


## 2. Product Overview

### 2.1 Product Perspective
This is a fresh Project, with the idea of product originating with in house discussion.

### 2.2 Product Functions

The project functions would be as follows-
  - To allow mentors/selected students to write blog posts.
  - To introduce people to the community.
  - To introduce folks to various open source projects, including this one.
  - To allow folks to contribute/collaborate.
  - To showcase all contributors, not just who push code.

### 2.3 Product Constraints

There are no constrains as of now.

### 2.4 User Characteristics

All user classes are crucial to satisfy but broadly there are two user classes:
- Bloggers or folks who will write blog posts.
- Readers of those blogs.
  
Writing a blog should be a smooth experince with interactive UI and should support markdown.

User experience should be smooth without much hassle and elements should be presented well.

### 2.5 Assumptions and Dependencies

The main assumptions as of now are:
- Hashnode is free to use for non commerical websites.
- Hosting won't be a huge burden of pocket. Free credits from various hosting platforms will be sufficient to host the website.

## 3. Requirements

### 3.1 External Interfaces

- Hashnode for writing blogs.
- https://www.diagrams.net/

#### 3.1.1 User interfaces

The UI will be build using Figma or any other designing software. https://www.diagrams.net/ can also be used to design the layout.

#### 3.1.2 Hardware interfaces

All modern browsers and all devices (media queries) should be supported.

### 3.2 Tech Stack

The currently decided tech stack is-

- Next.js
- React
- Cypress (for testing)

### 3.3 Security

Another important aspect that needs to be discussed.

