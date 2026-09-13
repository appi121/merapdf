FROM stirlingtools/stirling-pdf:latest

# Files को public folder से copy करो
COPY public/modern-logo/* /usr/local/tomcat/webapps/ROOT/modern-logo/
COPY public/assets/custom-styles.css /usr/local/tomcat/webapps/ROOT/assets/custom-styles.css
COPY override-head.js /usr/local/tomcat/webapps/ROOT/

# index.html में script tag inject करो
RUN sed -i 's|</head>|<script src="/override-head.js"></script>\n</head>|g' /usr/local/tomcat/webapps/ROOT/index.html || true

EXPOSE 8080
CMD ["catalina.sh", "run"]