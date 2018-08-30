package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	port := ":8080"
	router := NewRouter()

	fmt.Println("listening on 127.0.0.1" + port)

	log.Fatal(http.ListenAndServe(port, router))

}
