FROM node:10.9.0-alpine as builder

RUN mkdir /opt/app
WORKDIR /opt/app
ENV PATH /opt/app/node_modules/.bin:$PATH
COPY app/package.json /opt/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY app/ /opt/app/
RUN npm run build
RUN npm install -g serve

EXPOSE 5000
CMD ["serve","-s","build"]