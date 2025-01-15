exec-backend:
	docker compose -f compose.yaml exec backend bash	

back-up:
	npm --prefix ./backend run build
	npm --prefix  ./backend run dev

front-up:
	npm --prefix ./frontend run dev