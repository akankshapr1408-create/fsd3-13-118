local host -URL
127.0.0.1-IP address
ctrl+c-stop the server

every request from the client has a pair of {request,response}.

## npm- node package manager

used to install, run, uninstall any program/project and package

- npm install <packagename>
- npm uninstall <packagename>

to use npm,the project must be npm project,
to create npm project we can use

- npm init -y
- it creates a package .jason file automatically
  package.json holds all the information related to install package from npm
- update package.json, set type = 'module'
- it also creates a folder node_modules automatically
- node_modules holds the package/library files
- generally we ignore the node_modules by .gitignore
