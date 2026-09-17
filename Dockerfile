FROM stirlingtools/stirling-pdf:latest

ENV UI_APPNAME="Mera PDF"
ENV UI_APPNAMENAVBAR="Mera PDF"
ENV UI_HOMEDESCRIPTION="मुफ्त हिंदी PDF टूल्स - Mera PDF"
ENV SYSTEM_DEFAULTLOCALE="hi-IN"
ENV UI_CUSTOM_FILES_ENABLED="true"

# Custom Files को सही जगह पर Copy करें
COPY index.html /customFiles/static/index.html
COPY custom-styles.css /customFiles/static/custom.css
COPY favicon.ico /customFiles/static/favicon.ico
COPY Logo.png /customFiles/static/logo.png

EXPOSE 8080
