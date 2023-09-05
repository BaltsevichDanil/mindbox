FROM node:20-alpine3.17 as build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV=production

EXPOSE 5173

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN echo $'server {                           \n\
    listen       80;                          \n\
    listen  [::]:80;                          \n\
    server_name  localhost;                   \n\
    location / {                              \n\
        root   /usr/share/nginx/html;         \n\
        index  index.html index.htm;          \n\
        try_files $uri /index.html;           \n\
    }                                         \n\
    error_page   500 502 503 504  /50x.html;  \n\
    location = /50x.html {                    \n\
        root   /usr/share/nginx/html;         \n\
    }                                         \n\
}' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
