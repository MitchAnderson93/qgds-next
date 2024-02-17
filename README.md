# Storybook migration

Welcome to the documentation for the [X], a frontend toolkit of styles, patterns, standards and guidance for everyone creating distinctly [X] digital products and services. 

It helps us create unified, trusted, inclusive and audience centered digital experiences for our users that are clearly simple, current and purposeful.  
  
This document provides instructions on how to easily integrate and utilise the [X] Design System styles and components in your projects.

## Choosing Your Integration Method
- Methods for [X]

## Installing with NPM

Follow these steps to integrate the [X] into your project using npm:

1. **Install Node.js and npm:** If you haven't already, install Node.js and npm by following the instructions in the Node.js installation guides.

2. **Create a package.json:** In your project's root directory, run the `npm init` command in your terminal. Follow the prompts to generate a `package.json` file, providing essential project information.

3. **Add [X] to your dependencies:** Run the following command to install the [X] as a dependency in your project:

    ```
    npm install --save [X]
    ```

4. **Import Styles and JavaScript:** Learn how to import the design system's styles and JavaScript into your project's build by referring to the relevant sections below.

## Working notes
### Background:
The intention of the repository is to offer a method to migrate 1 or more components (as per a feature request) to a completely new repository, and change the format of the output.

- ```"postinstall"``` builds/bundles all [Y] assets and makes this available inside Storybook's unique functionality.
- ```npm run move-component``` provides a CLI menu to move a component to ./src/components/*/ at root (future web components) as per peer review process/feature prioritisation
- ```./src ``` now contains the newly selected components, these are viewable in Storybook. The format/design/QA can be performed against Storybook.
- ```./migrate``` folder will be deleted at the end of the project (temporary files for Storybook migration/compiling components)
