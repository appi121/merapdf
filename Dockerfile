FROM stirlingtools/stirling-pdf:latest

# Step 1: Files को सही जगह copy करो
COPY public/modern-logo/* /usr/local/tomcat/webapps/ROOT/modern-logo/
COPY public/assets/custom-styles.css /usr/local/tomcat/webapps/ROOT/assets/custom-styles.css

# Step 2: Build करते समय HTML को modify करो (स्टार्टअप से पहले)
RUN ls -la /usr/local/tomcat/webapps/ROOT/

# Find करो सब HTML files
RUN find /usr/local/tomcat/webapps/ROOT -name "*.html" -type f | head -20

# Title change करो
RUN sed -i 's|<title>Stirling PDF</title>|<title>MeraPDF - Professional PDF Tools</title>|g' /usr/local/tomcat/webapps/ROOT/index.html || true

# OG tags change करो
RUN sed -i 's|content="Stirling PDF"|content="MeraPDF - Professional PDF Tools"|g' /usr/local/tomcat/webapps/ROOT/index.html || true

RUN sed -i 's|content="The Free Adobe Acrobat alternative|content="Professional PDF Processing Tool|g' /usr/local/tomcat/webapps/ROOT/index.html || true

# Custom CSS को inject करो (head के आखिर में)
RUN sed -i '/<\/head>/i\    <link rel="stylesheet" href="./assets/custom-styles.css">' /usr/local/tomcat/webapps/ROOT/index.html || true

# Favicon path को absolute करो
RUN sed -i 's|href="modern-logo/favicon.ico"|href="/modern-logo/favicon.ico"|g' /usr/local/tomcat/webapps/ROOT/index.html || true

# Logo path को भी absolute करो
RUN sed -i 's|href="modern-logo/logo192.png"|href="/modern-logo/logo192.png"|g' /usr/local/tomcat/webapps/ROOT/index.html || true

# API base URL वाली line को भी check करो
RUN sed -i "s|window.STIRLING_PDF_API_BASE_URL = '/';|window.STIRLING_PDF_API_BASE_URL = '/'; console.log('MeraPDF Started');|g" /usr/local/tomcat/webapps/ROOT/index.html || true

EXPOSE 8080
CMD ["catalina.sh", "run"]