import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'edc59df03cae4b658f6bfef3558a22c6', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
