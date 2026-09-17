FROM stirlingtools/stirling-pdf:latest

# एप्लिकेशन का नाम और विवरण सेट करें
ENV UI_APPNAME="Mera PDF"
ENV UI_HOMEDESCRIPTION="मुफ्त हिंदी PDF टूल्स - Mera PDF"
ENV UI_APPNAMENAVBAR="Mera PDF"
ENV SYSTEM_DEFAULTLOCALE="hi-IN"

# कस्टम फाइल्स को सही जगह पर कॉपी करें
COPY public/modern-logo/logo.png /customFiles/static/modern-logo/logo.png
COPY public/modern-logo/favicon.ico /customFiles/static/favicon.ico
COPY public/assets/custom-styles.css /customFiles/static/custom.css

# कस्टम index.html कॉपी करें (CSS लोड करने के लिए)
COPY public/index.html /customFiles/static/index.html

EXPOSE 8080
# कोई CMD न लिखें; आधार इमेज का डिफ़ॉल्ट CMD सही ढंग से काम करेगा।
