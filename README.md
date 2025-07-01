# is-odd

A simple JavaScript app to check if a number is odd. 

This project aims to demonstrate how to handle changes in node_modules and how to manage dependencies effectively.

## Synopsis
In general, it very much recommended not to change files in node_modules directly. However, that might not always be possible, especially when you are working with a library that has a bug or a feature that you need to modify temporarily or that has been already done. This can create a dependency hell, where you have to manage multiple versions of the same library or deal with conflicts between different versions. Thus, node_modules becomes a dependency to be managed. 

## Solution
To handle changes in node_modules, you can use the following strategies:
1. **Fork the library**: If you need to make changes to a library, consider forking it and making your changes in your own repository. This way, you can maintain your own version of the library without affecting the original one.
2. **Use a patch**: If you need to make a small change to a library and you don't want to fork it, you can create a patch file that contains your changes. You can then apply this patch file to the library whenever you need to use it.

## Using a Patch
At first apply the changes to the library in node_modules, then create a patch file using the following command:
```bash
npm install patch-package
npx patch-package <package-name>
```
This will create a patch file in the `patches` directory. You can then apply this patch file to the library whenever you need to use it by running:
```bash
npx patch-package
```
or by adding it to your `postinstall` script in `package.json`:
```json
"scripts": {
  "postinstall": "patch-package"
}
```

## Freezing Dependencies
To avoid issues with chaning dependencies, it is recommended to freeze your dependencies. This can be done by fixing the versions of your dependencies in your `package.json` file. You can do this by specifying the exact version of each dependency instead of using a range. For example:
```json
"dependencies": {
  "is-even": "1.0.0"
}
```

> [!NOTE]
> In package.json, the tilde (`~`) and caret (`^`) symbols specify version ranges for dependencies, influencing how updates are handled.  
> The tilde (`~`) allows updates to the most recent patch version within a minor version (e.g., `~1.2.3` allows `1.2.x` but not `1.3.0`), while the caret (`^`) allows updates to the most recent minor and patch versions within the same major version (e.g., `^1.2.3` allows `1.x.x` but not `2.0.0`).  
> Using exact versions (e.g., `1.2.3`) ensures that the specified version is always used, preventing unexpected changes from updates.

## Example
In this example, we will use the `is-even` library to check if a number is odd. We will modify the library to return `true` for odd numbers instead of even numbers.

## Usage
To install the dependencies, run:
```bash
npm install
```
Then build the project by running:
```bash
npx esbuild app.js --bundle --outfile=bundle.js
````
Finally, open the `index.html` file in your browser to see the app in action.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


