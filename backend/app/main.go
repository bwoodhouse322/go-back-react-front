package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	port := ":443"
	router := NewRouter()

	fmt.Println("listening on 127.0.0.1" + port)

	//log.Fatal(http.ListenAndServe(port, router))
	log.Fatal(http.ListenAndServeTLS(port, "certs/server.crt", "certs/server.key", router))

}
