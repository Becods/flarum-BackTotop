import Component from 'flarum/common/Component';

export default class BackToTop extends Component {
  oninit(vnode) {
    super.oninit(vnode);
  }

  view() {
    return (
      <a href="javascript:void(0);" class="back-to-top" target="_self"></a>
    );
  }
}