import './globals.css';

export const metadata = {
  title: 'Ujjwal Kumar | Cinematic Portfolio',
  description: 'Premium cinematic developer portfolio for Ujjwal Kumar.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
