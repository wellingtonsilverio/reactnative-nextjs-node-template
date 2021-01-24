import '../styles/globals.css';
import Auth from './auth';

function MyApp({ Component, pageProps }) {
    return (
        <Auth>
            <Component {...pageProps} />
        </Auth>
    );
}

export default MyApp;
