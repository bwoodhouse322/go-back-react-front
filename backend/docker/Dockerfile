FROM golang:1.11 as builder

WORKDIR /go/src/app/
COPY app/ /go/src/app/
RUN CGO_ENABLED=0 GOOS=linux go build -o app


FROM alpine:3.7 

RUN apk add --update --no-cache ca-certificates
COPY --from=builder /go/src/app/app /
EXPOSE 8080


CMD ["./app"]