
all:
	docker build -t killmenot/ripple-qewd-facade:redis ./redis

.PHONY: all