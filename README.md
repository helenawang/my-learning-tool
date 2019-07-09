# MyLearningTool

This repository is the front end part of my learning-tool project.
There are other repositories for the back end part.
The question and knowledge data are private now, and you can use your own question template.

## Motivation

The idea of building such a tool came from [the column article(左耳听风-97 | 高效学习：深度，归纳和坚持实践)](https://time.geekbang.org/column/article/14360) I subscribed (it's written in Chinese).
The author proposed a "learning template", which I think will benefit me a lot.
The template consists of several questions he suggests you ask when learning something new, such as, the background & motivation | alternatives | pros & cons(trade-off) of the technology.
Then I thought, why not build a tool with that template so that you can ask those questions by "fill out forms" and manage all your notes like a knowledge base? Then I built this project.

## Components
These are two screenshots about what the user interface looks like:
>The editor page
![screenshot1](./src/assets/img/screenshot-editor.png)
The question template form is customizable, which means you can load your own questions from your data source.
Instead of filling out the form from the start, you may import existing draft from local files or by pasting into the textarea (in json fromat).

> The list page
![screenshot2](./src/assets/img/screenshot-list.png)
The left side navigation consists of two layers. The first layer refers to "category", and the second layer refers to "knowledge or technology".

## Contribute
If you have some suggestions, open an issue or email me at helnawang@hotmail.com.

## Dependencies
* [Angular](https://angular.io)
* [NG-ZORRO(Ant Design of Angular)](https://ng.ant.design/docs/introduce/en)
