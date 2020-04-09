import Common from './Common';
import compose from './compose';

// 全局的上下文
let Provider = compose(Common);

export { Provider, Common };
