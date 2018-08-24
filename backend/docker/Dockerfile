FROM golang:1.11 as builder

WORKDIR /opt/app/
COPY app/ /opt/app/
RUN go get -u github.com/golang/dep/cmd/dep && dep init && CGO_ENABLED=0 GOOS=linux go-wrapper install 


FROM alpine:3.7 

RUN apk add --update --no-cache ca-certificates
COPY --from=builder /opt/app /
EXPOSE 8080


CMD ["./app"]