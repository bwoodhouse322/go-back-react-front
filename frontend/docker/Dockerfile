FROM node:10.9.0-alpine as builder

RUN mkdir /opt/app
WORKDIR /opt/app
ENV PATH /opt/app/node_modules/.bin:$PATH
COPY package.json /opt/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY . /opt/app
RUN npm run build

FROM nginx:1.13.9-alpine

COPY --from=builder /opt/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]