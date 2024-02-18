## What's here?

### 1. Webpack Configuration Overview

This configuration file is tailored for bundling and processing Queensland Health (QH) common files in a Webpack setup. It includes several plugins and rules that manage the styling, scripting, and optimization of these files. Here's a breakdown of its key components:

#### Entry and Output
- **Entry Points**: Specifies the starting points for the bundling process, including the global SASS file and the main JavaScript file.
- **Output**: Defines the output directory and filename pattern for the bundled files.

#### Modules and Rules
- **SCSS Files**: Uses a series of loaders to process SCSS files. This includes extracting CSS into separate files, using PostCSS for autoprefixing, and Sass for SCSS compilation.
- **JavaScript Files**: Babel-loader is used to transpile JavaScript files, excluding node_modules.

### Plugins
1. **MiniCssExtractPlugin**: Extracts CSS into separate files. It supports on-demand-loading of CSS and SourceMaps.
2. **CleanWebpackPlugin**: Cleans up the `dist` folder before building, ensuring that only used files are bundled.
3. **PrecompilePlugin**: This custom plugin is specifically designed for handling Handlebars templates. Here's what it does:
    - **Handlebars Template Processing**: It searches for all Handlebars template files (*.hbs) within a specified directory, precompiling them into JavaScript functions. This is essential for using these templates in a web environment.
    - **Handlebars Helpers Handling**: It locates and processes Handlebars helper functions. These are small JavaScript functions that extend Handlebars' templating capabilities. The plugin ensures these helpers are available within the templates.
    - **Helper File Generation**: The plugin aggregates all helper functions into a single JavaScript file, making them easily accessible and usable in the project.
    - **Additional File Creation**: Beyond templates and helpers, the plugin also handles JSON data files. It uses this data to render static HTML versions of the templates and generates additional necessary files like XML, adapting to specific project requirements.
    - **Customizable Workflow Integration**: The plugin is built to be flexible, accepting various options for the input and output paths of templates, helpers, and more, thus fitting into different project structures efficiently. In essence, the PrecompilePlugin automates several key processes related to Handlebars template management in a Webpack build environment, making it a valuable tool for projects utilizing Handlebars for templating.

4. **CssMinimizerPlugin**: Minimizes CSS for optimal performance.

#### Optimization
- Enables CSS minimization in the production environment to reduce file size and improve load times.

This configuration is particularly focused on a production build, ensuring optimized, clean, and maintainable output. It's customized to handle specific QH project requirements, especially with the inclusion of the PrecompilePlugin for Handlebars templates.