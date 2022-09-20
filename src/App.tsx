import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={index => alert(index)} mode={'vertical'}>
        <MenuItem index={0}>条目1</MenuItem>
        <MenuItem index={1} disabled>条目2</MenuItem>
        <MenuItem index={2}>条目3</MenuItem>
      </Menu>
      <Button >hello</Button>
      <Button disabled >Disacled Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com'>激活 Link</Button>
      <Button disabled btnType={ButtonType.Link} href='http://www.baidu.com'>Disacled Link</Button>
    </div>
  );
}

export default App;
