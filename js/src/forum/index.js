import { extend } from 'flarum/common/extend';
import ForumApplication from 'flarum/forum/ForumApplication';
import BackToTop from './components/Back-to-top';

app.initializers.add('flarum-backtotop', () => {
    extend(ForumApplication.prototype, 'mount', () => {
        const footer = document.createElement('div');
        m.mount(document.body.appendChild(footer), BackToTop);
    });
});