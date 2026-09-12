FROM stirlingtools/stirling-pdf:latest
WORKDIR /usr/local/tomcat/webapps/ROOT

# Files को सही folder में copy करो
COPY public/modern-logo/favicon.ico ./modern-logo/
COPY public/modern-logo/logo.png ./modern-logo/
COPY public/assets/custom-styles.css ./assets/

# Title को MeraPDF में change करो
RUN sed -i 's/<title>Stirling PDF<\/title>/<title>MeraPDF - Professional PDF Tools<\/title>/g' ./index.html

# Meta tags भी change करो
RUN sed -i 's/Stirling PDF/MeraPDF/g' ./index.html && \
    sed -i 's/The Free Adobe Acrobat alternative/Professional PDF Processing Tool/g' ./index.html

# CSS को HTML में add करो
RUN sed -i '/<link rel="stylesheet" crossorigin href="\.\/assets\/index/a \ <link rel="stylesheet" href="./assets/custom-styles.css">' ./index.html

EXPOSE 8080
CMD ["catalina.sh", "run"]