import '@/styles/globals.css';
import '@/styles/reset.css';
import MainLayout from '@/layouts/main/main.layout';
import { Inter } from 'next/font/google';

const interFontFamily = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    return (
        <div className={interFontFamily.className}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </div>
    );
}
