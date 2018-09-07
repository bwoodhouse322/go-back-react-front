package main

import (
	"net/http"
	"time"
)

//Todo list
type Todo struct {
	Name      string    `json:"name"`
	Date      time.Time `json:"datedue"`
	Completed bool      `json:"completed"`
}

//list of Todo
type Todos []Todo

//end points
type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

//collection of endpoints
type Routes []Route
