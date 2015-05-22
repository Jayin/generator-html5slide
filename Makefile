main:
	npm install

update:
	@git submodule init
	@git submodule update

test:
	@mocha

.PHONY: main test
