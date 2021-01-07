run:
	npm run build

release:
	npm run prerelease && npm run release

publish:
	npm publish

list-package:
	npm pack && tar -xvzf *.tgz && rm -rf package *.tgz