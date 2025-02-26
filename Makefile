exec-backend:
	docker compose -f compose.yaml exec backend bash	

back-up:
	npm --prefix ./api run build
	npm --prefix  ./api run dev

front-up:
	npm --prefix ./app run dev