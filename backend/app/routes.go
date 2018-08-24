package main

import (
	"github.com/gorilla/mux"
)

//creates a router to map to handlers
func NewRouter() *mux.Router {

	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {

		router.Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(route.HandlerFunc)

	}
	return router
}

var routes = Routes{
	Route{
		"Index",
		"GET",
		"/",
		Index,
	},
	Route{
		"TodoIndex",
		"GET",
		"/todos",
		ToDoIndex,
	},
	Route{
		"TodoShow",
		"GET",
		"/todos/{todoId}",
		ToDoShow,
	},
}
