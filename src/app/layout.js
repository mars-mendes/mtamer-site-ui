import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
        </style>
      </head>
      <body style={{overflowX: 'hidden!important'}}>
        {children}
      </body>
    </html>
  );
}
